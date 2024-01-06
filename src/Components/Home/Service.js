import React from "react";
import "./Service.css";
import ServiceImage1 from "../../Images/Home/ServiceImg1.webp";
import ServiceImage2 from "../../Images/Home/ServiceImg2.webp";

import { useNavigate } from "react-router-dom";

const Service = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="homeServiceBody">
      <div className="homeServiceBody-row1">
        <div className="homeService-LeftConatiner">
          <h2>
            Perfection in Simplicity: Proven Expertise in Successful Campaigns.
          </h2>
          <p>
            Backed by a team of seasoned digital marketers, we bring a wealth of
            experience to the table. Our experts have successfully crafted and
            executed strategies across diverse industries, consistently
            delivering tangible results. With a track record of driving
            increased visibility, engagement, and conversions, our expertise
            forms the foundation of your digital triumph. Proven Expertise,
            Innovative Solutions, and a Commitment to Your Success.
          </p>
          <button
            className="services-btn"
            onClick={() => {
              navigate("/services");
              scrollToTop();
            }}
          >
            LEARN MORE ABOUT OUR SERVICES
          </button>
        </div>
        <div className="homeService-RightConatiner">
          <div className="homeService-RightConatiner-Img">
            <img src={ServiceImage1} alt=".." loading="lazy" />
          </div>
        </div>
      </div>
      <div className="homeServiceBody-row2">
        <div className="homeService-RightConatiner">
          <div className="homeService-LefttContainer-Img">
            <img src={ServiceImage2} alt=".." loading="lazy" />
          </div>
        </div>
        <div className="homeService-LeftConatiner">
          <h2>
            Transparent Collaboration: Foundation of our Relations with our
            Clients.
          </h2>
          <p>
            Building trust is at the core of our client relationships. We
            believe in transparent collaboration, keeping you informed and
            involved every step of the way. Regular updates, detailed reporting,
            and open communication ensure that you are not just a client but an
            active participant in your digital success story. At iSearch, our
            commitment to excellence goes beyond the ordinary, thus making us
            your ideal partner in navigating the dynamic landscape of online
            success.
          </p>
          <button
            className="services-btn"
            onClick={() => {
              navigate("/services");
              scrollToTop();
            }}
          >
            START YOUR MARKETING CAMPAIGN TODAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
