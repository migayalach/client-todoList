"use client";
import { ItemToList } from "@/types";
import React, { useEffect, useState } from "react";
import { myHomeworks } from "@/mocks";
import { Input } from "antd";
import type { GetProps } from "antd";
import { v4 as uuidv4 } from "uuid";
import { TableList } from "../index";
import { useAuthNotification } from "@/context/notificationContext";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

function InputTask() {
  const { showNotification, closeNotification } = useAuthNotification();
  const [task, setTask] = useState<boolean>(false);
  const [list, setList] = useState<ItemToList[]>([]);
  const [item, setItem] = useState<ItemToList>({
    id: "",
    description: "",
    state: false,
  });
  const [update, setUpdate] = useState<boolean>(false);

  const editTask = (task: ItemToList) => {
    setItem(task);
    setTask(true);
  };

  const updateItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({
      ...item,
      description: event.target.value,
    });
  };

  const addItems: SearchProps["onSearch"] = (value: string) => {
    if (value.length) {
      if (task) {
        list.forEach((index) => {
          if (index.id === item.id) {
            index.description = item.description;
          }
        });
        setTask(false);
      } else {
        const addNewItem: ItemToList = {
          id: uuidv4(),
          description: value,
          state: false,
        };
        setList([...list, addNewItem]);
        setUpdate(true);
      }
      showNotification({
        type: task ? "info" : "success",
        message: task ? "Your task was edited" : "A new task was created",
        description: task
          ? "You have updated a task to be performed today."
          : "You have added a new task to perform this day.",
      });
    } else {
      showNotification({
        type: "error",
        message: "Please enter task",
        description:
          "We're sorry, but you need to enter a new task to add it to the list.",
      });
    }
    closeNotification();
    setItem({
      id: "",
      description: "",
      state: false,
    });
  };

  useEffect(() => {
    setList([...myHomeworks]);
    return () => {
      setList([]);
      setItem({
        id: "",
        description: "",
        state: false,
      });
    };
  }, []);

  useEffect(() => {
    if (update) {
      setTimeout(() => {
        setUpdate(false);
      }, 2000);
    }
    return () => {
      setUpdate(false);
    };
  }, [update]);

  return (
    <div>
      <Search
        placeholder="Plase input a new task"
        enterButton={task ? "Update" : "Add"}
        size="large"
        value={item.description}
        onChange={updateItem}
        onSearch={addItems}
        allowClear
        className="mb-3"
      />
      <TableList list={list} actionEdit={editTask} />
    </div>
  );
}

export default InputTask;
