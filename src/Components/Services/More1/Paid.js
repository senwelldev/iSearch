import "./Paid.css";
import "./Structure.css";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionItem } from "react-bootstrap";
import PaidMarketing from "../../../Images/Services/Paid/PaidMarketing.webp";
import AMazon from "../../../Images/Services/Paid/AMazon ads.webp";
import Google from "../../../Images/Services/Paid/Google & FB Adas.webp";
import Mobile from "../../../Images/Services/Paid/Mobile ads.webp";
import PPC from "../../../Images/Services/Paid/PPC reseller services.webp";
import Social from "../../../Images/Services/Paid/Social Media ADsa.webp";
import check from "../../../Images/Services/Paid/check.webp";
import cross from "../../../Images/Services/Paid/cross.webp";
import HelpYouWin from "../../Home/LetsFind";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Paid() {
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
    <div className={`container-fluid paidBody`}>
      {/* ------Code for meta tags of this page------ */}

      <Helmet>
        <title>Paid Adds Marketing</title>
        <link rel="canonical" href="https://isearch.co.in/paidAdds" />
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
      <div className="row firstRow">
        <div className="col-md-6 ">
          <div
            className={`img-container ${
              isScrolled ? "scrolled" : ""
            } d-flex justify-content-start align-items-center`}
          >
            <div className="img-wrapper mb-5">
              <div className="overlay"></div>
              <img src={PaidMarketing} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 main-container column">
          <div className="text-container ">
            <h1 className="mb-2">
              Marketing That Elevates Your Online Presence
            </h1>
            <h6 className="mt-3 mb-4  ">
              Our Paid Marketing Services increase productivity, increasing
              brand awareness and overall ROI
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

      {/* section-2  */}
      <div className="container-fluid  mt-5 pt-5 mb-4">
        <div className="row d-flex justify-content-evenly  ServicesImagesContainer ServicesImagesContainer-odd">
          <div className="col-md-6  column">
            <h2 className="heading mb-5">Google & Facebook Ads</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Google Ads, formerly known as Google AdWords, is a powerful
                online advertising platform developed by Google. It allows
                businesses to create and display ads across various Google
                services, including search results, YouTube, and partner
                websites. With a pay-per-click (PPC) model, advertisers bid on
                keywords relevant to their target audience. Google Ads enables
                precise targeting, real-time tracking, and analytics to maximize
                ad effectiveness.
              </p>
              <p>
                Facebook Advertisers can create visually engaging ads that
                appear in users' news feeds, Instagram, Messenger, and the
                Facebook Audience Network. Facebook Ads leverages detailed user
                demographics and interests for precise targeting. Its diverse ad
                formats, including image and video ads, carousel ads, and more,
                enable businesses to convey their message effectively. The
                platform provides robust analytics to measure ad performance and
                optimize campaigns for better results.
              </p>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="Services-RightConatiner-Img">
              <img src={Google} alt=".." />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  mb-2 pt-5 ">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer">
          <div className="col-md-5  ">
            <div className="Services-LefttConatiner-Img">
              <img src={Social} alt=".." />
            </div>
          </div>
          <div className="col-md-6 column">
            <h2 className="heading mb-5">Social Media Ads:</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Social media ads are targeted promotional messages strategically
                placed on popular social networking platforms such as Facebook,
                Instagram, Twitter, and LinkedIn. These ads leverage the vast
                user data available on these platforms to reach specific
                demographics, interests, and behaviors. Social media ads come in
                various formats, including image and video ads, carousel ads,
                and sponsored posts. Businesses use social media ads to enhance
                brand visibility, drive engagement, and achieve specific
                marketing objectives. With advanced targeting options and
                analytics, social media ads offer a dynamic and effective way
                for businesses to connect with their target audience in the
                online social sphere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-5 achievement ">
        <div class="row tex-white d-flex justify-content-between">
          <div className="col-md-12 social-rp">
            <h3 className="text-white mb-4">
              “Our Paid Ads Services are Cost-Effective, Reliable and
              Satisfactory as we help increase awareness amongst the targeted
              markets. At iSearch, you will get assurance that every dollar
              invested will be converted into several dollars of profit.”
            </h3>
          </div>
          <div className="col-md-12 social-lp ">
            <h4 className="text-center">
              Here is our historic achievements so far
            </h4>

            <div className="stats row">
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>40Lakhs+</strong>
                <p className="fs-5">Wasted Budget Saved</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center col-md-4">
                <strong>130%+</strong>
                <p className="fs-5">Average Engagement Increase</p>
              </div>
              <div className="d-flex flex-column align-items-center col-md-4 text-center">
                <strong>100+</strong>
                <p className="fs-5">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5  pt-5">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer ServicesImagesContainer-odd">
          <div className="col-md-6  column">
            <h2 className="heading mb-5">Mobile Ads:</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Mobile ads are compact, visually engaging advertisements
                designed for display on smartphones and tablets. These ads
                leverage the unique capabilities of mobile devices, including
                touchscreens and location services, to create interactive and
                highly targeted campaigns. Whether in-app or on mobile websites,
                these ads are optimized for the mobile user experience, offering
                businesses a direct and effective way to reach audiences on the
                go. With various formats like banners, interstitials, and video
                ads, mobile advertising captures attention and drives engagement
                in the palm of users' hands.
              </p>
            </div>
          </div>
          <div className="col-md-5  ">
            <div className="Services-RightConatiner-Img">
              <img src={Mobile} alt=".." />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid   mb-2 pt-5">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer">
          <div className="col-md-5 ">
            <div className="Services-LefttConatiner-Img">
              <img src={AMazon} alt=".." />
            </div>
          </div>
          <div className="col-md-6  column ">
            <h2 className="heading mb-5">Amazon Ads:</h2>
            <div className="content-wrap sub-heading ">
              <p>
                Amazon Ads is an advertising platform that allows businesses to
                promote their products directly on the world's largest online
                marketplace, Amazon. Through strategically placed ads, sellers
                can increase product visibility, drive traffic to their
                listings, and boost sales. Amazon Ads offers various ad formats,
                including sponsored products, sponsored brands, and sponsored
                display ads, enabling businesses to reach their target audience
                at different stages of the customer journey. With robust
                targeting options and performance analytics, Amazon Ads empowers
                sellers to optimize their campaigns and maximize their presence
                on the e-commerce giant.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5  pt-5 ">
        <div className="row d-flex justify-content-evenly ServicesImagesContainer ServicesImagesContainer-odd">
          <div className="col-md-6  column ">
            <h2 className="heading mb-5">PPC Reseller Services:</h2>
            <div className="content-wrap sub-heading ">
              <p>
                PPC (Pay-Per-Click) Reseller Services are specialized solutions
                offered by iSearch that focuses on managing and optimizing PPC
                campaigns on behalf of other businesses. Acting as strategic
                partners, we handle the intricacies of keyword bidding, ad
                creation, and campaign management to drive targeted traffic and
                maximize ROI for their clients. These services provide
                businesses with expert assistance in navigating the complexities
                of online advertising platforms, ensuring effective and
                efficient utilization of PPC budgets to achieve marketing goals.
              </p>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="Services-RightConatiner-Img">
              <img src={PPC} alt=".." />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row ">
          <div className="col-md-6 d-flex flex-column align-items-end mb-5 column">
            <h2 className="text-center heading-right p-3">we work with</h2>
            <ul className="list">
              <li className="work-li shadow d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  We collaborate with businesses across a wide range of
                  industries, leveraging our expertise to tailor effective
                  campaigns.
                </p>
              </li>
              <li className="work-li shadow blue d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Our services cater to well-established businesses looking to
                  enhance their digital presence and achieve growth.
                </p>
              </li>
              <li className="work-li shadow d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  We actively collaborate with e-commerce ventures, optimizing
                  their paid ads for increased visibility and conversions.
                </p>
              </li>

              <li className="work-li shadow blue d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Whether local or global, we work with a diverse array of
                  enterprises seeking effective paid advertising strategies.
                </p>
              </li>
              <li className="work-li shadow   d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Our expertise extends to technology and SaaS companies, aiding
                  them in achieving their marketing objectives.
                </p>
              </li>
              <li className="work-li shadow  blue d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  We collaborate with educational institutions, supporting their
                  digital marketing efforts.
                </p>
              </li>
              <li className="work-li shadow   d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  We actively contribute to the missions of non-profit
                  organizations, aiding them in achieving their goals.
                </p>
              </li>
              <li className="work-li shadow  blue d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={check}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  We work with financial service providers, helping them
                  navigate the competitive landscape through targeted campaigns.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-start mb-5">
            <h2 className="text-center heading-left p-3">we don't work with</h2>
            <ul className="list ">
              <li className="work-li shadow d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Unethical or Illegal Businesses We refrain from engaging with
                  any activities or entities involved in unethical or illegal
                  practices.
                </p>
              </li>
              <li className="work-li shadow red d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Startups with Undefined Offerings While we support startups,
                  we avoid partnering with those lacking a clear value
                  proposition or undefined offerings.
                </p>
              </li>
              <li className="work-li shadow d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Non-Compliant Businesses We do not engage with businesses that
                  do not comply with industry regulations, standards, or legal
                </p>
              </li>
              <li className="work-li shadow red d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Quick-Fix or Get-Rich-Quick Schemes We steer clear of
                  campaigns promoting unrealistic expectations or get-rich-quick
                  schemes that lack credibility.
                </p>
              </li>
              <li className="work-li shadow d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Controversial or Offensive Content We avoid associations with
                  content that is controversial, offensive, or inappropriate in
                  nature.
                </p>
              </li>
              <li className="work-li shadow red d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Financially Unstable Businesses For stability and mutual
                  success, we do not work with businesses facing significant
                  financial instability.
                </p>
              </li>
              <li className="work-li shadow  d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Misleading or Deceptive Products/Services We avoid promoting
                  products or services that are misleading, deceptive, or lack
                  genuine value.
                </p>
              </li>
              <li className="work-li shadow red d-flex justify-content-around align-items-center">
                {" "}
                <img
                  src={cross}
                  alt=""
                  width={30}
                  height={30}
                  className="me-3"
                />
                <p>
                  Unaligned Ethical Practices Businesses not aligned with
                  ethical practices and values are excluded from our
                  collaboration.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid faq">
        <h1 className="text-center mt-4 mb-4 pb-4">
          Frequently Asked Questions
        </h1>
        <Accordion id="accordionExample">
          <AccordionItem eventKey="0">
            <Accordion.Header>
              <h4>What is Paid Advertising?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Paid advertising, also known as pay-per-click (PPC) marketing,
                involves businesses paying a fee each time their ad is clicked.
                This model is commonly used on search engines and social media
                platforms to drive targeted traffic to a website.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="1">
            <Accordion.Header>
              <h4>Which Platforms Support Paid Advertising?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Popular platforms for paid advertising include Google Ads for
                search and display, Facebook Ads for social media, LinkedIn Ads
                for professional targeting, and Amazon Ads for e-commerce.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="2">
            <Accordion.Header>
              <h4>How Can I Determine the Right Budget for My PPC Campaign?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Your budget depends on factors like your advertising goals,
                industry competition, and target audience. Start with a budget
                you're comfortable with and adjust based on campaign
                performance.
              </p>
            </Accordion.Body>
          </AccordionItem>

          <AccordionItem eventKey="3">
            <Accordion.Header>
              <h4>How Can I Track the Success of My PPC Campaign?</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-left">
                Use analytics tools provided by the advertising platform to
                track key metrics such as clicks, impressions, conversion rates,
                and return on ad spend (ROAS).
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
