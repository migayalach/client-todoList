export interface ItemToList {
  id: string;
  description: string;
  state: boolean;
}

export type ActionTask = "Delete" | "Update";

export type TextRender = "Sign In" | "Sing Up" | "Restore";

export type CodeError = "";

export interface ErrorProps {
  message: string;
  code: CodeError;
}

export type NotificationCodes = "success" | "info" | "warning" | "error";
