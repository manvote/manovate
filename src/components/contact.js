import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./movate1.png";
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
             Ready to transform the way you work? Whether you need to streamline operations, enhance workflows, or deliver measurable outcomes, KeenStack is here to help.
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

export default Contact;
