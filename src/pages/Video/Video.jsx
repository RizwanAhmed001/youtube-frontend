import { useState } from "react";
import "./Video.css";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Video() {
  // yet to make logic

  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [comment, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEdiContent] = useState("");
  const { id } = useParams();

  const fetchVideoById = async () => {
    await axios
      .get(`http://localhost:4000/api/getVideoById/${id}`, {
        withCredentials: true,
      })
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

  const handleDislike = async () => {
    await axios
      .put(
        `http://localhost:4000/api/dislike/${id}`,
        {}, // empty body
        { withCredentials: true } // config goes here
      )
      .then((res) => {
        window.location.reload();
        console.log("updated");
      })
      .catch((err) => {
        toast.error("Please login first to like");
      });
  };

  const handleLike = async () => {
    await axios
      .put(
        `http://localhost:4000/api/likes/${id}`,
        {}, // empty body
        { withCredentials: true } // config goes here
      )
      .then((res) => {
        window.location.reload();
        console.log("updated");
      })
      .catch((err) => {
        toast.error("Please login first to like");
      });
  };

  const handleComment = async () => {
    const body = {
      message: message,
      video: id,
    };
    await axios
      .post(`http://localhost:4000/commentApi/comment`, body, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Please login first to comment");
      });
  };

  const handleDelete = async (commentId) => {
    await axios
      .delete(`http://localhost:4000/commentApi/comment/${commentId}`, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Not Authorize to delete this comment");
      });
  };

  const handleEdit =  (message) => {
    setIsEditing(true);
    setEdiContent(message);
  };

  const handleEditRequest = async (commentId) => {
    console.log("I am commment id", commentId)
    const body = {
      message: editContent  // ✅ match this with what your backend expects
    };
    await axios.put(
      `http://localhost:4000/commentApi/comment/${commentId}`,
      body,
      {
        withCredentials: true,  // ✅ important if you're using auth via cookies
      }
    ).then((res) => {
      window.location.reload()
    }).catch((err) => {
      toast.error("Not Authorize to edit this comment");
    })

};

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
              <div className="youtubeCommentSectionTitle">
                {comment.length} Comment
              </div>

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
                    <div className="cancelComment" onClick={handleComment}>
                      Comment
                    </div>
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
                            {item.user.createdAt.slice(0, 10)}
                          </div>
                        </div>

                        <div className="otherCommentSectionComment">
                          {item?.message}
                        </div>
                          {isEditing && (
                            <div>
                            <input
                            value={editContent}
                            className="editing"
                            onChange={(e) => setEdiContent(e.target.value)}
                            type="text"
                            />
                            <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
                            <button className="add" onClick={() => handleEditRequest(item._id)}>Add</button>
                            </div>
                          )}
                            <div>

                          <button
                            className="edit"
                            onClick={() => handleEdit(item?.message)}
                          >
                            Edit
                          </button>
                          <button
                            className="delete"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
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
        <ToastContainer />
      </div>
    </>
  );
}
export default Video;
