import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./solution.css";
import introImage from "./solution.jpg";
import outroImage from "./solution1.jpg";
import { HeadProvider, Title, Meta } from "react-head";
import { Box, Typography } from "@mui/material";


export default function Solutions() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

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
              At <strong>Manovate Technology</strong>, we turn challenges into scalable IT and
              Non-IT solutions that drive efficiency, innovation, and growth across
              industries.
            </p>
          </div>
        </div>

        {/* --- Solutions Grid Section --- */}
<Box className="solutions-grid">
  <Typography variant="h4" className="solutions-subtitle">Our Solution Pillars</Typography>
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
    </>
  );
}
