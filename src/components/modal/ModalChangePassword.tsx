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
          title="Change your password"
          closable={{ "aria-label": "Custom Close Button" }}
          open={closeModal === null ? localModal : openModal}
          onOk={typeof closeModal && closeModal}
          onCancel={typeof closeModal && closeModal}
          footer={false}
        >
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
