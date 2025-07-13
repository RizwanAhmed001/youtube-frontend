import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function HomePage({ sideNavbar, search }) {
  const [data, setdata] = useState([]);
  const [allData, setAllData] = useState([]);
  let options = [
    "All",
    "Programming",
    "Cooking",
    "Gaming",
    "News",
    "Kids",
    "ASMR",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/allvideo")
      .then((res) => {
        setdata(res.data.video);
        setAllData(res.data.video);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    function handeleSearch() {
    if (search === "") {
      setdata(allData);
    } else {
      let searchData = allData.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setdata(searchData);
    }
  }
  handeleSearch()
  }, [search])

  function handleClick(videoType) {
    let myVideoType;
    if (videoType === "All") {
      setdata(allData);
    } else {
      myVideoType = allData?.filter((item) => {
        return item.videoType === videoType;
      });
      setdata(myVideoType);
    }
  }

  return (
    <div className={sideNavbar ? `homePage` : "fullHomePage"}>
      <div className="homePage_options">
        {options.map((item, index) => {
          return (
            <div
              onClick={() => {
                handleClick(item);
              }}
              key={index}
              className="homePage_option"
            >
              {item}
            </div>
          );
        })}
      </div>

      <div
        className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}
      >
        {data?.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/watch/${item._id}`}
              className="youTube_Video"
            >
              <div className="youtube_thumbnailBox">
                <img
                  src={`${item.thumbnail}`}
                  alt="Thumbnail"
                  className="youtube_thumbnailPic"
                />
                <div className="youtube_timingThumbnail">10:00</div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img
                    src={`${item.user.profilePic}`}
                    alt="profile"
                    className="youtube_thumbnail_Profile"
                  />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">{item.title}</div>
                  <div className="youtube_channelName">
                    {item?.channel?.channelName}
                  </div>
                  <div className="youtubeVideo_views">{item.views}K Views</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default HomePage;
