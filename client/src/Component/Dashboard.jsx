import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true ;
  useEffect(()=>{
    axios.get('http://localhost:3000/auth/verify')
    .then(res=>{
      if(res.data.status) {

      } else{
        navigate('/')
      }
    })
  })


  return (
    <div>
     sdvjkhd.;kjcvbdjvbd.jkxz
    
    </div>
  )
}

export default Dashboard
