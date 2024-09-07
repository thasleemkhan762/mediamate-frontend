import React from 'react'
import './RegisterPage.css'
// import axios from 'axios'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setUser, userRegister } from "../../../Redux/Reducer/UserSlice";
import { toast } from "react-toastify";
import { useGoogleLogin } from '@react-oauth/google';
import { googleSignupAuth } from '../LoginPage/api'

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const error = useSelector(state => state.data.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if(authResult['code']){
        const result = await googleSignupAuth(authResult['code']);
        // console.log(result);
        
        const { username, googleImage } = result.user;
        const userToken = result.token;
        const userId = result.user._id;
        console.log('result.data.user---',  result.user);
        console.log(userToken);

        dispatch(setUser({ userId, username, userToken, googleImage }));        
        navigate('/homepage');
        
      }
      
    } catch (error) {
      toast.error("Account alreday exists. Try login")
      console.error('Error while requesting google code : ', error);
    }
  }

  const googleSignup = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  });


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

  const handleGoogleLoginClick = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    googleSignup();
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
            <div className="col-md-5 form-width">
              <form
                id="formSection"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="reg-FormContent">
                  <div>
                    <h2 className="head">Get Started</h2>
                  </div>
                  <div>
                    <h4 className="sub-text">
                      Already have an account ?{" "}
                      <a className="login-redirect" href="/user/login">
                        Login
                      </a>{" "}
                    </h4>
                  </div>
                  <div className="name_box">
                    <div className="input-box">
                      <label className="input-label" htmlFor="username">
                        <h4 className="label-name">Name</h4>
                      </label>
                      <input
                        type="username"
                        id="username"
                        className="inputBox name"
                        placeholder=""
                        autoComplete="off"
                        {...register("username", {
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Invalid username format",
                          },
                          required: "username is required",
                        })}
                      />
                      <p className="error">{errors.username?.message}</p>
                    </div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="email">
                      <h4 className="label-name">Email</h4>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="inputBox"
                      placeholder=""
                      autoComplete="off"
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

                  <div className="input-box">
                    <label htmlFor="password">
                      <h4 className="label-name">Password</h4>
                    </label>
                    <input
                      type="text"
                      id="password"
                      className="inputBox"
                      placeholder=""
                      autoComplete="off"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                      })}
                    />
                  </div>
                  <p className="error">{errors.password?.message}</p>
                  {error && <p className="error">{error}</p>}
                </div>
                <div className="formSubmit">
                  <button
                    type="submit"
                    className="btn reg-signup-btn btn-primary"
                  >
                    Signup
                  </button>
                </div>
                <div className="condition-choose">
                  <hr />
                  <p>or signup with</p>
                  <hr />
                </div>
                <div className="google-box">
                <button
                    type='button'
                    className="gsi-material-button"
                    onClick={handleGoogleLoginClick} 
                  >
                    <div className="gsi-material-button-state"></div>
                    <div className="gsi-material-button-content-wrapper">
                      <div className="gsi-material-button-icon">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          style={{ display: "block" }}
                        >
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          ></path>
                          <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                      </div>
                      <span className="gsi-material-button-contents">
                        Signup with Google
                      </span>
                      <span style={{ display: "none" }}>
                        Signup with Google
                      </span>
                    </div>
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

export default RegisterPage
