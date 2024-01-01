import React from "react";
import "./Planet.css";

import logo from "../../../../Images/Services/Social/new-graphic-social-icon01.png";
import logo1 from "../../../../Images/Services/Social/new-graphic-social-icon02.png";
import logo2 from "../../../../Images/Services/Social/new-graphic-social-icon05.png";
import logo3 from "../../../../Images/Services/Social/twitter.png";
import logo4 from "../../../../Images/Services/Social/image_2023_12_27T10_03_29_621Z.png";
import logo5 from "../../../../Images/Services/Social/image_2023_12_27T10_03_29_623Z.png";
const Main = ({ img }) => {
  return (
    <>
      <div class="planet-wrapper">
        <div class="hero-circle">
          <img class="inner-img" src={img} alt="" />
          <div class="hero-rotate" id="circle">
            <div class="planet">
              <img src={logo} alt="" />
            </div>
            <div class="planet">
              <img src={logo1} alt="" />
            </div> 
            <div class="planet">
              <img src={logo2} alt="" />
            </div>
            <div class="planet">
              <img src={logo3} alt="" />
            </div>
            <div class="planet">
              <img src={logo4} alt="" />
            </div>
            <div class="planet">
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
