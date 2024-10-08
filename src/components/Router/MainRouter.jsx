import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Layouts/LandingPage/LandingPage";
import HomePage from "../Layouts/HomePage/HomePage";
import RegisterPage from "../Layouts/RegisterPage/RegisterPage";
import LoginPage from "../Layouts/LoginPage/LoginPage";
import PasswordRecovery from "../Layouts/PasswordRecovery/PasswordRecovery";
import OtpVerify from "../Layouts/OtpVerify/OtpVerify";
import SetPasswordPage from "../Layouts/SetPasswordPage/SetPasswordPage";
import UserProfile from "../Layouts/UserProfile/UserProfile";
import UserFriends from "../Layouts/UserFriends/UserFriends";
import SavedPosts from "../Layouts/SavedPosts/SavedPosts";
import SearchResultPage from "../Layouts/SearchResultPage/SearchResultPage";
import AccountSettings from "../Layouts/SettingsPages/AccountSettings/AccountSettings";
import NotificationSettings from "../Layouts/SettingsPages/NotificationSettings/NotificationSettings";
import PrivacySettings from "../Layouts/SettingsPages/PrivacySettings/PrivacySettings";
import SupportSettings from "../Layouts/SettingsPages/SupportSettings/SupportSettings";
import UserChat from "../Layouts/UserChat/UserChat";
import PremiumPlans from "../Layouts/PremiumPlans/PremiumPlans";
import PageNotFound from "../Common/PageNotFound/PageNotFound";
// import Profiletry from "../trying/Profiletry";
// import Hometry from "../trying/Hometry";
import { GoogleOAuthProvider } from '@react-oauth/google';

function MainRouter() {

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="1077803592931-pgssfctnlancc652n38ma1d483jfep2b.apps.googleusercontent.com">
        <LoginPage/>
      </GoogleOAuthProvider>
    )
  }
  const GoogleAuthWrapperforRegister = () => {
    return (
      <GoogleOAuthProvider clientId="1077803592931-pgssfctnlancc652n38ma1d483jfep2b.apps.googleusercontent.com">
        <RegisterPage/>
      </GoogleOAuthProvider>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/homepage" element={<HomePage />}>
        {/* <Route path="profiletry" element={<Profiletry />} /> */}
        {/* <Route path="hometry" element={<Hometry />} /> */}
      </Route>

      <Route path="/user/register" element={<GoogleAuthWrapperforRegister />} />
      <Route path="/user/login" element={<GoogleAuthWrapper />} />
      <Route path="/password_recovery" element={<PasswordRecovery />} />
      <Route path="/otp_verify" element={<OtpVerify />} />
      <Route path="/set_password" element={<SetPasswordPage />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/friends" element={<UserFriends />} />
      <Route path="/user/saved_posts" element={<SavedPosts />} />
      <Route path="/user/search_result" element={<SearchResultPage />} />
      <Route path="/user/settings" element={<AccountSettings />} />
      <Route path="/user/notification_settings" element={<NotificationSettings />} />
      <Route path="/user/privacy_settings" element={<PrivacySettings />} />
      <Route path="/user/support_settings" element={<SupportSettings />} />
      <Route path="/user/chat" element={<UserChat />} />
      <Route path="/user/premium" element={<PremiumPlans />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default MainRouter;
