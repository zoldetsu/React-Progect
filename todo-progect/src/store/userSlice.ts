import { createSlice } from "@reduxjs/toolkit";

type initialS = {
  email: string | null;
  token: string | null;
  id: string | null;
};

const initialState: initialS = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload;
      state.token = action.payload;
      state.id = action.payload;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
