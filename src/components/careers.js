import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Home.css";
import "./careers.css";

import logo from "./movate1.png";

function Careers() {
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

      {/* Video Background */}
      {/* <div className="background-video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={vedio1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1 className="overlay-title">Manovate Technologies<br/>Innovation The Future</h1>
          <h3>
            Empowering industries with AI, automation, and next-gen
            semiconductor solutions
          </h3>
        </div>
      </div> */}
      <section class="careers-hero">
  <div class="careers-content">
    <h1>Careers at Manovate </h1>
<h3>Bring your talent, curiosity, and ideas to a team that’s redefining innovation.</h3>
    
  </div>
</section>

      {/* Job Application Form */}
      <form
        action="https://formspree.io/f/xnnzopab"
        method="POST"
        encType="multipart/form-data"
        className="job-application-form"
      >
        <h2>Join Manovate</h2>

        <div className="row">
          <div>
            <label>
              First Name <span className="required">*</span>
            </label>
            <input type="text" name="firstName" required />
          </div>
          <div>
            <label>
              Last Name <span className="required">*</span>
            </label>
            <input type="text" name="lastName" required />
          </div>
        </div>

        <div className="row">
          <div>
            <label>
              Email <span className="required">*</span>
            </label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>
              Phone Number <span className="required">*</span>
            </label>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div className="row">
          <div>
            <label>
              City <span className="required">*</span>
            </label>
            <input type="text" name="city" required />
          </div>
          <div>
            <label>
              State/Region <span className="required">*</span>
            </label>
            <input type="text" name="state" required />
          </div>
        </div>

        <div>
          <label>
            LinkedIn Profile Link <span className="required">*</span>
          </label>
          <input type="url" name="linkedin" required />
        </div>

        <div>
          <label>
            Position you are applying for <span className="required">*</span>
          </label>
          <input type="text" name="position" required />
        </div>

        <div>
          <label>
            Upload Resume <span className="required">*</span>
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

<section class="job-postings">
  <span class="section-label">JOB POSTINGS</span>
  <h2>Your Next Opportunity Starts Here</h2>
  <p>
    We’re always looking for talented individuals to join our team. Explore our current openings 
    and take the next step in your career. If you don’t see a current opening that fits your profile, 
    feel free to send your resume and cover letter to 
    <a href="mailto:hr@manovate.co.in"> hr@manovate.co.in </a>. 
    We’ll keep your information on file and reach out if a suitable role becomes available.
  </p>
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

export default Careers;
