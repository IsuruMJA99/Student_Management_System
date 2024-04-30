import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Component/Signup'
import Login from './Component/Login'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path= "/signup" element={<Signup/>} ></Route>
      <Route exact path= "/login" element={<Login/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
