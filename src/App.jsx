import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { useState } from 'react'

function App() {
  const [sideNavbar, setSideNavbar] = useState(true)

  const setSideNavbarFunction = (value) => {
    setSideNavbar(value)
  }

  return (
    <>
      <Navbar setSideNavbarFunction={setSideNavbarFunction} sideNavbar={sideNavbar} />
      <Home sideNavbar={sideNavbar}/>
    </>
  )
}

export default App
