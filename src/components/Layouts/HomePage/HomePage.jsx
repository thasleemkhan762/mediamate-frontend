import React from 'react'
import "./HomePage.css"
import one from "../../../dummyImages/one.png"
import cover from "./home-pro-pic.png";
import profilePic from "./pro-pic.png";
import postProPic from "./post-pro-pic.png";
import postImage from "./post-image.png";


function HomePage() {
  return (
    <>
      <div className="fluid-container">
        <div>
          <header className="header-home">
            <nav className="navbar-home navbar-expand-lg navbar-dark">
              <div className="brandname_box">
                <h2 className="brand_name" href="#">
                  Media
                </h2>
                <h2 className="brand_name">MATE</h2>
              </div>
            </nav>
          </header>
        </div>
        <div className="row home-contents">
          {/* profile chat premium */}
          <div className="col-md-3">
            {/* profile */}
            <div className="row">
              <div className="pro-content">
                <div className="home-pic-div">
                  <div className="home-pics">
                    <img
                      src={cover}
                      className="home-cover-pic"
                      alt="coverpic"
                    />
                    <img src={profilePic} className="home-pro-pic" alt="pic" />
                  </div>
                </div>
                <div className="home-menu-div">
                  <div className="home-name-pro">
                    <h5>Criss Math</h5>
                    <p className="chat-preview-text">Lorem Ipsum Dolor</p>
                  </div>
                  <hr />
                  <div className="home-pro-menu">
                    <ul className="nav flex-column">
                      <li className="nav-item menu-list">
                        <i className="bi bi-person-fill"></i>
                        <a className="nav-link active" href="/profile">
                          Profile
                        </a>
                      </li>
                      <li className="nav-item menu-list">
                        <i className="bi bi-people-fill"></i>
                        <a className="nav-link" href="/friends">
                          Friends
                        </a>
                      </li>
                      <li className="nav-item menu-list">
                        <i className="bi bi-stickies-fill"></i>
                        <a className="nav-link" href="saved_posts">
                          Saved posts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* chat */}
            <div className="row">
              <div className="chat-div">
                <h5 className="home-chat-heading">Recent Chats...</h5>
                <div className="user-detail">
                  <div className="col-sm-3">
                    {/* profile pic */}
                    <div className="chat-pro-image">
                      <img className="home-chat-pic" src={one} alt="" />
                    </div>
                  </div>
                  {/* name chat */}
                  <div className="col-sm-7">
                    <h6>Victoria</h6>
                    <p className="chat-preview-text">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  {/* message count */}
                  <div className="col-sm-2">
                    <div className="count-msg">
                      <p>3</p>
                    </div>
                  </div>
                </div>
                <hr className="home-chat-hr" />
                <div className="user-detail">
                  <div className="col-sm-3">
                    {/* profile pic */}
                    <div className="chat-pro-image">
                      <img className="home-chat-pic" src={one} alt="" />
                    </div>
                  </div>
                  {/* name chat */}
                  <div className="col-sm-7">
                    <h6>Victoria</h6>
                    <p className="chat-preview-text">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  {/* message count */}
                  <div className="col-sm-2">
                    <div className="count-msg">
                      <p>3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* premium */}
            <div className="row">
              <div className="col-sm-12 home-chat-box">
                <div className="profile_chat_premium_box">
                  <p className="home-pre-text">Try Premium...</p>
                  <a className="home-pre-click" href="/premium">
                    click here
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* create posts and posts */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-12 home-create-post-div">
                <div className="col-sm-2">
                  <div className="home-pics">
                    <img
                      src={profilePic}
                      className="home-create-pic"
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="home-create-placeholder">
                    <p className="home-create-placeholder-text">
                      What's going on
                    </p>
                    <div className="home-create-icons">
                      {/* image icon */}
                      <div className="image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-image"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                        </svg>
                      </div>
                      {/* vedio icon */}
                      <div className="vedio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-play-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                        </svg>
                      </div>
                      {/* emoji icon */}
                      <div className="emoji">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-emoji-smile-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 home-create-post-btn-div">
                  <button className="btn btn-primary">post it</button>
                </div>
              </div>
            </div>
            {/* home explore btns */}
            <div className="row">
              <div className="col-sm-12 home-select-btn">
                <div className="col-sm-6 home-home-btn">
                  {/* home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                  {/* home button */}
                  <button className="btn">Home</button>
                </div>
                <div className="col-sm-6 home-explore-btn">
                  {/* explore icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-compass"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                  </svg>
                  {/* explore button */}
                  <button className="btn">Explore</button>
                </div>
              </div>
            </div>

            {/* post */}
            <div className="row">
              <div className="col-sm-12 home-post-div">
                <div className="col-sm-1">
                  {/* pro pic image */}
                  <div className="home-post-pro-pic">
                    <img src={postProPic} alt="proPic" />
                  </div>
                </div>
                <div className="col-sm-10">
                  {/* posted date */}
                  <div className="home-post-date">
                    <p className="home-post-date-text">posted 1 hour ago</p>
                  </div>
                  {/* post description */}
                  <div className="home-post-description">
                    <div className="home-post-description-div">
                      <p className="home-post-description-text">
                        Lorem ipsum dolor sit amet consectetur. Aliquam vel
                        proin vitae lacus. Tristique.Uurna diam pulvinar
                        egestas. Mollis pellentesque aliquam orci fames.
                      </p>
                    </div>
                  </div>
                  {/* posted media */}
                  <div className="home-post-media">
                    <img src={postImage} alt="postImage" />
                  </div>
                  <div className="home-post-interactions">
                    {/* comment */}
                    <div className="home-post-interactions-comment">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-chat-left"
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
                        class="bi bi-hand-thumbs-up"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                      </svg>
                      <p className="home-post-like-count">0</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="home-post-options">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="grey"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* friend suggestion supoort */}
          <div className="col-md-3">
            <div className="row home-friend-div">
              <div className="home-friend-box">
                <div className="col-md-12">
                  <p>{"friends ( + 99 )"}</p>
                </div>
                <div className="row">
                  <div className="friendlist-div col-sm-12">
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item ">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                    <div className="friendlist-item">
                      <div className="friendlist-pic">
                        <img src={one} alt="propic" />
                      </div>
                      <div className="friendlist-name">
                        <p>{"Victoria"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="friends-btn">
                    <button className="btn btn-primary">See more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row friend-suggest-main">
              <div className="friend-suggestion-box">
                <div className="col-md-12">
                  <p className="friend-suggestion-head">
                    Friend suggestions...
                  </p>
                </div>
                <div className="col-md-12 friend-suggest-contents">
                  <div className="friend-suggestion-div">
                    <div className="friend-suggest-img">
                      <img src={one} alt="one" />
                    </div>
                    <p className="friend-suggest-name">Victoria</p>
                    <div className="friend-suggest-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                      </svg>
                    </div>
                  </div>
                  <div className="friend-suggestion-div">
                    <div className="friend-suggest-img">
                      <img src={one} alt="one" />
                    </div>
                    <p className="friend-suggest-name">Victoria</p>
                    <div className="friend-suggest-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                      </svg>
                    </div>
                  </div>
                  <div className="friend-suggestion-div">
                    <div className="friend-suggest-img">
                      <img src={one} alt="one" />
                    </div>
                    <p className="friend-suggest-name">Victoria</p>
                    <div className="friend-suggest-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 home-chat-box">
                <div className="support-box">
                  <div className="support-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#0054F9"
                      class="bi bi-question-octagon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                    </svg>
                  </div>
                  <p className="home-pre-text">Need Support...</p>
                  <a className="home-pre-click" href="/premium">
                    click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage
