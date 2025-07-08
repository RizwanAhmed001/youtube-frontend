import SideNavbar from "../../components/SideNavbar/SideNavbar";
import "./Profile.css";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Profile({ sideNavbar }) {
  return (
    <>
      <dic className="profile">
        <SideNavbar sideNavbar={sideNavbar} />

        <div className={sideNavbar ?`profile_page` : `hidden`}>
          <div className="profile_top_section">
            <div className="profile_top_section_profile">
              <img
                src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                alt=""
                className="profile_top_section_img"
              />
            </div>

            <div className="profile_top_section_About">
              <div className="profile_top_section_About_Name">Rizwan</div>

              <div className="profile_top_section_info">@Rizwan .3 Videos</div>
              <div className="profile_section_info">About Me</div>
            </div>
          </div>

          <div className="profile_videos">
            <div className="profile_videos_title">
              Videos &nbsp; <FaCaretRight />
            </div>
            <div className="profileVideos">
              {/* Video Div */}

              <Link to="/watch/1" className="profileVideo_block">
                <div className="profileVideo_block_thumbnail">
                  <img
                    src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                    alt=""
                    className="profileVideo_block_thumbnail_img"
                  />
                </div>

                <div className="profileVideo_block_detail">
                  <div className="profileVideo_block_detail_name">
                    Video Title
                  </div>
                  <div className="profileVideo_block_detail_about">
                    Create at 2024-09-12
                  </div>
                </div>
              </Link>

              <Link to="/watch/1" className="profileVideo_block">
                <div className="profileVideo_block_thumbnail">
                  <img
                    src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                    alt=""
                    className="profileVideo_block_thumbnail_img"
                  />
                </div>

                <div className="profileVideo_block_detail">
                  <div className="profileVideo_block_detail_name">
                    Video Title
                  </div>
                  <div className="profileVideo_block_detail_about">
                    Create at 2024-09-12
                  </div>
                </div>
              </Link>

              <Link to="/watch/1" className="profileVideo_block">
                <div className="profileVideo_block_thumbnail">
                  <img
                    src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                    alt=""
                    className="profileVideo_block_thumbnail_img"
                  />
                </div>

                <div className="profileVideo_block_detail">
                  <div className="profileVideo_block_detail_name">
                    Video Title
                  </div>
                  <div className="profileVideo_block_detail_about">
                    Create at 2024-09-12
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </dic>
    </>
  );
}
export default Profile;
