"use client";
import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

import { useAuth } from "@/context/authContext";

type InputType = "facebook" | "google";

interface InputChoseLogin {
  text: string;
  type: InputType;
}

function ChoseLogin({ text, type }: InputChoseLogin) {
  const { signGoogle } = useAuth();

  const handleGoogleAuth = async () => {
    try {
      signGoogle();
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
