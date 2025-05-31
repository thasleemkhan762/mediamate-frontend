import React from 'react'
import MainPagesHeader from '../../../Common/MainPagesHeader/MainPagesHeader'
import SettingsSidebar from '../../../Common/SettingsSidebar/SettingsSidebar'
import './NotificationSettings.css'

function NotificationSettings() {
  return (
    <div className="container-fluid home-layout-div">
      <MainPagesHeader />
      <div className="row row-head">
        <div className="col-md-3">
          <SettingsSidebar />
        </div>
        <div className="col-md-9">
          <div className="settings-contents-div">
            <div className="settings-head">
              <p>Settings</p>
              <p>/</p>
              <h3>NOTIFICATION</h3>
            </div>
            <div className="settings-contents">
              <div className="settings-contents-group">
                <div className="notification-settings-contents-single">
                  <div className="notifi-set-text">
                    <p>Email Notifications</p>
                    <p>Manage Email Notifications Received</p>
                  </div>
                  <div className="notifi-set-input">
                    <label htmlFor="email-notify">
                      <input type="checkbox" id='email-notify'/>
                    </label>
                  </div>
                </div>
                <div className="notification-settings-contents-single">
                  <div className="notifi-set-text">
                    <p>In-App Notifications</p>
                  </div>
                  <div className="notifi-set-input">
                    <label htmlFor="in-app">
                      <input type="checkbox" id='in-app'/>
                    </label>
                  </div>
                </div>
                <div className="notification-settings-contents-single">
                  <div className="notifi-set-text">
                    <p>SMS Notifications</p>
                  </div>
                  <div className="notifi-set-input">
                    <label htmlFor="sms-notify">
                      <input type="checkbox" id='sms-notify'/>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings
