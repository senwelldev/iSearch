import React, { useEffect, useRef, useState } from "react";
import "./WebDesign.css";
import "./Structure.css";
import { Accordion, AccordionItem } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import js from "../../../Images/Services/WebDesign/javascript.svg";
import html5 from "../../../Images/Services/WebDesign/html5.svg";
import css3 from "../../../Images/Services/WebDesign/css3.svg";
import angularLogo from "../../../Images/Services/WebDesign/AngularJS.webp";
import ReactLogo from "../../../Images/Services/WebDesign/react.svg";
import JavaLogo from "../../../Images/Services/WebDesign/Java.svg";
import NestLogo from "../../../Images/Services/WebDesign/Nest.png";
import NodejsLogo from "../../../Images/Services/WebDesign/Nodejs.svg";
import DotNetLogo from "../../../Images/Services/WebDesign/dotNet.svg";
import FlutterLogo from "../../../Images/Services/WebDesign/flutter.svg";
import AndroidLogo from "../../../Images/Services/WebDesign/Android.svg";
import IonicLogo from "../../../Images/Services/WebDesign/Ionic.svg";
import Development from "../../../Images/Services/WebDesign/WebDesign1.png";
import ContentM from "../../../Images/Services/WebDesign/WebDesign2.png";
import CostEffective from "../../../Images/Services/WebDesign/CostEffective.png";
import Ecommerce from "../../../Images/Services/WebDesign/ECommerce.png";
import GoogleA from "../../../Images/Services/WebDesign/GoogleAnaytics.png";
import GTM from "../../../Images/Services/WebDesign/Gtm.png";
import LongTerm from "../../../Images/Services/WebDesign/LongTerm.png";
import Prices from "../../../Images/Services/WebDesign/PreciesApproach.png";
import WebSite from "../../../Images/Services/WebDesign/WebsiteDesign.png";
import WebDesingLeft from "../../../Images/Services/WebDesign/front-image.png";
import HelpYouWin from "../../Home/LetsFind";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function WebDesign() {
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
    <div className={`container-fluid WebBody`}>
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Web Design</title>
        <link rel="canonical" href="https://isearch.co.in/social" />
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
          content="https://isearch.co.in/static/media/backlinking.12d6aba19441a40b568f.png"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/backlinking.12d6aba19441a40b568f.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/backlinking.12d6aba19441a40b568f.png"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <div className="row firstRow">
        <div className="col-md-6 ">
          <div
            className={`img-container ${
              isScrolled ? "scrolled" : ""
            } d-flex justify-content-start align-items-center`}
          >
            <div className="img-wrapper mb-5">
              <div className="overlay"></div>
              <img src={WebDesingLeft} alt="webDesignLogo" />
            </div>
          </div>
        </div>
        <div className="col-md-6 main-container ">
          <div className="text-container Is-webdesign-header">
            <h1 className="mb-2">
              Powering Your Digital Presence: Choose the Best in Web
              Development.
            </h1>
            <h6 className="mt-3 mb-4">
              Capture the attention of your audience with innovative visual
              designs that effectively convey your message and gather specific
              data essential for delivering an optimal customer experience.
              iSearch, recognized as the premier Web Development Company in
              Pune, offers top-notch features for your business website.
            </h6>

            <button
              type="button"
              className="btn button "
              onClick={() => navigate("/contact")}
            >
              Schedule a meeting
            </button>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="container">
          <div className="row">
            <div class="col-12 col-lg-5">
              <div className="Isearch-Services">
                <div className="Iserach-Services-content">
                  <h2
                    className="Isearch-service-title"
                    id="overview-section-title"
                  >
                    Leading the Way in Top Custom Web Design Services
                  </h2>

                  <p>
                    Understanding the essence of customized web design, iSearch,
                    a trusted name in digital marketing, tailors solutions to
                    meet specific business objectives, processes, and branding
                    needs. Our approach involves creating unique features that
                    align seamlessly with your business requirements
                  </p>

                  <p>
                    Distinguished by flexibility and scalability, our custom web
                    design services are dedicated to building applications that
                    thrive in an evolving business environment. iSearch adopts a
                    structured approach and embraces client-friendly policies,
                    ensuring that our top-tier custom web design development
                    services are not only exceptional but also affordable,
                    turning your ideas into a tangible reality.
                  </p>

                  <p>
                    Leverage our extensive business experience and market
                    insights by entrusting your web design needs to iSearch.
                    Whether it's web design, e-commerce design, content
                    management system implementation, or the setup of Google
                    Analytics and Google Tag Manager, we are your reliable
                    partner in bringing your digital vision to life
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="Isearch-service-list ms-2">
                <div className="Isearch-widget my-3">
                  <div className="ihead">
                    <div className="i-icon">
                      <img src={WebSite} alt="website" className="ExxonD-img" />
                    </div>
                    <h3>Website Design</h3>
                  </div>
                  <div className="i-s-content">
                    <p>
                      Crafting a visually appealing and user-friendly interface,
                      website design focuses on creating an engaging digital
                      space that reflects a brand's identity. It involves layout
                      design, color schemes, navigation, and overall aesthetics
                      to enhance the user experience.
                    </p>
                  </div>
                </div>

                <div className="Isearch-widget my-3">
                  <div className="ihead">
                    <div className="i-icon">
                      <img
                        src={Ecommerce}
                        alt="Ecommerce"
                        className="ExxonD-img"
                      />
                    </div>
                    <h3>Ecommerce Website</h3>
                  </div>
                  <div className="i-s-content">
                    <p>
                      An ecommerce website is an online platform designed for
                      buying and selling goods or services. It includes features
                      like product listings, secure payment gateways, shopping
                      carts, and order processing, providing a seamless online
                      shopping experience for customers.
                    </p>
                  </div>
                </div>

                <div className="Isearch-widget my-3">
                  <div className="ihead">
                    <div className="i-icon">
                      <img
                        src={ContentM}
                        alt="ContentM"
                        className="ExxonD-img"
                      />
                    </div>
                    <h3>Content Management</h3>
                  </div>
                  <div className="i-s-content">
                    <p>
                      Content Management involves the creation, organization,
                      and publication of digital content on a website. Content
                      Management Systems (CMS) enable easy content updates,
                      ensuring that websites stay relevant, informative, and
                      aligned with business goals.
                    </p>
                  </div>
                </div>

                <div className="Isearch-widget my-3">
                  <div className="ihead">
                    <div className="i-icon">
                      <img src={GoogleA} alt="GoogleA" className="ExxonD-img" />
                    </div>
                    <h3>Google Analytics</h3>
                  </div>
                  <div className="i-s-content">
                    <p>
                      Google Analytics is a powerful web analytics tool that
                      provides insights into website traffic and user behavior.
                      It helps businesses track key metrics, such as page views,
                      user demographics, and conversion rates, to make
                      data-driven decisions and optimize website performance.
                    </p>
                  </div>
                </div>

                <div className="Isearch-widget my-3">
                  <div className="ihead">
                    <div className="i-icon">
                      <img src={GTM} alt="Gtm" className="ExxonD-img" />
                    </div>
                    <h3>GTM Setup</h3>
                  </div>
                  <div className="i-s-content">
                    <p>
                      Google Tag Manager is a tool that simplifies the process
                      of managing and implementing tags (snippets of code) on a
                      website. It allows marketers and website administrators to
                      add, update, and manage tags without directly editing the
                      site's code, streamlining the integration of analytics,
                      marketing, and other tracking tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="technology-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="Isearch-title-tech text-center">
                Technologies & Platforms We Work With
              </h3>

              <div className="row">
                <div className="col-12">
                  <Tabs
                    defaultActiveKey="frontend"
                    id="industry-tab"
                    className="mb-3 border-0"
                  >
                    <Tab eventKey="frontend" title="Frontend">
                      <ul className="mb-3 border-0 nav nav-tabs">
                        <li class="nav-item">
                          <img src={js} alt="javascript" className="w-100" />
                          <span>JavaScript</span>
                        </li>
                        <li>
                          <img src={html5} alt="html" className="w-100" />
                          <span>Html5</span>
                        </li>
                        <li>
                          <img src={css3} alt="css" className="w-100" />
                          <span>Css3</span>
                        </li>
                        <li>
                          <img
                            src={angularLogo}
                            alt="angular"
                            className="w-100"
                          />
                          <span>Angular</span>
                        </li>
                        <li>
                          <img src={ReactLogo} alt="react" className="w-100" />
                          <span>React</span>
                        </li>
                      </ul>
                    </Tab>
                    <Tab eventKey="backend" title="Backend">
                      <ul className="mb-3 border-0 nav nav-tabs">
                        <li class="nav-item">
                          <img src={JavaLogo} alt="java" className="w-100" />
                          <span>Java</span>
                        </li>
                        <li>
                          <img src={NestLogo} alt="nestjs" className="w-100" />
                          <span>Nest Js</span>
                        </li>
                        <li>
                          <img
                            src={NodejsLogo}
                            alt="nodejs"
                            className="w-100"
                          />
                          <span>NodeJs</span>
                        </li>
                        <li>
                          <img
                            src={DotNetLogo}
                            alt="dotnet"
                            className="w-100"
                          />
                          <span>.NET</span>
                        </li>
                      </ul>
                    </Tab>
                    <Tab eventKey="mobile" title="Mobile">
                      <ul className="mb-3 border-0 nav nav-tabs">
                        <li class="nav-item">
                          <img
                            src={FlutterLogo}
                            alt="flutter"
                            className="w-100"
                          />
                          <span>Flutter</span>
                        </li>
                        <li>
                          <img
                            src={ReactLogo}
                            alt="reactNative"
                            className="w-100"
                          />
                          <span>React Native</span>
                        </li>
                        <li>
                          <img src={IonicLogo} alt="ionic" className="w-100" />
                          <span>Ionic</span>
                        </li>
                        <li>
                          <img
                            src={AndroidLogo}
                            alt="Android"
                            className="w-100"
                          />
                          <span>Android SDK</span>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ValueOfferSection">
        <div class="container mt-5">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="iserach-Offer-title text-center">
                The Value We Offer Our Clients
              </h2>

              <h3 className="Offer-sebsection">
                We ensure your experience with us is hassle-free and
                transparent.
              </h3>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-md-6 my-3">
              <div class="card">
                <div class="icon mx-4 mt-4">
                  <img src={Prices} class="webDesignCardIcon" alt="..." />
                </div>
                <div class="text">
                  <h3 class="mt-3 mx-3">Precise Approach</h3>
                  <p class="mt-3 mx-3">
                    To achieve the best outcomes, our website development
                    services take a precise approach, utilizing targeted SEO and
                    data-driven strategies. We carefully consider every
                    initiative, coordinating it with your unique objectives to
                    achieve the greatest possible impact.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 my-3">
              <div class="card">
                <div class="icon mx-4 mt-4">
                  <img src={Development} class="webDesignCardIcon" alt="..." />
                </div>
                <div class="text">
                  <h3 class="mt-3 mx-3">360 Website Development</h3>
                  <p class="mt-3 mx-3">
                    From concept to execution, our website development services
                    encompasses every aspect of creating a robust online
                    presence. We handle design, functionality, user experience,
                    and optimization, providing a comprehensive solution for a
                    standout website.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-6 my-3">
              <div class="card">
                <div class="icon mx-4 mt-4">
                  <img
                    src={CostEffective}
                    class="webDesignCardIcon"
                    alt="..."
                  />
                </div>
                <div class="text">
                  <h3 class="mt-3 mx-3">Cost-Effective Pricing</h3>
                  <p class="mt-3 mx-3">
                    Take advantage of the advantages of premium website
                    development without going over budget. Our economical
                    pricing strategy maximizes the return on your investment by
                    guaranteeing that you receive premium services that are
                    customized to your budget.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 my-3">
              <div class="card">
                <div class="icon mx-4 mt-4">
                  <img src={LongTerm} class="webDesignCardIcon" alt="..." />
                </div>
                <div class="text">
                  <h3 class="mt-3 mx-3">Long Term Partnership:</h3>
                  <p class="mt-3 mx-3">
                    We don't just aim for short-term success; we're committed to
                    building a long-term partnership. Our digital marketing
                    services are geared toward sustainable growth, fostering a
                    collaborative relationship that evolves with your business
                    objectives over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  pt-5 pb-5 achievement">
        <div class="row tex-white d-flex justify-content-between">
          <div className="col-md-12 social-rp">
            <h3 className="mb-4 Is-GlobalC-right">
              “iSearch is not just another Digital Marketing company, we are a
              company which helps businesses globally to get the services they
              need, let it be SEO, Website Development, Ad Campaigns or anything
              else. iSearch is there to fulfill all your Digital Marketing
              needs.”
            </h3>
          </div>

          <div className="col-md-12 social-lp ">
            <h4 className=" text-center">Our Historic Results so far:</h4>

            <div className="stats row">
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>25000+</strong>
                <p className="fs-5">Web Pages Created</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>90%</strong>
                <p className="fs-5">Customer Retention</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>50+</strong>
                <p className="fs-5">Global Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid faq mt-4 pt-5">
        <h1 className="text-center mt-4 mb-4 pb-4">
          Frequently Asked Questions about SEO
        </h1>
        <Accordion id="accordionExample">
          <AccordionItem eventKey="0">
            <Accordion.Header>
              <h4>How does website design impact SEO?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Search engines favor websites with good design and user
                experience. A well-optimized, mobile-friendly, and fast-loading
                website contributes positively to search engine rankings,
                leading to increased visibility and organic traffic.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="1">
            <Accordion.Header>
              <h4>What is the role of analytics in web design?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Analytics tools, such as Google Analytics, provide valuable
                insights into user behavior, traffic sources, and website
                performance. Design decisions can be informed by analytics data
                to enhance user experience and achieve marketing goals.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="2">
            <Accordion.Header>
              <h4>
                What is the impact of website speed on user experience and SEO?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Slow-loading websites frustrate users and lead to higher bounce
                rates. Additionally, search engines consider page speed as a
                ranking factor. Optimizing images, leveraging browser caching,
                and using content delivery networks (CDNs) can improve website
                speed.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="3">
            <Accordion.Header>
              <h4>
                {" "}
                What are the key metrics to monitor in web analytics for digital
                marketing?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Key metrics include website traffic, bounce rate, conversion
                rate, average session duration, and traffic sources. These
                metrics provide insights into user engagement, the effectiveness
                of marketing channels, and overall website performance.
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

export default WebDesign;
