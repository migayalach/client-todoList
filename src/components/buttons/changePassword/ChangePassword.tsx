"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { ModalChangePassword } from "@/components/index";

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
      <button className="bg-none" onClick={showModal}>
        Change Password
      </button>
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
