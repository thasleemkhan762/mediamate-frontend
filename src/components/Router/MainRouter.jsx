import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Layouts/LandingPage/LandingPage'
import RegisterPage from '../Layouts/RegisterPage/RegisterPage'
import LoginPage from '../Layouts/LoginPage/LoginPage'
import PasswordRecovery from '../Layouts/PasswordRecovery/PasswordRecovery'
import OtpVerify from '../Layouts/OtpVerify/OtpVerify'
import SetPasswordPage from '../Layouts/SetPasswordPage/SetPasswordPage'

function MainRouter() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/password_recovery' element={<PasswordRecovery />} />
        <Route path='/otp_verify' element={<OtpVerify />} />
        <Route path='/set_password' element={<SetPasswordPage />} />
    </Routes>
  )
}

export default MainRouter
