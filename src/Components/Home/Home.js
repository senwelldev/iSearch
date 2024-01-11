import React from "react";
import "./Home.css";
import Scrollspy from "./Scrollspy";
import Video from "./Video";
import Onboarding from "./Onboarding";
import HelpYouWin from "./LetsFind";
import Service from "./Service";
import ServiceBands from "./ServiceBands";
import Counts from "./Counts";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>isearch</title>
        <link rel="canonical" href="https://isearch.co.in/" />
        <meta name="robots" content="index, follow" />
        <link rel="shortlink" href="https://isearch.co.in/" />
        <meta name="news_keywords" content="isearch.india" />
        <link
          rel="image_src"
          href="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta
          name="description"
          content="isearch.india is a leading Digital Marketing &amp; services provider, providing innovative solutions, intelligent operations &amp; delivery expertise."
        />
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
        <meta property="og:site_name" content="isearch.india" />
        <meta property="og:title" content="isearch.india" />
        <meta
          property="og:description"
          content="isearch.india is a leading Digital Marketing &amp; services provider, providing innovative solutions, intelligent operations &amp; delivery expertise."
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta property="og:url" content="isearch.co.in" />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta property="og:image:type" content="webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="isearch.co.in" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Video />
      <Scrollspy />
      <Onboarding />
      <Counts />
      <Service />
      <ServiceBands />
      <HelpYouWin />
      <br />
    </>
  );
};

export default Home;
