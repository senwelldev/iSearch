import React, { useEffect, useRef, useState } from "react";
import "./Seo.css";
import Backlinking from "../../../Images/Services/Seo/backlinking.webp";
import ecommerce from "../../../Images/Services/Seo/ecommerce.webp";
import guest from "../../../Images/Services/Seo/guest.webp";
import img1 from "../../../Images/Services/Seo/img1.webp";
import img2 from "../../../Images/Services/Seo/img2.webp";
import keyword from "../../../Images/Services/Seo/keyword.webp";
import link from "../../../Images/Services/Seo/link.webp";
import local from "../../../Images/Services/Seo/local.webp";
import Onpage from "../../../Images/Services/Seo/onpage.webp";
import Icon1 from "../../../Images/Services/Seo/icon1.webp";
import Icon2 from "../../../Images/Services/Seo/icon2.webp";
import Icon3 from "../../../Images/Services/Seo/icon3.webp";
import Icon4 from "../../../Images/Services/Seo/icon4.webp";
import Icon5 from "../../../Images/Services/Seo/icon5.webp";
import Icon6 from "../../../Images/Services/Seo/icon6.webp";
import Seo1 from "../../../Images/Services/Seo/Seo.webp";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionItem } from "react-bootstrap";
import HelpYouWin from "../../Home/LetsFind";
import { Helmet } from "react-helmet";

