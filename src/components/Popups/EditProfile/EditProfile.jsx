import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import "./EditProfile.css"
import ImagePreview from "./profile-pic.png"

function EditProfile({ closeModal }) {
    const { register, control, formState: { errors }, } = useForm();
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
            <form id="formSection" noValidate>
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
                            required: "Image is required",
                          })}
                          hidden
                        />
                        {
                          <img
                            src={ImagePreview}
                            alt="Preview"
                            className="ImagePreview"
                          />
                        }
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
                  <div>
                    <label htmlFor="firstName">
                      <h4>First Name:</h4>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="edit-inputBox name"
                      placeholder="Enter First Name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    <p className="error">{errors.firstName?.message}</p>
                  </div>
                  <div>
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
                  </div>
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
                  {...register("dob", {
                    required: "Date of Birth is required",
                  })}
                />
                <p className="error">{errors.dob?.message}</p>
                <label htmlFor="address">
                  <h4>Address:</h4>
                </label>
                <input
                  type="text"
                  id="address"
                  className="edit-inputBox "
                  placeholder="Enter address"
                  {...register("address", {
                    required: "address is required",
                  })}
                />
                <p className="error">{errors.address?.message}</p>
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
