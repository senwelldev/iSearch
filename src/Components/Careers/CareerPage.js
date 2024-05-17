import React from "react";
import CareerBannerComponent from "./CareerBannerComponent";
import "./CareerPage.css";
import CarouselComponent from "./CarouselComponent";
import JoinUsComponent from "./JoinUsComponent";
import MediaComponent from "./MediaComponent";
import WelcomeToiSearchComponent from "./WelcomeToiSearchComponent";

const CareerPage = () => {
  return (
    <DocumentMeta>
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
