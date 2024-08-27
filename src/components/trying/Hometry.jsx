import React, { useState } from 'react'
import CreatePost from "../Layouts/CreatePost/CreatePost";
import HomeExploreButtons from "../Layouts/HomeExploreButtons/HomeExploreButtons";
import Posts from "../Layouts/Posts/Posts";

function Hometry() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <CreatePost openModal={() => setModalOpen(true)} />
            <HomeExploreButtons />
            <div className="post-main row">
            <Posts />
            </div>
    </>
  )
}

export default Hometry
