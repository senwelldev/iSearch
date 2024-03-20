import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Images/isearchLogo2.webp";
import "./Navbar.css";

const Navbar2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleTabClick = (path) => {
    setActiveTab(path);
    navigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update active tab based on the current pathname
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  let navbarStyle =
    scrolling || isMenuOpen
      ? { background: "white", color: "black" }
      : { background: "transparent" };

  return (
    <div>
      <nav className="navbarBody" style={navbarStyle}>
        <div className="navLogo" onClick={() => handleTabClick("/")}>
          <img src={Logo} className="img-thumbnail" alt="..." loading="lazy" />
        </div>
        <div
          className="toggleContainer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="menuContainer">
          <div
            onClick={() => handleTabClick("/")}
            className={activeTab === "/" ? "active" : ""}
          >
            Home
          </div>
          <div
            onClick={() => handleTabClick("/about")}
            className={activeTab === "/about" ? "active" : ""}
          >
            About Us
          </div>
          <div
            onClick={() => handleTabClick("/services")}
            className={activeTab === "/services" ? "active" : ""}
          >
            Services
          </div>
          <div
            onClick={() => handleTabClick("/blog")}
            className={activeTab === "/blog" ? "active" : ""}
          >
            Blogs
          </div>
          <div
            onClick={() => handleTabClick("/careers")}
            className={activeTab === "/careers" ? "active" : ""}
          >
            Careers
          </div>
          <div
            onClick={() => handleTabClick("/contact")}
            className={activeTab === "/contact" ? "active" : ""}
          >
            Contact Us
          </div>
        </div>
      </nav>
      <div
        className="navCollapsed"
        onClick={() => setIsMenuOpen(false)}
        style={isMenuOpen ? { display: "block" } : { display: "none" }}
      >
        <div className="navCollapsed-Logo">
          <div className="navLogo" onClick={() => handleTabClick("/")}>
            <img src={Logo} className="img-thumbnail" alt="..." />
          </div>
          <div
            className="toggleContainer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div onClick={() => handleTabClick("/")}>Home</div>
        <div onClick={() => handleTabClick("/about")}>About Us</div>
        <div onClick={() => handleTabClick("/services")}>Services</div>
        <div onClick={() => handleTabClick("/blog")}>Blogs</div>
        <div onClick={() => handleTabClick("/careers")}>Careers</div>
        <div onClick={() => handleTabClick("/contact")}>Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar2;
