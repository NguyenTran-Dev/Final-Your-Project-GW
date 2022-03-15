import React from "react";
import Provide from "./AboutUs.Provide";
import Slider from "./AboutUS.Slide";
import Choosen from "./AboutUs.Choosen";
import "../../style/aboutus.scss";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs__header">
        <h1 className="abouUus__header-h1">Shop</h1>
        <h3 className="aboutUs__header-h3">About Us</h3>
      </div>
      <div className="container">
        <Provide />
      </div>
      <Slider />
      <div className="container">
        <Choosen />
      </div>
    </div>
  );
};
export default AboutUs;
