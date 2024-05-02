import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Navbar() {
const navigate = useNavigate();

const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(res => {
        if (res.data.status) {
          navigate('/login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-800">
    <nav className="container flex items-center justify-between px-4 py-2 mx-auto">
        
    <ul className="items-center lg:flex ">
        <li><a className="font-bold text-white" href="#">Home</a></li>
        </ul>
      
      <div className="hidden lg:flex lg:items-center lg:w-auto" id="mynavbar">
        <form className="lg:flex lg:items-center lg:ml-4">
          <input className="px-4 py-2 leading-tight text-white bg-gray-700 border border-gray-600 rounded-lg appearance-none focus:outline-none focus:bg-white focus:text-gray-900" type="text" placeholder="Search"/>
          <button className="px-4 py-2 mr-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">Search</button>
          <button onClick={handleLogout} className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">Logout</button>
    
        </form>
      </div>
    </nav>
  </div>
  
  )
}

export default Navbar
