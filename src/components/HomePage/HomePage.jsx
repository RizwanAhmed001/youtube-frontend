import "./HomePage.css";
function HomePage({sideNavbar}) {
  let options = [
    "All",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Democracy",
    "Cricket",
    "Comedy",
    "All",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Democracy",
    "Cricket",
    "Comedy",
  ];

  return (
    <div className={sideNavbar? `homePage` : "fullHomePage"}>

      <div className="homePage_options">
        {options.map((item, index) => {
          return (
            <>
              <div key={index} className="homePage_option">{item}</div>
            </>
          );
        })}
      </div>

        <div className={sideNavbar? "home_mainPage" : "home_mainPageWithoutLink"}>

          <div className="youTube_Video">

              <div className="youtube_thumbnailBox">
                <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="Thumbnail" className="youtube_thumbnailPic" />
                <div className="youtube_timingThumbnail">
                  10:00
                </div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="profile" className="youtube_thumbnail_Profile" />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">Mountain ASMR</div>
                  <div className="youtube_channelName">Relex</div>
                  <div className="youtubeVideo_views">200k Views</div>
                </div>

              </div>


          </div>

          <div className="youTube_Video">

              <div className="youtube_thumbnailBox">
                <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="Thumbnail" className="youtube_thumbnailPic" />
                <div className="youtube_timingThumbnail">
                  10:00
                </div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="profile" className="youtube_thumbnail_Profile" />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">Mountain ASMR</div>
                  <div className="youtube_channelName">Relex</div>
                  <div className="youtubeVideo_views">200k Views</div>
                </div>

              </div>


          </div>

          <div className="youTube_Video">

              <div className="youtube_thumbnailBox">
                <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="Thumbnail" className="youtube_thumbnailPic" />
                <div className="youtube_timingThumbnail">
                  10:00
                </div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="profile" className="youtube_thumbnail_Profile" />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">Mountain ASMR</div>
                  <div className="youtube_channelName">Relex</div>
                  <div className="youtubeVideo_views">200k Views</div>
                </div>

              </div>


          </div>

          <div className="youTube_Video">

              <div className="youtube_thumbnailBox">
                <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="Thumbnail" className="youtube_thumbnailPic" />
                <div className="youtube_timingThumbnail">
                  10:00
                </div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="profile" className="youtube_thumbnail_Profile" />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">Mountain ASMR</div>
                  <div className="youtube_channelName">Relex</div>
                  <div className="youtubeVideo_views">200k Views</div>
                </div>

              </div>


          </div>

          <div className="youTube_Video">

              <div className="youtube_thumbnailBox">
                <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="Thumbnail" className="youtube_thumbnailPic" />
                <div className="youtube_timingThumbnail">
                  10:00
                </div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="profile" className="youtube_thumbnail_Profile" />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">Mountain ASMR</div>
                  <div className="youtube_channelName">Relex</div>
                  <div className="youtubeVideo_views">200k Views</div>
                </div>

              </div>


          </div>

          <div className="youTube_Video">

              <div className="youtube_thumbnailBox">
                <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="Thumbnail" className="youtube_thumbnailPic" />
                <div className="youtube_timingThumbnail">
                  10:00
                </div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img src="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="profile" className="youtube_thumbnail_Profile" />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">Mountain ASMR</div>
                  <div className="youtube_channelName">Relex</div>
                  <div className="youtubeVideo_views">200k Views</div>
                </div>

              </div>


          </div>


        </div>

    </div>
  );
}
export default HomePage;
