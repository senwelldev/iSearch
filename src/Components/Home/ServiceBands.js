import React, { useState } from "react";
import "./ServiceBands.css";
import { useNavigate } from "react-router-dom";

const ServiceBands = () => {
  const navigate = useNavigate();

  return (
    <div className="serviceBandsBody">
      <div className="serviceBands-row">
        <div className="serviceBands-row-Left">
          <video
            src="Assets/ServiceVideos/Paid Ads Campaign.webm"
            height="100%"
            width="100%"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="serviceBands-row-Right">
          <h1>Paid Ads Campaign</h1>
          <button
            className="Services-Bands-btn"
            onClick={() => navigate("/paidAdds")}
          >
            <b>Read More</b>
          </button>
        </div>
      </div>
      <div className="serviceBands-row">
        <div className="serviceBands-row-Left">
          <video
            src="Assets/ServiceVideos/Social media marketing.webm"
            height="100%"
            width="100%"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="serviceBands-row-Right">
          <h1>Social Media Marketing</h1>
          <button
            className="Services-Bands-btn"
            onClick={() => navigate("/social")}
          >
            <b>Read More</b>
          </button>
        </div>
      </div>
      <div className="serviceBands-row">
        <div className="serviceBands-row-Left">
          <video
            src="Assets/ServiceVideos/Search Engine Optimization.webm"
            height="100%"
            width="100%"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="serviceBands-row-Right">
          <h1>Search Engine Optimization</h1>
          <button
            className="Services-Bands-btn"
            onClick={() => navigate("/seo")}
          >
            <b>Read More</b>
          </button>
        </div>
      </div>
      <div className="serviceBands-row">
        <div className="serviceBands-row-Left">
          <video
            src="Assets/ServiceVideos/Branding Services.webm"
            height="100%"
            width="100%"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="serviceBands-row-Right">
          <h1>Branding Services</h1>
          <button
            className="Services-Bands-btn"
            onClick={() => navigate("/branding")}
          >
            <b>Read More</b>
          </button>
        </div>
      </div>
      <div className="serviceBands-row">
        <div className="serviceBands-row-Left">
          <video
            src="/Assets/ServiceVideos/Content & PR Marketing.webm"
            height="100%"
            width="100%"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="serviceBands-row-Right">
          <h1>Content & PR Marketing</h1>
          <button
            className="Services-Bands-btn"
            onClick={() => navigate("/contentServices")}
          >
            <b>Read More</b>
          </button>
        </div>
      </div>
      <div className="serviceBands-row">
        <div className="serviceBands-row-Left">
          <video
            src="Assets/ServiceVideos/Web Design & Analytics.webm"
            height="100%"
            width="100%"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="serviceBands-row-Right">
          <h1>Web Design & Analytics</h1>
          <button
            className="Services-Bands-btn"
            onClick={() => navigate("/webDesign")}
          >
            <b>Read More</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBands;
