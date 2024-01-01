import React from "react";
import "./IndustriesWeServe.css";
import "aos/dist/aos.css";

const IndustriesWeServe = () => {
  return (
    <div className="IndustriesWeServe-Body">
      <div className="IndustriesWeServe-Heading" >
        <h1>
          <b>Industries We Serve</b>
        </h1>
      </div>
      <div className="IndustriesCard-Container">
        <div className="IndustriesCard" data-aos="fade-down">
          <h3>
            <b>Ecommerce</b>
          </h3>
        </div>
        <div className="IndustriesCard" data-aos="zoom-down">
          <h3>
            <b>Healthcare</b>
          </h3>
        </div>
        <div className="IndustriesCard" data-aos="fade-down">
          <h3>
            <b>FMCG</b>
          </h3>
        </div>
        <div className="IndustriesCard" data-aos="fade-up">
          <h3>
            <b>Fitness nutrition</b>
          </h3>
        </div>
        <div className="IndustriesCard" data-aos="zoom-up">
          <h3>
            <b>Real Estate</b>
          </h3>
        </div>
        <div className="IndustriesCard" data-aos="fade-up">
          <h3>
            <b>Gaming & Technology</b>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
