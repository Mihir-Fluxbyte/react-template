import React, { useContext } from 'react';
import { AuthContext } from '../../contextApi/AuthContext';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function AuthGuard({children}) {
  const auth = useContext(AuthContext)
  if(auth.state.isAuthenticated){
    if(children){
      return children
    }
    else{
      return <Outlet/>
    }
  }
  return <Navigate to ='/' />
}

export default AuthGuard
