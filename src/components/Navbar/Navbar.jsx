import { useState, useEffect } from "react";
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
import axios from "axios";

{
  /* <IoMdPerson /> */
}

function Navbar({ setSearch, setSideNavbarFunction, sideNavbar }) {
  const navigate = useNavigate();
  // My Code
  // const [signUp, setSignUp] = useState("")

  const [isLogedIn, setIsLogedIn] = useState(false);

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

  const handleProfile = async () => {
    let userId = sessionStorage.getItem("userId");
    if (userId === null) {
      navigate("/signup");
    }
    else{
      await axios(`http://localhost:4000/api/getChannel/${userId}`, {withCredentials: true})
      .then((res) => {
        if(res.data?.channelProfile.length === 0){
          navigate("/channelForm")
        }
        else{
          navigate(`/user/${userId}`)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
    setNavbarModel(false);
  };

  const setLoginModel = () => {
    setLogin(false);
  };

  const getLogoutFun = async () => {
    await axios.post("http://localhost:4000/auth/logout", {withCredentials: true})
    .then((res) => {
      console.log("Logout")
    }).catch((err) => {
      console.log(err)
    })
  }

  const onClickOfPopUpOption = (button) => {
    setNavbarModel(false);
    if (button == "login") {
      setLogin(true);
    } else {
      sessionStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate("/")
      },2000)
    }
  };

  useEffect(() => {
    let userProfilePic = sessionStorage.getItem("userProfilePic");

    setIsLogedIn(sessionStorage.getItem("userId") !== null ? true : false);

    if (userProfilePic !== null) {
      setUserPic(userProfilePic);
    }
  }, []);

  const handleSignIn = () => {
    navigate("/signup");
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
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

        {isLogedIn ? null : (
          <button className="signInButton" onClick={handleSignIn}>
            Sign Up
          </button>
        )}

        <img
          onClick={handleClickModel}
          src={`${userPic}`}
          alt="Logo"
          className="navbar-right-logo"
        />

        {navbarModel && (
          <div className="navbar-model">
            {
              isLogedIn && <div className="navbar-model-option" onClick={handleProfile}>
              View Profile
            </div>
            }
            {
              !isLogedIn && <div
              className="navbar-model-option"
              onClick={() => onClickOfPopUpOption("login")}
            >
              <IoIosLogIn /> &nbsp; Login
            </div>
            }
            <div className="navbar-model-option">
              <FaGoogle /> &nbsp; Google{" "}
            </div>
            <div className="navbar-model-option">
              <MdOutlineSwitchAccount /> &nbsp; Switch
            </div>
            {
              isLogedIn && <div
              className="navbar-model-option"
              onClick={() => onClickOfPopUpOption("logout")}
            >
              <VscSignOut /> &nbsp; Logout{" "}
            </div>
            }
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
