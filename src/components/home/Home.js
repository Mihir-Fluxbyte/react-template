import React, { useContext } from 'react';
import AuthContext from '../../contextApi/AuthContext';

function Home() {
  const auth = useContext(AuthContext)
  const onLogout = () => {
    auth.dispatch({type:'LOGOUT'})
  };
  return (
    <>
      <div>home</div>
      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default Home;
