import React from 'react'
import MainPagesHeader from '../../../Common/MainPagesHeader/MainPagesHeader';
import SettingsSidebar from '../../../Common/SettingsSidebar/SettingsSidebar';

function PrivacySettings() {
  return (
    <>
      <div className="container-fluid home-layout-div">
        <MainPagesHeader />
        <div className="row row-head">
          <div className="col-md-3">
            <SettingsSidebar />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="privacy-settings-contents-div">
                <div className="privacy-settings-head">
                  <p>Settings</p>
                  <p>/</p>
                  <h3>PRIVACY</h3>
                </div>
                <div className="privacy-settings-contents">
                  <div className="privacy-settings-contents-group">
                    <div className="privacy-settings-contents-single">
                      <div className="privacy-set-text">
                        <p>Profile Visibility</p>
                        <p>Manage who can see your profile</p>
                      </div>
                      <div className="privacy-set-select">
                        <select
                          id="profile-visible"
                          className=""
                          //   {...register("gender", {
                          //     required: "Gender is required",
                          //   })}
                        >
                          <option value="everyone" selected>
                            Everyone
                          </option>
                          <option value="myContacts">My Contacts</option>
                        </select>
                      </div>
                    </div>
                    <div className="privacy-settings-contents-single">
                      <div className="privacy-set-text">
                        <p>Post Visibility</p>
                        <p>Manage who can see your posts</p>
                      </div>
                      <div className="privacy-set-select">
                        <select
                          id="post-visible"
                          className=""
                          //   {...register("gender", {
                          //     required: "Gender is required",
                          //   })}
                        >
                          <option value="everyone" selected>
                            Everyone
                          </option>
                          <option value="myContacts">My Contacts</option>
                        </select>
                      </div>
                    </div>
                    <div className="privacy-settings-contents-single">
                      <div className="privacy-set-text">
                        <p>Blocked Users</p>
                        <p>See and manage blocked users</p>
                      </div>
                      <div className="privacy-blocked-div">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right-square"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="privacy-settings-contents-single">
                      <div className="privacy-set-text">
                        <p>Delete Account</p>
                        <p>The account and data will be deleted from MediaMATE</p>
                      </div>
                      <div className="privacy-set-btn">
                        <button className="btn btn-outline-danger">Delete Account</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacySettings
