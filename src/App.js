import "./App.css";
import {
  AuthContext,
  reducer as authReducer,
  initialAuthState,
} from "./contextApi/AuthContext";
import { useReducer } from "react";
import Router from "./router";

function App() {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <Router/>
    </AuthContext.Provider>
  );
}

export default App;
