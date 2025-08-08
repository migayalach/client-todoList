"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { ErrorProps, TextRender } from "@/types";
import { useAuth } from "@/context/authContext";
import { Texts } from "@/components/index";
import { castingErrors } from "@/utils/casesFirebaseError";

type FieldType = {
  email: string;
  password: string;
};

interface DataState {
  email: string;
  password: string;
}

function FormSign({ text }: { text: TextRender }) {
  const { singUpEmail, signInEmail } = useAuth();
  const [data, setData] = useState<DataState>({
    email: "",
    password: "",
  });
  const [errorInfo, setErrorInfo] = useState<string>("");

  const onChangeData = (event: { target: { name: string; value: string } }) => {
    if (errorInfo.length) {
      setErrorInfo("");
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async () => {
    try {
      if (text === "Sign In") {
        await signInEmail(data.email, data.password);
      } else if (text === "Sing Up") {
        await singUpEmail(data.email, data.password);
      }
    } catch (error) {
      const badResults = error as ErrorProps;
      const results = castingErrors(badResults);
      setErrorInfo(results!.description);
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

      {errorInfo.length ? <Texts text={`${errorInfo}`} /> : null}

      <Button type="primary" htmlType="submit">
        {text}
      </Button>
    </Form>
  );
}

export default FormSign;
