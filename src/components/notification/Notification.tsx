"use client";
import React, { useEffect, useRef } from "react";
import { notification as notificationAntd } from "antd";
import { useAuthNotification } from "@/context/notificationContext";
import { NotificationCodes } from "@/types";

function Notification() {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { infoNotification, notification, closeNotification } =
    useAuthNotification();
  const hasShown = useRef(false);
  
  useEffect(() => {
    const type = infoNotification.type as NotificationCodes;
    if (notification && infoNotification.message && api[type]) {
      api[type]({
        message: infoNotification.message,
        description: infoNotification.description,
        placement: "bottomRight",
        duration: 2,
      });
      closeNotification();
    }
  }, [infoNotification, notification]);

  return <>{contextHolder}</>;
}

export default Notification;
