import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iTodos {
  id: string;
  text: string;
  completed: boolean;
}

type TodoState = {
  todos1: iTodos[];
};

const initialState: TodoState = {
  todos1: [],
};

const todoSlice = createSlice({
  name: "todos",
  // initialState: {
  //   todos1: [] as iTodos[],
  // },
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos1.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos1 = state.todos1.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoComplited(state, action: PayloadAction<string>) {
      const toggledTodo = state.todos1.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoComplited } = todoSlice.actions;

export default todoSlice.reducer;
