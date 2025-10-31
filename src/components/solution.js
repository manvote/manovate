import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./solution.css";
import introImage from "./solution.jpg";
import outroImage from "./solution1.jpg";
import { HeadProvider, Title, Meta } from "react-head";
import { Box, Typography } from "@mui/material";
import logo from "./manovate.png";
import { FiMenu, FiX } from "react-icons/fi";
import {FaMapMarkerAlt,FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Solutions() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeadProvider>
        <Title>Solutions | Manovate Technology</Title>
        <Meta
          name="description"
          content="Explore Manovate’s IT and Non-IT solutions that drive efficiency, innovation, and growth across industries."
        />
      </HeadProvider>

      <div>
        {/* Hero Section */}
        <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} alt="Kumaran Systems Logo" className="nav-logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
            <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/products" onClick={toggleMenu}>Products</a></li>
          <li><a href="/solution" onClick={toggleMenu}>Solutions</a></li>
         
        
          <li><a href="/careers" onClick={toggleMenu}>Careers</a></li>
          
        </ul>

        <div className="nav-right">
          <a href="/contact" className="get-in-touch">Get In Touch →</a>
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundImage:
              "linear-gradient(135deg, rgba(124, 170, 255, 0.9) 0%, rgba(0, 89, 255, 0.82) 100%), url('/images/breadcrumb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: "48px", margin: 0, fontWeight: 600 }}>
            Solution
          </h1>
          <div style={{ marginTop: "10px", fontSize: "16px", color: "#ddd" }}>
            <a
              href="/"
              style={{ color: "#fff", textDecoration: "none", marginRight: "5px" }}
            >
              Home
            </a>{" "}
            &gt; <span>Solution</span>
          </div>
        </div>
      </div>

        {/* Intro Image + Text Section */}
        <div className="solutions-intro-section">
          <div className="intro-image">
            <img src={introImage} alt="Solutions Illustration" />
          </div>
          <div className="intro-text">
            <h2>Solutions That Transform Businesses</h2>
            <p>
              At <strong>Manovate Technology</strong>, we turn business challenges into intelligent, scalable IT and Non-IT solutions.
 Our goal is to help organizations innovate faster, operate smarter, and grow sustainably in a connected world.
 From digital development to automation, cloud, and enterprise systems, we create solutions that deliver measurable outcomes.
 We combine strategy, technology, and execution to drive transformation across industries.
 Every solution we build is designed to enhance performance, efficiency, and long-term value.
            </p>
          </div>
        </div>

        {/* --- Solutions Grid Section --- */}
