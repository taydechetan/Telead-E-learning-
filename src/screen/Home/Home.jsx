import React from "react";
import PromoCard from "../../components/promocard";
import CategorySection from "../../components/categorysection";
import CardComponent from "../../components/card";
import TopMentor from "../../components/mentors";

const Home = () => {
  return (
    <div className="" style={{ marginTop: "65px" }}>
      {" "}
      <PromoCard />
      <CategorySection />
      <CardComponent />
      <TopMentor />
    </div>
  );
};

export default Home;
