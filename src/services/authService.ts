import {
  signInAnonymously,
  signInWithPopup,
  signInWithRedirect,
  linkWithPopup,
  linkWithRedirect,
  getRedirectResult,
  updateProfile
} from 'firebase/auth';
import { auth, githubProvider, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

/**
 * Simple env sanity (call once if needed)
 */
export function logAuthEnvOnce() {
  if ((window as any).__AUTH_ENV_LOGGED) return;
  (window as any).__AUTH_ENV_LOGGED = true;
  console.log('Firebase ENV:', {
    project: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
  });
}

/**
 * Ensure there is at least an anonymous user.
 */
export async function ensureAnon() {
  if (!auth.currentUser) {
    await signInAnonymously(auth);
  }
  return auth.currentUser!;
}

/**
 * Handle the result of a GitHub authentication redirect.
 */
export async function processGithubRedirectResult() {
  try {
    await getRedirectResult(auth);
  } catch (e) {
    console.warn('Redirect result error', e);
  }
}

/**
 * Upgrade (link) anonymous user with GitHub OR just sign in with GitHub.
 */
export async function upgradeWithGithub() {
  await ensureAnon();
  const u = auth.currentUser;

  // If already upgraded, skip.
  if (u && !u.isAnonymous && u.providerData.some(p => p.providerId === 'github.com')) {
    return u;
  }

  try {
    if (u && u.isAnonymous) {
      await linkWithPopup(u, githubProvider);
    } else {
      await signInWithPopup(auth, githubProvider);
    }
  } catch (e:any) {
    const code = e?.code;
    console.warn('GitHub auth error:', code, e);

    if (code === 'auth/popup-closed-by-user') {
      throw e;
    }

    if (code === 'auth/popup-blocked') {
      // Only fallback if still anonymous (not already upgraded)
      if (auth.currentUser?.isAnonymous) {
        if (u && u.isAnonymous) {
          await linkWithRedirect(u, githubProvider);
        } else {
          await signInWithRedirect(auth, githubProvider);
        }
        return;
      }
    }

    if (code === 'auth/credential-already-in-use') {
      await signInWithPopup(auth, githubProvider);
      return auth.currentUser;
    }

    if (code === 'auth/invalid-credential') {
      console.error('Check GitHub OAuth callback URL + Firebase project config.');
    }
    throw e;
  }

  return auth.currentUser;
}

/**
 * Persist a human‑readable name for the user.
 */
export async function saveUserName(name: string) {
  const u = auth.currentUser;
  if (!u) throw new Error('No auth user');
  if (!u.displayName || u.displayName !== name) {
    await updateProfile(u, { displayName: name });
  }
  await setDoc(
    doc(db, 'userProfiles', u.uid),
    { name, updatedAt: Date.now() },
    { merge: true }
  );
  try { await u.reload(); } catch {}
  return name;
}

/**
 * Fetch stored profile (name) doc.
 */
export async function getUserProfile(uid: string) {
  const snap = await getDoc(doc(db, 'userProfiles', uid));
  return snap.exists() ? snap.data() : null;
}

let authInFlight = false;

export async function signInInstructor() {
  // Already instructor?
  if (auth.currentUser &&
      !auth.currentUser.isAnonymous &&
      auth.currentUser.providerData.some(p => p.providerId === 'github.com')) {
    return auth.currentUser;
  }
  if (authInFlight) return;
  authInFlight = true;
  try {
    await signInWithPopup(auth, githubProvider);
  } catch (e:any) {
    if (e?.code === 'auth/popup-blocked') {
      // Fallback to redirect
      await signInWithRedirect(auth, githubProvider);
      return;
    }
    throw e;
  } finally {
    authInFlight = false;
  }
  return auth.currentUser;
}