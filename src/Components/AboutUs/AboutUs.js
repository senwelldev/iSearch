import React from "react";
import "./AboutUs.css";
import Vision from "./Vision";
import OurCoreValues from "./OurCoreValues";
import WhyChooseUs from "./WhyChooseUs";
import Banner from "./AboutUsBanner";
import OurClients from "./OurClients";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="aboutUsBody">
      {/* ------Code for meta tags of this page------ */}
      <Helmet>
        <title>About Us</title>
        <link rel="canonical" href="https://isearch.co.in/about" />
        <meta
          name="description"
          content="Find expert insight and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our articles, white papers, blogs, analyst reports, case studies and more"
        />
        <meta property="og:site_name" content="isearch.india" />
        <meta property="og:type" content="Articles" />
        <meta property="og:title" content="About us" />
        <meta
          property="og:description"
          content="Find expert insight and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our articles, white papers, blogs, analyst reports, case studies and more"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/Holistic.1ef9016ac9d0a5ec8752.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/Holistic.1ef9016ac9d0a5ec8752.png"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />{" "}
      </Helmet>
      <Banner />
      <Vision />
      <OurCoreValues />
      <WhyChooseUs />
      <OurClients />
    </div>
  );
};

export default AboutUs;
