import React from 'react'
import "./HomePage.css"
import one from "../../../dummyImages/one.png"
import cover from "./home-pro-pic.png";
import profilePic from "./pro-pic.png";


function HomePage() {
  return (
    <>
      <div className="fluid-container">
        <div>
          <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
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
                <h5>Recent Chats...</h5>
                <div className="user-detail">
                  <div className="col-sm-3">
                    {/* profile pic */}
                    <div className="chat-pro-image">
                      <img className='home-chat-pic' src={one} alt="" />
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
              <div className="col-sm-12">
                <div className="profile_chat_premium_box">
                  <p>Try Premium...</p>
                  <a href="/premium">click here</a>
                </div>
              </div>
            </div>
          </div>

          {/* create posts and posts */}
          <div className="col-md-6"></div>

          {/* friend suggestion supoort */}
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage
