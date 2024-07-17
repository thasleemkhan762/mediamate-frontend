import React from 'react'
import './SetPasswordPage.css'

function SetPasswordPage() {
  return (
    <>
      <div className="container-fluid">
        <div>
          <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className='header-link' href="/">
                <div className="brandname_box">
                  <h2 className="brand_name_1">Media</h2>
                  <h2 className="brand_name_2">MATE</h2>
                </div>
              </a>
            </nav>
          </header>
        </div>
        <div className="row">
          <div className="col-lg-6 reg-content">
            <div className="col-md-5 form-width">
              <form id="formSection" noValidate>
                <div className="FormContent">
                  <div className="set-head">
                    <h2 className="head">
                      Set New <br /> Password
                    </h2>
                  </div>

                  <div className="input-box">
                    <label htmlFor="email">
                      <h4 className="label-name">New Password</h4>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="inputBox"
                      placeholder=""
                      //   {...register("email", { required: "Email is required" })}
                    />
                  </div>
                  {/* <p className="error">{errors.email?.message}</p> */}

                  <div className="input-box">
                    <label htmlFor="password">
                      <h4 className="label-name"> Confirm New Password</h4>
                    </label>
                    <input
                      type="tel"
                      id="password"
                      className="inputBox"
                      placeholder=""
                      //   {...register("phone", {
                      //     required: "Phone Number is required",
                      //   })}
                    />
                  </div>
                  {/* <p className="error">{errors.phone?.message}</p> */}
                </div>
                <div className="forget-link"></div>
                <div className="formSubmit">
                  <button className="btn set-btn btn-primary">
                    Update Password
                    {/* {contactId ? "Save Changes" : "Submit"} */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="background"></div>
        <div className="overlay"></div>
      </div>
      <div className="background"></div>
      <div className="overlay"></div>
    </>
  );
}

export default SetPasswordPage
