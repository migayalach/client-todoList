"use client";
import { ItemToList } from "@/types";
import React, { useEffect, useState } from "react";
import { myHomeworks } from "@/mocks";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { GetProps } from "antd";
import { v4 as uuidv4 } from "uuid";
import { TableList } from "../intex";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

function InputTask() {
  const [task, setTask] = useState<boolean>(false);
  const [list, setList] = useState<ItemToList[]>([]);
  const [item, setItem] = useState<ItemToList>({
    id: "",
    description: "",
    state: false,
  });
  const [update, setUpdate] = useState<boolean>(false);

  // ⬇️ Microphone: function to start voice recognition
  const handleMicClick = () => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Tu navegador no soporta reconocimiento de voz");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const speechResult = event.results[0][0].transcript;
      setItem((prev) => ({
        ...prev,
        description: speechResult,
      }));
    };
  };

  const suffix = (
    <AudioOutlined
      onClick={handleMicClick}
      style={{
        fontSize: 16,
        color: "#1677ff",
        cursor: "pointer",
      }}
    />
  );

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
    }
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
        placeholder="input search text"
        enterButton={task ? "Update" : "Add"}
        size="large"
        suffix={suffix}
        value={item.description}
        onChange={updateItem}
        onSearch={addItems}
        allowClear
        className="bg-black"
      />
      <TableList list={list} actionEdit={editTask} />
    </div>
  );
}

export default InputTask;
