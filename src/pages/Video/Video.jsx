import { useState } from "react";
import "./Video.css";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Video() {
  // yet to make logic
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();


  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [comment, setComments] = useState([]);
  const { id } = useParams();

  const fetchVideoById = async () => {
    await axios
      .get(`http://localhost:4000/api/getVideoById/${id}`, {withCredentials: true})
      .then((response) => {
        setData(response.data.video);
        setVideoUrl(response.data.video?.videoLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCommentByVideoId = async () => {
    await axios
      .get(`http://localhost:4000/commentApi/comment/${id}`)
      .then((res) => {
        setComments(res.data?.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId();
  }, []);

  function handleDislike() {
    setDislikes(data?.dislikes);
  }

  function handleLike() {
    setLikes(data?.likes);
  }

  return (
    <>
      <div className="video">
        <div className="videoPostSection">
          <div className="video_youtube">
            {data && (
              <video
                width="400px"
                controls
                autoPlay
                className="video_youtube_video"
              >
                <source src={`${videoUrl}`} type="video/mp4" />
                Your browser does not support the video tag
              </video>
            )}
          </div>

          <div className="video_youtubeAbout">
            <div className="video_uTubeTitle">{data?.title}</div>
            <div className="youtube_video_ProfileBlock">
              <div className="youtube_video_ProfileBlock_left">
                <Link
                  to={`/user/${data?.user._id}`}
                  className="youtube_video_ProfileBlock_left_img"
                >
                  <img
                    src={data?.user.profilePic}
                    alt="userImage"
                    className="youtube_video_ProfileBlock_left_Image"
                  />
                </Link>

                <div className="youtubeVideo_susView">
                  <div className="youtubePostProfileName">
                    {data?.channel.channelName}
                  </div>
                  <div className="youtubePostProfileSubs">
                    {data?.channel.createdAt.slice(0, 10)}
                  </div>
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
                    {data?.likes}
                  </div>
                </div>

                <div className="youtubeVideoDivider"></div>

                <div
                  onClick={handleDislike}
                  className="youtube_vodeo_likeBlock_Like"
                >
                  <MdOutlineThumbDown className="fill" />
                  <div className="youtube_video_likeBlock_NoOfLikes">
                    {data?.dislikes}
                  </div>
                </div>
              </div>
            </div>

            <div className="youtube_video_About">
              <div>{data?.createdAt.slice(0, 10)}</div>
              <div>{data?.description}</div>
            </div>

            <div className="yotubeCommentSection">
              <div className="youtubeCommentSectionTitle">{comment.length} Comment</div>

              <div className="youtubeSelfComment">
                <img
                  className="video_youtubeSelfCommentProfile"
                  src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                  alt="SelfComment"
                />
                <div className="addAComment">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
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
                {comment?.map((item, index) => {
                  return (
                      <div key={index} className="youtubeSelfComment">
                        <img
                          src={item?.user.profilePic}
                          alt="profilrPic"
                          className="video_youtubeSelfCommentProfile"
                        />

                        <div className="others_commentSection">
                          <div className="other_commentSectionHeader">
                            <div className="channelName_comment">
                              {item.user.userName}
                            </div>
                            <div className="commentTimingOthers">
                              {item.user.createdAt.slice(0,10)}
                            </div>
                          </div>

                          <div className="otherCommentSectionComment">
                            {item?.message}
                          </div>
                          <div>
                            <button className="edit">Edit</button>
                            <button className="delete">Delete</button>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="videoSuggestion">
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
          <div className="videoSuggestionsBlock">
            <div className="video_seggestion_thumbnail">
              <img
                src="https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt=""
                className="video_suggestion_thumbnail_img"
              />
            </div>
            <div className="video_suggestion_About">
              <div className="video_suggestions_About_title">
                Most Funnt Video On the Planet. Best for childrens to sleep.
              </div>
              <div className="video_suggestion_About_Profile">Child Play</div>
              <div className="video_suggestion_About_Profile">
                100k views 1 day ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Video;
