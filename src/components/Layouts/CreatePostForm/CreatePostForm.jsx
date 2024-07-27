import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import "./CreatePostForm.css";
import defaultImg from "./create-post-default.jpg";

function CreatePostForm({ contactId, closeModal }) {
  const { register, watch, control, formState: { errors }, } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const watchedImage = watch("image");

  useEffect(() => {
    if (watchedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      if (watchedImage[0] instanceof File) {
        reader.readAsDataURL(watchedImage[0]);
      }
    } else {
      setImagePreview(null);
    }
  }, [watchedImage]);

  return (
    <>
      <div className="create-post-form-div">
        <form className="create-post-form">
          <div className="FormContent-create">
            <Controller
              name="image"
              control={control}
              render={({ field: { onChange } }) => (
                <div className="imageInput">
                  <div className="avatar">
                    <label className='avatar-label' htmlFor="image">
                      <div className="form-header-text-icon">
                        <h4 className='form-header-text'>Add File here</h4>
                        <svg onClick={closeModal}
                          xmlns="http://www.w3.org/2000/svg"
                          style={{cursor:"pointer"}}
                          width="25"
                          height="25"
                          fill="red"
                          className="bi bi-x-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="image"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        onChange(file);
                      }}
                      {...register("image", {
                        required: !contactId && "Image is required",
                      })}
                      hidden
                    />
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="ImagePreview"
                      />
                    ) : (
                      !contactId && (
                        <div className="defaultImage">
                          <img src={defaultImg} alt="hhh" />
                        </div>
                      )
                    )}
                    <label
                      htmlFor="image"
                      className="addImage btn btn-outline-primary"
                    >
                      {contactId ? "Change" : "Add"}
                    </label>
                    <p className="error">{errors.image?.message}</p>
                  </div>
                </div>
              )}
            />
            <div className="desc-box">
              <div className="create-description-div">
                <label htmlFor="description">
                  <h4>Description</h4>
                </label>
                {/* <input
                      type="text"
                      id="description"
                      className="inputBox description"
                      placeholder="Enter description"
                      {...register("description", {
                        required: "description Name is required",
                      })}
                    /> */}
                <textarea
                  id="description"
                  className="textarea"
                  rows={6}
                  placeholder="Enter description..."
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                ></textarea>
                <p className="error">{errors.description?.message}</p>
              </div>
            </div>
          </div>
          <div className="formSubmit create-post-preview">
            <button className="btn btn-outline">Preview Post</button>
            <button className="btn add btn-primary" type="submit">
              {contactId ? "Save Changes" : "Submit"}
            </button>
          </div>
        </form>
        {/* overlay div */}
        <div className="overlay-dark" onClick={closeModal}></div>
      </div>
    </>
  );
}

export default CreatePostForm
