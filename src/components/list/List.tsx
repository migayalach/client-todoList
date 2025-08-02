"use client";
import React from "react";
import InputTask from "../inputTask/InputTask";
import { Calendary } from "../intex";
import { useAuth } from "@/context/authContext";

function List() {
  const { user, login } = useAuth();

  return (
    <div>
      <h1>My to-do list today</h1>
      {user?.email && login && <Calendary />}
      <InputTask />
    </div>
  );
}

export default List;
