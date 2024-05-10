export type task = {
  id: string;
  text: string;
  completed: boolean;
};

export interface iAccounts {
  email: string;
  tasks: task[];
}

export const accounts: iAccounts[] = [
  {
    email: "nzr.bones@gmail.com",
    tasks: [
      {
        id: "1",
        text: "go to the shop",
        completed: false,
      },
      {
        id: "2",
        text: "buy bread",
        completed: false,
      },
    ],
  },
  {
    email: "bilandima38@gmail.com",
    tasks: [
      {
        id: "1",
        text: "go to the swimming pool",
        completed: false,
      },
      {
        id: "2",
        text: "buy cupcakes",
        completed: false,
      },
    ],
  },
];
