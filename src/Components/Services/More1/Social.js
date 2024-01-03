import "./Social.css";
import "./Structure.css";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionItem } from "react-bootstrap";
import image1 from "../../../Images/Services/Social/SMM.png";
import Planet from "./Planet/Planet";
import blog from "../../../Images/Services/Social/blog.png";
import content from "../../../Images/Services/Social/sm-content.png";
import analytic from "../../../Images/Services/Social/sm-analytics.png";
// ---------CardIcons
import Writing from "../../../Images/Services/Social/CardIcons/Content Writing.png";
import Management from "../../../Images/Services/Social/CardIcons/Reputation Management.png";
import Advertising from "../../../Images/Services/Social/CardIcons/Social Media Advertising.png";
import Brand from "../../../Images/Services/Social/CardIcons/Social Media Brand Management.png";
import Follower from "../../../Images/Services/Social/CardIcons/Social Media Follower Growth.png";
import Media from "../../../Images/Services/Social/CardIcons/Social Media Marketing.png";
import Design from "../../../Images/Services/Social/CardIcons/Website Design and Development.png";
import Production from "../../../Images/Services/Social/CardIcons/Video Production.png";
import Internet from "../../../Images/Services/Social/CardIcons/Social Media SEO    Social Media Management Services _ Thrive Internet Marketing Agency https___thriveagency.com.png";
import HelpYouWin from "../../Home/LetsFind";
import { Helmet } from "react-helmet";

