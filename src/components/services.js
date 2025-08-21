import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./movate1.png";
import "./Home.css";
import "./services.css";
import vedio1 from "./vedio.mp4";
import cyber from "./shield-halved-solid-full.svg";
 import cloud from "./cloud-solid-full.svg";
import gear from "./gears-solid-full.svg";
import code from "./code-solid-full.svg";
import mobile from "./mobile-screen-button-solid-full.svg";
import people from "./people-group-solid-full.svg";
import server from "./server-solid-full.svg";
import chart from "./chart-line-solid-full.svg";
import ai from "./robot-solid-full.svg";
import block from "./link-solid-full.svg";
import pencil from "./pencil-solid-full.svg";
import charts from "./chart-area-solid-full.svg";
import world from "./earth-asia-solid-full.svg";
import monitor from "./desktop-solid-full.svg";
import search from "./magnifying-glass-solid-full.svg";
import cart from "./cart-shopping-solid-full.svg";



function Services() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="homepage">
      {/* Navbar */}
<header className="navbar">
  <div className="logo-section">
    <img src={logo} alt="Logo" className="logo" />
    {/* <span className="brand">LifelineConnect</span> */}
  </div>

  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
    <Link to="/">Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/services">Services</Link>
    {/* <Link to="/projects">Our projects</Link> */}
    <Link to="/careers" >Careers</Link>
    {/* <Link to="/blog"></Link>
    <Link to="/how-it-works">How it Works</Link> */}
    <Link to="/contact" className="contact-btn">Contact us</Link>
  </nav>
