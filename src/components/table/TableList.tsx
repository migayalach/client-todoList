"use client";
import React from "react";
import { Table } from "antd";
import { ItemToList } from "@/types";
import { ButtonAction } from "../intex";

interface InputData {
  list: ItemToList[];
}

function TableList({ list }: InputData) {
  interface DataType {
    key: React.Key;
    address: string;
  }

  const columns: any = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Done",
      key: "actionDone",
      render: ({ id, state }) => <ButtonAction />,
    },
    {
      title: "Update",
      key: "actionUpdate",
      render: ({ id, state }) => <ButtonAction />,
    },
    {
      title: "Delete",
      key: "actionDelete",
      render: ({ id, state }) => <ButtonAction />,
    },
  ];

  const listMap = (list: any) => {
    return list.map(({ id, description, state }: any, index: number) => ({
      key: index,
      numberItem: index + 1,
      id,
      description,
      state,
    }));
  };

  return (
    <Table<DataType>
      columns={columns}
      dataSource={listMap(list)}
      pagination={false}
    />
  );
}

export default TableList;
