import { createContext } from "react";

export default createContext();

export const initialAuthState = () => {
  return {
    isAuthenticated: Boolean(localStorage.getItem("token")),
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", action.payload.user);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return initialAuthState();

    default:
      return state;
  }
};
