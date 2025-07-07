import "./SideNavbar.css";
import { FaHome } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdRecentActors } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdThumbUpAlt } from "react-icons/md";
import { FaScissors } from "react-icons/fa6";

function SideNavbar({sideNavbar}) {
  return (
    <div className={sideNavbar? `home-sideNavbar` : `homeSideNavbarHide`}>

      <div className="home_sideNavbarTop">

        <div className={`home_sideNavbarTopOption`}>
            <FaHome />
            <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <IoMdVideocam />
            <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <MdSubscriptions />
            <div className="home_sideNavbarTopOptionTitle">Subscription</div>
        </div>

      </div>

      <div className="home_sideNavbarMiddle">

        <div className={`home_sideNavbarTopOption`}>
            <div className="hxome_sideNavbarTopOptionTitle">You</div>
            <FaAngleRight />
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <MdRecentActors />
            <div className="hxome_sideNavbarTopOptionTitle">Your Channel</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <MdHistory />
            <div className="hxome_sideNavbarTopOptionTitle">History</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <MdOutlinePlaylistAdd />
            <div className="hxome_sideNavbarTopOptionTitle">Playlist</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <MdOutlineVideoLibrary />
            <div className="hxome_sideNavbarTopOptionTitle">Your Video</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <MdWatchLater />
            <div className="hxome_sideNavbarTopOptionTitle">Watch later</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
            <MdThumbUpAlt />
            <div className="hxome_sideNavbarTopOptionTitle">Liked Videos</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
            <FaScissors />
            <div className="hxome_sideNavbarTopOptionTitle">Your clips</div>
        </div>

      </div>


      <div className="home_sideNavbarMiddle">

        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img className="home_sideNavbar_ImgLogo" src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="Image" />
          <div className="home_sideNavbarTopOptionTitleHeader">Explore Mountains</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img className="home_sideNavbar_ImgLogo" src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww" alt="Image" />
          <div className="home_sideNavbarTopOptionTitleHeader">Nature View</div>
        </div>

        <div className="home_sideNavbarTopOption">
          <img className="home_sideNavbar_ImgLogo" src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8fDA%3D" alt="Image" />
          <div className="home_sideNavbarTopOptionTitleHeader">Anime Tv</div>
        </div>

      </div>


    </div>
  );
}

export default SideNavbar;
