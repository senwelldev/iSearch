import React from "react";
import "./Services.css";
import Greet from "./Greet";
import Ourservices from "./Ourservices";
import ServicesBanner from "./ServicesBanner";
import IndustriesWeServe from "./IndustriesWeServe";
import Greet2 from "./Greet2";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div className="servicesBody">
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Services</title>
        <link rel="canonical" href="https://isearch.co.in/services" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Find our Services and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our page"
        />
        <meta property="og:site_name" content="isearch" />
        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Find expert insight and expertise on Digital Marketing, SEO, Paid Adds marketing, digital and media solutions through our page"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/ServiceImg2.7a43cece28f1b566d782.webp"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <ServicesBanner />
      <Greet />
      <Ourservices />
      <Greet2 />
      <IndustriesWeServe />
    </div>
  );
};

export default Services;
