import React from "react";
import "./AboutUs.css";
import Vision from "./Vision";
import OurCoreValues from "./OurCoreValues";
import WhyChooseUs from "./WhyChooseUs";
import Banner from "./AboutUsBanner";
import OurClients from "./OurClients";

const AboutUs = () => {
  return (
    <div className="aboutUsBody">
      <Banner/>
      <Vision/>
      <OurCoreValues/>
      <WhyChooseUs/>
      <OurClients/>
    </div>
  );
};

export default AboutUs;
