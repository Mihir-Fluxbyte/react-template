import React, { useContext } from "react";
import AuthContext from "../../contextApi/AuthContext";
import useApiClientService from "../../api/useApiClientService";

function Home() {
  const auth = useContext(AuthContext);
  const { ApiGet } = useApiClientService();
  const onLogout = () => {
    auth.dispatch({ type: "LOGOUT" });
  };
  const getApiTest = () => {
    ApiGet('/temp').then();
  };
  return (
    <>
      <div>home</div>
      <div>token= {auth.state.token}</div>
      <button onClick={onLogout}>Logout</button>
      <button onClick={
        () => auth.dispatch({ type: "LOGIN", payload: {user:'string',token:`${Math.random()}`} })
      }>
        Random Token
      </button>
      <button onClick={getApiTest}>Get Test</button>
    </>
  );
}

export default Home;
