import React from 'react'
import './LoginPage.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
import { userLogin } from '../../../Redux/Reducer/UserSlice'
import { setUser } from '../../../Redux/Reducer/UserSlice'


async function auth() {
  const response = await fetch('http://localhost:5001/request', {
    method:'post'
  });
  const data = await response.json();
  window.location.href = data.url;
}

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("email and opassword:", data);
    
    try {
      console.log("email and:", data.email);
      const response = await dispatch(userLogin({
        email: data.email,
        password: data.password,
      }));
      if (!response.error) {
        console.log(response.payload.userId);
        console.log(response.payload.userToken);
        const userId = response.payload.userId;
        const userToken = response.payload.userToken;
        dispatch(setUser({ userId, userToken }));        
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
                      <a className="login-redirect" href="/user/register">
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
                      type="password"
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
                  <button
                    className="gsi-material-button"
                    onClick={() => auth()}
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
                        Sign in with Google
                      </span>
                      <span style={{ display: "none" }}>
                        Sign in with Google
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

export default LoginPage
