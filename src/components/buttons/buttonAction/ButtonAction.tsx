"use client";
import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

type ButtonOptions = "Delete" | "Update";

interface DataButtonInput {
  type: ButtonOptions;
  id: string;
  desable: boolean;
}

function ButtonAction({ type, id, desable }: DataButtonInput) {
  const actionHandler = () => {
    console.log(`type action: ${type} and the Id is: ${id}`);
  };

  return (
    <Button
      className="bg-green-800"
      type="primary"
      icon={
        (type === "Delete" && <DeleteOutlined />) ||
        (type === "Update" && <EditOutlined />)
      }
      onClick={actionHandler}
      disabled={desable}
    />
  );
}

export default ButtonAction;
