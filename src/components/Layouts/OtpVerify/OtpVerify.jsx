import React from 'react'
import './OtpVerify.css'

function OtpVerify() {

  const noSubmit = (e) =>{
    e.preventDefault();
    window.location.href = "/set_password";
  }
  return (
    <>
      <div className="container-fluid">
      <div>
          <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="brandname_box">
                <h2 className="brand_name_1" href="#">
                  Media
                </h2>
                <h2 className="brand_name_2">MATE</h2>
              </div>
              
            </nav>
          </header>
        </div>
        <div className="row">
          <div className="col-lg-6 reg-content">
          <div className='col-md-5 form-width'>
          <form id="formSection" noValidate>
              <div className="FormContent verify-content">
                <div>
                  <h2 className='head'>Otp <br /> Verification</h2>
                </div>
               


                <div className='input-box'>
                <label htmlFor="email">
                  <h4 className='label-name'>Enter Otp</h4>
                </label>
                <input
                  type="otp"
                  id="otp"
                  className="inputBox"
                  placeholder=""
                  name="otp"
                  required
                  
                //   {...register("email", { required: "Email is required" })}
                />
                </div>
                {/* <p className="error">{errors.email?.message}</p> */}

              </div>
              <div className="formSubmit verify-btn-box">
                <a href="/set_password">
                  <button onClick={noSubmit} className='btn btn-primary verify-btn'>Verify Otp</button>
                </a>
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
  )
}

export default OtpVerify
