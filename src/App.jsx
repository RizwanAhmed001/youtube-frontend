import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { useState } from 'react'
import Video from './pages/Video/Video'
import Profile from './pages/Profile/Profile'
import SideNavbar from './components/SideNavbar/SideNavbar'
import SignUp from './pages/SignUp/SignUp'

function App() {
  const [sideNavbar, setSideNavbar] = useState(true)

  const setSideNavbarFunction = (value) => {
    setSideNavbar(value)
  }

  return (
    <>
      <Navbar setSideNavbarFunction={setSideNavbarFunction} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar}/>}></Route>
        <Route path="/watch/:id" element={<Video />}></Route>
        <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar}  />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App
