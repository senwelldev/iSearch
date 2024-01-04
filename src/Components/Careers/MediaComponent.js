import React from "react";
import "./CareerPage.css";

const MediaComponent = () => {
  return (
    <div className="container-fluid in-media mt-5">
      <div className="row section-3 justify-content-center">
        {/* Section Heading */}
        <div className="col-md-8 text-center mb-5">
          <h1>Digital Echoes</h1>
          <p>
            Media Praises iSearch for Innovative Thoughts and Achievements -
            Explore the digital buzz surrounding iSearch as we turn heads and
            capture attention on our extraordinary journey. Dive into the
            digital realm to discover what the online community is saying about
            our innovative thoughts, notable achievements, and the dynamic
            culture that sets us apart.
          </p>
        </div>

        {/* Cards Section */}
        <div className="row row-cols-1 row-cols-md-4   cardParent  ">
          <div className="col mb-4 d-flex justify-content-center align-content-center">
            {/* <MediaCard
                title={"Title"}
                description={
                  "This is a longer card with supporting text below as a natural lead-in to additional content."
                }
                imageUrl={
                  "	https://coditas.com/assets/iitBombayCover-5e12a5ee.png"
                }
              ></MediaCard> */}
            <iframe
              width="560"
              height="320"
              src="https://www.youtube.com/embed/lPwt4XBWO6I?si=z0bJcenhpYoC_7-j"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col mb-4 d-flex justify-content-center align-content-center">
            {/* <MediaCard
                title={"Title"}
                description={
                  "This is a longer card with supporting text below as a natural lead-in to additional content."
                }
                imageUrl={
                  "https://coditas.com/assets/startUpCover-63752a2c.png"
                }
              ></MediaCard> */}
            <iframe
              width="560"
              height="320"
              src="https://www.youtube.com/embed/j4hTtvSKs5o?si=LNPGZneY7SAHkG-L"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col mb-4 d-flex justify-content-center align-content-center">
            {/* <MediaCard
                title={"Title"}
                description={
                  "This is a longer card with supporting text below as a natural lead-in to additional content."
                }
                imageUrl={
                  "https://coditas.com/assets/startUpCover-63752a2c.png"
                }
              ></MediaCard> */}
            <iframe
              width="560"
              height="320"
              src="https://www.youtube.com/embed/uFILt-NDnLI?si=28jjU_qrUBkqO2pp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaComponent;
