import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './signup';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/" element={<Home />} />
      
    </Routes>

    </BrowserRouter>
  )
}

export default App
