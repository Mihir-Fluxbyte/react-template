import React, { useContext } from "react";
import AuthContext from "../../contextApi/AuthContext";
import useApiClientServie from "../../api/useApiClientServie";
import './Home.scss'

function Home() {
  const auth = useContext(AuthContext);
  const { ApiGet } = useApiClientServie();
  const onLogout = () => {
    auth.dispatch({ type: "LOGOUT" });
  };
  const getApiTest = () => {
    ApiGet().then();
  };
  return (
    <>
      <div>home</div>
      <div className="token-div">token= {auth.state.token}</div>
      <button className="btn" onClick={onLogout}>Logout</button>
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
