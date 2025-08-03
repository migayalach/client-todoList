"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "@/firebase";
import { TextRender } from "@/types";
import { useAuth } from "@/context/authContext";

type FieldType = {
  email: string;
  password: string;
};

interface DataState {
  email: string;
  password: string;
}

const auth = getAuth(app);

function FormSign({ text }: { text: TextRender }) {
  const { signUp } = useAuth();
  const [data, setData] = useState<DataState>({
    email: "",
    password: "",
  });

  const onChangeData = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async () => {
    try {
      if (text === "Sign In") {
        const {
          user: { email, uid, photoURL, displayName },
        } = await signInWithEmailAndPassword(auth, data.email, data.password);
        signUp({ email, uid, photoURL, displayName });
      } else if (text === "Sing Up") {
        const {
          user: { email, uid, photoURL, displayName },
        } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        signUp({ email, uid, photoURL, displayName });
      }
      // signUp(data.email, data.password);
    } catch (error) {
      // TODO CALL ALER COMPONENT
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
        label="Username"
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

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          name="password"
          value={data.password}
          onChange={onChangeData}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        {text}
      </Button>
    </Form>
  );
}

export default FormSign;
