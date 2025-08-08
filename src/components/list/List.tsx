"use client";
import React from "react";
import InputTask from "../inputTask/InputTask";
import { Calendary } from "../index";
import { useAuth } from "@/context/authContext";

function List() {
  const { user, login } = useAuth();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[21px] mb-3 font-bold">My to-do list today</h1>
      {user?.email && login && <Calendary />}
      <InputTask />
    </div>
  );
}

export default List;
