import { ItemToList } from "@/types";

export const myHomeworks: ItemToList[] = [
  { id: "1One1", description: "Hello world", state: true },
  { id: "2two2", description: "My name is Miguel", state: false },
  {
    id: "3three3",
    description: "I'm learning English",
    state: true,
  },
  {
    id: "4four4",
    description: "Tomorrow I don't go to class",
    state: false,
  },
  { id: "5five5", description: "I need money", state: true },
];

export const listUsers = [
  { idUser: "user1", name: "Joy Montana", email: "joy@gmail.com" },
  { idUser: "user2", name: "Paola Conde", email: "pao@gmail.com" },
  { idUser: "user3", name: "Miguel Lopez", email: "miguel@gmail.com" },
];

export const listForDate = [
  {
    idUser: "user1",
    listDate: [
      {
        date: "2025-07-07",
        list: [
          { id: "1One1", description: "Hello world", state: true },
          { id: "2two2", description: "My name is Miguel", state: false },
        ],
      },
      {
        date: "2025-07-08",
        list: [],
      },
      {
        date: "2025-07-09",
        list: [
          { id: "1One1", description: "Hello world", state: true },
          { id: "2two2", description: "My name is Miguel", state: false },
          {
            id: "3three3",
            description: "I'm learning English",
            state: true,
          },
          {
            id: "4four4",
            description: "Tomorrow I don't go to class",
            state: false,
          },
          { id: "5five5", description: "I need money", state: true },
        ],
      },
    ],
  },
  {
    idUser: "user2",
    listDate: [
      {
        date: "2025-07-07",
        list: [
          { id: "1One1", description: "Hello world", state: true },
          { id: "2two2", description: "My name is Miguel", state: false },
        ],
      },
      {
        date: "2025-07-08",
        list: [],
      },
      {
        date: "2025-07-09",
        list: [
          { id: "1One1", description: "Hello world", state: true },
          { id: "2two2", description: "My name is Miguel", state: false },
          {
            id: "3three3",
            description: "I'm learning English",
            state: true,
          },
          {
            id: "4four4",
            description: "Tomorrow I don't go to class",
            state: false,
          },
          { id: "5five5", description: "I need money", state: true },
        ],
      },
    ],
  },
  {
    idUser: "user3",
    listDate: [
      {
        date: "2025-07-07",
        list: [],
      },
      {
        date: "2025-07-08",
        list: [],
      },
      {
        date: "2025-07-09",
        list: [],
      },
    ],
  },
];
