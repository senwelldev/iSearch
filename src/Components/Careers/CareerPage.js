import React from "react";
import "./CareerPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BookIcon from "@mui/icons-material/Book";
import JoinCard from "./JoinCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CareerBannerComponent from "./CareerBannerComponent";
import WelcomeToiSearchComponent from "./WelcomeToiSearchComponent";
import MediaComponent from "./MediaComponent";
import CarouselComponent from "./CarouselComponent";
import JoinUsComponent from "./JoinUsComponent";

const CareerPage = () => {
  return (
    <div className="career-page ">
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Careers</title>
        <link rel="canonical" href="https://isearch.co.in/careers" />
        <meta name="robots" content="index, follow" />
        <meta
          name="news_keywords"
          content="isearch careers, careers, isearch"
        />
        <link
          rel="image_src"
          href="https://isearch.co.in/static/media/ServiceImg1.d16614147757f4e5926d.webp"
        />
        <meta
          name="description"
          content="Discover opportunities that exceed your expectations. Let&#039;s stay connected for career opportunities in isearch."
        />
        <meta name="keywords" content="Amdocs careers, careers, Amdocs" />
        <meta property="og:site_name" content="Amdocs" />
        <meta property="og:title" content="Careers at Amdocs" />
        <meta
          property="og:description"
          content="Discover opportunities that exceed your expectations. Let&#039;s stay connected for career opportunities in isearch."
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/ServiceImg1.d16614147757f4e5926d.webp"
        />
        <meta
          property="og:image:url"
          content="https://isearch.co.in/static/media/ServiceImg1.d16614147757f4e5926d.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/ServiceImg1.d16614147757f4e5926d.webp"
        />
        <meta property="og:image:type" content="png" />
        <meta
          property="og:image:alt"
          content='Guy searching "career at isearch" with mobile'
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Amdocs" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/ServiceImg1.d16614147757f4e5926d.webp"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />{" "}
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
