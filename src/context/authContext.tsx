"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  getAuth,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  linkWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { app } from "@/firebase";

interface InputAuth {
  email: string | null;
  uid: string;
  photoURL?: string | null;
  displayName?: string | null;
}

type AuthContextType = {
  user: InputAuth | null;
  login: boolean;
  password: boolean;
  signUp: (info: InputAuth) => void;
  logout: () => void;
  signGoogle: () => void;
  singUpEmail: (email: any, password: any) => void;
  signInEmail: (email: any, password: any) => void;
};

/**
 * 'Context' was created for authentication
 */
const AuthContext = createContext<AuthContextType | null>(null);

/**
 * Personal hook so you can easily access the context
 * @returns {AuthContextType} - The authentication context value.
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is no AuthProvider!");
  return context;
}

/**
 *
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  /**
   * Local state to save the user if he is in sesion
   */
  const [login, setLogin] = useState<boolean>(false);
  const [user, setUser] = useState<InputAuth | null>(null);
  const [password, setPassword] = useState<boolean>(false);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: User | null) => {
        if (firebaseUser) {
          setUser({
            email: firebaseUser.email,
            uid: firebaseUser.uid,
            photoURL: firebaseUser.photoURL,
            displayName: firebaseUser.displayName,
          });
          setLogin(true);
        } else {
          setUser(null);
          setLogin(false);
        }
      }
    );
    return () => unsubscribe();
  }, [auth]);

  /**
   * Funtion to save users sesion
   * @param info
   */
  const signUp = (info: InputAuth) => {
    setUser(info);
    setLogin(true);
  };

  const inputPassword = async (currentUser, credential) => {
    console.log("in password");
    await linkWithCredential(currentUser, credential);
    setPassword(false);
  };

  const signGoogle = async () => {
    const x = await signInWithPopup(auth, provider);
    if (x.user.providerData.length === 1) {
      console.log("*******************");
      console.log("memory to change password");
      console.log("ingresa password");
      setPassword(true);
      const credential = EmailAuthProvider.credential(
        "ayalachavezmiguel@gmail.com",
        "123456"
      );
      if (auth.currentUser) {
        await inputPassword(auth.currentUser, credential);
        // await linkWithCredential(auth.currentUser, credential);
      }
      console.log("*******************");
    }
    return x;
  };

  const singUpEmail = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmail = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  /**
   * Funtion to close sesion
   */
  const logout = () => {
    auth.signOut();
    setUser(null);
    setLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signUp,
        logout,
        signGoogle,
        singUpEmail,
        signInEmail,
        password,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
