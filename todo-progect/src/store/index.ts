import { configureStore } from "@reduxjs/toolkit";
import todoRedicer from "./todoSlice";
import userRedicer from "./userSlice";

const store = configureStore({
  reducer: {
    todos2: todoRedicer,
    user: userRedicer,
  },
});

export default store;

export type RootStates = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
