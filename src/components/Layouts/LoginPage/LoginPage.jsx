import React, { useEffect } from 'react'
import './LoginPage.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
import { userLogin } from '../../../Redux/Reducer/UserSlice'
import { GoogleOAuthProvider , GoogleLogin } from "@react-oauth/google";
import { gapi } from "gapi-script";

const clientId = "1077803592931-20lidvav85t67roje2rbf1jcbvlsaibi.apps.googleusercontent.com";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(userLogin({
        email: data.email,
        password: data.password,
      }));
      if (!response.error) {
        navigate('/homepage');
      }
      else{
        Cookies.remove('userToken');
        navigate('/user/login');
      }

    } catch (error) {
      console.error("Error fetching User Info:", error);
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      })
    };
    gapi.load("client:auth2", start);
  });

  const onSuccess = (res) => {
    console.log("Login success, current user: ",res.profileObj);
  };
  
  const onFailure = (res) => {
    console.log("Login Failed, res: ", res);
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
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="FormContent">
                  <div>
                    <h2 className="head">Login</h2>
                  </div>
                  <div>
                    <h4 className="sub-text">
                      Don't you have an account ?{" "}
                      <a className="login-redirect" href="/register">
                        Register
                      </a>{" "}
                    </h4>
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
                      {...register("email", {
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: "Invalid email format",
                        },
                        required: "Email is required",
                      })}
                    />
                  </div>
                  {/* <p className="error">{errors.email?.message}</p> */}

                  <div className="input-box">
                    <label htmlFor="password">
                      <h4 className="label-name">Password</h4>
                    </label>
                    <input
                      type="tel"
                      id="password"
                      className="inputBox"
                      autoComplete="off"
                      placeholder=""
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
                <div className="forget-link">
                  <h4 className="sub-text">
                    <a className="login-redirect" href="/password_recovery">
                      Forgot Password
                    </a>
                  </h4>
                </div>
                <div className="formSubmit">
                  <button type="submit" className="btn signup-btn btn-primary">
                    Login
                    {/* {contactId ? "Save Changes" : "Submit"} */}
                  </button>
                </div>
                <div className="condition-choose">
                  <hr />
                  <p>or login with</p>
                  <hr />
                </div>
                <div className="google-box">
                  {/* <img className='google-logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo"></img> */}
                  <GoogleOAuthProvider clientId={clientId}>
                  <GoogleLogin 
                       clientId={clientId} 
                       buttonText="Login with Google"
                       onSuccess={onSuccess}
                       onFailure={onFailure}
                       cookiePolicy={'single_host_origin'}
                       isSignedIn={true}
                  />
                    </GoogleOAuthProvider>
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

export default LoginPage
