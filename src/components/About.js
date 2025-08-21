import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./movate1.png";
import "./Home.css";
import "./about.css";


function About() {
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

<div className="about">
<section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Where Innovation<br />Meets Execution</h1>
        <p className="hero-description">
         Manovate is redefining digital transformation, empowering organizations to innovate and thrive with 
         IT services and consulting. We simplify complexity, turning powerful capabilities into
          AI-driven solutions that streamline operations, elevate customer and employee experiences, and drive measurable results.
        </p>
      </div>
    </section>

    <section className="hero-image-section">
      <div className="overlay">
        <div className="hero-text">
          <h1>Fueled by Curiosity and a<br />Commitment to Excellence</h1>
          <p>
            Manovate partners with you to create solutions that drive<br />
            meaningful and measurable outcomes.
          </p>
        </div>
      </div>
    </section>

     <section className="who-section">
      <div className="who-container">
        <p className="who-label">WHO WE ARE</p>
        <h2 className="who-title">Your Partner for Smarter Digital Transformation</h2>
        <p className="who-description">
           Manovate is a next-generation IT consulting company specializing in AI, game development, and custom software solutions.
We empower businesses to innovate, scale, and succeed in the digital era through intelligent, user-centric technology
With a focus on innovation and excellence.
        </p>
      </div>
    </section>


    <section className="mcards-sections">
     <div className="mpromise-cards">
          <div className="mpromise-card">
            {/* <img src={code} alt="Drive FI Business Growth" /> */}
            <h3>Visionary Leadership</h3><p>Our leaders combine decades of expertise in IT, operations, and customer success to deliver cutting-edge solutions.</p>
          </div>
          <div className="mpromise-card">
            {/* <img src={mobile} alt="Operational Efficiency" /> */}
            <h3>Customer-Centric Approach</h3>
            <p>We prioritize understanding your unique challenges to create solutions that meet your goals.</p>
          </div>
          <div className="mpromise-card">
            {/* <img src={code} alt="Implementation Certainty" /> */}
            <h3>Proven Solutions </h3>
      <p>Our team’s experience spans diverse industries, ensuring measurable results powered by the ServiceNow platform.</p>
      
      </div>
          <div className="mpromise-card">
            {/* <img src={code} alt="Implementation Certainty" /> */}
            <h3> Innovation-Driven Culture </h3>
      <p>Empowering our teams to explore new technologies, solve complex challenges, and deliver impactful digital experiences.</p>
      
      </div>
      </div>
    </section>


  <section className="who-section">
      <div className="who-container">
        <p className="who-label">WHAT WE DO</p>
        <h2 className="who-title">Turning Complicated Challenges Into Seamless Solutions</h2>
        <p className="who-description">
          At Manovate, we specialize in transforming complex business challenges into seamless digital solutions. From automating workflows with AI to creating immersive gaming experiences, we provide future-ready technologies that empower your organization.
Whether you're looking to enhance operational efficiency, innovate through custom applications, our multidisciplinary team delivers scalable, intelligent solutions that drive measurable impact.
With a strong focus on innovation, agility, and user experience, we ensure that every project we undertake leads to smarter results and sustainable success.
        </p>
      </div>
    </section>


     <section className="zero-image-section">
      <div className="overlay">
        <div className="hero-text">
          <h1>Take the Next Step<br />With Manovate</h1>
          <p>
            Our team is ready to help you unlock your organization’s potential <br></br> through innovative technology and strategic partnerships.<br></br> Let’s build the future, together.
          </p>
        </div>
      </div>

    </section>

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
</div>


  );
}

export default About;