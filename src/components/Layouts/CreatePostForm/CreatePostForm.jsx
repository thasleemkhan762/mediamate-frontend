import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import "./CreatePostForm.css";
import defaultImg from "./create-post-default.jpg";
import PostPreview from '../PostPreview/PostPreview';
import { useDispatch, useSelector} from 'react-redux';
import { createPost } from '../../../Redux/Reducer/PostSlice';
import { toast } from 'react-toastify';

function CreatePostForm({ closeModal }) {
  const { register, handleSubmit, watch, control, formState: { errors },
} = useForm();
const [previewModalOpen, setPreviewModalOpen] = useState(false);
const [imagePreview, setImagePreview] = useState(null);
const watchedImage = watch("image");
const dispatch = useDispatch()


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
  const userEmail = useSelector((state) => state.data.email);
  console.log("useremail:", userEmail);


  const onsubmit = async (data) =>{
    console.log("Form data:", data); // Log form data before creating FormData
    const formData = new FormData();
    
    formData.append('image', data.image[0]);
    formData.append("description", data.description);
    formData.append('email', userEmail);

    console.log("FormData content before dispatch:");
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      console.log("formdata is :",formData);
      await dispatch(createPost(formData)).unwrap();
      toast.success("post added successfully");
      closeModal();
    } catch (error) {
      console.error("Error creating contact:", error);
      toast.error("Error creating contact. Please try again.");
    }
  }

  return (
    <>
      <div className="create-post-form-div">
        <form className="create-post-form" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-header-text-icon">
            <h4 className="form-header-text">Add File here</h4>
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
          </div>
          <div className="FormContent-create">
            <Controller
              name="image"
              control={control}
              render={({ field: { onChange } }) => (
                <div className="imageInput">
                  <div className="avatar">
                    <label className="avatar-label" htmlFor="image"></label>
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
                    <label
                      htmlFor="image"
                      className="addImage btn btn-outline-primary"
                    >
                      Add
                    </label>
                    {/* <p className="error">{errors.image?.message}</p> */}
                  </div>
                </div>
              )}
            />
            <div className="desc-box">
              <div className="create-description-div">
                <label htmlFor="description">
                  <h4>Description</h4>
                </label>
                <input
                  type="text"
                  id="description"
                  className="inputBox"
                  placeholder="Enter Description"
                  {...register("description", {
                    required: "description is required",
                  })}
                />
                <p className="error">{errors.description?.message}</p>
              </div>
            </div>
          </div>
          <div className="formSubmit create-post-preview">
            <div
              onClick={() => setPreviewModalOpen(true)}
              className="btn btn-outline-secondary"
            >
              Preview Post
            </div>
            <button className="btn add btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        {previewModalOpen && (
          <PostPreview closePreviewModal={() => setPreviewModalOpen(false)} />
        )}
        {/* overlay div */}
        <div className="overlay-dark" onClick={closeModal}></div>
      </div>
    </>
  );
}

export default CreatePostForm
