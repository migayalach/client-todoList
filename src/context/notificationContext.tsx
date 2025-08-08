"use client";
import { InputShowError } from "@/types";
import { createContext, useContext, useState } from "react";

type NotificationContext = {
  existError: boolean;
  showError: (props: InputShowError) => void;
  closeError: () => void;
  infoError: InputShowError;
};

const NotificationContext = createContext<NotificationContext | null>(null);

export function useAuthNotification(): NotificationContext {
  const contextError = useContext(NotificationContext);
  if (!contextError) throw new Error("There is no AuthProvider!");
  return contextError;
}

export function AuthProviderNotification({
  children,
}: {
  children: React.ReactNode;
}) {
  const [existError, setExistError] = useState<boolean>(false);
  const [infoError, setInfoError] = useState<InputShowError>({
    head: "",
    type: "",
    description: "",
    message: "",
  });

  const showError = ({ head, type, description, message }: InputShowError) => {
    console.log(":D");
    if (!existError) {
      setExistError(true);
      setInfoError({
        head,
        type,
        description,
        message,
      });
    }
  };

  const closeError = () => {
    if (existError) {
      setExistError(false);
      setInfoError({
        head: "",
        type: "",
        description: "",
        message: "",
      });
    }
  };

  return (
    <NotificationContext.Provider
      value={{ infoError, existError, showError, closeError }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
