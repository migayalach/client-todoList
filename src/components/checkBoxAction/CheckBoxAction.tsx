"use client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

interface InputCheckBox {
  id: string;
  state: boolean;
}

function CheckBoxAction({ id, state }: InputCheckBox) {
  const [value, setValue] = useState(false);

  const onChange: CheckboxProps["onChange"] = (e) => {
    setValue(e.target.checked);
    // TODO UPDATE THE STATE IN THE DATA BASE WHEN I'M GOINT TO SENT THE ID AND NEW STATE
  };

  useEffect(() => {
    setValue(state);
    return () => {
      setValue(false);
    };
  }, [state]);

  return <Checkbox onChange={onChange} checked={value} />;
}

export default CheckBoxAction;
