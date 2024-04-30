import { configureStore } from "@reduxjs/toolkit";
import todoRedicer from "./todoSlice";

export default configureStore({
  reducer: {
    todos2: todoRedicer,
  },
});
