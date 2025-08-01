export interface ItemToList {
  id: string;
  description: string;
  state: boolean;
}

export type ActionTask = "Delete" | "Update";

export type TextRender = "Sign In" | "Sing Up" | "Restore";
