import React from "react";
import "./LandingPage.css";
import fullimage from './fullimage.png'


function LandingPage() {
  return (
    <>
      <div className="container-fluid">
        <div>
          <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="brandname_box">
                <h2 className="brand_name_1" href="#">
                  Media
                </h2>
                <h2 className="brand_name_2">MATE</h2>
              </div>
              <div className="header_btns">
                <a href="/user/login">
                  <button className="btn btn-outline-primary mr-2 login">
                    Login
                  </button>
                </a>
                <a href="/user/register">
                  <button className="btn btn-primary register">Register</button>
                </a>
              </div>
            </nav>
          </header>
        </div>
        <div className="row">
          <div className="col-lg-6 content">
            <div className="title-box">
              <h1 className="title">SHARE MOMENTS,</h1>
              <h1 className="title">CONNECT LIVES.</h1>
            </div>
            <div className="para-box">
              <p className="paragraph">
                Join our lively community where you can post stunning photos and{" "}
              </p>
              <p className="paragraph">videos, chat with friends, </p>
              <p className="paragraph">
                and discover exciting new content. Register now to be a part of
                the{" "}
              </p>
              <p className="paragraph">conversation and stay connected! </p>
            </div>
            <div className="btn-box">
              <a href="/register">
                <button className="btn btn-primary register-alt">
                  Get Started
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img className="lan-image" src={fullimage} alt={""} />
            </div>
          </div>
        </div>
        <div className="background"></div>
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default LandingPage;
