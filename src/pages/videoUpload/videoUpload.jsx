import { useState } from "react";
import "./videoUpload.css";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function VideoUpload() {
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videolink: "",
    thumbnail: "",
    videoType: "",
  });

  const [loader, setLoader] = useState(false);

  const handleOnChangeInput = (event, name) => {
    setInputField({
      ...inputField,
      [name]: event.target.value,
    });
  };

  const uploadImage = async (e, type) => {
    setLoader(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube-clone");
    try {
      // cloudName = "davnbpk0m"
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/davnbpk0m/${type}/upload`,
        data
      );
      const url = response.data.url;
      setLoader(false);
      let val = type === "image" ? "thumbnail" : "videolink";
      setInputField({
        ...inputField,
        [val]: url,
      });
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  console.log(inputField);

  return (
    <>
      <div className="videoUpload">
        <div className="uploadBox">
          <div className="uploadVideoTitle">
            <FaYoutube fontSize={"54px"} color="red" />
            Upload Video
          </div>

          <div className="uploadForm">
            <input
              type="text"
              onChange={(e) => handleOnChangeInput(e, "title")}
              value={inputField.title}
              placeholder="Title of Video"
              className="uploadFormInputs"
            />
            <input
              type="text"
              onChange={(e) => handleOnChangeInput(e, "description")}
              value={inputField.description}
              placeholder="Description"
              className="uploadFormInputs"
            />
            <input
              type="text"
              onChange={(e) => handleOnChangeInput(e, "videoType")}
              value={inputField.videoType}
              placeholder="Category"
              className="uploadFormInputs"
            />
            <div>
              Thumbnail{" "}
              <input
                type="file"
                onChange={(e) => uploadImage(e, "image")}
                accept="image/*"
              />
            </div>
            <div>
              Video{" "}
              <input
                type="file"
                onChange={(e) => uploadImage(e, "video")}
                accept="video/mp4, video/webm, video/*"
              />
            </div>
            {loader && (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
          </div>

          <div className="uploadBtns">
            <div className="uploadBtn-form">Upload</div>
            <Link to="/" className="uploadBtn-form">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default VideoUpload;
