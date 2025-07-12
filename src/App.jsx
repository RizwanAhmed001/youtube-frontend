import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home'
import { useState } from "react";
import Video from './pages/Video/Video'
import Profile from './pages/Profile/Profile'
import SideNavbar from "./components/SideNavbar/SideNavbar";
import SignUp from "./pages/SignUp/SignUp";
import VideoUpload from './pages/videoUpload/videoUpload'
import axios from "axios";
import { useEffect } from "react";
import ChannelForm from "./pages/Channel/Channel";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);
  const [search, setSearch] = useState("");

  const setSideNavbarFunction = (value) => {
    setSideNavbar(value);
  };

  return (
    <>
      <Navbar setSearch={setSearch} setSideNavbarFunction={setSideNavbarFunction} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home search={search} sideNavbar={sideNavbar}/>}></Route>
        <Route path="/watch/:id" element={<Video />}></Route>
        <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar}  />}></Route>
        <Route path="/:id/upload" element={<VideoUpload/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/channelForm" element={<ChannelForm/>}></Route>
      </Routes>
    </>
  );
}

export default App;
