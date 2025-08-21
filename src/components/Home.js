// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaPen } from "react-icons/fa";
import "./Home.css";
import vedio1 from "./vedio.mp4";
import phone from "./phone-solid-full.svg";
import mail from "./envelope-solid-full.svg";

import logo from "./movate1.png";

// import heroImg from "./hero.png";
import code from "./code-solid-full.svg";
import mobile from "./mobile-screen-button-solid-full.svg";
// import cloud from "./cloud-solid-full.svg";
// import cyber from "./shield-halved-solid-full.svg";
// import people from "./people-group-solid-full.svg";
// import server from "./server-solid-full.svg";
// import chart from "./chart-line-solid-full.svg";
// import ai from "./robot-solid-full.svg";
// import block from "./link-solid-full.svg";
import gear from "./gears-solid-full.svg";
// import work from "./work.jpg";
// import pencil from "./pencil-solid-full.svg";
// import charts from "./chart-area-solid-full.svg";
// import world from "./earth-asia-solid-full.svg";
// import serviceIcon from "./service-icon.png";
// import clientImg from "./client.png";

function Home() {
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


      {/* <section className="hero"> */}
          {/* <video autoPlay loop muted playsInline className="background-video">
    <source src={vedio1} type="video/mp4" />
    Your browser does not support the video tag.
  </video> */}
        {/* <h1>Manovate Innovation The Future</h1>
       
 <h3>  Empowering industries with AI, automation, and next-gen semiconductor solutions</h3>
      </section> */}
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


     {/* THE INTELLECT PROMISE SECTION */}
<section className="intellect-promise">
  <div className="intellect-text">
    <h2>The Manovate Promise</h2>
    <p>
      In the world of technology innovation, Manvote is committed to driving business growth and 
      digital value by building intelligent solutions through cutting-edge AI and robust software 
      development. Our approach simplifies complexity and ensures reliable delivery, resulting in 
      reduced costs and improved customer satisfaction.
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

  <div className="promise-cards">
    <div className="promise-card">
      <img src={code} alt="Drive FI Business Growth" />
      <h3>Custom Software Development</h3><p>Tailored applications to solve specific business challenges and streamline operations.</p>
    </div>
    <div className="promise-card">
      <img src={mobile} alt="Operational Efficiency" />
      <h3>Mobile App Development</h3>
      <p>Native and cross-platform mobile apps designed for
iOS and Android.</p>
    </div>
    <div className="promise-card">
      <img src={code} alt="Implementation Certainty" />
      <h3>Web Development
</h3>
<p>Responsive, fast, and secure websites using modern
frameworks.

</p>
    </div>
    <div className="promise-card">
      <img src={gear} alt="30% lower TCO" />
      <h3>DevOps Services
</h3>
<p>CI/CD pipelines, infrastructure automation, and continuous deployment solutions.

</p>
    </div>
  </div>
</section>
{/* Timeline Section - Journey of Manovate */}
<section className="timeline-section">
  <h2 className="timeline-title">Journey of <span>Manovate</span></h2>
  <div className="timeline-container">
    <div className="timeline-item left">
      <div className="content">
        <h3>2017</h3>
        <p>Inception of Manovate Technologies</p>
      </div>
    </div>
    <div className="timeline-item left">
      <div className="content">
        <h3>2018</h3>
        <p>Global operations kicked off in the market.</p>
      </div>
    </div>
    <div className="timeline-item left">
      <div className="content">
        <h3>2019</h3>
        <p>Recognized as a pioneer in scalable software frameworks.</p>
      </div>
    </div>
    <div className="timeline-item left">
      <div className="content">
        <h3>2020</h3>
        <p>Demerger and innovation launch in core AI and automation.</p>
      </div>
    </div>
    <div className="timeline-item left">
      <div className="content">
        <h3>2021</h3>
        <p>Achieved unicorn status in under a decade.</p>
      </div>
    </div>
    {/* <div className="timeline-item left">
      <div className="content">
        <h3>2022</h3>
        <p>Launch of eMACH.ai - Open Finance Platform.</p>
      </div>
    </div> */}
  </div>
</section>




      {/* CONTACT SECTION */}
     <section className="contact">
      <div className="contact-heading">
        <Link to="/contact" className="contact_header">Get in Touch</Link>
      </div>
       
      <div className="contact-options">
         <Link to="/contact" className="contactuslink">
        <div className="contact-box">
          <div className="icon-circle">
         <img src={phone} alt="contact us phone" />
          </div>
           <Link to="/contact" className="contactuslink">
          <h4>Call Us</h4>
          <p>Contact: +91 97870 66569</p>
         
          </Link>
        </div>
        </Link>
        <Link to="/contact" className="contactuslink">
        <div className="contact-box">
          <div className="icon-circle">
           <img src={mail} alt="contact us mail" />
          </div>
           <Link to="/contact" className="contactuslink">
          <h4>Write Us</h4>
          <p>hr@manovate.in</p>
          
          </Link>
        </div>
        </Link>
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
  );
}

export default Home;