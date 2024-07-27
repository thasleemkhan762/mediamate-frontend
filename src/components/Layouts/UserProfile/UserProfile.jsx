import React from "react";
import MainPagesHeader from "../../Common/MainPagesHeader/MainPagesHeader";
import MainSidebar from "../../Common/MainSidebar/MainSidebar";
import Posts from "../Posts/Posts";
import Cover from "./cover.png";
import pic from "./profile-pic.png";
import "./UserProfile.css";
import HomePageFriendBox from "../HomePageFriendBox/HomePageFriendBox";
import FriendSuggestion from "../FriendSuggestion/FriendSuggestion";
import HomeSupport from "../HomeSupport/HomeSupport";

function UserProfile() {
  return (
    <>
      <div className="container-fluid home-layout-div">
        <MainPagesHeader />

        <div className="row home-contents">
        <div className="col-md-3">
          <MainSidebar />
          </div>

          <div className="col-md-6">
            <div className="row user-profile-row">
              <div className="profile-image-cover-div">
                  <div className="profile-cover">
                    <img src={Cover} alt="p" />
                  </div>
                  <div className="profile-pic">
                    <img src={pic} alt="c" />
                  </div>
                  <div className="profile-edit-cover-btn">
                    <button className="btn btn-outline-secondary pro-custom-btn">Edit cover photo</button>
                  </div>
              </div>
              <div className="profile-details">
                <div className="username-email">
                  <h4>Criss Math</h4>
                  <p>Crissmath7676@gmail.com</p>
                </div>
                <div className="cutomize-btns">
                  <button className="btn btn-outline-secondary ">Customize your Profile</button>
                  <button className="btn btn-outline-primary">Edit Profile</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9"></div>
            </div>
          </div>
          <div className="col-md-3">
          <HomePageFriendBox />
            <FriendSuggestion />
            <HomeSupport />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default UserProfile;
