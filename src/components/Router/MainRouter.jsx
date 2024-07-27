import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Layouts/LandingPage/LandingPage'
import HomePage from '../Layouts/HomePage/HomePage'
import RegisterPage from '../Layouts/RegisterPage/RegisterPage'
import LoginPage from '../Layouts/LoginPage/LoginPage'
import PasswordRecovery from '../Layouts/PasswordRecovery/PasswordRecovery'
import OtpVerify from '../Layouts/OtpVerify/OtpVerify'
import SetPasswordPage from '../Layouts/SetPasswordPage/SetPasswordPage'
import UserProfile from '../Layouts/UserProfile/UserProfile'

function MainRouter() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/user/register' element={<RegisterPage />} />
        <Route path='/user/login' element={<LoginPage />} />
        <Route path='/password_recovery' element={<PasswordRecovery />} />
        <Route path='/otp_verify' element={<OtpVerify />} />
        <Route path='/set_password' element={<SetPasswordPage />} />
        <Route path='/user/profile' element={<UserProfile />} />
    </Routes>
  )
}

export default MainRouter
