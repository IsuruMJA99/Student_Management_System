import React from "react";

const Signup = () => {
  return (
<>
    {/* <div className="left-side">
          <img src={regImg} alt="Registration" />
        </div> */}


<div class="flex w-00px p-20 border border-gray-700 rounded-lg shadow-md bg-opacity-75">
<form className="sign_up_form"> 
      <h2 class="text-center text-gray-700" >Sign Up</h2>
      

      <div class="block mb-5 font-bold">
        <label htmlFor="name">
          <strong>Name</strong>
        </label>

        <input
          type="text"
          placeholder="Enter Name"
          autoComplete="off"
          name="name"
          class="w-full px-8 py-4 border border-gray-300 rounded-lg"
        />
         </div>
        <br />
        

        <div class="block mb-5 font-bold">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            class="w-full px-8 py-4 border border-gray-300 rounded-lg"
          />
        </div>
        <br />

        <div class="block mb-5 font-bold">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            class="w-full px-8 py-4 border border-gray-300 rounded-lg"
          />
        </div>
        <br />
        <button type="submit" class="w-full py-4 bg-green-500 text-white rounded-lg cursor-pointer">Sign Up</button>
        
      </form>
    </div>
    
    </>
  );
};

export default Signup;
