import React from "react";
import PromoCard from "../../components/promocard";
import CategorySection from "../../components/categorysection";
import CardComponent from "../../components/card";
import TopMentor from "../../components/mentors";
import VerifyCode from "../loginflow/verifyotp/verifycode";
import Profilepage from "../loginflow/profile/profilepage";
import PricingPlans from "../addTocard/pricingpage";
import Dashboard from "../dashboard/dashboard";
import Learningsection from "../../components/learningsection";

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
      <Learningsection/>
      <PricingPlans/>
      <Dashboard/>
    </div>
  );
};

export default Home;
