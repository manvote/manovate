import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCloud, FaRobot, FaShieldAlt, FaMobileAlt, FaDatabase, FaNetworkWired, FaCode, FaChartLine, FaCogs } from "react-icons/fa";
import "./solution.css";
import introImage from "./solution.jpg"; // 👈 import your image
import outroImage from "./solution1.jpg"; // 👈 import your image
import { HeadProvider, Title, Meta } from 'react-head';

const solutionsData = [
  { icon: <FaCloud />, title: "Cloud Integration", desc: "Seamless cloud solutions to scale your business.Seamless cloud solutions to scale your business." },
  { icon: <FaRobot />, title: "AI & Automation", desc: "Intelligent automation to optimize processes.Seamless cloud solutions to scale your business." },
  { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Protect your data with our advanced security solutions.Seamless cloud solutions to scale your business." },
  { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "High-quality mobile applications for iOS and Android.Seamless cloud solutions to scale your business." },
  { icon: <FaDatabase />, title: "Database Management", desc: "Robust database solutions for data-driven decisions.Seamless cloud solutions to scale your business." },
  { icon: <FaNetworkWired />, title: "Networking Solutions", desc: "Reliable networking infrastructure for your business.Seamless cloud solutions to scale your business." },
  { icon: <FaCode />, title: "Full-Stack Development", desc: "End-to-end web and software development services.Seamless cloud solutions to scale your business." },
  { icon: <FaChartLine />, title: "Analytics & BI", desc: "Actionable insights from data analytics.Seamless cloud solutions to scale your business." },
  { icon: <FaCogs />, title: "Custom Solutions", desc: "Tailored software solutions for unique needs.Seamless cloud solutions to scale your business." },
];

export default function Solutions() {
  const navigate = useNavigate(); // navigation hook

  const handleContactClick = () => {
    navigate("/contact"); // navigate to /contact route
  };
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // trigger animation after component mounts
    setLoaded(true);
  }, []);

  return (
    <>
     <HeadProvider>
        <Title>Digital Solutions & Business Innovation | Manovate 2025</Title>
        <Meta
          name="description"
          content="Discover Manovate's cutting-edge digital solutions and business innovation strategies. Transform, optimize, and scale your operations for 2025 and beyond."
        />
        <Meta
          name="keywords"
          content="digital solutions 2025, business innovation, IT transformation, enterprise growth strategies, AI-powered digital solutions, cloud integration, business process automation, future-ready IT solutions, technology-driven business growth, digital transformation experts"
        />
      </HeadProvider>


    <div>
      {/* Hero Banner */}
      <div className="solutions-hero">
        <div>
          <h1 className="solutions-title">Solution</h1>
          <nav className="solutions-breadcrumbs">
            <Link to="/" className="solutions-link">Home</Link> &gt; <span>Solution</span>
          </nav>
        </div>
      </div>
    
      {/* Intro Image + Text Section */}
<div className="solutions-intro-section">
  <div className="intro-image">
    <img src={introImage} alt="Solutions Illustration" />
  </div>
  <div className="intro-text">
    <p>
      <strong>Innovative Technology Driving Business Growth.</strong> 
      Our solutions are designed to streamline operations, enhance productivity, and deliver measurable results. Explore our wide range of services and find the perfect fit for your business needs.
      Our solutions are designed to streamline operations, enhance productivity, and deliver measurable results. Explore our wide range of services and find the perfect fit for your business needs.
    </p>
  </div>
</div>


      <div className="solutions-grid">
        {solutionsData.map((solution, index) => (
          <div
            key={index}
            className={`solution-card ${loaded ? "fade-in" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="card-icon">{solution.icon}</div>
            <h3 className="card-title">{solution.title}</h3>
            <p className="card-desc">{solution.desc}</p>
            <div className="card-arrow">→</div>
          </div>

          
        ))}
      </div>

      {/* Outro Image + Text Section */}
<div className="solutions-outro-section">
  <div className="outro-text">
    <p>
      <strong>Custom Solutions Tailored For You.</strong>
      We understand that every business is unique. Our team designs software and technology solutions that fit your specific needs, ensuring maximum efficiency and impact.
      We understand that every business is unique. Our team designs software and technology solutions that fit your specific needs, ensuring maximum efficiency and impact.
      We understand that every business is unique. Our team designs software and technology solutions that fit your specific needs, ensuring maximum efficiency and impact.
    </p>
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
