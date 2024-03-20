import React, { useEffect, useState } from "react";
import "./Home.css";
import Scrollspy from "./Scrollspy";
import Video from "./Video";
import Onboarding from "./Onboarding";
import HelpYouWin from "./LetsFind";
import Service from "./Service";
// import ServiceBands from "./ServiceBands";
import Counts from "./Counts";
import { Helmet } from "react-helmet";

import ServiceBand from "./ServiceBands";

const Home = () => {
  const [isInteractive, setIsInteractive] = useState(false);
  const handleScroll = () => setIsInteractive(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <>
      <Helmet>
        <title>isearch</title>
        <link rel="canonical" href="https://isearch.co.in/" />
        <meta name="robots" content="index, follow" />
        <link rel="shortlink" href="https://isearch.co.in/" />
        <meta name="news_keywords" content="isearch.india" />
        <meta
          name="google-site-verification"
          content="lJtqzp787OKYZ5BSKwXzEB5SnmXrNeNs6kiS8DNUpbg"
        />

        <meta name="title" property="og:title" content="isearch.co.in" />
        <meta
          name="image"
          property="og:image"
          content="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta
          name="description"
          property="og:description"
          content="isearch.india is a leading Digital Marketing &amp; services provider, providing innovative solutions, intelligent operations &amp; delivery expertise."
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
      </Helmet>
      <Video />
      {isInteractive && <Scrollspy />} 
      <Onboarding />
      <Counts />
      <Service />
      <ServiceBand />
      <HelpYouWin />
      <br />
    </>
  );
};

export default Home;
