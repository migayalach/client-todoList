"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { SignInForm } from "@/components/intex";

function ButtonLogin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="ml-5">
      <Button type="primary" onClick={showModal}>
        Sign In
      </Button>
      <Modal
        title="Welcome"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <SignInForm />
      </Modal>
    </div>
  );
}

export default ButtonLogin;
