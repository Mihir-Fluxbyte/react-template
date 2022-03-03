import { createContext } from "react";

export default createContext();

export const initialLoadingState = {
  isLoading: false,
  counter: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return {
        isLoading: true,
        counter: state.counter + 1,
      };
    case "-":
      return {
        isLoading: state.counter !== 1,
        counter: Math.max(state.counter - 1),
      };
    default:
      return state;
  }
};
