import React from 'react'
import './LoginPage.css'

function LoginPage() {
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
              <div className="FormContent">
                <div>
                  <h2 className='head'>Login</h2>
                </div>
                <div>
                  <h4 className='sub-text'>Don't you have an account ? <a className='login-redirect' href="/register">Register</a> </h4>
                </div>


                <div className='input-box'>
                <label htmlFor="email">
                  <h4 className='label-name'>Email</h4>
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

                <div className='input-box'>
                <label htmlFor="password">
                  <h4 className='label-name'>Password</h4>
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
              <div className='forget-link'>
              <h4 className='sub-text'>
              <a className='login-redirect' href="/password_recovery">Forgot Password</a>
              </h4>
              </div>
              <div className="formSubmit">
                <button className="btn signup-btn btn-primary">Login
                  {/* {contactId ? "Save Changes" : "Submit"} */}
                </button>
              </div>
              <div className='condition-choose'>
                <hr />
                <p>or login with</p>
                <hr />
              </div>
              <div className='google-box'>
              <img className='google-logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo"></img>

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

export default LoginPage
