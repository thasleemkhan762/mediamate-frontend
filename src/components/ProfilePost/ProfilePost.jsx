import React, { useEffect } from "react";
import "./ProfilePost.css";
// import postProPic from "./post-pro-pic.png";
// import postImage from "./post-image.png";
import ReactTimeAgo from "react-time-ago";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getSingleUserPosts } from "../../Redux/Reducer/PostSlice";

function ProfilePost() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.post);
  const userPosts = useSelector((state) => state.post.userPosts);
  const userId = useSelector((state) => state.data.userId);

  // const {userData} = useSelector((state) => state.data)
  // console.log(userPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSingleUserPosts(userId));
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userPosts || userPosts.length === 0)
    return (
      <div className="no-post">Your Uploaded Posts Will Be Shown Here</div>
    );
  return (
    <>
      {Array.isArray(userPosts) &&
        userPosts.map((userPosts) => (
          <div key={userPosts._id} className="row">
            <div className="col-sm-12 pro-post-div">
              <div className="">
                {/* pro pic image */}
                <div className="pro-post-head">
                  <div className="pro-post-pro-pic">
                    <img
                      src={`https://mediamate-backend.onrender.com/${userPosts.userDetails.image}`}
                      alt="proPic"
                    />
                  </div>
                  <div className="">
                    {/* posted date */}
                    <div className="pro-post-date">
                      <p className="home-post-username">
                        {userPosts.userDetails.username}
                      </p>
                      <span className="date">
                        <ReactTimeAgo
                          date={new Date(userPosts.createdAt)}
                          locale="en-US"
                        />
                      </span>
                      <div className="pro-post-options">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="grey"
                          className="bi bi-three-dots"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                      </div>
                    </div>
                    {/* post description */}
                    <div className="pro-post-description">
                      <div className="pro-post-description-div">
                        <p className="pro-post-description-text">
                          {userPosts.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* posted media */}
                <div className="home-post-media">
                  {userPosts.fileType === "image" ? (
                    <img
                      src={`https://mediamate-backend.onrender.com/${userPosts.file}`}
                      alt="Post Media"
                    />
                  ) : userPosts.fileType === "video" ? (
                    <video controls>
                      <source
                        src={`https://mediamate-backend.onrender.com/${userPosts.file}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>No media available</p>
                  )}
                </div>
                <div className="home-post-interactions">
                  {/* comment */}
                  <div className="home-post-interactions-comment">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-chat-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    </svg>
                    <p className="home-post-comment-count">0</p>
                  </div>
                  {/* like */}
                  <div className="home-post-interactions-like">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    <p className="home-post-like-count">0</p>
                  </div>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ProfilePost;
