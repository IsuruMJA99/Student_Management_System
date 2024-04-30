import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Component/Signup'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path= "/signup" element={<Signup/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
