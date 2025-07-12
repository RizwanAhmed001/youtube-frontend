import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function SignUp() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UmaM-m5wwp4Ixwbx7YXqBMMGvpFXEdo1aw&s"
  );
  const navigate = useNavigate();
  const [progressBar, setProgressbar] = useState(false)
  const [signUpField, setSignUpField] = useState({
    userName: "",
    email: "",
    password: "",
    about: "",
    profilePic: uploadedImageUrl,
  });

  const handleInputFields = (event, name) => {
    setSignUpField({
      ...signUpField,
      [name]: event.target.value,
    });
  };
  console.log(signUpField);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube-clone");
    try {
      setProgressbar(true)
      // cloudName = "davnbpk0m"
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/davnbpk0m/image/upload",
        data
      );
      setProgressbar(false)
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      setSignUpField({
        ...signUpField,
        profilePic: imageUrl,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = async () => {
    setProgressbar(true)
    axios
      .post("http://localhost:4000/auth/signUp", signUpField)
      .then((res) => {
        toast.success(res.data.message)
        setProgressbar(false)
        navigate("/")
      })
      .catch((err) => {
        toast.error(err.message)
        setProgressbar(false)
      });
  };

  return (
    <>
      <div className="signUp">
        <div className="signup_card">
          <div className="signUp_title">
            <FaYoutube fontSize={"54px"} className="login_youtubeImage" />
            SignUp
          </div>

          <div className="signUp_Inputs">
            <input
              type="text"
              onChange={(e) => {
                handleInputFields(e, "userName");
              }}
              className="signUp_Inputs_inp"
              value={signUpField.userName}
              placeholder="User Name"
            />

            <input
              type="email"
              onChange={(e) => {
                handleInputFields(e, "email");
              }}
              className="signUp_Inputs_inp"
              value={signUpField.email}
              placeholder="Email"
            />

            <input
              type="password"
              onChange={(e) => {
                handleInputFields(e, "password");
              }}
              className="signUp_Inputs_inp"
              value={signUpField.password}
              placeholder="Password"
            />

            <input
              type="text"
              onChange={(e) => {
                handleInputFields(e, "about");
              }}
              className="signUp_Inputs_inp"
              value={signUpField.about}
              placeholder="About You"
            />

            <div className="image_upload_signup">
              <input type="file" onChange={(e) => uploadImage(e)} />

              <div className="image_upload_signup_div">
                <img
                  src={uploadedImageUrl}
                  className="image_default_signUp"
                  alt="File"
                />
              </div>
            </div>

            <div className="signUpBtns">
              <div className="signUpBtn" onClick={handleSignUp}>
                SignUp
              </div>
              <Link to="/" className="signUpBtn">
                Home Page
              </Link>
            </div>
            {
              progressBar && <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
            }
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
export default SignUp;
