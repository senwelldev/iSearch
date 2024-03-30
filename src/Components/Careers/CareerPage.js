import React from "react";
import "./CareerPage.css";
import Team from "../../Images/Career/Team.webp";
import { Helmet } from "react-helmet";
import CareerBannerComponent from "./CareerBannerComponent";
import CarouselComponent from "./CarouselComponent";
import JoinUsComponent from "./JoinUsComponent";
import MediaComponent from "./MediaComponent";
import WelcomeToiSearchComponent from "./WelcomeToiSearchComponent";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "Join Our Team",
  description:
    "Discover opportunities that exceed your expectations. Let&#039;s stay connected for career opportunities in isearch.",
  canonical: "https://isearch.co.in/",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags",
    },
    image: { Team },
    type: "article",
  },
};

const CareerPage = () => {
  return (
    <DocumentMeta {...meta}>
      <div className="career-page ">
        {/* ------Code for meta tags of this page------ */}

        <CareerBannerComponent />
        <JoinUsComponent />
        <MediaComponent />
        <WelcomeToiSearchComponent />
        <CarouselComponent />
        <br />
      </div>
    </DocumentMeta>
  );
};

export default CareerPage;
