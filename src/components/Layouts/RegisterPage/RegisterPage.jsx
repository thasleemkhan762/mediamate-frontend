import React from 'react'
import './RegisterPage.css'
// import axios from 'axios'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { signupUser } from "../../../Redux/Reducer/GetDataSlice"
import { toast } from "react-toastify";

function RegisterPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const [ name, setName ] = useState()
  // const [ email, setEmail ] = useState()
  // const [ password, setPassword ] = useState()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   axios.post
  // }
  const onSubmit = async(data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    try {
      await dispatch(signupUser(formData));
      toast.success("Contact created successfully!");
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
              <div className="FormContent">
                <div>
                  <h2 className='head'>Get Started</h2>
                </div>
                <div>
                  <h4 className='sub-text'>Already have an account ? <a className='login-redirect' href="/login">Login</a> </h4>
                </div>
                <div className="name_box">
                  <div className='input-box'>
                    <label className='input-label' htmlFor="firstName">
                      <h4 className='label-name'>Name</h4>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="inputBox name"
                      placeholder=""
                      autoComplete='off'
                      // onChange={e => setName(e.target.value)}
                      {...register("name", {
                        required: "Name is required",
                      })}
                    //   {...register("firstName", {
                    //     required: "First Name is required",
                    //   })}
                    />
                    <p className="error">{errors.name?.message}</p>
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
                  // onChange={e => setEmail(e.target.value)}
                  {...register("email", { required: "Email is required" })}
                />
                </div>
                <p className="error">{errors.email?.message}</p>

                <div className='input-box'>
                <label htmlFor="password">
                  <h4 className='label-name'>Password</h4>
                </label>
                <input
                  type="tel"
                  id="password"
                  className="inputBox"
                  placeholder=""
                  autoComplete='off'
                  // onChange={e => setPassword(e.target.value)}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                </div>
                <p className="error">{errors.password?.message}</p>
              </div>
              <div className="formSubmit">
                <button type='submit' className="btn signup-btn btn-primary">Signup
                  {/* {contactId ? "Save Changes" : "Submit"} */}
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
