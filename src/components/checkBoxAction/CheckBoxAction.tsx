"use client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useAuthNotification } from "@/context/notificationContext";
import { Notification } from "@/components";

interface InputCheckBox {
  id: string;
  state: boolean;
  action: (id: string, state: boolean) => void;
}

function CheckBoxAction({ id, state, action }: InputCheckBox) {
  const { showNotification, closeNotification } = useAuthNotification();
  const [value, setValue] = useState(false);

  const onChange: CheckboxProps["onChange"] = (event) => {
    setValue(event.target.checked);
    action(id, !value);
    if (value === false) {
      showNotification({
        type: "success",
        message: "Good job",
        description:
          "Congratulations, you have done your homework, let's go for more.",
      });
    } else if (value === true) {
      showNotification({
        type: "warning",
        message: "Task not yet done",
        description: "The task is now active again.",
      });
    }
    closeNotification();
    // TODO UPDATE THE STATE IN THE DATA BASE WHEN I'M GOINT TO SENT THE ID AND NEW STATE
  };

  useEffect(() => {
    setValue(state);
    return () => {
      setValue(false);
    };
  }, [state]);

  return (
    <div>
      <Checkbox onChange={onChange} checked={value} />
      <Notification />
    </div>
  );
}

export default React.memo(CheckBoxAction);
