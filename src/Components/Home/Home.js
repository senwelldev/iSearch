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
          href="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png"
        />
        <meta
          name="description"
          content="isearch.india is a leading Digital Marketing &amp; services provider, providing innovative solutions, intelligent operations &amp; delivery expertise."
        />
        <meta name="keywords" content="isearch.india" />
        <meta property="og:site_name" content="isearch.india" />
        <meta
          property="og:title"
          content="isearch.india digital marketing solutions"
        />
        <meta
          property="og:description"
          content="isearch.india is a leading Digital Marketing &amp; services provider, providing innovative solutions, intelligent operations &amp; delivery expertise."
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png"
        />
        <meta
          property="og:image:url"
          content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png"
        />
        <meta property="og:image:type" content="png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="isearch.india digital marketing solutions"
        />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/Team.315f13dd8946ded0be17.png"
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
