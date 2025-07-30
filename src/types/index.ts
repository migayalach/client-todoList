export interface ItemToList {
  id: string;
  description: string;
  state: boolean;
}

export type ActionTask = "Delete" | "Update";
