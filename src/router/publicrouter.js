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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