const Seo = () => {
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
    <div className="seoBody">
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>SEO</title>
        <link rel="canonical" href="https://isearch.co.in/seo" />
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
          content="https://isearch.co.in/static/media/onpage.b2965df72c743ea72018.png"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/onpage.b2965df72c743ea72018.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/onpage.b2965df72c743ea72018.png"
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
              <img src={Seo1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 main-container ">
          <div className="text-container ">
            <h1 className="mb-2">
              Climb Search Rankings: Unlock Premium Traffic with Organic SEO.
            </h1>
            <h6 className="mt-3 mb-4  ">
              Are you aiming to boost your visibility on Google and other search
              engines? Desire a surge in organic website traffic? Elevate your
              business with iSearch's Search Engine Optimization services –
              transforming stagnation into thriving success.
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
      <section className="branding">
        <div className="container mt-5 seo-Images-Container">
          <div className="row mt-5 d-flex align-items-center">
            <div className="col-md-6 img-section">
              <div className="img">
                <img
                  src={keyword}
                  className="img-thumbnail"
                  alt="Keyword Research"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mt-2">Keyword Research</h2>
              <p className="mt-5">
                iSearch, as an SEO agency, comprehends your niche and possesses
                the expertise to enhance your website's ranking for targeted
                search terms. Your assigned SEO specialist will assess your
                current keyword rankings, consider your desired keywords, and
                perform additional research to compile a strategic keyword list
                tailored to optimize your website within its competitive
                environment.
              </p>
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center ServicesImagesContainer-odd">
            <div className="col-md-6">
              <h2 className="mt-2">Onpage & Offpage SEO</h2>
              <p className="mt-5">
                Enhance your online visibility and attract high-quality traffic
                with iSearch. Our commitment is to align our SEO services with
                search engines' best practices, boosting your website's
                trustworthiness. The iSearch SEO team delivers unique,
                value-rich content, optimizes your headlines and HTML tags, and
                integrates high-resolution images to optimize your online
                presence. Building brand credibility and expanding your online
                exposure is essential, and iSearch is here to help. Partner with
                our SEO experts at iSearch to demonstrate your industry
                expertise. We leverage the power of social media marketing,
                strategic link building, and influencer marketing to cultivate
                qualified links and positive ratings, ensuring iSearch stands
                out in the digital landscape.
              </p>
            </div>
            <div className="col-md-6 img-section">
              <div className="img">
                <img
                  src={Onpage}
                  className="img-thumbnail"
                  alt="Onpage & Offpage SEO"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center">
            <div className="col-md-6 img-section">
              <div className="img">
                <img
                  src={Backlinking}
                  className="img-thumbnail"
                  alt="Backlinking"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mt-2">Backlinking</h2>
              <p className="mt-5">
                Backlinks play a crucial role in achieving higher search result
                rankings, but the quality of the links matters. That is why it's
                beneficial to collaborate with a search engine optimization
                company such as iSearch. iSearch boasts a specialized
                link-building team and established connections with numerous
                high-quality and relevant websites, ensuring the effectiveness
                of your link-building strategy
              </p>
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center ServicesImagesContainer-odd">
            <div className="col-md-6">
              <h2 className="mt-2">Local SEO</h2>
              <p className="mt-5">
                Data indicates that 70% of potential customers seek local
                businesses online. Elevate your company's local SEO standings
                through the optimization of your Google Business Profile, also
                known as Google My Business (GMB). This will help attract
                customers with high intent. Our services include enhancing your
                GMB profile and overseeing your online reputation management to
                expand your local audience.
              </p>
            </div>
            <div className="col-md-6 img-section">
              <div className="img">
                <img src={local} className="img-thumbnail" alt="Local SEO" />
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center">
            <div className="col-md-6 img-section">
              <div className="img">
                <img
                  src={ecommerce}
                  className="img-thumbnail"
                  alt="Ecommerce SEO"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mt-2">Ecommerce SEO</h2>
              <p className="mt-5">
                Enhance customer satisfaction by offering a seamless 24/7
                shopping experience, leading to higher client retention rates.
                iSearch Company specializes in initiating precise email
                marketing campaigns and optimizing your website for both mobile
                and voice search, ensuring personalized brand interactions.
                Additionally, we provide seamless Walmart Marketplace
                integrations aimed at boosting your sales volume.
              </p>
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center ServicesImagesContainer-odd">
            <div className="col-md-6">
              <h2 className="mt-2">Guest Posting</h2>
              <p className="mt-5">
                Expand and strengthen your website by building a network of
                powerful links. iSearch Company's guest post service is designed
                to establish a solid foundation for your site through white-hat,
                impactful links on relevant blogs. Our tailored guest post
                services, coupled with our SEO expertise, ensure a seamlessly
                integrated link in content that resonates with readers. Whether
                you aim to boost authority, increase traffic, or enhance brand
                awareness, iSearch's guest post services can be the key to
                achieving your business goals.
              </p>
            </div>
            <div className="col-md-6 img-section">
              <div className="img">
                <img
                  src={guest}
                  className="img-thumbnail"
                  alt="Guest Posting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container mt-5">
          <div className="row">
            <div className="text-paragraph mb-5">
              <h2 className="text-center">Our SEO Services</h2>
              <p className="text-center text-success">
                Increase Your Search Rankings and Get Discovered More Online
              </p>
            </div>
            <div className="col-md-4 my-2">
              <div className="card d-flex">
                <div className="icon">
                  <img src={Icon3} className="img-thumbnail" alt="..." />
                  <div className="text mt-3">
                    <h4>Dedicated SEO Professionals</h4>
                    <p>
                      At iSearch, we are committed to simplifying the intricate
                      and occasionally daunting process of search engine
                      optimization for our clients. Our approach involves
                      assigning each client a dedicated point of contact to
                      oversee their project. This ensures that you establish a
                      strong rapport with your iSearch SEO professional, and
                      they, in turn, familiarize themselves with your business
                      and grasp its distinct requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2 ">
              <div className="card ">
                <div className="icon">
                  <img src={Icon1} className="img-thumbnail" alt="..." />
                  <div className="text mt-3">
                    <h4>Experience Matters</h4>
                    <p>
                      For over 15 years, iSearch has been instrumental in
                      fostering the online growth of businesses across various
                      sectors, enabling them to generate increased revenue. With
                      a wealth of experience and a track record of client
                      success stories, iSearch is well-equipped to assist
                      businesses of any size in enhancing online visibility and
                      expanding their lead generation efforts. Several of our
                      SEO experts boast more than a decade of leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card d-flex">
                <div className="icon ">
                  <img src={Icon2} className="img-thumbnail" alt="..." />
                  <div className="text mt-3">
                    <h4>Relationships & Results</h4>
                    <p>
                      At iSearch, our foundation is built on our two fundamental
                      core values: Relationships and Results. We consider every
                      client as a cornerstone of our commitment. With a team of
                      SEO experts dedicated to assisting businesses across the
                      spectrum, from small enterprises to large, national
                      franchises, we aim for substantial growth. Our search
                      engine optimization company is dedicated to amplifying the
                      voices of our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4 my-2">
              <div className="card d-flex">
                <div className="icon">
                  <img src={Icon5} className="img-thumbnail" alt="..." />
                  <div className="text mt-3">
                    <h4>We Play Fair</h4>
                    <p>
                      At iSearch, we hold honesty and integrity as paramount
                      principles in all our endeavors. Our approach is grounded
                      in fair play, employing white hat SEO methods to achieve
                      results without resorting to spamming or manipulating the
                      system, which could result in potential Google penalties.
                      In essence, we uphold the notion that success in SEO
                      doesn't require shortcuts or unethical practices. As a
                      Google Partner,{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card ">
                <div className="icon">
                  <img src={Icon4} className="img-thumbnail" alt="..." />
                  <div className="text mt-3">
                    <h4>We’re Always Getting Better</h4>
                    <p>
                      SEO is a dynamic field, and so are we. The landscape of
                      SEO undergoes continual evolution due to numerous Google
                      algorithm updates annually, influencing ranking factors.
                      We consistently stay abreast of the latest developments
                      and trends, ensuring that our search engine optimization
                      company remains well-informed. Our commitment involves
                      continuous learning and adopting new techniques,
                      positioning us ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  my-2">
              <div className="card d-flex">
                <div className="icon">
                  <img src={Icon6} className="img-thumbnail" alt="..." />
                  <div className="text mt-3">
                    <h4>Transparent Reporting</h4>
                    <p>
                      In contrast to competitors who rely on deceptive tactics,
                      we prioritize complete transparency, enabling you to
                      directly observe the impact of our endeavors on enhancing
                      your online revenue. Our personalized and thorough
                      reporting incorporates Google Analytics reports,
                      furnishing a comprehensive overview of your site's SEO
                      performance. We consistently update you on keyword
                      rankings and present a monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="background-result mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <img src={img2} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid faq">
        <h1 className="text-center mt-4 mb-4 pb-4">
          Search Engine Optimization FAQs
        </h1>
        <Accordion id="accordionExample">
          <AccordionItem eventKey="0">
            <Accordion.Header>
              <h4> Why is SEO important for a website?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                SEO is crucial for increasing online visibility, attracting
                relevant traffic, andimproving the user experience. It helps
                websites rank higher on search engine results pages (SERPs),
                leading to more clicks and potential conversions.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="1">
            <Accordion.Header>
              <h4> What is the importance of keywords in SEO?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Keywords are essential in SEO as they reflect the terms users
                use to search for information. Strategic keyword placement in
                content helps search engines understand the relevance of a page
                to specific queries.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="2">
            <Accordion.Header>
              <h4>What is the role of backlinks in SEO?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Backlinks, or inbound links from other websites, contribute to a
                website's authority and trustworthiness. High-quality backlinks
                can positively impact search rankings.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="3">
            <Accordion.Header>
              <h4>
                What is the difference between organic and paid search results?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Organic search results are natural listings that appear based on
                relevance to the user's query, while paid search results are
                advertisements that appear at the top or bottom of the search
                results page based on bidding for specific keywords.
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
};

export default Seo;
