import React from 'react'
import MainPagesHeader from '../../../Common/MainPagesHeader/MainPagesHeader'
import SettingsSidebar from '../../../Common/SettingsSidebar/SettingsSidebar'

function SupportSettings() {
  return (
    <>
      <div className="container-fluid home-layout-div">
        <MainPagesHeader />
        <div className="row">
          <div className="col-md-3">
            <SettingsSidebar />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="support-settings-contents-div">
                <div className="support-settings-head">
                  <p>Settings</p>
                  <p>/</p>
                  <h3>SUPPORT</h3>
                </div>
                <div className="support-settings-contents">
                  <div className="support-settings-contents-group">
                    <div className="support-settings-contents-single">
                      <div className="support-set-text">
                        <p>
                          If you have any questions or doubts, please submit
                          below
                        </p>
                      </div>
                      <div className="support-set-textarea">
                        <textarea
                          id="support-query"
                          rows={5}
                          className="inputBox-textarea"
                          placeholder="Enter query..."
                        //   {...register("query", {
                        //     required: "Query is required",
                        //   })}
                        />
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

export default SupportSettings
