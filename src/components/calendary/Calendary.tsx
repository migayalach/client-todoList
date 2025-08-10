"use client";
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";

function Calendary() {
  const onChange: DatePickerProps<Dayjs[]>["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="mb-3">
      <DatePicker onChange={onChange} needConfirm />
    </div>
  );
}

export default Calendary;
