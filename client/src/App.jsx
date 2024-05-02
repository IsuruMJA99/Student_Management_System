import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Home from './Component/Home'
import ForgotPassword from './Component/ForgotPassword'
import ResetPassword from './Component/ResetPassword'
import Dashboard from './Component/Dashboard'
import Navbar from './Component/Navbar'


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path= "/home" element={<Home/>} ></Route>
      <Route exact path= "/" element={<Signup/>} ></Route>
      <Route exact path= "/login" element={<Login/>} ></Route>
      <Route exact path= "/forgotPassword" element={<ForgotPassword/>} ></Route>
      <Route exact path= "/resetPassword/:token" element={<ResetPassword/>} ></Route>
      <Route exact path= "/dashboard" element={<Dashboard/>} ></Route>
      <Route exact path= "/navbar" element={<Navbar/>} ></Route>
      
      
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
