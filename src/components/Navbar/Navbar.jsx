import { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import Login from "../Login/Login";

{
  /* <IoMdPerson /> */
}

function Navbar({ setSideNavbarFunction, sideNavbar }) {
  const navigate = useNavigate();

  const [userPic, setUserPic] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4TUtAk_tgrdgaKzCjHKehGKvBynfcxd9GA&s"
  );
  const [navbarModel, setNavbarModel] = useState(false);

  const [login, setLogin] = useState(false);

  function handleClickModel() {
    setNavbarModel((prev) => !prev);
  }

  const sideNavbarFunc = () => {
    setSideNavbarFunction(!sideNavbar);
  };

  const handleProfile = () => {
    navigate("/user/1");
    setNavbarModel(false);
  };

  const setLoginModel = () => {
    setLogin(false);
  };

  const onClickOfPopUpOption = (button) => {
    setNavbarModel(false);
    if (button == "login") {
      setLogin(true);
    } else {
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbarHanmberger" onClick={sideNavbarFunc}>
          <RxHamburgerMenu color="white" />
        </div>

        <Link to="/" className="navbar_youtubeImg">
          <FaYoutube className="navbar_youtubeImage" />
          <div className="navbar_utubeTitle">Youtube</div>
        </Link>
      </div>

      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input
            type="text"
            placeholder="Search"
            className="navbar_searchBoxInput"
          />
          <div className="navbar_searchIconBox">
            <FaSearch color="white" fontSize={"25px"} />
          </div>

          <div className="navbar_mike">
            <MdOutlineKeyboardVoice color="white" />
          </div>
        </div>
      </div>

      <div className="navbar-right">
        <Link to={"/1/upload"}>
          <MdOutlineVideoCall
            fontSize={"30px"}
            cursor={"pointer"}
            color="white"
          />
        </Link>

        <FaBell fontSize={"30px"} cursor={"pointer"} color="white" />
        <img
          onClick={handleClickModel}
          src={`${userPic}`}
          alt="Logo"
          className="navbar-right-logo"
        />

        {navbarModel && (
          <div className="navbar-model">
            <div className="navbar-model-option" onClick={handleProfile}>
              View Profile
            </div>
            <div
              className="navbar-model-option"
              onClick={() => onClickOfPopUpOption("login")}
            >
              <IoIosLogIn /> &nbsp; Login
            </div>
            <div className="navbar-model-option">
              <FaGoogle /> &nbsp; Google{" "}
            </div>
            <div className="navbar-model-option">
              <MdOutlineSwitchAccount /> &nbsp; Switch
            </div>
            <div
              className="navbar-model-option"
              onClick={() => onClickOfPopUpOption("logout")}
            >
              <VscSignOut /> &nbsp; Logout{" "}
            </div>
            <div className="navbar-model-option">
              <FaCircleDollarToSlot /> &nbsp; Puchase{" "}
            </div>
          </div>
        )}
      </div>

      {login && <Login setLoginModel={setLoginModel} />}
    </div>
  );
}
export default Navbar;
