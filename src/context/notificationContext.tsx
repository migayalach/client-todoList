"use client";
import { NotificationCodes } from "@/types";
import { createContext, useContext, useState } from "react";

export interface InputNotification {
  type: NotificationCodes | "";
  description: string;
  message?: string;
}

type NotificationContext = {
  showNotification: (props: InputNotification) => void;
  notification: boolean;
  infoNotification: InputNotification;
  closeNotification: () => void;
};

const NotificationContext = createContext<NotificationContext | null>(null);

export function useAuthNotification(): NotificationContext {
  const contextNotification = useContext(NotificationContext);
  if (!contextNotification) throw new Error("There is no AuthProvider!");
  return contextNotification;
}

export function AuthProviderNotification({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notification, setNotification] = useState<boolean>(false);
  const [infoNotification, setInfoNotification] = useState<InputNotification>({
    type: "",
    description: "",
    message: "",
  });

  const showNotification = ({
    type,
    description,
    message,
  }: InputNotification) => {
    if (notification === false) {
      setNotification(true);
      setInfoNotification({
        type,
        description,
        message,
      });
    }
  };

  const closeNotification = () => {
    if (notification === true) {
      setNotification(false);
      setInfoNotification({
        type: "",
        description: "",
        message: "",
      });
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notification,
        showNotification,
        infoNotification,
        closeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
