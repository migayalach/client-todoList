"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { ModalChangePassword } from "@/components/intex";

function ChangePassword() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDoneModal = () => {    
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Change Password
      </Button>
      {isModalOpen && (
        <ModalChangePassword
          openModal={isModalOpen}
          closeModal={handleDoneModal}
        />
      )}
    </>
  );
}

export default ChangePassword;
