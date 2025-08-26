import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./movate1.png";
import "./Home.css";
import "./services.css";
import vedio1 from "./vedio (2).mp4";
import p1 from "./scyber.jpg";
import p2 from "./scloud.jpg";
import p3 from "./sdata.jpg";
import p4 from "./ssoft.jpg";
import p5 from "./smobile.jpg";
import p6 from "./sweb.jpg";
import p7 from "./sdev.jpg";
import p8 from "./serp.jpg";
import p9 from "./sit.jpg";
import p10 from "./sitm.jpg";
import p11 from "./sai.jpg";
import p12 from "./sblock.jpg";
import p13 from "./sui.jpg";
import p14 from "./scrm.jpg";
import p15 from "./siot.jpg";
import p16 from "./sitset.jpg";
import p17 from "./sqa.jpg";
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
      {/* <button className="services-btn">Learn More</button> */}
    </div>

    {/* Right Image / Video */}
    <div className="services-media">
      
      {/* If video */}
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
      {/* <img src={code} alt="Cybersecurity Enhancement" /> */}
      <div className="serviceS1-content">
        <h3>CYBERSECURITY ENHANCEMENT</h3>
        <p>A leading global retailer relied on us to strengthen their cybersecurity posture. By upgrading legacy systems with modern security frameworks, we reduced risks, 
                streamlined compliance, and safeguarded customer trust across multiple regions.</p>
      </div>
    </div>

    <div className="serviceS1-card"style={{ backgroundImage: `url(${p2})` }}>
      {/* <img src={cloud} alt="Cloud Migration" /> */}
      <div className="serviceS1-content">
        <h3>CLOUD MIGRATION</h3>
        <p>we executed a seamless cloud migration — modernizing legacy systems, improving scalability, and enabling real-time insights. The result:
                 faster decision-making, reduced operational expenses, and the agility to scale across regions.</p>
      </div>
    </div>

    <div className="serviceS1-card" style={{ backgroundImage: `url(${p3})` }}>
      {/* <img src={chart} alt="Data Analytics Success" /> */}
      <div className="serviceS1-content">
        <h3>DATA ANALYTICS</h3>
        <p>An e-commerce retailer was overwhelmed with fragmented data, limiting their ability to act quickly. By implementing a modern analytics solution, we unified their data streams and turned information into actionable insights. 
                The result: smarter strategies, faster decision-making, and measurable business impact.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p4})` }}>
      {/* <img src={chart} alt="Custom Software Development" /> */}
      <div className="serviceS1-content">
        <h3>CUSTOM SOFTWARE DEVELOPMENT</h3>
        <p>Tailored applications to solve specific business challenges and streamline operations.</p>
      </div>
    </div>
      <div className="serviceS1-card" style={{ backgroundImage: `url(${p5})` }}>
      {/* <img src={chart} alt="mobile app Development" /> */}
      <div className="serviceS1-content">
        <h3>MOBILE APP DEVELOPMENT</h3>
        <p>Native and cross-platform mobile apps designed for
  iOS and Android.</p>
      </div>
    </div>
    <div className="serviceS1-card" style={{ backgroundImage: `url(${p6})` }}>
      {/* <img src={chart} alt="web Development" /> */}
      <div className="serviceS1-content">
        <h3>WEB DEVELOPMENT</h3>
        <p>Responsive, fast, and secure websites using modern
  frameworks.</p>
      </div>
    </div>
 <div className="serviceS1-card" style={{ backgroundImage: `url(${p7})` }}>
      {/* <img src={chart} alt="devops" /> */}
      <div className="serviceS1-content">
        <h3>DevOps </h3>
        <p>CI/CD pipelines, infrastructure automation, and continuous deployment solutions.</p>
      </div>
    </div>
    <div className="serviceS1-card" style={{ backgroundImage: `url(${p9})` }}>
      {/* <img src={chart} alt="it consulting" /> */}
      <div className="serviceS1-content">
        <h3>IT CONSULTING </h3>
        <p>Expert guidance to align your IT strategy with business goals.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p10})` }}>
      {/* <img src={chart} alt="managed it services" /> */}
      <div className="serviceS1-content">
        <h3>MANAGED IT SERVICES</h3>
        <p>24/7 monitoring, support,and maintenance of IT infrastructure.</p>
      </div>
    </div>
      <div className="serviceS1-card" style={{ backgroundImage: `url(${p11})` }}>
      {/* <img src={chart} alt="Artificial Intelligence & Machine Learning" /> */}
      <div className="serviceS1-content">
        <h3>ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</h3>
        <p>AI solutions including chatbots, recommendation engines,and predictive analytics.</p>
      </div>
    </div>
        <div className="serviceS1-card" style={{ backgroundImage: `url(${p12})` }}>
      {/* <img src={chart} alt="Blockchain technology" /> */}
      <div className="serviceS1-content">
        <h3>BLOCKCHAIN DEVELOPMENT</h3>
        <p>Custom blockchain applications for secure and transparent transactions.</p>
      </div>
    </div>
       <div className="serviceS1-card" style={{ backgroundImage: `url(${p13})` }}>
      {/* <img src={chart} alt="UI/UX Design" /> */}
      <div className="serviceS1-content">
        <h3>UI/UX Design</h3>
        <p>Engaging, user-friendly interfaces designed for a seamless user experience.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p8})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>ENTERPRISE RESOURCE PLANNING (ERP)</h3>
        <p>ERP system development and customization for finance, HR, and operations.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p14})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>CUSTOMER RELATIONSHIP MANAGEMENT (CRM)</h3>
        <p>Development and integration of CRM platforms to manage customer data and improve engagement.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p15})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>INTERNET OF THINGS(IoT)</h3>
        <p>IoT systems development for connected devices,remote monitoring, and automation.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p16})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>IT INFRASTRUCTURE SETUP</h3>
        <p>Network design, server configuration, and office IT setup services.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p17})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>QA & TESTING SERVICES</h3>
        <p>Manual and automated testing to ensure product reliability and performance.</p>
      </div>
    </div>
     <div className="serviceS1-card" style={{ backgroundImage: `url(${p18})` }}>
      {/* <img src={chart} alt="Enterprise Resource Planning" /> */}
      <div className="serviceS1-content">
        <h3>E-COMMERCE DEVELOPMENT</h3>
        <p>Scalable e-commerce platforms with secure payment gateways and product management.</p>
      </div>
    </div>
    {/* Repeat for other services/projects */}
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