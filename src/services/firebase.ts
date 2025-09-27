import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  GithubAuthProvider,
  signInWithPopup,
  linkWithPopup,
  signInWithCredential
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || import.meta.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const githubProvider = new GithubAuthProvider();

export function ensureAnonymousLogin() {
  if (!auth.currentUser) {
    return signInAnonymously(auth);
  }
  return Promise.resolve(auth.currentUser);
}

export async function signInWithGithub() {
  const provider = githubProvider;
  const current = auth.currentUser;
  if (current && current.isAnonymous) {
    try {
      return await linkWithPopup(current, provider);
    } catch (e: any) {
      if (e.code === 'auth/credential-already-in-use') {
        // Use existing GitHub account instead
        const cred = GithubAuthProvider.credentialFromError(e);
        if (cred) {
          // (Optional) migrate anonymous data here before switching accounts
          return await signInWithCredential(auth, cred);
        }
        // Fallback
        return await signInWithPopup(auth, provider);
      }
      throw e;
    }
  }
  return signInWithPopup(auth, provider);
}

export function watchAuth(cb: (u:any)=>void) {
  return onAuthStateChanged(auth, cb);
}