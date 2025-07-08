import { useState } from "react";
import "./Video.css";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDown } from "react-icons/md";

function Video() {
  const [likes, setLikes] = useState(12);
  const [dislikes, setDislikes] = useState(2);

  function handleDislike() {
    setDislikes((prev) => prev + 1);
  }

  function handleLike() {
    setLikes((prev) => prev + 1);
  }

  return (
    <>
      <div className="video">

        <div className="videoPostSection">
          <div className="video_youtube">
            <video
              width="400px"
              controls
              autoPlay
              className="video_youtube_video"
            >
              <source
                src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag
            </video>
          </div>

          <div className="video_youtubeAbout">
            <div className="video_uTubeTitle">{"Cartoon for childrens"}</div>
            <div className="youtube_video_ProfileBlock">
              <div className="youtube_video_ProfileBlock_left">
                <div className="youtube_video_ProfileBlock_left_img">
                  <img
                    src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                    alt=""
                    className="youtube_video_ProfileBlock_left_Image"
                  />
                </div>

                <div className="youtubeVideo_susView">
                  <div className="youtubePostProfileName">{"User1"}</div>
                  <div className="youtubePostProfileSubs">{"2024-07-09"}</div>
                </div>

                <div className="susbscribeBtnYoutube">Suscribe</div>
              </div>

              <div className="youtube_video_likeBlock">
                <div
                  onClick={handleLike}
                  className="youtube_vodeo_likeBlock_Like"
                >
                  <MdOutlineThumbUp className="fill" />
                  <div className="youtube_video_likeBlock_NoOfLikes">
                    {likes}
                  </div>
                </div>

                <div className="youtubeVideoDivider"></div>

                <div
                  onClick={handleDislike}
                  className="youtube_vodeo_likeBlock_Like"
                >
                  <MdOutlineThumbDown className="fill" />
                  <div className="youtube_video_likeBlock_NoOfLikes">
                    {dislikes}
                  </div>
                </div>
              </div>
            </div>

            <div className="youtube_video_About">
              <div>2025-07-6</div>
              <div>This Video is for childrens</div>
            </div>

            <div className="yotubeCommentSection">
              <div className="youtubeCommentSectionTitle">2 Comments</div>

              <div className="youtubeSelfComment">
                <img
                  className="video_youtubeSelfCommentProfile"
                  src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                  alt="SelfComment"
                />
                <div className="addAComment">
                  <input
                    type="text"
                    className="addACommentInput"
                    placeholder="Add a Comment"
                  />
                  <div className="cancelSubmitComment">
                    <div className="cancelComment">Cancel</div>
                    <div className="cancelComment">Comment</div>
                  </div>
                </div>
              </div>

              <div className="youtubeOthersComments">

                <div className="youtubeSelfComment">

                  <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt=""
                    className="video_youtubeSelfCommentProfile"
                  />

                  <div className="others_commentSection">
                    <div className="other_commentSectionHeader">
                    <div className="channelName_comment">UserName</div>
                    <div className="commentTimingOthers">2025-07-06</div>
                  </div>

                  <div className="otherCommentSectionComment">Nice Video</div>
                  </div>


                </div>

                <div className="youtubeSelfComment">

                  <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt=""
                    className="video_youtubeSelfCommentProfile"
                  />

                  <div className="others_commentSection">
                    <div className="other_commentSectionHeader">
                    <div className="channelName_comment">UserName</div>
                    <div className="commentTimingOthers">2025-07-06</div>
                  </div>

                  <div className="otherCommentSectionComment">Nice Video</div>
                  </div>


                </div>

                <div className="youtubeSelfComment">

                  <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt=""
                    className="video_youtubeSelfCommentProfile"
                  />

                  <div className="others_commentSection">
                    <div className="other_commentSectionHeader">
                    <div className="channelName_comment">UserName</div>
                    <div className="commentTimingOthers">2025-07-06</div>
                  </div>

                  <div className="otherCommentSectionComment">Nice Video</div>
                  </div>


                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="videoSuggestion">

          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>
          <div className="videoSuggestionsBlock">

            <div className="video_seggestion_thumbnail">
              
              <img src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" className="video_suggestion_thumbnail_img" />

            </div>
            <div className="video_suggestion_About">

              <div className="video_suggestions_About_title">Most Funnt Video On the Planet. Best for childrens to sleep.</div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">100k views 1 day ago</div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
export default Video;
