import React, { useEffect } from "react";
import "./Ourservices.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Ourservices = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="ourServicesBody">
      <div className="ourServicesHeading" >
        <h1>
          <b>
            Services we provide
          </b>
        </h1>
        <p>
            We never met a challange we didn't like.
        </p>
      </div>
      <div className="flipBoxesContainer1">
        <div className="flip-box" data-aos="fade-down">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h3>Social Media Marketing</h3>
            </div>
            <div className="flip-box-back">
              <p>Blogging</p>
              <p>Social Media Content</p>
              <p>Social Media Analytics</p>
              <button className="btn btn-light"
              onClick={()=> navigate('/social')}
              >Read More</button>
            </div>
          </div>
        </div>
        <div className="flip-box" data-aos="fade-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h3>SEO</h3>
            </div>
            <div className="flip-box-back">
              <p>Keyword Research</p>
              <p>Onpage & Offpage SEO</p>
              <p>Link Building</p>
              <p>Local SEO</p>
              <p>Ecommerce SEO</p>
              <p>Guest Posting</p>
              <p>Backlinking</p>
              <button className="btn btn-light"
                onClick={()=> navigate('/seo')}
              >Read More</button>
            </div>
          </div>
        </div>
        <div className="flip-box" data-aos="fade-down">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h3>Paid Marketing</h3>
            </div>
            <div className="flip-box-back">
              <p>Google & FB Ads</p>
              <p>Social Media Ads</p>
              <p>Landing Page Optimization</p>
              <p>Mobile Ads</p>
              <p>Amazon Ads</p>
              <p>PPC reseller Services</p>
              <button className="btn btn-light"
              onClick={()=> navigate('/paidAdds')}
              >
              Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flip-box" data-aos="fade-down">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h3>Branding Services</h3>
            </div>
            <div className="flip-box-back">
              <p>Logo Design</p>
              <p>Newsletter Design</p>
              <p>Brochure Design</p>
              <p>Product Catalogue</p>
              <button className="btn btn-light"
              onClick={()=> navigate('/branding')}
              >Read More</button>
            </div>
          </div>
        </div>
        <div className="flip-box" data-aos="fade-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h3>Web Design & Analytics</h3>
            </div>
            <div className="flip-box-back">
              <p>Web design</p>
              <p>Ecommerce website design</p>
              <p>Content Management System</p>
              <p>Google Analytics</p>
              <p>Google Tag Manager Setup</p>
              <button className="btn btn-light"
              onClick={()=> navigate('/webDesign')}
              >Read More</button>
            </div>
          </div>
        </div>
        <div className="flip-box" data-aos="fade-down">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h3>Content & PR Marketing</h3>
            </div>
            <div className="flip-box-back">
              <p>Video Marketing</p>
              <p>E-mail Marketing</p>
              <p>Industry Events</p>
              <p>Post Scheduling & Automation</p>
              <p>GMB Setup</p>
              <button className="btn btn-light"
              onClick={()=> navigate('/contentServices')}
              >
              Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
