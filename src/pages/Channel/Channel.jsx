import { useState } from "react";
import axios from "axios";
import "./Channel.css";
import { useNavigate } from "react-router-dom";

function ChannelForm() {

  const [channelData, setChannelData] = useState({
    channelName: "",
    description: "",
    channelPic: "",
    channelBanner: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setChannelData({ ...channelData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userId = sessionStorage.getItem("userId")
      await axios.post("http://localhost:4000/api/channel", {...channelData,}, {withCredentials: true })
      .then((res) => {
        navigate(`/user/${userId}`)
      }).catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className="channel">
      <div className="channelFormContainer">
      <form className="channelForm" onSubmit={handleSubmit}>
        <h2>Create Your Channel</h2>

        <label>Channel Name *</label>
        <input
          type="text"
          name="channelName"
          value={channelData.channelName}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={channelData.description}
          onChange={handleChange}
        />

        <label>Channel Picture URL</label>
        <input
          type="text"
          name="channelPic"
          value={channelData.channelPic}
          onChange={handleChange}
        />

        <label>Channel Banner URL</label>
        <input
          type="text"
          name="channelBanner"
          value={channelData.channelBanner}
          onChange={handleChange}
        />

        <button type="submit">Create Channel</button>
      </form>
    </div>
    </div>
  );
}

export default ChannelForm;