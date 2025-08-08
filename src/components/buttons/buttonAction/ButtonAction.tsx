"use client";
import React, { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { ActionTask } from "@/types";

interface DataButtonInput {
  type: ActionTask;
  id: string;
  desable: boolean;
  action: (id: string, type: ActionTask) => void;
}

function ButtonAction({ type, id, desable, action }: DataButtonInput) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const actionHandler = () => {
    if (type === "Delete") setIsModalOpen(true);
    else if (type === "Update") action(id, "Update");
  };

  const handleOk = () => {
    action(id, "Delete");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={
          (type === "Delete" && <DeleteOutlined />) ||
          (type === "Update" && <EditOutlined />)
        }
        onClick={actionHandler}
        disabled={desable}
      />

      <Modal
        title="Delete task."
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Sure"
      >
        <p>Are you sure you want to delete this task?</p>
      </Modal>
    </>
  );
}

export default React.memo(ButtonAction);
