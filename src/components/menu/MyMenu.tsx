"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { ButtonLogin, Profile } from "@/components/intex";
import Link from "next/link";

function MyMenu() {
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
          label: <ButtonLogin />,
        },
      ],
    },
  ];

  interface LevelKeysProps {
    key?: string;
    children?: LevelKeysProps[];
  }

  const getLevelKeys = (items: LevelKeysProps[]) => {
    const keyLevels: Record<string, number> = {};

    const traverse = (items: LevelKeysProps[], level = 1) => {
      items.forEach((item) => {
        if (item.key) {
          keyLevels[item.key] = level;
        }
        if (item.children) {
          traverse(item.children, level + 1);
        }
      });
    };

    traverse(items);
    return keyLevels;
  };

  const levelKeys = getLevelKeys(items as LevelKeysProps[]);
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));

    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  );
}

export default MyMenu;
