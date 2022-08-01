import React,{useEffect} from 'react'
import { useMoralis } from "react-moralis";
import loginstyles from '../styles/Login.module.css'

const Login = () => {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  return (

        <div className={loginstyles.login_container}>
      {user ? <div> <span>{`${user.get("ethAddress")}`}</span> <button onClick={logOut} disabled={isAuthenticating}>Logout</button>  </div>  :<button onClick={login}>Moralis Metamask Login</button>}
  {/*  {user ? <button onClick={logOut} disabled={isAuthenticating}>Logout</button> : []} ayrılabilir duruma göre */}
      
    </div>
   
   
  );
}

export default Login