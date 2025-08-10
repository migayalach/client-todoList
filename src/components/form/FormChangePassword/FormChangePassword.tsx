"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useAuth } from "@/context/authContext";
import ReCAPTCH from "react-google-recaptcha";

type FieldType = {
  newPassword: string;
  validatePassword: string;
};

interface InputFormChangePassword {
  closeModal?: () => void;
  actionSign: () => void;
}

const longValue = 8;

function FormChangePassword({
  closeModal,
  actionSign,
}: InputFormChangePassword) {
  const [capVal, setCapVal] = useState<string | null>(null);
  const [validate, setValidate] = useState<boolean>(false);
  const [info, setInfo] = useState<FieldType>({
    newPassword: "",
    validatePassword: "",
  });
  const { login, user, password, inputPassword, changePassword } = useAuth();

  const updatePassword = async (password: string) => {
    return await inputPassword(password);
  };

  const onSubmitPassword = async () => {
    if (login && user) {
      actionSign();
      if (
        info.newPassword.length > longValue &&
        info.validatePassword.length > longValue
      ) {
        if (info.newPassword === info.validatePassword && password) {
          const result = await updatePassword(info.newPassword);
          if (result) {
            setValidate(false);
          }
        } else if (info.newPassword === info.validatePassword && !password) {
          changePassword(info.newPassword);
        }
      }
    } else if (typeof closeModal === "function") {
      closeModal();
    }
  };

  const onChangeInfo = (event: { target: { name: string; value: string } }) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      info.newPassword.length > longValue ||
      info.validatePassword.length > longValue
    ) {
      if (info.newPassword === info.validatePassword) {
        setValidate(true);
      } else {
        setValidate(false);
      }
    }
  }, [info]);

  useEffect(() => {
    return () => {
      setCapVal(null);
      setValidate(false);
      setInfo({
        newPassword: "*",
        validatePassword: "**",
      });
    };
  }, []);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="newPassword" onChange={onChangeInfo} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Repeat Password"
          name="validatePassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="validatePassword" onChange={onChangeInfo} />
        </Form.Item>
      </Form>

      <div className="flex flex-col items-center justify-center">
        {validate && (
          <ReCAPTCH
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
            onChange={(val) => setCapVal(val)}
          />
        )}

        <Button
          className="h-10 text-[15px]"
          type="primary"
          onClick={onSubmitPassword}
          disabled={!capVal}
        >
          Change Password
        </Button>
      </div>
    </div>
  );
}

export default FormChangePassword;
