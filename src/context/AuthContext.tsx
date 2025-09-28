import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

interface AuthCtx {
  user: any;
  profile: any;
  isInstructor: boolean;
  loading: boolean;
}

export const AuthContext = createContext<AuthCtx>({
  user: null,
  profile: null,
  isInstructor: false,
  loading: true
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const unsubProfile = useRef<() => void>();

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (unsubProfile.current) unsubProfile.current();
      setProfile(null);
      if (u) {
        unsubProfile.current = onSnapshot(doc(db, 'userProfiles', u.uid), snap => {
          setProfile(snap.exists() ? snap.data() : null);
        });
        // Debug (remove later)
        console.log('Auth user providerData:', u.providerData.map((p:any)=>p.providerId));
      }
    });
    return () => {
      unsubAuth();
      if (unsubProfile.current) unsubProfile.current();
    };
  }, []);

  // Ensure provider list is logged and isInstructor only checks github.com
  const isInstructor = !!user && !user.isAnonymous &&
    user.providerData.some((p:any)=>p?.providerId === 'github.com');

  return (
    <AuthContext.Provider value={{ user, profile, isInstructor, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;