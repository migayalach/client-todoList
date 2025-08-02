"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form } from "@/components/intex";
import { useAuth } from "@/context/authContext";

function ButtonLogin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, login, logout } = useAuth();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeLogOut = () => {
    logout();
    setIsModalOpen(false);
  };

  return (
    <div className="ml-5">
      <Button type="primary" onClick={showModal}>
        {!login && !user?.email?.length ? "Sign In" : "Sign out"}
      </Button>
      <Modal
        title={`${
          !login && !user?.email?.length
            ? "Welcome"
            : "Are you leaving so soon?"
        }`}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {!login && !user?.email?.length && <Form />}
        {login && user?.email && (
          <div>
            <h1>{user?.displayName} are you sure you want to log out?</h1>
            <Button type="primary" onClick={onChangeLogOut}>
              Yes
            </Button>
            <Button type="primary" onClick={handleCancel}>
              No
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ButtonLogin;
