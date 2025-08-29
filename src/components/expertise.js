import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import "./Home.css";
import "./expertise.css";
import logo from "./movate1.png";

function Expertise() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  const expertiseAreas = [
    {
      id: 1,
      title: "E-government",
      description: "Digital solutions for public sector transformation and citizen services.",
      content: "We develop comprehensive e-government solutions that enable digital transformation in the public sector. Our services include citizen portals, digital service delivery systems, online permit applications, and government resource planning tools.",
      icon: "🏛️",
      technologies: ["Citizen Portals", "Digital Service Delivery", "Online Permit Systems", "Government Resource Planning"],
      benefits: ["Increased Transparency", "Improved Efficiency", "Enhanced Citizen Services", "Cost Reduction"]
    },
    {
      id: 2,
      title: "Healthcare",
      description: "Technology solutions for healthcare providers, patients, and medical research.",
      content: "Our healthcare technology solutions include electronic health records systems, telehealth platforms, patient management systems, and healthcare analytics. We help healthcare providers improve patient care and streamline operations.",
      icon: "🏥",
      technologies: ["EHR Systems", "Telehealth Platforms", "Patient Management", "Healthcare Analytics"],
      benefits: ["Improved Patient Care", "Streamlined Operations", "Data-driven Decisions", "Remote Care Options"]
    },
    {
      id: 3,
      title: "Sports",
      description: "Innovative technology solutions for athletes, teams, and sports organizations.",
      content: "We develop sports technology solutions including athlete performance tracking, fan engagement platforms, sports analytics, and event management systems. Our solutions help teams optimize performance.",
      icon: "⚽",
      technologies: ["Performance Tracking", "Fan Engagement", "Sports Analytics", "Event Management"],
      benefits: ["Enhanced Performance", "Increased Engagement", "Data-driven Strategies", "Improved Event Experiences"]
    },
    {
      id: 4,
      title: "Logistics Software",
      description: "End-to-end logistics and supply chain management solutions.",
      content: "Our logistics software includes warehouse management systems, transportation management, supply chain visibility tools, and inventory optimization solutions. We help businesses streamline their logistics operations.",
      icon: "📦",
      technologies: ["Warehouse Management", "Transportation Management", "Supply Chain Visibility", "Inventory Optimization"],
      benefits: ["Cost Reduction", "Improved Efficiency", "Real-time Tracking", "Optimized Inventory"]
    },
    {
      id: 5,
      title: "Media and Entertainment",
      description: "Digital solutions for content creation, distribution, and monetization.",
      content: "We create media and entertainment solutions including content management systems, streaming platforms, digital rights management, and audience analytics. Our technologies help content creators engage audiences.",
      icon: "🎬",
      technologies: ["Content Management", "Streaming Platforms", "Digital Rights Management", "Audience Analytics"],
      benefits: ["Enhanced Engagement", "New Revenue Streams", "Content Protection", "Audience Insights"]
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect digital assets and data.",
      content: "Our cybersecurity services include threat detection systems, vulnerability assessment, security monitoring, and incident response solutions. We help organizations protect their digital assets and comply with regulations.",
      icon: "🔒",
      technologies: ["Threat Detection", "Vulnerability Assessment", "Security Monitoring", "Incident Response"],
      benefits: ["Data Protection", "Regulatory Compliance", "Threat Prevention", "Customer Trust"]
    },
    {
      id: 7,
      title: "Agriculture",
      description: "Technology solutions for modern farming and agricultural management.",
      content: "We develop agricultural technology solutions including farm management software, IoT sensors for crop monitoring, precision agriculture tools, and supply chain tracking. Our solutions help farmers increase yield.",
      icon: "🌾",
      technologies: ["Farm Management", "IoT Sensors", "Precision Agriculture", "Supply Chain Tracking"],
      benefits: ["Increased Yield", "Resource Optimization", "Waste Reduction", "Supply Chain Transparency"]
    },
    {
      id: 8,
      title: "Travel and Hospitality",
      description: "Digital solutions for travel companies, hotels, and hospitality services.",
      content: "Our travel and hospitality solutions include booking platforms, property management systems, customer experience tools, and revenue management systems. We help businesses enhance guest experiences.",
      icon: "✈️",
      technologies: ["Booking Platforms", "Property Management", "Customer Experience", "Revenue Management"],
      benefits: ["Enhanced Guest Experience", "Operational Efficiency", "Increased Bookings", "Revenue Optimization"]
    },
    {
      id: 9,
      title: "Software Development for Startups",
      description: "Tailored technology solutions for startups and growing businesses.",
      content: "We provide end-to-end software development services for startups, including MVP development, product strategy, scaling solutions, and investor-ready demonstrations. Our approach helps startups build robust products.",
      icon: "🚀",
      technologies: ["MVP Development", "Product Strategy", "Scaling Solutions", "Investor Demos"],
      benefits: ["Faster Time to Market", "Scalable Architecture", "Investment Readiness", "Competitive Advantage"]
    }
  ];

  const handleCardClick = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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

      {/* Expertise Section */}
      <section className="expertise">
        <div className="expertise-header">
          <h1 className="expertise-title">Our Expertise</h1>
          <p className="expertise-subtitle">Industry-specific solutions powered by cutting-edge technology</p>
        </div>
        
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div 
              key={area.id} 
              className={`expertise-card ${flippedCards[area.id] ? 'flipped' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Front of the card */}
              <div className="card-front">
                <div className="expertise-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="expertise-link" onClick={() => handleCardClick(area.id)}>
                  Learn More <FiArrowRight />
                </div>
              </div>
              
              {/* Back of the card */}
              <div className="card-back">
                <button 
                  className="back-button"
                  onClick={() => handleCardClick(area.id)}
                >
                  <FiArrowLeft /> Back
                </button>
                
                <div className="expertise-modal-header">
                  <span className="modal-icon">{area.icon}</span>
                  <h2>{area.title}</h2>
                </div>
                
                <p className="expertise-modal-description">{area.content}</p>
                
                <div className="technologies-benefits">
                  <div className="technologies">
                    <h3>Technologies</h3>
                    <ul>
                      {area.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="benefits">
                    <h3>Benefits</h3>
                    <ul>
                      {area.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Expertise;