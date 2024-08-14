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
const [filePreview, setFilePreview] = useState(null);
const watchedFile = watch("file");
const dispatch = useDispatch();


useEffect(() => {
  if (watchedFile) {
    const file = watchedFile[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    
    if (file instanceof File) {
      reader.readAsDataURL(file);
    }
  } else {
    setFilePreview(null);
  }
}, [watchedFile]);

  const username = useSelector((state) => state.data.username);
  // console.log("username:", username);
  const userId = useSelector((state) => state.data.userId);
  // console.log("userId:", userId);
  // const data = useSelector((state) => state.data.userId);


  const onsubmit = async (data) =>{
    console.log("Form data:", data); // Log form data before creating FormData
    const formData = new FormData();
    
    const file = data.file[0];
    formData.append('file', file);
    formData.append("description", data.description);
    formData.append('userId', userId);
    formData.append('username', username);

    const fileType = file.type.startsWith('image/') ? 'image' : 'video';
    formData.append('fileType', fileType);


    try {
      await dispatch(createPost(formData)).unwrap();
      toast.success("post added successfully");
      closeModal();
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Error creating post. Please try again.");
    }
  }
  const post = useSelector((state)=> state.post);
  // console.log(post);
  

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
              name="file"
              control={control}
              render={({ field: { onChange } }) => (
                <div className="imageInput">
                  <div className="avatar">
                    <label className="avatar-label" htmlFor="image"></label>
                    <input
                      type="file"
                      id="file"
                      accept="image/*,video/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        onChange(file);
                      }}
                      {...register("file", {
                        required: "file is required",
                      })}
                      hidden
                    />
                    {filePreview ? (
                      filePreview.startsWith('data:image/') ? (
                        <img
                          src={filePreview}
                          alt="Preview"
                          className="create-FilePreview"
                        />
                      ) : (
                        <video controls className="create-FilePreview">
                          <source src={filePreview} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      !filePreview && (
                        <div className="defaultFile">
                          <img src={defaultImg} alt="Default" />
                        </div>
                      )
                    )}
                    <label
                      htmlFor="file"
                      className="addImage btn btn-outline-primary"
                    >
                      Add
                    </label>
                    {/* <p className="error">{errors.image?.message}</p> */}
                  </div>
                </div>
              )}
            />
            {/* <div className="desc-box">
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
            </div> */}
            <div className="desc-box">
              <div className="create-description-div">
                <label htmlFor="description">
                  <h4>Description</h4>
                </label>
                <textarea
                  id="description"
                  rows={5}
                  className="inputBox-textarea"
                  placeholder="Enter Description..."
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
