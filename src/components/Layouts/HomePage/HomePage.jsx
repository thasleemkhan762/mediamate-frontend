import React, { useMemo, useState } from "react";
import "./HomePage.css";
import {  Outlet } from 'react-router-dom';
import CreatePostForm from "../CreatePostForm/CreatePostForm";
import MainPagesHeader from "../../Common/MainPagesHeader/MainPagesHeader";
import MainSidebar from "../../Common/MainSidebar/MainSidebar";
// import CreatePost from "../CreatePost/CreatePost";
// import HomeExploreButtons from "../HomeExploreButtons/HomeExploreButtons";
// import Posts from "../Posts/Posts";
import HomePageFriendBox from "../HomePageFriendBox/HomePageFriendBox";
import FriendSuggestion from "../FriendSuggestion/FriendSuggestion";
import HomeSupport from "../HomeSupport/HomeSupport";
import Profiletry from "../../trying/Profiletry";
import Hometry from "../../trying/Hometry";

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  // Memoize the sidebar and right components to prevent unnecessary re-renders
  const MemoizedSidebar = useMemo(() => <MainSidebar />, []);
  const MemoizedRightColumn = useMemo(() => (
    <>
      <HomePageFriendBox />
      <FriendSuggestion />
      <HomeSupport />
    </>
  ), []);

  return (
    <>
      <div className="container-fluid home-layout-div">
        <MainPagesHeader />

        <div className="row home-contents">
          <div className="col-md-3">{MemoizedSidebar}</div>

          <div className="col-md-6">
            {/* <CreatePost openModal={() => setModalOpen(true)} />
            <HomeExploreButtons />
            <div className="post-main row">
            <Posts />
            </div> */}
             <Outlet />
          </div>

          <div className="col-md-3">{MemoizedRightColumn}</div>
        </div>
        {modalOpen && <CreatePostForm closeModal={() => setModalOpen(false)} />}
      </div>
    </>
  );
}

export default HomePage;
