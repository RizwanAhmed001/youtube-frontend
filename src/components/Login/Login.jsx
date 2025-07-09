import { Link } from "react-router-dom";
import "./Login.css"
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

function Login({setLoginModel}){

  const [loginField, setLoginField] = useState({"email": "", "password": ""})
  const handleOnChangeInput = (event, name) => {
    setLoginField({
      ...loginField, [name]: event.target.value
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
          <div className="login-btn">Login</div>
          <Link to={"/signup"}  onClick={() => setLoginModel()} className="login-btn">SignUp</Link>
          <div className="login-btn" onClick={() => setLoginModel()}>Cancel</div>
        </div>

      </div>
    </div>
    </>
  )
}
export default Login;