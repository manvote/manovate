import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./movate1.png";
import "./Home.css";
import "./services.css";
import vedio1 from "./vedio (2).mp4";
import p1 from "./aidevcom.jpg";
import p2 from "./aiage.jpg";
import p3 from "./chatbot.jpg";
import p4 from "./ssoft.jpg";
import p5 from "./smobile.jpg";
import p6 from "./aicons.jpg";
import p7 from "./voiceass.jpg";
import p8 from "./webdevvv.jpg";
import p9 from "./airecmmmmm.jpg";
import p10 from "./sitm.jpg";
import p11 from "./sai.jpg";
import p12 from "./chatttt.jpg";
import p13 from "./sui.jpg";
import p14 from "./clouda.png";
import p15 from "./banking.jpg";
import p16 from "./sitset.jpg";
import p17 from "./machine.jpg";
import p18 from "./sec.jpg";

function Services() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
 <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="ProTech Logo" />
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/solution">Solution</Link>
          <Link to="/expertise">Expertise</Link>
          <Link to="/contact" className="contact-icon">📞</Link> 
        </nav>

        {/* Hamburger Icon */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </header>
   
   <section class="services-hero">
  <div class="services-content">
    <h1>Our Services</h1>
  </div>
</section>

{/*services section start*/}
<section className="services-feature">
  <div className="services-container">
    {/* Left Content */}
    <div className="services-text">
      <span className="services-label">OUR SERVICE</span>
      <h2>Software Cloud Development</h2>
      <h4>Custom Software Solutions</h4>
      <p>
        We provide tailored cloud solutions that optimize business processes, 
        improve scalability, and increase efficiency. Our services ensure 
        long-term value and innovation for your business.
      </p>
    </div>

    {/* Right Image / Video */}
    <div className="services-media">
      <div className="video-overlay">
        <video autoPlay loop muted playsInline >
          <source src={vedio1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
    </div>
  </div>
</section>

<section className="services1-showcase">
  <h4 className="section1-label">OUR PROJECTS</h4>
  <h2 className="section1-title">Our Success Stories</h2>

  <div className="services1-grid">
    <div className="serviceS1-card" style={{ backgroundImage: `url(${p1})` }}>
      <div className="serviceS1-content">
        <h3>AI DEVELOPMENT COMPANY</h3>
        <p>We deliver advanced AI-powered software solutions that help businesses automate tasks, analyze data, and innovate faster. From predictive modeling to intelligent automation, we create scalable AI systems tailored to your goals.</p>
      </div>
    </div>

    <div className="serviceS1-card"style={{ backgroundImage: `url(${p2})` }}>
      <div className="serviceS1-content">
        <h3>AI AGENTS DEVELOPMENT</h3>
        <p>Our AI agents are designed to act autonomously, making real-time decisions, automating workflows, and improving customer engagement. They adapt to your business processes and ensure faster, smarter execution.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p3})` }}>
      <div className="serviceS1-content">
        <h3>AI CHATBOT DEVELOPMENT SERVICES</h3>
        <p>We design intelligent chatbots that provide seamless customer support, automate routine interactions, and enhance user engagement across platforms like websites, apps, and messaging services.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p4})` }}>
      <div className="serviceS1-content">
        <h3>AI ASSISTANT DEVELOPMENT SERVICES </h3>
        <p>Build personalized AI assistants that handle tasks, scheduling, and business operations. Our assistants integrate seamlessly into your systems, boosting efficiency and productivity.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p5})` }}>
      <div className="serviceS1-content">
        <h3>COMPUTER VISION AI SOLUTIONS</h3>
        <p>From image recognition to video analysis, we create computer vision systems that enable object detection, facial recognition, quality inspection, and more — unlocking new levels of automation and accuracy.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p6})` }}>
      <div className="serviceS1-content">
        <h3>AI CONSULTING SERVICES</h3>
        <p>Our experts guide you through AI adoption with tailored strategies, proof of concepts, and implementation roadmaps. We ensure AI solutions align with your business goals and deliver measurable ROI.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p7})` }}>
      <div className="serviceS1-content">
        <h3>AI VOICE ASSISTANT DEVELOPMENT</h3>
        <p>We create AI-powered voice assistants that deliver natural, human-like conversations. Integrated with smart devices and apps, they provide hands-free interactions for better customer experiences.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p9})` }}>
      <div className="serviceS1-content">
        <h3>AI RECOMMENDATION SYSTEM </h3>
        <p>Personalized recommendation engines that increase sales, boost engagement, and enhance customer loyalty. Our AI systems analyze behavior and preferences to deliver the right suggestion at the right time.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p10})` }}>
      <div className="serviceS1-content">
        <h3>AI AUTOMATION SERVICE</h3>
        <p>We help you automate repetitive business processes with AI-powered workflows. This reduces human error, saves time, and improves operational efficiency.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p11})` }}>
      <div className="serviceS1-content">
        <h3>AIOT SOLUTIONS</h3>
        <p>Combining AI with IoT, we create smart ecosystems for predictive maintenance, connected devices, and real-time monitoring — driving intelligent automation and data-driven insights.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p12})` }}>
      <div className="serviceS1-content">
        <h3>CHATGPT</h3>
        <p>We integrate ChatGPT-powered solutions for businesses — enabling smarter customer interactions, content creation, and workflow automation with state-of-the-art natural language processing.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p13})` }}>
      <div className="serviceS1-content">
        <h3>MOBILE DEVELOPMENT</h3>
        <p>We build user-friendly, secure, and high-performing mobile apps for Android and iOS. Designed with engaging UI/UX, our apps ensure seamless experiences across devices.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p8})` }}>
      <div className="serviceS1-content">
        <h3>WEB DEVELOPMENT</h3>
        <p>Our web development services deliver scalable, secure, and responsive websites using modern frameworks. We ensure your digital presence is powerful and user-centric.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p14})` }}>
      <div className="serviceS1-content">
        <h3>CLOUD SOLUTIONS DEVELOPMENT</h3>
        <p>We provide end-to-end cloud solutions including migration, deployment, and optimization. Our services enable scalability, cost efficiency, and business continuity.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p15})` }}>
      <div className="serviceS1-content">
        <h3>BANKING SOFTWARE DEVELOPMENT</h3>
        <p>We build secure and scalable banking and fintech solutions, including payment systems, digital wallets, and fraud detection tools to modernize financial services.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p16})` }}>
      <div className="serviceS1-content">
        <h3>CUSTOM SOFTWARE DEVELOPMENT</h3>
        <p>Tailored software solutions designed specifically for your business challenges. We develop applications that streamline workflows, boost efficiency, and drive innovation.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p17})` }}>
      <div className="serviceS1-content">
        <h3>MACHINE LEARNING DEVELOPMENT SERVICES</h3>
        <p>We design and train machine learning models that enable predictive analytics, intelligent decision-making, and automation. Our ML solutions evolve with your data for continuous improvement.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p18})` }}>
      <div className="serviceS1-content">
        <h3>E-COMMERCE DEVELOPMENT</h3>
        <p>Our e-commerce solutions deliver robust online stores with secure payments, product management, and scalable features. We ensure a smooth shopping experience that drives conversions.</p>
      </div>
    </div>
  </div>
</section>

      <footer className="footer">
        <div className="footer-container">
          {/* Map Section */}
          <div className="footer-column footer-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2449058361417!2d80.24510617377567!3d12.956174487357748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d598dfdff9b%3A0xce67fc14aa2cc711!2sManovate%20Technologies!5e0!3m2!1sen!2sin!4v1755758103475!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      
          {/* Useful Links */}
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
      
          {/* Contact */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>
              📍 Greeta TechPark - GREETA TOWERS,<br />
              Industrial Estate, Perungudi,<br />
              Chennai, Tamil Nadu 600096
            </p>
          </div>
        </div>
      
        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© Manovate Technologies | Innovating The Future</p>
          <img src={logo} alt="Manovate Logo" className="bottom-logo" />
        </div>
      </footer>      
</div>
  );
}

export default Services;
