import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Promocard from "../components/promocard";
import Card from "../components/card";
import Mentors from "../components/mentors";
import Categorysection from "../components/categorysection";
import Login from "../screen/loginflow/login";
import Register from "../screen/loginflow/register";
import Home from "../screen/Home/Home";
import Footer from "../screen/Footer/Footer";
import ForgotPassword from "../screen/loginflow/forgotpassword/forgotpassword";
import Confrompassword from "../screen/loginflow/confrompassword/confrompassword";
import VerifyCode from "../screen/loginflow/verifyotp/verifycode";
import Contactus from "../screen/contactuspage/contactus";
import Congrats from "../screen/loginflow/congratsscreen/congrats";
import CourseCard from "../screen/courseCard/coursecard";
import Courses from "../screen/Courses/Courses";
import MentorScreen from "../screen/Mentors/MentorScreen";
import Profilepage from "../screen/loginflow/profile/profilepage";
import Cart from "../screen/addTocard/cart";
import Termcondition from "../screen/Footer/termcondition";
import Privacypolicy from "../screen/Footer/privacypolicy/privacypolicy";
import Studentprofile from "../screen/myaccount/studentprofile";
import Changepassword from "../screen/myaccount/changepassword";
import Pricingpage from "../screen/addTocard/pricingpage";
import Dashboard from "../screen/dashboard/dashboard";
import LearningSection from "../components/learningsection";
import Onlineclass from "../screen/dashboard/onlineclass";
import Paymentsdetail from "../screen/dashboard/paymentsdetail";
import TestResult from "../screen/dashboard/testresult";
import Courseslist  from "../screen/dashboard/courseslist";

export default function publicrouter() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="promocard" element={<Promocard />} />
          <Route path="card" element={<Card />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verifyCode" element={<VerifyCode />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="categorysection" element={<Categorysection />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="congrats" element={<Congrats />} />
          <Route path="confrompassword" element={<Confrompassword />} />
          <Route path="courseCard" element={<CourseCard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="mentor" element={<MentorScreen />} />
          <Route path="profilepage" element={<Profilepage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="termcondition" element={<Termcondition />} />
          <Route path="privacypolicy" element={<Privacypolicy />} />
          <Route path="studentprofile" element={<Studentprofile />} />
          <Route path="changepassword" element={<Changepassword />} />
          <Route path="pricingpage" element={<Pricingpage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="learningSection" element={<LearningSection />} />
          <Route path="testesult" element={<TestResult />} />
          <Route path="paymentsdetail" element={<Paymentsdetail />} />
          <Route path="onlineclass" element={<Onlineclass />} />
          <Route path="courseslist" element={<Courseslist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
