import React from "react";
import PromoCard from "../../components/promocard";
import CategorySection from "../../components/categorysection";
import CardComponent from "../../components/card";
import TopMentor from "../../components/mentors";
import VerifyCode from "../loginflow/verifyotp/verifycode";
import Profilepage from "../loginflow/profile/profilepage";

const Home = () => {

  return (
    <div className="" style={{ marginTop: "100px" }}>
      {" "}
      <PromoCard />
      <CategorySection />
      <CardComponent />
      <TopMentor />
      {/* <VerifyCode/> */}
      {/* <Profilepage /> */}
    </div>
  );
};

export default Home;
