import React from 'react'
import custom from "./custom.png"
import "./pr.cs.pp.css"
import { Link } from 'react-router-dom';

function ProfileCustomPopup({closeModal}) {
  return (
    <>
      <div className="custom-popup">
        <svg
          onClick={closeModal}
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          width="25"
          height="25"
          fill="red"
          className="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
        <img src={custom} alt="custome" />
        <div className="custome-popup-contents">
          <h5>Want to customize your pages. Buy premium today!</h5>
          <Link to="/user/premium">
          <button className="btn btn-primary">Buy Premium</button></Link>
        </div>
      </div>
      <div onClick={closeModal} className="edit-overlay"></div>
    </>
  );
}

export default ProfileCustomPopup
