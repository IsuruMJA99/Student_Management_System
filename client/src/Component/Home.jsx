import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      Home
     <button> <Link to="/dashboard"> Dashboard</Link></button>
     <button>Logout</button>
    </div>
  )
}

export default Home
