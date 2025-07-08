import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { useState } from 'react'
import Video from './pages/Video/Video'

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
      </Routes>
    </>
  )
}

export default App