</header>
      <div className="background-video-container">
  <video autoPlay loop muted playsInline className="background-video">
    <source src={vedio1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="video-overlay">
    {/* Optional content over video */}
     <h1 className="overlay-title">Manovate Technologies<br/>Innovation The Future</h1>
    <h3> Empowering industries with AI, automation, and next-gen semiconductor solutions</h3>
  </div>
</div>
<section className="manovate-promise">
  <div className="manovate-text">
    <h2>Manovate – Empowering Digital Transformation</h2>
    <p>
      Manovate is dedicated to delivering cutting-edge IT services that transform how businesses operate, 
      grow, and innovate. We specialize in crafting intelligent, scalable, and efficient technology solutions tailored
       for the digital era. From AI-driven platforms to 
      custom enterprise applications, our goal is to empower your organization with smart, secure, and future-ready solutions.
</p>
    <p>
      With a foundation in first principles thinking, we have streamlined our product ecosystem into scalable AI models, powerful software platforms, 
      and integrated APIs—significantly accelerating transformation and innovation for our clients.
    </p>
    <p>
      Backed by our in-house technologies and IP—ranging from custom AI frameworks to
       end-to-end software development tools—Manvote delivers enterprise-grade solutions with agility, high performance
      , and ease of deployment, enabling organizations to lead confidently in the digital era.
    </p>
  </div>
  </section>
   <div className="mpromise-cards">
      <div className="mpromise-card">
        <img src={code} alt="Drive FI Business Growth" />
        <h3>Custom Software Development</h3><p>Tailored applications to solve specific business challenges and streamline operations.</p>
      </div>
      <div className="mpromise-card">
        <img src={mobile} alt="Operational Efficiency" />
        <h3>Mobile App Development</h3>
        <p>Native and cross-platform mobile apps designed for
  iOS and Android.</p>
      </div>
      <div className="mpromise-card">
        <img src={code} alt="Implementation Certainty" />
        <h3>Web Development
  </h3>
  <p>Responsive, fast, and secure websites using modern
  frameworks.
  
  </p>
      </div>
      <div className="mpromise-card">
        <img src={gear} alt="30% lower TCO" />
        <h3>DevOps Services
  </h3>
  <p>CI/CD pipelines, infrastructure automation, and continuous deployment solutions.
  
  </p>
      </div>
         <div className="mpromise-card">
        <img src={cyber} alt="30% lower TCO" />
        <h3>Cybersecurity Solutions</h3>
  <p>Security audits, penetration testing, threat detection, and
compliance solutions.</p>
      </div>
         <div className="mpromise-card">
        <img src={cloud} alt="30% lower TCO" />
        <h3>Cloud Services</h3>
  <p>Cloud migration, management, and integration with platforms like AWS, Azure, and Google Cloud.</p>
      </div>
       <div className="mpromise-card">
        <img src={people} alt="30% lower TCO" />
        <h3>IT Consulting</h3>
  <p>Expert guidance to align your IT strategy with business goals.</p>
      </div>
        <div className="mpromise-card">
        <img src={server} alt="30% lower TCO" />
        <h3>Managed IT Services</h3>
  <p>24/7 monitoring, support,and maintenance of IT infrastructure.</p>
      </div>
           <div className="mpromise-card">
        <img src={chart} alt="30% lower TCO" />
        <h3>Data Analytics & Business Intelligence</h3>
  <p>Transform data into actionable insights using analytics tools and dashboards.</p>
      </div>
            <div className="mpromise-card">
        <img src={ai} alt="30% lower TCO" />
        <h3>Artificial Intelligence & Machine Learning</h3>
  <p>AI solutions including chatbots, recommendation engines,and predictive analytics.</p>
      </div>
           <div className="mpromise-card">
        <img src={block} alt="30% lower TCO" />
        <h3>Blockchain Development</h3>
  <p>Custom blockchain applications for secure and transparent transactions.</p>
      </div>
            <div className="mpromise-card">
        <img src={pencil} alt="30% lower TCO" />
        <h3>UI/UX Design</h3>
  <p>Engaging, user-friendly interfaces designed for a seamless user experience.</p>
      </div>
                 <div className="mpromise-card">
        <img src={charts} alt="30% lower TCO" />
        <h3>Enterprise Resource Planning (ERP)</h3>
  <p>ERP system development and customization for finance, HR, and operations.</p>
      </div>
                      <div className="mpromise-card">
        <img src={people} alt="30% lower TCO" />
        <h3>Customer Relationship Management (CRM)</h3>
  <p>Development and integration of CRM platforms to manage customer data and improve engagement.</p>
      </div>
                    <div className="mpromise-card">
        <img src={world} alt="30% lower TCO" />
        <h3>Internet of Things (IoT)</h3>
  <p>IoT systems development for connected devices,remote monitoring, and automation.</p>
      </div>
        <div className="mpromise-card">
        <img src={monitor} alt="30% lower TCO" />
        <h3>IT Infrastructure Setup</h3>
        <p>Network design, server configuration, and office IT setup services.</p>
      </div>
       <div className="mpromise-card">
        <img src={search} alt="30% lower TCO" />
        <h3>QA & Testing Services</h3>
        <p>Manual and automated testing to ensure product reliability and performance.</p>
      </div>
        <div className="mpromise-card">
        <img src={cart} alt="30% lower TCO" />
        <h3>E-commerce Development</h3>
        <p>Scalable e-commerce platforms with secure payment gateways and product management.</p>
      </div>
      </div>
       <footer className="custom-footer">
        <div className="footer-container">
          {/* Left - Map Embed */}
          <div className="footer-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2449058361417!2d80.24510617377567!3d12.956174487357748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d598dfdff9b%3A0xce67fc14aa2cc711!2sManovate%20Technologies!5e0!3m2!1sen!2sin!4v1755758103475!5m2!1sen!2sin"
        width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      
          {/* Middle - Links */}
          <div className="footer-links">
            <h3>Useful Links</h3>
            <hr />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              {/* <li><Link to="/project">Our Projects</Link></li> */}
              <li><Link to="/contact">Contact Us</Link></li>
              <li> <Link to="/careers" >Careers</Link></li>
            </ul>
          </div>
      
          {/* Right - Contact Info */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <hr />
            
            <p>📍 Greeta TechPark -
      GREETA TOWERS, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096</p>
          </div>
        </div>
      
        <div className="footer-bottom">
         <p>© Manovate Technologies<br/>Innovation The Future</p>
          <img src={logo} alt="Manovate Logo" className="bottom-logo" />
        </div>
      </footer>
      
      
</div>
  );
}

export default Services;