// CareerBannerComponent.js
import React from "react";
import Team from "../../Images/Career/Team.webp";
import "./CareerPage.css";

const CareerBannerComponent = () => {
  return (
    <div className="container-fluid lets-create pb-5 pt-5">
      <div className="row text-white lets-createpage">
        <img src={Team} className="img-fluid" alt="..." />
        <div className="impact-head text-center pb-5 pt-5 CareerBannerText">
          <h1 className="display-4">
            <b>Transform Your Passion into Profession</b>
          </h1>
          <h6 className="lead">
            iSearch Opens Doors to Digital Marketing Excellence.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CareerBannerComponent;
