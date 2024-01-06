import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionItem } from "react-bootstrap";
// import image from "../../../Images/Services/ServiceImg2.png";
import ContentImage from "../../../Images/Services/Content/Content & PR.webp";
import "./Content.css";
import "./Structure.css";
import { useNavigate } from "react-router-dom";
import HelpYouWin from "../../Home/LetsFind";
import ContentCreation from "../../../Images/Services/Content/ContentCreation.webp";
import CrisisManagement from "../../../Images/Services/Content/CrisisManagement.webp";
import EmailMarketing from "../../../Images/Services/Content/EmailMarketing.webp";
import LeadGeneration from "../../../Images/Services/Content/LeadGeneration.webp";
import { Helmet } from "react-helmet";

function Content() {
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
    <div className={`container-fluid contentBody`}>
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Content Marketing</title>
        <link rel="canonical" href="https://isearch.co.in/contentServices" />
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
          content="https://isearch.co.in/static/media/NewsLetter.5effca76faebe41c72f8.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://isearch.co.in/static/media/NewsLetter.5effca76faebe41c72f8.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/NewsLetter.5effca76faebe41c72f8.webp"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <div className="row firstRow">
        <div
          className="col-md-6 "
          //  style={{border:'1px solid red'}}
        >
          <div
            className={`img-container ${
              isScrolled ? "scrolled" : ""
            } d-flex justify-content-start align-items-center`}
          >
            <div className="img-wrapper mb-5">
              <div className="overlay"></div>
              <img src={ContentImage} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="col-md-6 main-container">
          <div className="text-container ">
            <h1 className="mb-2">
              We Provide Original Content that make your Online Presence Boom!{" "}
            </h1>
            <h6 className="mt-3 mb-4  ">
              Building Relationships are difficult, that is why you have us to
              help you out.
            </h6>

            <button
              type="button"
              className="btn button "
              onClick={() => navigate("/contact")}
            >
              Schedule a Meeting{" "}
            </button>
          </div>
        </div>
      </div>

      {/* section-2  */}
      <div className="container-fluid  mt-5 pt-5 mb-4 contentCard">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer ServicesImagesContainer-odd">
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Crisis Management</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Formulate effective crisis management strategies to mitigate
                potential damage and address negative publicity, with a focus on
                minimizing the impact on the organization's reputation.
              </p>
              <p>
                Prioritize transparent communication to provide accurate
                information promptly, fostering trust and demonstrating
                accountability during challenging situations.
              </p>
              <p>
                Implement initiatives aimed at rebuilding trust with
                stakeholders, showcasing the organization's commitment to
                resolving issues and maintaining open lines of communication
                during times of crisis.
              </p>
            </div>
          </div>
          <div className="col-md-5 content-left ">
            <div className="Services-RightConatiner-Img">
              <img src={CrisisManagement} alt=".." loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  mt-5 pt-5 mb-4 contentCard">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer">
          <div className="col-md-5 content-left ">
            <div className="Services-LefttConatiner-Img">
              <img src={LeadGeneration} alt=".." loading="lazy" />
            </div>
          </div>
          <div className="col-md-6 content-left column ">
            <h2 className="heading mb-5"> Lead Generation</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Develop content that strategically prompts users to take
                specific actions, such as subscribing to newsletters, accessing
                downloadable resources, or completing purchases.
              </p>
              <p>
                Integrate compelling calls-to-action within the content to
                actively engage and encourage users to participate in desired
                activities.
              </p>
              <p>
                Optimize the user experience by creating a seamless pathway for
                individuals to follow through on the desired actions, enhancing
                the overall effectiveness of lead generation strategies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  pt-5 pb-5 achievement">
        <div class="row  d-flex justify-content-between">
          <div className="col-md-12 social-rp">
            <h3 className="text-white mb-5">
              “At iSearch, we involve managing and enhancing the reputation of a
              brand or individual through strategic communication and
              relationship-building. Our goal is to build trust, establish brand
              authority, and drive profitable customer action.”
            </h3>
          </div>

          <div className="col-md-12 social-lp ">
            <h4 className=" text-center">
              Here's our teams we have partnered with and the output we have
              had:
            </h4>

            <div className="stats row">
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>50+</strong>
                <p className="fs-5"> Social Media Influencers</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>1200+ </strong>
                <p className="fs-5">Leads Generated Every Week</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>120+</strong>
                <p className="fs-5"> Overall Blogs Written</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5  pt-5 contentCard">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer ServicesImagesContainer-odd">
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Content Creation</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Create top-notch content that is both informative and engaging,
                tailored to meet the specific needs and interests of the
                intended audience.
              </p>
              <p>
                Diversify content formats, encompassing blog posts, articles,
                videos, infographics, and other mediums to cater to different
                preferences and enhance audience engagement.
              </p>
              <p>
                Ensure the content's quality remains consistently high,
                establishing a valuable connection with the target audience by
                delivering relevant and compelling information.
              </p>
            </div>
          </div>
          <div className="col-md-5 content-left ">
            <div className="Services-RightConatiner-Img">
              <img src={ContentCreation} alt=".." loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5  pt-5 contentCard">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer">
          <div className="col-md-5 content-left ">
            <div className="Services-LefttConatiner-Img">
              <img src={EmailMarketing} alt=".." loading="lazy" />
            </div>
          </div>
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Email Marketing</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Employ a robust digital marketing tactic centered on sending
                personalized and targeted messages via email to a specific
                audience.
              </p>
              <p>
                Utilize email marketing as a direct and effective means of
                communication, fostering relationships and actively engaging
                with the intended recipients.
              </p>
              <p>
                Leverage the power of email campaigns to build connections,
                drive engagement, and efficiently communicate with the targeted
                audience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid faq">
        <h2 className="text-center mt-4 mb-4 pb-4">
          Frequently Asked Questions about Content Marketing
        </h2>
        <Accordion id="accordionExample">
          <AccordionItem eventKey="0">
            <Accordion.Header>
              {/* <button className="accordion-button">
               
              </button> */}
              <h4>What is Public Relations (PR) Marketing?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Public Relations Marketing is a strategic communication process
                that builds and maintains positive relationships between an
                organization and its target audience. It involves managing a
                brand's image, reputation, and communication with the public.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="1">
            <Accordion.Header>
              {/* <button className="accordion-button">
                
              </button> */}
              <h4>What Are the Common Tools Used in PR Marketing?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                PR professionals use tools such as media databases, press
                release distribution services, social media monitoring tools,
                analytics platforms, and CRM systems to streamline their efforts
                and measure results.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="2">
            <Accordion.Header>
              {/* <button className="accordion-button">
                Do you respond to followers questions or comments on my posts?
              </button> */}
              <h4>
                How does content marketing differ from traditional advertising?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                This question addresses the distinctions between content
                marketing and traditional advertising methods, emphasizing the
                focus on providing value and building relationships.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="3">
            <Accordion.Header>
              {/* <button className="accordion-button">
                What is social media community management?
              </button> */}
              <h4>What are the common challenges in content marketing?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Businesses often face challenges such as creating quality
                content, maintaining consistency, and proving ROI. This question
                addresses the common hurdles in content marketing.
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

export default Content;
