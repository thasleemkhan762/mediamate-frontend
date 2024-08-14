import React, { useState } from "react";
import "./HomePage.css";

import CreatePostForm from "../CreatePostForm/CreatePostForm";
import MainPagesHeader from "../../Common/MainPagesHeader/MainPagesHeader";
import MainSidebar from "../../Common/MainSidebar/MainSidebar";
import CreatePost from "../CreatePost/CreatePost";
import HomeExploreButtons from "../HomeExploreButtons/HomeExploreButtons";
import Posts from "../Posts/Posts";
import HomePageFriendBox from "../HomePageFriendBox/HomePageFriendBox";
import FriendSuggestion from "../FriendSuggestion/FriendSuggestion";
import HomeSupport from "../HomeSupport/HomeSupport";

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="container-fluid home-layout-div">

            <MainPagesHeader />

        <div className="row home-contents">

            <div className="col-md-3">
            <MainSidebar />
            </div>

          <div className="col-md-6">

            <CreatePost openModal={() => setModalOpen(true)} />
            <HomeExploreButtons />
            <div className="post-main row">
            <Posts />
            </div>

          </div>
          <div className="col-md-3">

            <HomePageFriendBox />
            <FriendSuggestion />
            <HomeSupport />

          </div>
        </div>
        {modalOpen && 
            <CreatePostForm closeModal={() => setModalOpen(false)} />}
      </div>
    </>
  );
}

export default HomePage;
