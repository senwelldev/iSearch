import React from "react";
import "./Planet.css";

import logo from "../../../../Images/Services/Social/new-graphic-social-icon01.webp";
import logo1 from "../../../../Images/Services/Social/new-graphic-social-icon02.webp";
import logo2 from "../../../../Images/Services/Social/new-graphic-social-icon05.webp";
import logo3 from "../../../../Images/Services/Social/twitter.webp";
import logo4 from "../../../../Images/Services/Social/image_2023_12_27T10_03_29_621Z.webp";
import logo5 from "../../../../Images/Services/Social/image_2023_12_27T10_03_29_623Z.webp";
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
