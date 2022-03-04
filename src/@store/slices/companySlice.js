import { createSlice } from "@reduxjs/toolkit";
import { add, destroy } from "../generalActions";

const initialState = {
  ids: [],
  entities: {},
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: add,
    destroy: destroy,
  },
});

export const companyAction = companySlice.actions;

export default companySlice.reducer;
