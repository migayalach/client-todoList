"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
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
  signUp: (info: InputAuth) => void;
  logout: () => void;
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
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<InputAuth | null>(null);

  const auth = getAuth(app);

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

  /**
   * Funtion to close sesion
   */
  const logout = () => {
    auth.signOut();
    setUser(null);
    setLogin(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
