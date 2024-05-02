import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';

function Home () {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3000/auth/verify')
      .then(res => {
        if (res.data.status) {
          setAuthenticated(true);
        } else {
          navigate('/login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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

  if (!authenticated) {
    return null; // or loading spinner or message
  }

  return (
    <div>
      Home<br/>
      <button className="w-full py-2 text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-700"> <Link to="/dashboard" > Dashboard</Link></button>
      <br/><br/>
      <button onClick={handleLogout} className="w-full py-2 text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-700">Logout</button>
    </div>
  );
}

export default Home;
