import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./movate1.png";
import { FaMapMarkerAlt,FaLinkedin ,FaInstagram} from "react-icons/fa";
import "./Home.css";
import "./contact.css";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit phone to 10 digits only
    if (name === "phone" && value.length > 10) return;

    // Limit subject to 250 characters
    if (name === "subject" && value.length > 250) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnnzojbo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

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

    <section class="contact-hero">
  <div class="contact-content">
    <h1>Careers at Manovate </h1>
<h3>Bring your talent, curiosity, and ideas to a team that’s redefining innovation.</h3>
    
  </div>
</section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-container">
          {/* Location Info */}
          <div className="contact-info">
            <h3>Contact us</h3>
            <p>
              Get In Touch With Our Experts
            </p>
            <p>
             Ready to transform the way you work? Whether you need to streamline operations, enhance workflows, or deliver measurable outcomes, Manovate is here to help.
<br/>
Contact us today to see how our tailored ServiceNow solutions can drive real results for your business. Let’s get started.
            </p>
            <p><strong>Email:</strong> info@manovate.in</p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Leave us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                required
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
                maxLength={250}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message Here . . ."
                required
              />
              <button type="submit"  className="submit_btn"disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>

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
        </div>
      </div>
    </footer>




      
    </div>
  );
}

export default Contact; 