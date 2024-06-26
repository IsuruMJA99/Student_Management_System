import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Img02 from "./images/regisImg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); // State to manage error message display

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate('/home');
        } else {
          setShowError(true); // Show error message if login fails
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full max-w-4xl bg-opacity-75 border border-gray-700 rounded-lg shadow-md">
        <img
          src={Img02}
          alt="Featured"
          className="object-cover w-1/2 rounded-l-lg"
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
            Login
          </button>
          {showError && (
            <p className="mt-2 text-red-500">Incorrect email or password.</p>
          )}
          <br />
          <p className="mt-1 ">
            <Link to="/forgotPassword" className="text-blue-500">
              Forgot Password ?
            </Link>
          </p>
          <p className="mt-10 text-center">
            Don't Have an Account..{" "}
            <Link to="/" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
