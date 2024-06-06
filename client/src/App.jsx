import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Home from './Component/Home'
import ForgotPassword from './Component/ForgotPassword'
import ResetPassword from './Component/ResetPassword'
// import Dashboard from './Component/Dashboard'
import Navbar from './Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './Component/CreateUser'
import UpdateUser from './Component/UpdateUser'
import User from './Component/User'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path= "/home" element={<Home/>} ></Route>
      <Route exact path= "/user" element={<User/>} ></Route>
      <Route exact path= "/create" element={<CreateUser/>} ></Route>
      <Route exact path= "/update" element={<UpdateUser/>} ></Route>

      <Route exact path= "/" element={<Signup/>} ></Route>
      <Route exact path= "/login" element={<Login/>} ></Route>
      <Route exact path= "/forgotPassword" element={<ForgotPassword/>} ></Route>
      <Route exact path= "/resetPassword/:token" element={<ResetPassword/>} ></Route>
       {/* <Route exact path= "/dashboard" element={<Dashboard/>} ></Route> */}
      <Route exact path= "/navbar" element={<Navbar/>} ></Route>
   
      
      
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
