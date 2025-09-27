import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { ensureAnonymousLogin } from '../services/firebase';

export interface AuthContextValue {
  user: User | null;
  loading: boolean;
  isInstructor: boolean;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const AuthContextInternal = AuthContext; // alias if some code expects default

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure anonymous session for students
    if (!auth.currentUser) {
      ensureAnonymousLogin().catch(() => {});
    }
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const isInstructor =
    !!user &&
    user.providerData.some(p => p.providerId === 'github.com');

  const value: AuthContextValue = { user, loading, isInstructor };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be used inside AuthProvider');
  return ctx;
}

// Keep default export (some code might import default)
export default AuthContextInternal;