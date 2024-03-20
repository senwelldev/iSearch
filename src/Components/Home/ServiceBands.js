import React from "react";
import "./ServiceBands.css";
import { useNavigate } from "react-router-dom";

const ServiceBand = () => {
  const navigate = useNavigate();

  const BandData = [
    {
      title: "Paid Ads Campaign",
      videoSource: "Assets/ServiceVideos/Paid Ads Campaign.webm",
      route: "/paidAdds",
    },
    {
      title: "Social Media Marketing",
      videoSource: "Assets/ServiceVideos/Social media marketing.webm",
      route: "/social",
    },
    {
      title: "Search Engine Optimization",
      videoSource: "Assets/ServiceVideos/Search Engine Optimization.webm",
      route: "/seo",
    },
    {
      title: "Branding Services",
      videoSource: "Assets/ServiceVideos/Branding Services.webm",
      route: "/branding",
    },
    {
      title: "Content & PR Marketing",
      videoSource: "Assets/ServiceVideos/Content & PR Marketing.webm",
      route: "/contentServices",
    },
    {
      title: "Web Design & Analytics",
      videoSource: "Assets/ServiceVideos/Web Design & Analytics.webm",
      route: "/webDesign",
    },
  ];

  return (
    <div className="serviceBandsBody">
      {BandData.map((item, index) => (
        <div className="serviceBands-row" key={index}>
          <div className="serviceBands-row-Left">
            <video
              src={item.videoSource}
              height="100%"
              width="100%"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
          <div className="serviceBands-row-Right">
            <h1>{item.title}</h1>
            <button
              className="Services-Bands-btn"
              onClick={() => navigate(item.route)}
            >
              <b>Read More</b>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBand;
