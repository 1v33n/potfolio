import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button 
        onClick={() => loginWithRedirect()}
        className='inline-block px-6 py-2.5 bg-secondary text-white font-medium text-xl leading-tight uppercase rounded-md shadow-md hover:bg-neutral hover:text-normal hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
        Login
    </button>
  )
};

export default LoginButton;