function Paid() {
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
    <div className={`container-fluid Social-media-Body`}>
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Social Media Marketing</title>
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
          content="https://isearch.co.in/static/media/Social%20Media%20ADsa.98ffb2e7f574e5a76278.png"
        />
        <meta
          property="og:image"
          content="https://isearch.co.in/static/media/Social%20Media%20ADsa.98ffb2e7f574e5a76278.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:image"
          content="https://isearch.co.in/static/media/Social%20Media%20ADsa.98ffb2e7f574e5a76278.png"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* --------------------------------------------------------- */}
      <div className="row first-Row">
        <div className="col-md-6 ">
          <div
            className={`img-container ${
              isScrolled ? "scrolled" : ""
            } d-flex justify-content-start align-items-center`}
          >
            <div className="img-wrapper mb-5">
              <div className="overlay"></div>
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 first-section-container ">
          <div className="text-container ">
            <h1 className="mb-2">
              Strategic Social Brilliance: Elevate Your Brand with Our Social
              Media Marketing Expertise
            </h1>
            <h6 className="mt-3 mb-4  ">
              Unlock the Power of Digital Conversations and Amplify Your
              Presence Across Platforms.
            </h6>

            <button type="button" className="btn button ">
              Schedule a meeting
            </button>
          </div>
        </div>
      </div>

      {/* section-2   Blogging */}

      <div className="container-fluid  mt-5 pt-5 mb-4">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer-odd">
          <div className="col-md-6 content-left column ">
            <h2 className="heading mb-5">Blogging</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Article or Content Submission services, like iSearch Company's
                Blogger Outreach Program, are crucial for SEO. They leverage
                article directories to establish high-quality backlinks,
                contributing to improved search engine rankings.
              </p>
              <p>
                iSearch Company's Blogger Outreach Program is a strategic
                initiative that collaborates with influential bloggers and
                website owners. This collaboration enhances brand promotion,
                utilizing their reach and credibility to amplify your brand,
                products, or services.
              </p>

              <p>
                The program's team, comprising skilled writers and marketing
                experts, conducts in-depth research in your niche. The resulting
                content is not only informative but also highly beneficial for
                your target audience. By incorporating top keyword, it ensures
                link relevance and has the potential to boost rankings and drive
                significant traffic to your site.
              </p>
            </div>
          </div>
          <div className="col-md-6  ">
            <Planet img={blog} />
          </div>
        </div>
      </div>
      <div className="container-fluid   mb-2 pt-5 border-top-none">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-6 planet-side ">
            <Planet img={content} />
          </div>
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Social Media Content</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Unlock your brand's potential with iSearch Company's Social
                Media Content Services. We offer comprehensive solutions to
                boost your online presence, drive website traffic, and establish
                a strong brand identity across platforms like Facebook,
                Snapchat, Twitter, TikTok, Instagram, and Pinterest.
              </p>
              <p>
                Leverage our social media services to meet various goals, from
                increasing website traffic and creating a distinctive brand
                identity to raising awareness, fostering positive associations,
                and actively engaging with your target audience. Don't miss out
                on valuable connections in the dynamic landscape of social
                media.
              </p>
              <p>
                Effective social media marketing is a powerful tool for business
                success, creating loyal brand advocates and driving leads and
                sales. Let iSearch Company be your strategic partner, guiding
                you through impactful social media marketing campaigns tailored
                to your business goals. Start a conversation with us to align
                your social strategy with business objectives and navigate the
                dynamic realm of social media successfully.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section second Social media content ======================== */}
      <div className="container-fluid  pt-5 pb-5 achievement">
        <div class="row  d-flex justify-content-between">
          <div className="col-md-12 social-rp">
            <h3 className=" mb-4">
              “iSearch's team possesses a varied set of skills to cater to our
              requirements and objectives. They exhibit strong technical
              expertise, employ data-driven strategies, and demonstrate a robust
              understanding of content marketing and PR.”
            </h3>
          </div>
          <div className="col-md-12 social-lp ">
            <h4 className=" text-center">What people are saying</h4>

            <div className="stats row">
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>80%+</strong>
                <p className="fs-5">revenue on Facebook Ads</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>60%+</strong>
                <p className="fs-5">revenue year-over-year</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>25%+</strong>
                <p className="fs-5">new customers year-over-year</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5  pt-5">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer-odd">
          <div className="col-md-6 content-left column">
            <h2 className="heading mb-5">Social Media Analytics</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Social media is a modern communication platform, replacing
                traditional media like radio and newspapers. It serves as a
                widespread source for disseminating information to a broad
                audience.
              </p>
              <p>
                iSearch introduces a cutting-edge Social Media Analytics System,
                collecting data from various platforms. This technology-driven
                approach empowers businesses to make informed decisions by
                analyzing social media data, a valuable resource for
                understanding public perception, consumer preferences, and
                market trends.
              </p>
              <p>
                Unlike traditional surveys, Social Media Analytics at iSearch
                provides real-time insights into brand perception, product
                preferences, and market acceptance. This in-house developed
                system enables businesses to quantify data without relying on
                less reliable focus groups, revolutionizing the way companies
                strategize for growth.
              </p>
            </div>
          </div>
          <div className="col-md-5 planet-side ">
            <Planet img={analytic} />
          </div>
        </div>
      </div>

      {/* section-4  */}
      <section class="smm-solutions">
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="text-paragraph mb-5">
              <h2 class="text-center">
                iSearch's Social Media Management Solutions
              </h2>
              <p class="text-center text-success">
                Reliable Approaches and Current Strategies for Generating
                Quality Leads
              </p>
            </div>
            <div class="col-md-4 col-sm-6 my-2 ">
              <div class="cards ">
                <div class="icon ">
                  <img src={Brand} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Social Media Brand Management</h4>
                    <p>
                      What is social media management without effective brand
                      oversight? Whether it's overseeing Facebook or TikTok,
                      iSearch strategically plans, implements, and oversees both
                      organic and paid brand campaigns across various platforms.
                      Our tailored solutions as a social media management
                      company empower you to cultivate a positive brand image,
                      expand your outreach, and enhance both sales and profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4  col-sm-6 my-2 ">
              <div class="cards ">
                <div class="icon ">
                  <img src={Management} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Social Media Reputation Management</h4>
                    <p>
                      Establish a favorable brand identity by nurturing positive
                      relationships with all stakeholders, addressing reviews,
                      and expanding your social media following. Integrated into
                      our offerings is online reputation management (ORM),
                      enabling you to mold public perception on social
                      platforms. Gain trust as we accumulate votes of confidence
                      from your customers – a crucial element of any business
                      social media management strategy at iSearch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-2">
              <div class="cards ">
                <div class="icon ">
                  <img src={Media} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Social Media Marketing:</h4>
                    <p>
                      Engaging with your target audience and promoting your
                      products or services digitally is made possible through
                      social platforms. However, there's a strategic approach to
                      enhance your brand visibility and accomplish business
                      objectives, and it's known as social media marketing.
                      Within our suite of services, we encompass social media
                      management, a comprehensive process that integrates market
                      research, strategy formulation, consumer engagement, and
                      the management of campaign-driven social media marketing
                      initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 my-2">
              <div class="cards ">
                <div class="icon ">
                  <img src={Advertising} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Social Media Brand Management</h4>
                    <p>
                      What is social media management without effective brand
                      oversight? Whether it's overseeing Facebook or TikTok,
                      iSearch strategically plans, implements, and oversees both
                      organic and paid brand campaigns across various platforms.
                      Our tailored solutions as a social media management
                      company empower you to cultivate a positive brand image,
                      expand your outreach, and enhance both sales and profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-2">
              <div class="cards ">
                <div class="icon ">
                  <img src={Follower} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Social Media Advertising:</h4>
                    <p>
                      Opt for the social strategy that captures the attention of
                      63 percent of consumers: paid social advertising! Harness
                      the potential of this profitable trend and formulate an
                      effective social media management strategy with the
                      expertise of iSearch professionals. We identify platforms
                      where your target audience is active and craft tailor-made
                      ads that resonate with them. Our ad campaigns are tailored
                      to your budget, transforming clicks into conversions and
                      optimizing your return on ad spend (ROAS).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-2">
              <div class="cards ">
                <div class="icon ">
                  <img src={Writing} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Social Media Content Writing</h4>
                    <p>
                      Studies indicate that more than 50 percent of consumers
                      turn to social media for product research. Grab their
                      interest with compelling and valuable posts created by the
                      social media content management and creation experts at
                      iSearch. We create organic social content that captivates
                      your followers, influencing their decisions, while paid
                      social content directs traffic and potential leads to your
                      site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-2">
              <div class="cards ">
                <div class="icon ">
                  <img src={Design} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Website Design and Development</h4>
                    <p>
                      When directing individuals from your social pages to your
                      website, ensure that they experience ease of use and
                      seamless navigation. As we oversee social media accounts,
                      we also assess the compliance of your site with the
                      Americans with Disabilities Act (ADA), ensuring
                      functionality and optimization in line with best
                      practices. Our web design and development team establishes
                      a responsive and mobile-first digital home to enhance
                      conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-2">
              <div class="cards ">
                <div class="icon ">
                  <img src={Production} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Video Production</h4>
                    <p>
                      Showcase videos across your accounts to help users grasp
                      your product or service. Videos are a valuable addition to
                      your marketing toolkit, and our in-house team is available
                      to manage the entire production process, a task that other
                      YouTube management companies typically delegate. We have
                      experts in the field who can conceptualize, shoot, edit,
                      and complete your ad, demo, explainer, event highlights,
                      or testimonials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 my-2">
              <div class="cards ">
                <div class="icon ">
                  <img src={Internet} class="img-thumbnail" alt="..." />
                  <div class="text mt-3">
                    <h4>Social Media SEO</h4>
                    <p>
                      Direct your website visitors or ensure visibility for your
                      links in social search results with effective social media
                      optimization. With the assistance of your dedicated social
                      media manager, website links are shared across your social
                      profiles, enhancing visibility and prolonging their
                      lifespan. Social media management firms can assist you in
                      capitalizing on the fact that search engines can index
                      your organic posts if they align with people's queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid faq">
        <h1 className="text-center mt-4 mb-4 pb-4">
          Frequently Asked Questions
        </h1>
        <Accordion id="accordionExample">
          <AccordionItem eventKey="0">
            <Accordion.Header>
              <h4>How Can Social Media Marketing Benefit My Business?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Social media marketing enhances brand visibility, engages your
                target audience, drives website traffic, and fosters customer
                loyalty. It's a powerful tool for building a strong online
                presence and boosting overall business growth.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="1">
            <Accordion.Header>
              <h4>Which Social Media Platforms Should I Focus On?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                The choice of platforms depends on your target audience and
                business goals. Popular options include Facebook, Instagram,
                Twitter,TikTok and LinkedIn. We analyze your unique needs to
                recommend the most effective platforms for your brand.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="2">
            <Accordion.Header>
              <h4>What Sets iSearch's Social Media Services Apart?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                iSearch combines expertise with a technology-driven Social Media
                Analytics System. We go beyond basic posting to provide
                data-driven insights, ensuring your social strategy aligns with
                business objectives and maximizes impact.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="3">
            <Accordion.Header>
              <h4>
                How Does Social Media Analytics Contribute to Business Growth?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Social Media Analytics at iSearch extracts valuable insights
                from platforms, helping you understand brand perception,
                consumer preferences, and market trends. This data-driven
                approach empowers you to make informed decisions, driving growth
                and success.
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

export default Paid;
