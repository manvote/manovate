import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMapMarkerAlt,FaLinkedin,FaInstagram ,FaFacebook} from "react-icons/fa";
import "./Home.css";
import "./careers.css";

import logo from "./movate1.png";

function Careers() {

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target); // Collect all form fields including file

    try {
      const response = await fetch("https://manovatebackend.onrender.com/api/applications/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("✅ Application submitted successfully!");
        e.target.reset();
      } else {
        const errorData = await response.json();
        console.error(errorData);
        alert("❌ Failed to submit application. Check console for details.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong while submitting.");
    } finally {
      setLoading(false);
    }
  };
const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://manovatebackend.onrender.com/api/jobs/") // Django backend API
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

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
   <div className="homepage">
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
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="job-application-form"
    >
      <h2>Join Manovate</h2>

      <div className="row">
        <div>
          <label>First Name *</label>
          <input type="text" name="first_name" required />
        </div>
        <div>
          <label>Last Name *</label>
          <input type="text" name="last_name" required />
        </div>
      </div>

      <div className="row">
        <div>
          <label>Email *</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Phone Number *</label>
          <input type="tel" name="phone" required />
        </div>
      </div>

      <div className="row">
        <div>
          <label>City *</label>
          <input type="text" name="city" required />
        </div>
        <div>
          <label>State/Region *</label>
          <input type="text" name="state" required />
        </div>
      </div>

      <div>
        <label>LinkedIn Profile Link *</label>
        <input type="url" name="linkedin" required />
      </div>

      <div>
        <label>Position you are applying for *</label>
        <input type="text" name="position" required />
      </div>

      <div>
        <label>Upload Resume *</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
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
 <div className="jobs-container">
      <h2 className="jobs-title">Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <ul className="jobs-list">
          {jobs.map((job) => (
            <li key={job.id} className="job-item">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">{job.description}</p>
              <p className="job-location">Location: {job.location}</p>
              <p className="job-date">
                Posted on: {new Date(job.posted_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>

      
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




    </div>
  );
}

export default Careers;
