import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blogs1";
import Careers from "./Components/Careers/CareerPage";
import ContactUs from "./Components/ContactUs/Contact";
import Blog1 from "./Components/Blog/Blog1";
import Blog2 from "./Components/Blog/Blog2";
import Blog3 from "./Components/Blog/Blog3";
import JobApplicationForm from "./Components/Careers/JobApplicationForm";
import Branding from "./Components/Services/More1/Branding";
import Content from "./Components/Services/More1/Content";
import Paid from "./Components/Services/More1/Paid";
import Seo from "./Components/Services/More1/Seo";
import WebDesign from "./Components/Services/More1/WebDesign";
import Social from "./Components/Services/More1/Social";
import JobDetail from "./Components/Careers/JobDetails";
import Login from "./Components/Admin/Login/Login";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SitemapData from "./Sitemap";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const App = () => {
  return (
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
          <Route
            path="/sitemap.xml"
            element={<SitemapData></SitemapData>}
          ></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
