import axios from 'axios'
import React, { useContext, useState } from 'react'
import Register from './Auth/Register';
import Login from './Auth/Login';


const Home = () => {

  const [state, setState] = useState("login");

  return (
    <div className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col  m-auto items-start min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>

        {state === "Sign Up" ? (
          <Register />
        ) : (<Login />)}

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Home