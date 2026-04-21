export type Habit = {
  id: number;
  title: string;
  completed: boolean;
  category: "health" | "fitness" | "mindfulness" | "learning" | "lifestyle";
};

export const habits: Habit[] = [
  { id: 1, title: "Read 10 pages of a book", completed: true, category: "learning" },
  { id: 2, title: "Meditate for 5 minutes", completed: true, category: "mindfulness" },
  { id: 3, title: "Drink 8 glasses of water", completed: false, category: "health" },
  { id: 4, title: "Had fruit for breakfast", completed: false, category: "health" },
  { id: 5, title: "Had a healthy lunch", completed: false, category: "lifestyle" },
  { id: 6, title: "Went for a run", completed: false, category: "fitness" },
  { id: 7, title: "Went to bed before 10PM", completed: false, category: "lifestyle" },
  { id: 8, title: "No screen time after 9PM", completed: false, category: "lifestyle" },
  { id: 9, title: "Stretch for 10 minutes", completed: false, category: "fitness" },
  { id: 10, title: "Write in journal", completed: false, category: "mindfulness" },
];