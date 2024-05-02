import React, { useState } from "react";
import Axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Img01 from "./images/regisImg.jpg";
import Img02 from "./images/loginImg2.jpg";

const Signup = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
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
    <div className="flex items-center justify-center h-screen bg-gray-200" >   
    {/* style={{ backgroundImage: `url(${Img02})`, backgroundSize: "cover" }} */}
      
      <div className="flex w-full max-w-4xl bg-opacity-25 border border-gray-700 rounded-lg shadow-md">
        <img
          src={Img01}
          alt="Featured"
          className="object-cover w-1/2 rounded-l-lg"
        />
        <form className="w-1/2 p-8" onSubmit={handleSubmit}>
          <h2 className="text-center text-gray-700 font-bold text-[25px]">
            Sign Up
          </h2>

          <div className="mb-5">
            <label htmlFor="name" className="block font-bold">
              User Name
            </label>
            <input
              type="text"
              required={true}
              placeholder="Enter Username"
              autoComplete="off"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block font-bold">
              Email
            </label>
            <input
              type="email"
              required={true}
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
              required={true}
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
            Sign Up
          </button>
          <p className="mt-10 text-center">Already Have an Account.. <Link to="/login" className="text-blue-500">Login</Link></p>
     
        </form>
      </div>
    </div>
  );
};

export default Signup;
