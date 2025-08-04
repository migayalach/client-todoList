import React from "react";
import { Button } from "antd";
import { useAuth } from "@/context/authContext";

function FormChangePassword({ closeModal, actionSign }) {
  const { login, user, password } = useAuth();

  const actionModal = () => {
    if (login && user && password) {
      actionSign();
    } else {
      closeModal();
    }
  };

  return (
    <div>
      <h1>FormChangePassword</h1>
      <Button type="primary" onClick={actionModal}>
        Ok change Password
      </Button>
    </div>
  );
}

export default FormChangePassword;
