import React from "react";
import InputTask from "../inputTask/InputTask";
import { Calendary } from "../intex";

function List() {
  return (
    <div>
      <h1>My to-do list today</h1>
      <Calendary />
      <InputTask />
    </div>
  );
}

export default List;
