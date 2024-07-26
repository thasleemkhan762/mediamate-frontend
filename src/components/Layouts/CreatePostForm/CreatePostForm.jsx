import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import "./CreatePostForm.css";
import defaultImg from "./create-post-default.jpg";

function CreatePostForm({ contactId }) {
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
                    <label htmlFor="image">
                      <h4>Add File here</h4>
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
                      !contactId && <div className="defaultImage">
                        <img src={defaultImg} alt="hhh" />
                      </div>
                    )}
                    <label htmlFor="image" className="addImage btn btn-outline-primary">
                      {contactId ? "Change" : "Add"}
                    </label>
                    <p className="error">{errors.image?.message}</p>
                  </div>
                </div>
              )}
            />
            <div className="desc-box">
              <div className='create-description-div'>
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
            <button className='btn btn-outline'>Preview Post</button>
            <button className="btn add btn-primary" type="submit">
              {contactId ? "Save Changes" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatePostForm
