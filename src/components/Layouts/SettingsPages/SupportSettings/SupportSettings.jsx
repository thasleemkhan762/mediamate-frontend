import React, { useState } from 'react'
import MainPagesHeader from '../../../Common/MainPagesHeader/MainPagesHeader'
import defaultImg from "./create-post-default.jpg";
import SettingsSidebar from '../../../Common/SettingsSidebar/SettingsSidebar'
import { Controller, useForm } from 'react-hook-form';

function SupportSettings() {
    const { register, handleSubmit, watch, control, formState: { errors }} = useForm();
    const [imagePreview, setImagePreview] = useState(null);
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
                      <form>
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
                        <div className="support-action-btns">
                          <div className="support-attach-files">
                            <Controller
                              name="image"
                              control={control}
                              render={({ field: { onChange } }) => (
                                <div className="imageInput">
                                  <div className="avatar">
                                    <label
                                      className="avatar-label"
                                      htmlFor="image"
                                    ></label>
                                    <input
                                      type="file"
                                      id="image"
                                      onChange={(e) => {
                                        const file = e.target.files[0];
                                        onChange(file);
                                      }}
                                      {...register("image", {
                                        required: "Image is required",
                                      })}
                                      hidden
                                    />
                                    {imagePreview ? (
                                      <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="create-ImagePreview"
                                      />
                                    ) : (
                                      !imagePreview && (
                                        <div className="defaultImage">
                                          <img src={defaultImg} alt="hhh" />
                                        </div>
                                      )
                                    )}
                                    <div className="support-attach-file-btn">
                                    <label
                                      htmlFor="image"
                                      className=" btn btn-outline-primary"
                                    >
                                      Attach file
                                    </label>
                                    </div>
                                    <div className="support-submit-btn">
                                        <button type='submit' className='btn btn-primary'>Sumbit</button>
                                    </div>
                                    {/* <p className="error">{errors.image?.message}</p> */}
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                        </div>
                      </form>
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
