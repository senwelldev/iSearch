import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./CareerPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BookIcon from "@mui/icons-material/Book";
import JoinCard from "./JoinCard";
import { Link } from "react-router-dom";
// import MediaCard from "./MediaCard";
// import OpenCard from "./OpenCard";
// import Team from "../../Images/Career/Team.png";
import Team from "../../Images/Career/Team.webp";

// import jobDescriptions from "../Careers/Jobs.json";
import { Helmet } from "react-helmet";
import CareerBannerComponent from "./CareerBannerComponent";
import CarouselComponent from "./CarouselComponent";
import JoinUsComponent from "./JoinUsComponent";
import MediaComponent from "./MediaComponent";
import WelcomeToiSearchComponent from "./WelcomeToiSearchComponent";

const CareerPage = () => {
  return (
    <div className="career-page ">
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>isearch</title>
        <link rel="canonical" href="https://isearch.co.in/" />
        <meta name="robots" content="index, follow" />
        <link rel="shortlink" href="https://isearch.co.in/" />
        <meta name="news_keywords" content="isearch.india" />

        <meta name="title" property="og:title" content="isearch.co.in" />
        <meta name="image" property="og:image" content={Team} />
        <meta
          name="description"
          property="og:description"
          content="Discover opportunities that exceed your expectations. Let&#039;s stay connected for career opportunities in isearch."
        />
        <meta name="author" content="isearch.co.in" />

        <meta
          name="keywords"
          content="Digital Marketing and Web Development Pune,
      Integrated Marketing Solutions Maharashtra,
      SEO and Website Design Services,
      Social Media Marketing and Web Development,
      Full-Service Digital Marketing Agency Pune,
      Maharashtra Web Design and SEO,
      Website Development and Branding Services,
      Comprehensive Digital Marketing Solutions,
      Custom Web Design Maharashtra,
      SEO-Optimized Website Development,
      Social Media Management and Web Design,
      Professional Digital Marketing Company Pune,
      E-commerce Website Development Maharashtra,
      Content Marketing and Web Development,
      SEO and Mobile-Friendly Website Design,
      Social Media Optimization and Web Design,
      Digital Marketing Strategy Consulting,
      Responsive Web Design Pune,
      Paid Marketing Campaigns and Web Development,
      Branding, SEO, and Website Design Pune,
      Digital Advertising and Custom Web Development,
      Analytics-Driven Marketing Services Maharashtra,
      Website Redesign and SEO Optimization,
      Social Media Engagement and Web Design,
      PR Marketing, Web Development, and SEO,
      Digital Marketing Pune,
      Social Media Marketing Services,
      SEO Company Maharashtra,
      Paid Marketing Solutions,
      Branding Services Pune,
      Web Design and Analytics,
      Content Marketing Agency,
      PR Marketing Solutions,
      Online Marketing Pune,
      Internet Marketing Services,
      Search Engine Optimization Maharashtra,
      Social Media Management Pune,
      PPC Advertising Services,
      Brand Development Pune,
      Website Design and Development Maharashtra,
      Analytics Consulting Services,
      Content Creation and Marketing,
      Public Relations Agency Pune,
      Maharashtra Digital Marketing Firm,
      Pune Marketing Solutions,
      Digital Advertising Agency,
      Online Branding Services,
      Maharashtra Web Design Company,
      Social Media Optimization Pune,
      SEO Optimization Services,
      Voice Search Optimization,
      Video Marketing,
      Influencer Marketing,
      User Experience (UX) Design,
      Augmented Reality (AR),
      Virtual Reality (VR),
      Mobile Optimization,
      Chatbot Development,
      Local SEO,
      Online Reputation Management (ORM),
      Conversion Rate Optimization (CRO),
      E-commerce SEO,
      Blockchain Marketing,
      Sustainable Marketing,
      Mobile App Development,
      Progressive Web Apps (PWAs),
      Cybersecurity in Web Development,
      Voice User Interface (VUI),
      Social Commerce,
      Dark Mode Design,
      5G Technology Impact,
      NFT Marketing,
      Digital Transformation"
        />
        <meta
          name="news_keywords"
          content="isearch careers, careers, isearch"
        />
      </Helmet>
      <CareerBannerComponent />
      <JoinUsComponent />
      <MediaComponent />
      <WelcomeToiSearchComponent />
      <CarouselComponent />
      <br />
    </div>
  );
};

export default CareerPage;
