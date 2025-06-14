import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import "./EditProfile.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateAndSetUser, updateUser, /*setUserImage*/ } from '../../../Redux/Reducer/UserSlice';
import { toast } from "react-toastify";
import dummy from "../../../dummyImages/dummy.png"

function EditProfile({ closeModal }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const watchedImage = watch("image");

  const actionResult = useSelector((state) => state.data.userData);
  // console.log(actionResult);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = actionResult;
        if (userData) {
          const formattedDob = userData.dateOfBirth ? new Date(userData.dateOfBirth).toISOString().split('T')[0] : "";

          setValue("username", userData.username || "");
          setValue("email", userData.email || "");
          setValue("gender", userData.gender || "");
          setValue("dateOfBirth", formattedDob || "");
          setValue("place", userData.place || "");
          setValue("phone", userData.phone || "");
          setImagePreview(`https://mediamate-backend.onrender.com/${userData.image}`);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [ setValue, actionResult ]);

  useEffect(() => {
    if (watchedImage && watchedImage[0] instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(watchedImage[0]);
    } else if (actionResult && !watchedImage) {
      // Fallback to the initially set image preview if no new image is selected
      actionResult.image ? setImagePreview(`https://mediamate-backend.onrender.com/${actionResult.image}`) : setImagePreview(dummy)
      
    }
  }, [watchedImage, actionResult]);

  const onSubmit = async (data) => {
    
    const formData = new FormData();
  
  // Append the form data
  formData.append('username', data.username);
  formData.append('email', data.email);
  formData.append('gender', data.gender);
  formData.append('dateOfBirth', data.dateOfBirth);
  formData.append('place', data.place);
  formData.append('phone', data.phone);
  
  // Append the image file
  if (data.image[0]) {
    formData.append('file', data.image[0]); // 'file' should match the multer field name
    // const blobImage = URL.createObjectURL(data.image[0]);
    // dispatch(setUserImage(blobImage));
  }
    try {
      
     const respose = await dispatch(updateUser({ id: actionResult._id, data: formData }));
      if (!respose.error) {
        const username = respose.payload.username;
      dispatch(updateAndSetUser({  username })); 

      }
      closeModal();
      toast.success("User updated successfully!");
    } catch (error) {
      console.error("Error updating User:", error);
      toast.error("Error updating User. Please try again.");
    }
  };
  return (
    <>
      <div className="edit-AddForm">
        <div className="FormSection">
          <div className="edit-heading">
            <h2>{"Edit Profile"}</h2>
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
          <div className="formContainer">
            <form id="formSection" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="edit-FormContent">
                <Controller
                  name="image"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <div className="imageInput">
                      <div className="edit-avatar">
                        {/* <label htmlFor="image">
                          <h4>Image</h4>
                        </label> */}
                        <input
                          type="file"
                          id="image"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            onChange(file);
                          }}
                          {...register("image", {
                            // required: "Image is required!",
                          })}
                          hidden
                        />
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="imagePreview"
                            className="imagePreview"
                          />
                        )}
                        {/* <img className='imagePreview' src={`https://mediamate-backend.onrender.com/${actionResult.image}`} alt="imagePreview" /> */}
                        <label
                          htmlFor="image"
                          className="btn btn-outline-secondary edit-addImage"
                        >
                          {"Change"}
                        </label>
                        <p className="error">{errors.image?.message}</p>
                      </div>
                    </div>
                  )}
                />
                <div className="edit-name_box">
                  <div className='username-input'>
                    <label htmlFor="userName">
                      <h4>User Name:</h4>
                    </label>
                    <input
                      type="text"
                      id="userName"
                      className="edit-inputBox name"
                      placeholder="Enter First Name"
                      {...register("username", {
                        required: "User Name is required",
                      })}
                    />
                    <p className="error">{errors.username?.message}</p>
                  </div>
                  {/* <div>
                    <label htmlFor="lastName">
                      <h4>Last Name:</h4>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="edit-inputBox name"
                      placeholder="Enter Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    <p className="error">{errors.lastName?.message}</p>
                  </div> */}
                </div>
                <label htmlFor="email">
                  <h4>Email:</h4>
                </label>
                <input
                  type="email"
                  id="email"
                  className="edit-inputBox"
                  placeholder="Enter email"
                  {...register("email", { required: "Email is required" })}
                />
                <p className="error">{errors.email?.message}</p>
               
                <label htmlFor="gender">
                  <h4>Gender:</h4>
                </label>
                <select
                  id="gender"
                  className="edit-inputBox"
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <p className="error">{errors.gender?.message}</p>
                <label htmlFor="dob">
                  <h4>Date of Birth:</h4>
                </label>
                <input
                  type="date"
                  id="dob"
                  className="edit-inputBox"
                  {...register("dateOfBirth", {
                    required: "Date of Birth is required",
                  })}
                />
                <p className="error">{errors.dateOfBirth?.message}</p>
                <label htmlFor="place">
                  <h4>Place:</h4>
                </label>
                <input
                  type="text"
                  id="place"
                  className="edit-inputBox "
                  placeholder="Enter place"
                  {...register("place", {
                    required: "address is required",
                  })}
                />
                <p className="error">{errors.place?.message}</p>
                <label htmlFor="phone">
                  <h4>Phone Number:</h4>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="edit-inputBox"
                  placeholder="Enter phone number"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                />
                <p className="error">{errors.phone?.message}</p>
              </div>
              <div className="formSubmit">
                <button className="btn btn-primary add" type="submit">
                  {"Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div onClick={closeModal} className="edit-overlay"></div>
    </>
  );
}

export default EditProfile
