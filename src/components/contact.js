import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { HeadProvider, Title, Meta } from 'react-head';
import logo from "./manovate.png";
import { FaMapMarkerAlt,FaLinkedin ,FaInstagram,FaFacebook} from "react-icons/fa";
import "./Home.css";
import "./contact.css";

function Contact() {
 
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
    <>
     <HeadProvider>
        <Title>Contact Manovate | Get Expert IT & Digital Solutions Today</Title>
        <Meta
          name="description"
          content="Contact Manovate for AI-powered IT solutions, web & app development, and digital marketing strategies designed to scale your business faster in 2025."
        />
        <Meta
          name="keywords"
          content="contact Manovate, IT solutions inquiry, digital marketing consultation, web development support, software development consultation, app development request, Manovate support, technology solutions contact, request a free quote, business IT consulting contact"
        />
      </HeadProvider>
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

    <section class="contact-hero">
  <div class="contact-content">
    <h1>Contact Manovate </h1>
<h3>Explore our talent, curiosity, and ideas to a team that’s redefining innovation.</h3>
    
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
            <p><strong>Email:</strong> info@manovate.co.in</p>
             <p><strong>Address:</strong> <br/>
             <strong>Chennai : </strong>GREETA TOWERS, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096 <br/>
             <strong>Bengaluru : </strong>
             1st Floor, 94, Rashtriya Vidyalaya Rd, Basavanagudi, Bengaluru, Karnataka 560004</p>
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
                         <li><Link to="/about">ABOUT</Link></li>
                         <li><Link to="/services">SERVICES</Link></li>
                        
                         <li><Link to="/products">PRODUCTS</Link></li>
                         <li><Link to="/solution">SOLUTIONS</Link></li>
                          <li><Link to="/careers">CAREERS</Link></li>
                         <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
 <hr className="footer-divider" />

      <div className="footer-bottom">
        {/* Copyright */}
        <p>© 2021 Manovate Technologies | Innovating The Future</p>

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
    </>
  );
}

export default Contact; 