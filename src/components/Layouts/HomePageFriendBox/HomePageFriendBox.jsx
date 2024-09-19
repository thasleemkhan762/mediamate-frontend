import React from 'react'
import one from "../../../dummyImages/one.png"
import { Link } from 'react-router-dom'

function HomePageFriendBox() {
  return (
    <>
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
                    <Link to="/user/friends"><button className="btn btn-primary">See more</button></Link>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default HomePageFriendBox
