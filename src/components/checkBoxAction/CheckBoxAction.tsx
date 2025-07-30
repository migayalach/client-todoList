"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, notification } from "antd";
import type { CheckboxProps } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";

interface InputCheckBox {
  id: string;
  state: boolean;
  action: (id: string, state: boolean) => void;
}

type NotificationType = "success" | "info" | "warning" | "error";

function CheckBoxAction({ id, state, action }: InputCheckBox) {
  const [value, setValue] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const onChange: CheckboxProps["onChange"] = (e) => {
    setValue(e.target.checked);
    action(id, !value);
    // TODO UPDATE THE STATE IN THE DATA BASE WHEN I'M GOINT TO SENT THE ID AND NEW STATE
  };

  const openNotificationWithIcon = (
    type: NotificationType,
    placement: NotificationPlacement = "topRight"
  ) => {
    api[type]({
      message: "Good job Pepe",
      description:
        "Congratulations, you have done your homework, let's go for more.",
      placement,
      duration: 2,
    });
  };

  useEffect(() => {
    setValue(state);
    return () => {
      setValue(false);
    };
  }, [state]);

  return (
    <div>
      {contextHolder}
      <Checkbox
        onChange={onChange}
        checked={value}
        onClick={() =>
          !value && openNotificationWithIcon("success", "bottomRight")
        }
      />
    </div>
  );
}

export default React.memo(CheckBoxAction);
