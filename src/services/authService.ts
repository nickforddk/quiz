import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "../lib/firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const registerStudent = async (name: string) => {
  // Logic to register a student with their name
  // This could involve creating a user record in Firestore
};

export const signInInstructor = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Logic to handle instructor sign-in
    return user;
  } catch (error) {
    console.error("Error signing in instructor: ", error);
    throw error;
  }
};

export const signOutInstructor = async () => {
  try {
    await signOut(auth);
    // Logic to handle instructor sign-out
  } catch (error) {
    console.error("Error signing out instructor: ", error);
    throw error;
  }
};

export const onAuthStateChanged = (callback: (user: any) => void) => {
  return auth.onAuthStateChanged(callback);
};