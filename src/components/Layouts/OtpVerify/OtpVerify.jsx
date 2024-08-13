import React, { useEffect } from 'react'
import './OtpVerify.css'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyOtp } from '../../../Redux/Reducer/UserSlice';


function OtpVerify() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const error = useSelector(state => state.data.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;



  useEffect(() => {
    if (email) {
      setValue("email", email);
    }
  }, [email, setValue]);

  const onSubmit = async (data) =>{
    try {
      const response = await dispatch(verifyOtp({
          email: data.email,
          otp: data.otp,
      }));

      if (!response.error) {
          navigate('/user/login');
      } else {
          navigate('/otp_verify');
      }

  } catch (error) {
      console.error("Error fetching User Info:", error);
  }
    
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
          <form id="formSection" noValidate onClick={handleSubmit(onSubmit)}>
              <div className="FormContent verify-content">
                <div>
                  <h2 className='head'>Otp <br /> Verification</h2>
                </div>
               


                <div className='input-box'>
                <label htmlFor="email">
                  <h4 className='label-name'>Enter Otp</h4>
                </label>
                <input type="hidden" {...register("email", { required: true })} />
                <input
                  type="otp"
                  id="otp"
                  className="inputBox"
                  placeholder=""
                  {...register("otp", {
                    required: {
                        value: true,
                        message: "Otp is required",
                    }
                })}                  
                />
                </div>
                <p className="error">{errors.otp?.message}</p>
                {error && <p className="error">{error}</p>}

                

              </div>
              <div className="formSubmit verify-btn-box">
                <a href="/set_password">
                  <button type='submit' className='btn btn-primary verify-btn'>Verify Otp</button>
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
