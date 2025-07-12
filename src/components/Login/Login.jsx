import { Link } from "react-router-dom";
import "./Login.css"
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Login({setLoginModel}){

  const [loginField, setLoginField] = useState({"email": "", "password": ""})
  const [loader, setLoader] = useState(false)

  const handleOnChangeInput = (event, name) => {
    setLoginField({
      ...loginField, [name]: event.target.value
    })
  }

  const handleLogin = async () => {
    setLoader(true)
    axios.post("http://localhost:4000/auth/signIn", loginField, {withCredentials:true})
    .then((res) => {
      setLoader(false)
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("userId", res.data.user._id)
      sessionStorage.setItem("userProfilePic", res.data.user.profilePic)
      window.location.reload();
    }).catch((err) => {
      setLoader(false)
      toast.error("Invalid credentials")
      console.log(err)
    })
  }

  return(
    <>
    <div className="login">
      <div className="login_card">
        <div className="titleCard_login">
          <FaYoutube fontSize={"54px"} className="login_youtubeImage"/>
          Login
        </div>
        <div className="loginCredentials">
          <div className="userNameLogin">
            <input type="email" name="email" onChange={(e) => {handleOnChangeInput(e, "email")}} value={loginField.email} id="email" placeholder="Email" className="userNameLoginUserName" />
          </div>
          <div className="userNameLogin">
            <input type="password" name="password" onChange={(e) => {handleOnChangeInput(e, "password")}} value={loginField.password} id="password" placeholder="Password" className="userNameLoginUserName" />
          </div>
        </div>
        
        <div className="login_buttons">
          <div className="login-btn" onClick={handleLogin}>Login</div>
          <Link to={"/signup"}  onClick={() => setLoginModel()} className="login-btn">SignUp</Link>
          <div className="login-btn" onClick={() => setLoginModel()}>Cancel</div>
        </div>
        <br />

          {
            loader && <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          }

      </div>
      <ToastContainer/>
    </div>
    </>
  )
}
export default Login;