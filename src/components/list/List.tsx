"use client";
import React from "react";
import InputTask from "../inputTask/InputTask";
import { Calendary } from "../index";
import { useAuth } from "@/context/authContext";
import { useAuthNotification } from "@/context/notificationContext";

function List() {
  const { user, login } = useAuth();
  const { existError, infoError } = useAuthNotification();

  return (
    <div>
      <h1>My to-do list today</h1>
      {user?.email && login && <Calendary />}
      <InputTask />
    </div>
  );
}

export default List;
