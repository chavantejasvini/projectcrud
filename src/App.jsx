import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Adduser from './components/Adduser'
import './index.css'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/app-user' element={<Adduser/>}/>
        <Route path='/update-user/:id' element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
