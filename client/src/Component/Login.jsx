import React, { useState } from "react";
import Axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Img02 from "./images/regisImg3.jpg";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      email,
      password,
    })
      .then((response) => {
        if(response.data.status){
            navigate('/login')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-4xl border border-gray-700 rounded-lg shadow-md bg-opacity-75">
        <img
          src={Img02}
          alt="Featured"
          className="w-1/2 object-cover rounded-l-lg"
        />
        <form className="w-1/2 p-8" onSubmit={handleSubmit}>
          <h2 className="text-center text-gray-700 font-bold text-[25px]">
            Login
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

          <div className="mb-5">
            <label htmlFor="password" className="block font-bold">
              Password
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
            className="w-full py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-700"
          >
            Login
          </button>
          <p class="text-center  mt-10">Don't Have an Account.. <Link to="/signup" class="text-blue-500">Sign Up</Link></p>
     
        </form>
      </div>
    </div>
  );
};

export default Login;
