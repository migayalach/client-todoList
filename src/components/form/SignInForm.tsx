"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { ChoseLogin, Texts } from "../intex";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "@/firebase";

type TextRender = "Sign In" | "Sing Up";

type FieldType = {
  email?: string;
  password?: string;
};

interface DataState {
  email: string;
  password: string;
}

const auth = getAuth(app);

function SignInForm() {
  const [text, setText] = useState<TextRender>("Sign In");
  const [data, setData] = useState<DataState>({
    email: "",
    password: "",
  });

  const onRestorePassword = () => {
    alert("restore");
  };

  const onChangeState = (value: TextRender) => {
    if (value === "Sign In") {
      setText(value);
    } else if (value === "Sing Up") {
      setText(value);
    }
  };

  const onChangeData = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      if (text === "Sign In") {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } else if (text === "Sing Up") {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
      }
    } catch (error) {
      // console.error(error.message);
      // alert(error.message);
    }
  };

  return (
    <div>
      <div>
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
      </div>

      <div className="flex flex-col mt-5">
        <div className="flex justify-between items-center">
          <div>
            {text === "Sign In" && (
              <a onClick={() => onChangeState("Sing Up")}>
                <Texts text="Don't have an Account." />
              </a>
            )}

            {text === "Sing Up" && (
              <a onClick={() => onChangeState("Sign In")}>
                <Texts text="Do you have an Account?" />
              </a>
            )}
          </div>
          <div>
            <a onClick={onRestorePassword}>
              <Texts text="Forgot your password?" />
            </a>
          </div>
        </div>

        {text === "Sign In" && <ChoseLogin text="Google" type="google" />}
      </div>
    </div>
  );
}

export default SignInForm;
