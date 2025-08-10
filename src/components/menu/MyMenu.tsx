"use client";
import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import {
  ButtonLogin,
  Profile,
  ChangePassword,
  ModalChangePassword,
} from "@/components/index";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

function MyMenu() {
  const { login, user, password } = useAuth();

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: "1",
      icon: <Profile />,
      children: [
        {
          key: "2",
          label: <Link href="/about">About Me</Link>,
        },
        {
          key: "3",
          label: <ChangePassword />,
        },
        {
          key: "4",
          label: <ButtonLogin />,
        },
      ],
    },
  ];

  return (
    <>
      <Menu
        mode="horizontal"
        items={items}
        style={{
          background: "#001529",
          borderBottom: "none",
        }}
      />
      {password && login && user?.email && (
        <ModalChangePassword openModal={true} />
      )}
    </>
  );
}

export default MyMenu;