<Box className="solutions-grid">
  <Typography variant="h4" className="solutions-subtitle">Our Solution</Typography>
  <br></br>

  <Box className="solutions-grid-container">
    {/* 1. Digital & Development Solutions */}
    <Box className={`solution-card ${loaded ? "fade-in" : ""}`}>
      <Typography variant="h3">Digital & Development Solutions</Typography>
      <ul>
        <li>Website & Mobile Apps: Responsive, secure, and fast digital platforms.</li>
        <li>E-commerce Platforms: Scalable solutions for seamless customer experiences.</li>
        <li>Custom Software: Tailored applications that optimize operations and deliver measurable business impact.</li>
      </ul>
    </Box>

    {/* 2. AI & Automation Solutions */}
    <Box className={`solution-card ${loaded ? "fade-in" : ""}`}>
      <Typography variant="h3">AI & Automation Solutions</Typography>
      <ul>
        <li>Machine Learning & AI: Predictive analytics, recommendation systems, and intelligent automation.</li>
        <li>Workflow Automation: Streamlining business processes for efficiency.</li>
        <li>Chatbots & Virtual Assistants: Enhancing engagement and operational speed.</li>
        <li>IoT & Computer Vision: Smart integrations for data-driven insights.</li>
      </ul>
    </Box>

    {/* 3. Cloud, SaaS & Communication */}
    <Box className={`solution-card ${loaded ? "fade-in" : ""}`}>
      <Typography variant="h3">Cloud, SaaS & Communication</Typography>
      <ul>
        <li>Cloud Solutions & Integration: Scalable, secure, and flexible cloud architectures.</li>
        <li>SaaS Applications: Enterprise-ready tools to drive business continuity.</li>
        <li>Unified Communications (UCaaS): Seamless collaboration and connectivity.</li>
      </ul>
    </Box>

    {/* 4. Enterprise Tools & Security */}
    <Box className={`solution-card ${loaded ? "fade-in" : ""}`}>
      <Typography variant="h3">Enterprise Tools & Security</Typography>
      <ul>
        <li>CRM / ERP Systems: Optimized for productivity and business intelligence.</li>
        <li>HRMS & Inventory Management: Streamlined processes for workforce and assets.</li>
        <li>Cybersecurity Services: Audits, compliance, and protection against evolving threats.</li>
      </ul>
    </Box>

    {/* 5. Non-IT Solutions */}
    <Box className={`solution-card ${loaded ? "fade-in" : ""}`}>
      <Typography variant="h3">Non-IT Solutions</Typography>
      <ul>
        <li>Business Strategy & Operations: Branding, accounting, and financial operations solutions.</li>
        <li>Marketing & Customer Engagement: Digital marketing, content management, and CX optimization.</li>
        <li>Administrative Support & Scheduling: Efficient operational support for smoother workflows.</li>
      </ul>
    </Box>

    <Box className={`solution-card ${loaded ? "fade-in" : ""}`}>
      <Typography variant="h3">Technology Consulting & Support</Typography>
      <ul>
        <li>Empowering businesses with strategic guidance, continuous improvement, and end-to-end tech support.</li>
        <li>IT Consulting & Strategy: Aligning technology with business goals for sustainable growth.</li>
        <li>System Integration: Connecting digital ecosystems for smooth workflows.</li>
        <li>Maintenance & Support: Ensuring performance, uptime, and scalability.</li>
      </ul>
    </Box>
  </Box>
</Box>


        {/* Outro Section */}
<div className="solutions-outro-section">
  <div className="outro-text">
    <h3>How We Deliver Value</h3>
    <p>
      Our solutions are designed not just to solve problems, but to create measurable
      business impact. By combining IT and Non-IT expertise, we enable organizations
      to innovate, scale, and operate efficiently.
    </p>

    {/* Stylish Link */}
    <a href="/services" className="explore-link">
      Explore All Services →
    </a>
  </div>

  <div className="outro-image">
    <img src={outroImage} alt="Custom Solutions Illustration" />
  </div>
</div>


        {/* CTA Section */}
        <div className="solutions-cta">
          <p className="cta-text">
            Have a project in mind? Let’s build something amazing together!
          </p>
          <button className="cta-button" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>

           {/* Footer */}
            
      {/* Footer */}
            
      <footer className="footer">
        {/* <div className="footer-logo">
                <img src={logo} alt="footer-logo" />
              </div> */}
            <div className="footer-top">
              {/* Logo */}
              {/* <div className="footer-logo">
                <img src={logo} alt="footer-logo" />
              </div> */}
      
              {/* Navigation Links */}
              <ul className="footer-nav">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/careers">CAREERS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/solution">SOLUTIONS</Link></li>
              </ul>
            </div>
       <hr className="footer-divider" />
      
            <div className="footer-bottom">
              {/* Copyright */}
              <p>© 2025 Manovate Technologies | Innovating The Future</p>
      
              {/* Social Icons */}
              <div className="footer-socials">
                <a href="https://www.linkedin.com/company/108395213/admin/dashboard/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                
                <a href="https://share.google/1muxM9QFVEQhZBK1k" target="_blank" rel="noreferrer">
       <FaMapMarkerAlt />
                </a>
                <a
        href="https://www.instagram.com/manovate_tech/"
        target="_blank"
        rel="noreferrer"
        >
        <FaInstagram />
       </a>
          <a
                  href="https://www.facebook.com/profile.php?id=61581412741189"
                  target="_blank"
                  rel="noreferrer"
                  >
                  <FaFacebook />
                  </a>
              </div>
            </div>
          </footer>
      
    </>
  );
}
