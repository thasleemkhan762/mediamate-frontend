import React, { useEffect } from 'react'
import one from "../../../dummyImages/one.png";
import cover from "./home-pro-pic.png";
import "./MainSideBar.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../Redux/Reducer/UserSlice';

function MainSidebar() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.data.userId );
  // console.log(userId);
  

  useEffect(() => {
    dispatch(getUserData(userId));
  }, [dispatch,userId]);
  const  { userData }  = useSelector((state) => state.data);
  


  return (
    <>
      {/* profile */}
      <div className="row">
        <div className="pro-content">
          <div className="home-pic-div">
            <div className="home-pics">
              <img src={cover} className="home-cover-pic" alt="coverpic" />
              <img src={`http://localhost:5001/${userData.image}`} className="home-pro-pic" alt="pic" />
            </div>
          </div>
          <div className="home-menu-div">
            <div className="home-name-pro">
              <h5>{userData.username}</h5>
              <p className="chat-preview-text">Lorem Ipsum Dolor</p>
            </div>
            <hr />
            <div className="home-pro-menu">
              <ul className="nav flex-column">
                <li className="nav-item menu-list">
                  <i className="bi bi-person-fill"></i>
                  <a className="nav-link active" href="/user/profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item menu-list">
                  <i className="bi bi-people-fill"></i>
                  <a className="nav-link" href="/user/friends">
                    Friends
                  </a>
                </li>
                <li className="nav-item menu-list">
                  <i className="bi bi-stickies-fill"></i>
                  <a className="nav-link" href="/user/saved_posts">
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
              <p className="chat-preview-text">Lorem ipsum dolor sit amet</p>
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
              <p className="chat-preview-text">Lorem ipsum dolor sit amet</p>
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
            <a className="home-pre-click" href="/user/premium">
              click here
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSidebar
