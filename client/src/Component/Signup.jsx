import React from "react";
import Img01 from "./images/regisImg.jpg";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full max-w-4xl border border-gray-700 rounded-lg shadow-md bg-opacity-75">
        <img src={Img01} alt="Featured" className="w-1/2 object-cover rounded-l-lg" />
        <form className="w-1/2 p-8">
          <h2 className="text-center text-gray-700 font-bold text-[25px]">Sign Up</h2>

          <div className="mb-5">
            <label htmlFor="name" className="block font-bold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

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
            />
          </div>

          <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
