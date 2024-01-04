import React from "react";
import "./Vision.css";
import Vission from "../../Images/AboutUs/Vision.webp";
import Mission from "../../Images/AboutUs/Mission.webp";

const Vision = () => {
  return (
    <div className="visionBody">
      <div className="visionContainer">
        <div className="visionContainerLeft">
          <div className="vissionImg">
            <img src={Vission} alt="..." />
          </div>
          <h1>Our Vision</h1>
        </div>
        <div className="visionContainerRight">
          <p>
            To be the catalyst for digital transformation, empowering businesses
            to thrive in the ever-evolving online landscape. We envision a
            future where every brand maximizes its digital potential, connects
            authentically with its audience, and achieves unprecedented success
            through innovative and results-driven digital marketing strategies.
          </p>
        </div>
      </div>
      <div className="missionContainer">
        <div className="visionContainerRight">
          <p>
            At iSearch, We are dedicated to crafting bespoke solutions that
            transcend conventional boundaries, leveraging the latest
            technologies and creative strategies. Our commitment extends beyond
            visibility; we strive to build enduring connections between brands
            and their audiences. Through transparency, innovation, and a
            relentless pursuit of excellence, we aim to be the trusted partner
            that propels businesses to new heights in the digital realm.
          </p>
        </div>
        <div className="visionContainerLeft">
          <div className="MissionImg">
            <img src={Mission} alt="..." />
          </div>
          <h1>Our Mission</h1>
        </div>
      </div>
    </div>
  );
};

export default Vision;
