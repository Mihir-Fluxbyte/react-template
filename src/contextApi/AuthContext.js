import { createContext } from "react";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "../@shared/Utility/storageHelper";

export default createContext();

export const initialAuthState = () => {
  return {
    isAuthenticated: Boolean(getLocalStorage("token")),
    token: getLocalStorage("token"),
    user: getLocalStorage("user"),
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      setLocalStorage("user", action.payload.user);
      setLocalStorage("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user === undefined ? state.user : action.payload.user,
        token: action.payload.token === undefined ? state.token : action.payload.token,
      };
    case "LOGOUT":
      clearLocalStorage();
      return initialAuthState();

    default:
      return state;
  }
};
