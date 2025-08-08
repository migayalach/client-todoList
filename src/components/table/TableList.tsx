"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { ActionTask, ItemToList } from "@/types";
import { ButtonAction, CheckBoxAction, Notification } from "../index";
import type { ColumnsType } from "antd/es/table";
import { useAuthNotification } from "@/context/notificationContext";

interface InputData {
  list: ItemToList[];
  actionEdit: (task: ItemToList) => void;
}

interface RenderInput {
  id: string;
  description?: string;
  state: boolean;
}

function TableList({ list, actionEdit }: InputData) {
  const [data, setData] = useState<ItemToList[]>([]);
  const { showNotification } = useAuthNotification();
  const handleFlag = (id: string, newState: boolean) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, state: newState } : item
      )
    );
  };

  const actionTask = (id: string, type: ActionTask) => {
    if (type === "Delete") {
      setData(data.filter((index) => index.id !== id));
      showNotification({
        type: "info",
        message: "Detele task",
        description: "Task successfully deleted.",
      });
    } else if (type === "Update") {
      const task = data.find((index) => index.id === id) as ItemToList;
      actionEdit(task);
    }
  };

  const columns: ColumnsType<RenderInput> = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem", width: "5%" },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      key: "actionDone",
      width: "5%",
      render: ({ id, state }: RenderInput) => (
        <CheckBoxAction id={id} state={state} action={handleFlag} />
      ),
    },
    {
      key: "actionUpdate",
      width: "5%",
      render: ({ id, state }: RenderInput) => (
        <ButtonAction
          type="Update"
          id={id}
          desable={state}
          action={actionTask}
        />
      ),
    },
    {
      key: "actionDelete",
      width: "5%",
      render: ({ id, state }: RenderInput) => (
        <ButtonAction
          type="Delete"
          id={id}
          desable={state}
          action={actionTask}
        />
      ),
    },
  ];

  const listMap = (list: RenderInput[]) => {
    return list.map(
      ({ id, description, state }: RenderInput, index: number) => ({
        key: index,
        numberItem: index + 1,
        id,
        description,
        state,
      })
    );
  };

  useEffect(() => {
    setData(list);
    return () => {
      setData([]);
    };
  }, [list]);

  return (
    <>
      <Table columns={columns} dataSource={listMap(data)} pagination={false} />
      <Notification />
    </>
  );
}

export default TableList;
