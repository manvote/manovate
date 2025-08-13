import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./careers.css";
import vedio1 from "./vedio.mp4";
import logo from "./movate1.png";

function Careers() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
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
          <Link to="/careers">Careers</Link>
          <Link to="/contact" className="contact-btn">
            Contact us
          </Link>
        </nav>
      </header>

      {/* Video Background */}
      <div className="background-video-container">
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
      </div>

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

        {/* <div>
          <label>
            Upload Resume <span className="required">*</span>
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
          />
        </div> */}

        <button type="submit">Submit</button>
      </form>


      
         <footer className="custom-footer">
        <div className="footer-container">
          {/* Left - Map Embed */}
          <div className="footer-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.2446447197763!2d80.245452465296!3d12.955788531672635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1a0c7f9697%3A0x7237c029e6e015df!2sGreeta%20TechPark!5e0!3m2!1sen!2sin!4v1754477012332!5m2!1sen!2sin"
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
            <p>📍 Prince Infocity 1 – Old Mahabalipuram Road,<br />50, 1st St, Kandhanchavadi,<br />Tamil Nadu 600096</p>
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

export default Careers;
