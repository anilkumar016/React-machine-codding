import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'
import './Login.css'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import Signup from './Signup'
function Landing() {
  return (
      <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Signup/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        
      </BrowserRouter>
      </>
  )
}

export default Landing