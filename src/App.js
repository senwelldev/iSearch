import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/Admin/Login/Login";
import Blog1 from "./Components/Blog/Blog1";
import Blog2 from "./Components/Blog/Blog2";
import Blog3 from "./Components/Blog/Blog3";
import Blog from "./Components/Blog/Blogs1";
import Careers from "./Components/Careers/CareerPage";
import JobApplicationForm from "./Components/Careers/JobApplicationForm";
import JobDetail from "./Components/Careers/JobDetails";
import ContactUs from "./Components/ContactUs/Contact";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Privacy from "./Components/Privacy/Privacy";
import Branding from "./Components/Services/More1/Branding";
import Content from "./Components/Services/More1/Content";
import Paid from "./Components/Services/More1/Paid";
import Seo from "./Components/Services/More1/Seo";
import Social from "./Components/Services/More1/Social";
import WebDesign from "./Components/Services/More1/WebDesign";
import Services from "./Components/Services/Services";
import ThankYouPage from "./Components/ThankYouPage/ThankYouPage";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const App = () => {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/contentServices" element={<Content />} />
            <Route path="/paidAdds" element={<Paid />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/webDesign" element={<WebDesign />} />
            <Route path="/social" element={<Social />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/blog1" element={<Blog1 />} />
            <Route path="/blog/blog2" element={<Blog2 />} />
            <Route path="/blog/blog3" element={<Blog3 />} />
            <Route path="/jobapplication" element={<JobApplicationForm />} />
            <Route path="/career/job/:jobId" element={<JobDetail />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
