import React, { useState } from "react";
import Axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function ResetPassword() {
    
    const [password, setPassword] = useState(" ");
    const {token} = useParams()
   
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/reset-password"+ token, {
        password,
      })
        .then((response) => {
          if(response.data.status){
             navigate('/login')
          }
          console.log(response.data)
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
        Reset Password
        </h2>

        <div className="mb-5">
            <label htmlFor="password" className="block font-bold">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-700"
        >
          Reset
        </button>
        
      </form>
      </div>
    </div>
  )
}

export default ResetPassword
