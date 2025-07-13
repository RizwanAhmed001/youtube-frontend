import SideNavbar from "../../components/SideNavbar/SideNavbar";
import "./Profile.css";
import { FaCaretRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

function Profile({ sideNavbar }) {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const fetchProfileData = async () => {
    await axios
      .get(`http://localhost:4000/api/getChannel/${id}`, {withCredentials:true})
      .then((res) => {
        setData(res.data.channelProfile[0]?.video);
        setUser(res.data.channelProfile[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProfileData();
  }, []);


  const handleVideoDelete = async (videoId) => {
    await axios.delete(`http://localhost:4000/api/getChannel/${videoId}`, {withCredentials:true}).then((res) => {
      window.location.reload();
    }).catch((err) => {
      console.log(err)
      toast.error("Not Authorize to delete");
    })
  }

  return (
    <>
      <div className="profile">
        <SideNavbar sideNavbar={sideNavbar} />

        <div className={sideNavbar ? `profile_page` : `profile_page_inactive`}>
          <div className="banner">
            <img
              className="bannerImage"
              src={user?.channelBanner}
              alt="channelbanner"
            />
          </div>

          <div className="profile_top_section">
            <div className="profile_top_section_profile">
              <img
                src={user?.user.profilePic}
                alt="channelPic"
                className="profile_top_section_img"
              />
            </div>

            <div className="profile_top_section_About">
              <div className="profile_top_section_About_Name">
                {user?.user.userName}
              </div>
          

              <div className="profile_top_section_info">
                {user?.channelName} . {user?.subscribers}k . {data.length} videos
              </div>
              <div className="profile_section_info">
                {user?.description}
              </div>
              <div>
                <button className="subscribe">Subscribe</button>
                <button className="join">Join</button>
              </div>
            </div>
          </div>

          <div className="profile_videos">
            <div className="profile_videos_title">
              Videos &nbsp; <FaCaretRight />
            </div>
            <div className="profileVideos">
              {/* Video Div */}

              {data.map((item, index) => {
                return (
                  <div key={index} className="profileVideo_block">
                    <Link to={`/watch/${item._id}`}>
                    <div className="profileVideo_block_thumbnail">
                      <img
                        src={item.thumbnail}
                        alt="videoImage"
                        className="profileVideo_block_thumbnail_img"
                      />
                    </div>
                    </Link>

                    <div className="profileVideo_block_detail">
                      <br />
                      <div className="profileVideo_block_detail_name">
                        {item.title}
                      </div>
                      <div className="profileVideo_block_detail_about">
                        {item.views}k . {item.createdAt.slice(0,10)}
                      </div>
                      <div className="deleteEdit">
                        <button className="editVideo">Edit</button>
                        <button className="deleteVideo" onClick={() => handleVideoDelete(item._id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
         <ToastContainer />
      </div>
    </>
  );
}
export default Profile;
