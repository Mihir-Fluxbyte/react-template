import { createSlice } from "@reduxjs/toolkit";
import generalReducer from "../generalActions";

const initialState = {
  ids: [],
  entities: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    ...generalReducer,
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
