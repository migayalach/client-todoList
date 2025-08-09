"use client";
import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

import { useAuth } from "@/context/authContext";

interface InputChoseLogin {
  text: string;
}

function ChoseLogin({ text }: InputChoseLogin) {
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
      className="mt-5 h-10 text-[16px]"
      color="danger"
      variant="solid"
      htmlType="submit"
      onClick={handleGoogleAuth}
    >
      <i className="text-[22px]">
        <GoogleOutlined />
      </i>
      {text}
    </Button>
  );
}

export default ChoseLogin;
