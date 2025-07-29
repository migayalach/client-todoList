"use client";
import { ItemToList } from "@/types";
import React, { useEffect, useState } from "react";
import { myHomeworks } from "@/mocks";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { GetProps } from "antd";
import { v4 as uuidv4 } from "uuid";
import { TableList } from "../intex";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

function InputTask() {
  const [list, setList] = useState<ItemToList[]>([]);
  const [item, setItem] = useState<ItemToList>({
    id: "",
    description: "",
    state: false,
  });
  const [update, setUpdate] = useState<boolean>(false);

  const onSearch: SearchProps["onSearch"] = (value: string) => {
    const addNewItem: ItemToList = {
      id: uuidv4(),
      description: value,
      state: false,
    };
    setList([...list, addNewItem]);
    setUpdate(true);
  };

  useEffect(() => {
    // TODO LLAMAMOS A LA BASE DE DATOS A TRAER LAS TAREAS
    setList([...myHomeworks]);
    return () => {
      setList([]);
      setItem({
        id: "",
        description: "",
        state: false,
      });
    };
  }, []);

  useEffect(() => {
    if (update) {
      setTimeout(() => {
        setUpdate(false);
      }, 2000);
    }
    return () => {
      setUpdate(false);
    };
  }, [update]);

  return (
    <div>
      <Search
        placeholder="input search text"
        enterButton="Add"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        className="bg-black"
      />
      <TableList list={list} />
    </div>
  );
}

export default InputTask;
