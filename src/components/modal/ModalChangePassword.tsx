"use client";
import React, { useState } from "react";
import { Modal } from "antd";
import { FormChangePassword } from "../index";

interface InputModalChangePassword {
  openModal: boolean;
  closeModal?: () => void;
}

function ModalChangePassword({
  openModal,
  closeModal,
}: InputModalChangePassword) {
  const [localModal, setLocalModal] = useState(true);

  const handleCloseModal = () => {
    setLocalModal(false);
  };

  return (
    <>
      {openModal ? (
        <Modal
          title="Basic Modal"
          closable={{ "aria-label": "Custom Close Button" }}
          open={closeModal === null ? localModal : openModal}
          onOk={typeof closeModal && closeModal}
          onCancel={typeof closeModal && closeModal}
          footer={false}
        >
          <p>OPEN FormChangePassword</p>
          <p>OPEN FormChangePassword</p>
          <p>OPEN FormChangePassword</p>
          <FormChangePassword
            closeModal={closeModal}
            actionSign={handleCloseModal}
          />
        </Modal>
      ) : null}
    </>
  );
}

export default ModalChangePassword;
