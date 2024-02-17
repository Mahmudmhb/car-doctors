import React from "react";
import Navber from "../../Sheard/Navber/Navber";
import Benner from "../../Sheard/Benner/Benner";
import About from "./About";
import Services from "../Services/Services";
import AnyQuery from "../../Components/AnyQuery";
import Teams from "../../Components/Teams";
import Features from "../../Components/Features/Features";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navber /> */}
      <Benner></Benner>
      <About></About>
      <Services></Services>
      <AnyQuery></AnyQuery>
      <Teams></Teams>
      <Features></Features>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
