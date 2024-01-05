import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./CareerPage.css";
// import MediaCard from "./MediaCard";
// import OpenCard from "./OpenCard";
// import Team from "../../Images/Career/Team.png";

// import jobDescriptions from "../Careers/Jobs.json";
import { Helmet } from "react-helmet";
import CareerBannerComponent from "./CareerBannerComponent";
import CarouselComponent from "./CarouselComponent";
import JoinUsComponent from "./JoinUsComponent";
import MediaComponent from "./MediaComponent";
import WelcomeToiSearchComponent from "./WelcomeToiSearchComponent";

const CareerPage = () => {
  return (
    // ---------------Lets Create Impactfull--------------
    <div className="career-page ">
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Careers</title>
        <link rel="canonical" href="https://isearch.co.in/careers" />
        <meta name="robots" content="index, follow" />
        <meta name="news_keywords" content="isearch careers, careers, isearch" />
        <link rel="image_src" href="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png" />
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
        <meta property="og:image" content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png" />
        <meta property="og:image:url" content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png" />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png"
        />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:alt" content='Guy searching "career at isearch" with mobile' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Amdocs" />
        <meta name="twitter:image" content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />{" "}
      </Helmet>
      {/* --------------------------------------------------------- */}

      <CareerBannerComponent></CareerBannerComponent>

      {/* ----------------------Join Coditas------------------ */}

      <JoinUsComponent></JoinUsComponent>

      {/* ---------------------Coditas Media------------------- */}
      <MediaComponent></MediaComponent>
      {/* <-----------------------> */}

      {/*  */}
      <WelcomeToiSearchComponent></WelcomeToiSearchComponent>

      {/* ---------------OPEN POSITIONS-------------------- */}
      <CarouselComponent></CarouselComponent>
    </div>
  );
};

export default CareerPage;
