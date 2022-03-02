import React, { useContext } from 'react';
import AuthContext from '../../contextApi/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const onLogin = () => {
    auth.dispatch({type:'LOGIN', payload:{user:'string',token:'token'}});
    navigate('/home')
  };

  return (
    <>
      <div>Login</div>
      <button onClick={onLogin}>Login</button>
    </>
  );
}

export default Login;
