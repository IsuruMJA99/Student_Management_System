import React, { useState } from "react";
import Axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function ForgotPassword() {
    
    const [email, setEmail] = useState(" ");
   
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/forgot-password", {
        email,
      })
        .then((response) => {
          if(response.data.status){
            alert("check youre email for reset password link")
              navigate('/login')
          }
         
        })
        .catch((err) => {
          console.log(err);
        });
    };
    
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex w-full max-w-4xl bg-opacity-75 border border-gray-700 rounded-lg shadow-md">
      {/* <img
        src={Img01}
        alt="Featured"
        className="object-cover w-1/2 rounded-l-lg"
      /> */}
      <form className="w-1/2 p-8" onSubmit={handleSubmit}>
        <h2 className="text-center text-gray-700 font-bold text-[25px]">
        Forgot Password
        </h2>

        <div className="mb-5">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-700"
        >
          send
        </button>
        
      </form>
      </div>
    </div>
  )
}

export default ForgotPassword
