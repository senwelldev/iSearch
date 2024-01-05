import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Accordion, AccordionItem } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import image1 from "../../../Images/Services/Branding/BrandingServices.webp";
import Broucher from "../../../Images/Services/Branding/Broucher.webp";
import Logo from "../../../Images/Services/Branding/Logo.webp";
import NewsLetter from "../../../Images/Services/Branding/NewsLetter.webp";
import ProductCatalog from "../../../Images/Services/Branding/ProductCatalog.webp";
import HelpYouWin from "../../Home/LetsFind";
import "./Branding.css";
import "./Structure.css";

function App() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const initialScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > initialScrollPosition.current) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    initialScrollPosition.current = window.scrollY;

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const imgContainer = document.querySelector(".img-container");
    imgContainer.classList.add("effect");

    // Clean up the effect class when the component unmounts
    return () => {
      imgContainer.classList.remove("effect");
    };
  }, []);
  return (
    <div className={`container-fluid brandingBody`}>
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Branding</title>
        <link rel="canonical" href="https://isearch.co.in/branding" />
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
        <meta property="og:image" content="https://isearch.co.in/static/media/Logo.1f7e5229e2fb22ae4a24.png" />
        <meta property="og:image" content="https://isearch.co.in/static/media/Logo.1f7e5229e2fb22ae4a24.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta name="twitter:image" content="https://isearch.co.in/static/media/Logo.1f7e5229e2fb22ae4a24.png" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <div className="row brandingFirstRow">
        <div className="col-md-6 ">
          <div
            className={`img-container ${isScrolled ? "scrolled" : ""} d-flex justify-content-start align-items-center`}
          >
            <div className="img-wrapper mb-5">
              <div className="overlay"></div>
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 main-container">
          <div className="text-container ">
            <h1 className="mb-2">Branding that makes your product stand out from the ordinary.</h1>
            <h6 className="mt-3 mb-4  ">
              Want to change the way people look at your products? Check out our branding services today!
            </h6>

            <button type="button" className="btn button " onClick={() => navigate("/contact")}>
              Schedule a Meeting{" "}
            </button>
          </div>
        </div>
      </div>

      {/* section-2  */}
      <div className="container-fluid  mt-5 pt-5 mb-4">
        <div className="ServicesImagesContainer ServicesImagesContainer-odd">
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Logo Design Services</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Logo design plays a vital role in brand identity by visually embodying a company's values, personality,
                and products or services.
              </p>
              <p>
                Professional logo design services prioritize the creation of a distinctive and memorable emblem that
                connects with the intended audience.
              </p>
              <p>
                The ultimate goal of logo design is to craft a unique and impactful visual representation that
                effectively communicates the essence of a brand.
              </p>
            </div>
          </div>
          <div className="col-md-5 content-left ">
            <div className="Services-RightConatiner-Img">
              <img src={Logo} alt=".." />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  mb-2 pt-5 border-top-none">
        <div className="ServicesImagesContainer">
          <div className="col-md-5 content-left ">
            <div className="Services-LefttConatiner-Img">
              <img src={NewsLetter} alt=".." />
            </div>
          </div>
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Newsletter Design Services</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Newsletter design is a critical element in email marketing, significantly influencing the success of
                communication and interaction with subscribers.
              </p>
              <p>
                Professional newsletter design services prioritize the development of visually captivating,
                mobile-responsive, and information-rich newsletters to effectively convey the brand's message.
              </p>
              <p>
                The key objective of newsletter design is to enhance the overall effectiveness of email marketing by
                delivering content in an engaging and visually appealing manner.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  pt-5 pb-5 achievement ">
        <div class="row  d-flex justify-content-between">
          <div className="col-md-12 social-rp">
            <h3 className=" mb-4">
              “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and
              understanding us. They’re like a partner and mentor in helping us get where we want to be.”
            </h3>
          </div>

          <div className="col-md-12 social-lp ">
            <h4 className=" text-center">Here is our historic achievements so far</h4>

            <div className="stats row">
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>250+</strong>
                <p className="fs-5">Brochures Prepared</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>80+</strong>
                <p className="fs-5">Logos Designed</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>200%+</strong>
                <p className="fs-5"> Increase in Sales ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5  pt-5">
        <div className="ServicesImagesContainer ServicesImagesContainer-odd">
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Brochure Design Services</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Brochure design services are essential for showcasing a company's products, services, and brand message
                in a visually compelling and informative way.
              </p>
              <p>
                Professional brochure design services prioritize the development of eye-catching layouts, engaging
                content, and a unified visual identity to effectively convey information.
              </p>
              <p>
                The primary goal of brochure design is to present a cohesive and attractive representation of a company,
                ensuring that its offerings and brand message are communicated effectively.
              </p>
            </div>
          </div>
          <div className="col-md-5 content-left ">
            <div className="Services-RightConatiner-Img">
              <img src={Broucher} alt=".." />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5  pt-5">
        <div className="row d-flex justify-content-between ServicesImagesContainer">
          <div className="col-md-5 content-left ">
            <div className="Services-LefttConatiner-Img">
              <img src={ProductCatalog} alt=".." />
            </div>
          </div>
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Product Catalogue</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Product catalogue design services play a crucial role for businesses aiming to display their products in
                a visually enticing and well-organized format.
              </p>
              <p>
                A meticulously designed catalogue not only emphasizes product features but also strengthens brand
                identity, making it a vital component for businesses.
              </p>
              <p>
                The design process for product catalogues requires a harmonious blend of creativity, strategic planning,
                and meticulous attention to detail to create a catalogue that captures customer interest and enhances
                sales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid faq">
        <h1 className="text-center mt-4 mb-4 pb-4">Frequently Asked Questions about Branding Services</h1>
        <Accordion id="accordionExample">
          <AccordionItem eventKey="0">
            <Accordion.Header>
              {/* <button className="accordion-button">
               
              </button> */}
              <h4>Why is branding important for a business?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Branding is essential as it helps build recognition, trust, and loyalty. A strong brand identity sets a
                business apart from competitors, attracts customers, and contributes to long-term success.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="1">
            <Accordion.Header>
              {/* <button className="accordion-button">
                
              </button> */}
              <h4>How can I establish brand consistency?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Maintain consistency across all brand touchpoints, including visual elements, messaging, and customer
                interactions. Develop brand guidelines to ensure everyone in the organization follows a unified
                approach.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="2">
            <Accordion.Header>
              {/* <button className="accordion-button">
                Do you respond to followers questions or comments on my posts?
              </button> */}
              <h4>How can branding influence customer loyalty?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Consistent and positive branding creates trust and emotional connections with customers. When customers
                resonate with a brand's values and experiences positive interactions, they are more likely to become
                loyal advocates.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="3">
            <Accordion.Header>
              {/* <button className="accordion-button">
                What is social media community management?
              </button> */}
              <h4>What is rebranding, and when is it necessary?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Rebranding is the process of updating or changing a brand's identity. It may be necessary when a
                business undergoes significant changes, such as a shift in values, target audience, or
                products/services.
              </p>
            </Accordion.Body>
          </AccordionItem>
        </Accordion>
      </div>
      <br />
      <br />
      <HelpYouWin />
      <br />
      <br />
    </div>
  );
}

export default App;
