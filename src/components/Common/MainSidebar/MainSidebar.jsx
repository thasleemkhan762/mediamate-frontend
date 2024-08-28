import React, { useEffect } from 'react'
import one from "../../../dummyImages/one.png";
import dummy from "../../../dummyImages/dummy.png"
import cover from "./home-pro-pic.png";
import "./MainSideBar.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../Redux/Reducer/UserSlice';
import { Link } from 'react-router-dom';

function MainSidebar({activeClassProfile, activeClassFriends, activeClassSaved, }) {
  const  username  = useSelector((state) => state.data.username);
  // console.log(username);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.data.userId );
  // console.log(userId);
  

  useEffect(() => {
    dispatch(getUserData(userId));
  }, [dispatch,userId]);
  const  userData  = useSelector((state) => state.data.userData);
  // console.log(activeClass);
  
 
  
  // const  profileImage  = useSelector((state) => state.data.profileImage);
  // console.log(profileImage);
  
  



  return (
    <>
      {/* profile */}
      <div className="row">
        <div className="pro-content">
          <div className="home-pic-div">
            <div className="home-pics">
              <img src={cover} className="home-cover-pic" alt="coverpic" />
              {userData.image ?<img
                src={`http://localhost:5001/${userData.image}`}
                className="home-pro-pic2"
                alt=""
              /> : <img src={dummy} className="home-pro-pic" alt="" /> }
              
              
            </div>
          </div>
          <div className="home-menu-div">
            <div className="home-name-pro">
              <h5>{username}</h5>
              {/* <p className="chat-preview-text">Lorem Ipsum Dolor</p> */}
            </div>
            <hr />
            <div className="home-pro-menu">
              <ul className="nav flex-column">
                <li className={`nav-item menu-list ${activeClassProfile}`}>
                  <i className="bi bi-person-fill"></i>
                  <Link className="nav-link active" to="/user/profile">
                    Profile
                  </Link>
                </li>
                <li className={`nav-item menu-list ${activeClassFriends}`}>
                  <i className="bi bi-people-fill"></i>
                  <Link className="nav-link" to="/user/friends">
                    Friends
                  </Link>
                </li>
                <li className={`nav-item menu-list ${activeClassSaved}`}>
                  <i className="bi bi-stickies-fill"></i>
                  <Link className="nav-link" to="/user/saved_posts">
                    Saved posts
                  </Link>
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
