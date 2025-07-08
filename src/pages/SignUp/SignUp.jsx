import { Link } from "react-router-dom";
import "./SignUp.css";
import { FaYoutube } from "react-icons/fa";

function SignUp() {
  return (
    <>
      <div className="signUp">
        <div className="signup_card">
          <div className="signUp_title">
            <FaYoutube fontSize={"54px"} className="login_youtubeImage" />
            SignUp
          </div>

          <div className="signUp_Inputs">
            <input type="text" className="signUp_Inputs_inp" placeholder="Channel Name" />
            <input type="text" className="signUp_Inputs_inp" placeholder="User Name" />
            <input type="text" className="signUp_Inputs_inp" placeholder="Password" />
            <input type="text" className="signUp_Inputs_inp" placeholder="About Your Channel" />

            <div className="image_upload_signup">
              <input type="file" />
              <div className="image_upload_signup_div">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UmaM-m5wwp4Ixwbx7YXqBMMGvpFXEdo1aw&s"} className="image_default_signUp" alt="File" />
              </div>
            </div>

            <div className="signUpBtns">
              <div className="signUpBtn">SignUp</div>
              <Link to="/" className="signUpBtn">Home Page</Link>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
export default SignUp;
