import React from 'react'
import './PasswordRecovery.css'

function Passwordrecovery() {

 const noSubmit = (e) =>{
    e.preventDefault();
    window.location.href = "/otp_verify";
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
          <form id="formSection"className='pass-form' noValidate>
              <div className="FormContent pass-content">
                <div>
                  <h2 className='head'>Password <br /> Recovery</h2>
                </div>
                
                <div className="name_box">
                  <div className='input-box'>
                    <label className='input-label' htmlFor="firstName">
                      <h4 className='label-name'>Email or Phone Number</h4>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="inputBox name"
                      placeholder=""
                    //   {...register("firstName", {
                    //     required: "First Name is required",
                    //   })}
                    />
                    {/* <p className="error">{errors.firstName?.message}</p> */}
                  </div> 
                </div>
   


              </div>
              <div className="formSubmit">
                <a href="/otp_verify">
                <button onClick={noSubmit} className="btn pass-btn btn-primary">Get Otp
                  {/* {contactId ? "Save Changes" : "Submit"} */}
                </button></a>
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

export default Passwordrecovery
