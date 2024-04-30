import { createSlice } from "@reduxjs/toolkit";
import { iTodos } from "../types/types";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos1: [] as iTodos[],
  },
  reducers: {
    addTodo(state, action) {
      state.todos1.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      state.todos1 = state.todos1.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    toggleTodoComplited(state, action) {
      const toggledTodo = state.todos1.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoComplited } = todoSlice.actions;

export default todoSlice.reducer;
