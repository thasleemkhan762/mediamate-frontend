import React from 'react'
import './RegisterPage.css'
// import axios from 'axios'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userRegister } from "../../../Redux/Reducer/UserSlice";
import { toast } from "react-toastify";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const error = useSelector(state => state.data.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    
    try {
     const response =  await dispatch(userRegister({
        username: data.username,
        email: data.email,
        password: data.password,
      }));
      console.log("response",response);
      // toast.success("Contact created successfully!");
      if (!response.error) {
        navigate('/otp_verify', { state:{ email: data.email } });
        toast.success("Otp has been sent to your email");
    } else {
        navigate('/user/register');
    }
    } catch (error) {
      console.error("Error creating contact")
      toast.error("error creating contact");
    }
  };
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
          <form id="formSection" noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className="reg-FormContent">
                <div>
                  <h2 className='head'>Get Started</h2>
                </div>
                <div>
                  <h4 className='sub-text'>Already have an account ? <a className='login-redirect' href="/user/login">Login</a> </h4>
                </div>
                <div className="name_box">
                  <div className='input-box'>
                    <label className='input-label' htmlFor="username">
                      <h4 className='label-name'>Name</h4>
                    </label>
                    <input
                      type="username"
                      id="username"
                      className="inputBox name"
                      placeholder=""
                      autoComplete='off'
                      {...register("username", {
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: "Invalid username format",
                        },
                        required: "username is required",
                    })}
                    
                    />
                    <p className="error">{errors.username?.message}</p>
                  </div>
                 
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
                  autoComplete='off'
                  {...register("email", {
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Invalid email format",
                    },
                    required: "Email is required",
                })}
                />
                </div>
                <p className="error">{errors.email?.message}</p>

                <div className='input-box'>
                <label htmlFor="password">
                  <h4 className='label-name'>Password</h4>
                </label>
                <input
                  type="text"
                  id="password"
                  className="inputBox"
                  placeholder=""
                  autoComplete='off'
                  {...register("password", {
                    required: {
                        value: true,
                        message: "Password is required",
                    }
                })}
                />
                </div>
                <p className="error">{errors.password?.message}</p>
                {error && <p className="error">{error}</p>}
              </div>
              <div className="formSubmit">
                <button type='submit' className="btn reg-signup-btn btn-primary">Signup
                </button>
              </div>
              <div className='condition-choose'>
                <hr />
                <p>or signup with</p>
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

export default RegisterPage
