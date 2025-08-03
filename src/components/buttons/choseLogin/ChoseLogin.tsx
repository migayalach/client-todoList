"use client";
import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  linkWithCredential,
} from "firebase/auth";
import { app } from "@/firebase";
import { useAuth } from "@/context/authContext";

type InputType = "facebook" | "google";

interface InputChoseLogin {
  text: string;
  type: InputType;
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function ChoseLogin({ text, type }: InputChoseLogin) {
  const { signUp } = useAuth();

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleCredential = GoogleAuthProvider.credentialFromResult(result);

      if (auth.currentUser && googleCredential) {
        await linkWithCredential(auth.currentUser, googleCredential);
        const user = auth.currentUser;
        signUp({
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
        });
        return;
      }

      const {
        user: { email, uid, photoURL, displayName },
      } = result;
      signUp({ email, uid, photoURL, displayName });
      // alert("Autenticación con Google exitosa");
    } catch (error) {
      // console.error(error.message);
    }
  };

  return (
    <Button
      className="mt-5 h-10"
      type="primary"
      htmlType="submit"
      onClick={handleGoogleAuth}
    >
      <i className="text-[20px]">
        <GoogleOutlined />
      </i>
      {text}
    </Button>
  );
}

export default ChoseLogin;