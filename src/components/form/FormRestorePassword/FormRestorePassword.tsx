"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/services/firebase";
import { TextRender } from "@/types";
import ReCAPTCH from "react-google-recaptcha";

type FieldType = {
  email: string;
};

interface DataState {
  email: string;
}

const auth = getAuth(app);

function FormRestorePassword({ text }: { text: TextRender }) {
  const [capVal, setCapVal] = useState<string | null>(null);
  const [data, setData] = useState<DataState>({
    email: "",
  });

  const onChangeData = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async () => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      // TODO  SHOW AN ALERT MESSAGE
    } catch (error) {
      // console.error(error.message);
      // alert(error.message);
    }
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your username!" },
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
      >
        <Input name="email" value={data.email} onChange={onChangeData} />
      </Form.Item>

      <div className="flex flex-col justify-center items-center">
        {data.email.length > 10 && (
          <ReCAPTCH
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
            onChange={(val) => setCapVal(val)}
          />
        )}
        <Button
          type="primary"
          htmlType="submit"
          disabled={!capVal}
          className="w-full h-[38px] text-[19px]"
        >
          {text}
        </Button>
      </div>
    </Form>
  );
}

export default FormRestorePassword;
