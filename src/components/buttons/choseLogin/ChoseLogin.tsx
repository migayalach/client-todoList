"use client";
import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
      const {
        operationType,
        user: { email, uid, photoURL, displayName },
      } = await signInWithPopup(auth, googleProvider);
      signUp({operationType, email, uid, photoURL, displayName});
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
