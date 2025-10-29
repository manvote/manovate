import React, { useState } from "react";
import { HeadProvider, Title, Meta } from "react-head";
import "./services.css";

const servicesList = [
  {
    id: 1,
    title: "IT Consultancy",
    description:
      "We provide top-notch IT consultancy to optimize business processes and increase efficiency. Our team works closely with you to understand your business needs and provide solutions that enhance productivity and growth. We specialize in system integration, IT strategy planning, and process optimization.",
    image: "/images/image.jpg",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Modern and responsive web development for your business. We build websites that are visually appealing, user-friendly, and optimized for performance. From frontend to backend development, we ensure your website aligns with your brand identity and business goals.",
    image: "/images/image.jpg",
  },
  {
    id: 3,
    title: "Cybersecurity",
    description:
      "Protect your data with our advanced cybersecurity solutions. Our services include network security, threat monitoring, and vulnerability assessments. We help businesses safeguard their sensitive information and maintain trust with clients.",
    image: "/images/image.jpg",
  },
  {
    id: 4,
    title: "Cloud Services",
    description:
      "Scalable cloud solutions to grow your business efficiently. We help migrate your infrastructure to the cloud, optimize resources, and improve collaboration. Our solutions ensure security, flexibility, and cost-effectiveness.",
    image: "/images/image.jpg",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Boost your online presence with our digital marketing strategies. We offer SEO, social media marketing, content creation, and PPC advertising to help you reach your target audience effectively. Our data-driven approach ensures measurable results and ROI.",
    image: "/images/image.jpg",
  },
  {
    id: 6,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. We develop applications that streamline operations, enhance user experience, and drive innovation. Our team uses the latest technologies to deliver high-quality software on time and within budget.",
    image: "/images/image.jpg",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const [hovered, setHovered] = useState(null);
  const [selectedFaq, setSelectedFaq] = useState(null);

  return (
    <>
      <HeadProvider>
        <Title>
          Manovate Services | Scalable IT, Web, App & Digital Marketing
          Solutions
        </Title>
        <Meta
          name="description"
          content="Discover Manovate’s services: scalable IT solutions, responsive web apps, AI-driven tools, and advanced digital marketing to stay ahead of competitors."
        />
      </HeadProvider>

      {/* Hero Section */}
      <div className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Service Details</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> &gt; <span>Service</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="services-container">
        {/* LEFT COLUMN */}
        <div className="services-left">
          <div className="card all-services-card">
            <div className="card-title">All Services</div>
            {servicesList.map((service) => (
              <div
                key={service.id}
                className={`sidebar-item ${
                  selectedService.id === service.id ? "active" : ""
                } ${hovered === service.id ? "hovered" : ""}`}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <span>{service.title}</span>
                <span className="arrow">➔</span>
              </div>
            ))}
          </div>

          {/* Opening Hours */}
          <div className="card opening-hours">
            <h3>Opening Hours</h3>
            <div className="divider"></div>
            <div className="hours-list">
              {[
                { day: "Mon – Sat", time: "10.00 AM – 4.00 PM" },
                { day: "Sun", time: "09.00 AM – 4.00 PM" },
                { day: "Friday", time: "Closed" },
                { day: "Emergency", time: "24 hours" },
              ].map((item, i) => (
                <div className="hour-item" key={i}>
                  <span className="icon">🕒</span>
                  <span>
                    <strong>{item.day}:</strong> {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Image */}
          <div className="support-section">
            <img src="/images/support.jpg" alt="Support" />
            <div className="support-text">
              <h3>Need Help? Call Us</h3>
              <p>+1 234 567 890</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="services-right">
          <div className="content-card">
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            <img src={selectedService.image} alt={selectedService.title} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>

            {/* Benefits Section */}
<div className="benefits-section">
  <div className="benefits-image">
    <img src="/images/benefits.jpg" alt="Benefits" />
  </div>
  <div className="benefits-content">
    <h3>Benefits with Our Service</h3>
    <ul>
      <li>Professional and Experienced Team</li>
      <li>24/7 Customer Support</li>
      <li>Guaranteed Quality and Timely Delivery</li>
    </ul>
  </div>
</div>


            {/* Why Choose */}
            <div className="why-choose">
              <h3>Why Choose Our Service?</h3>
              <p>
                Our solutions are built with innovation and client satisfaction
                at the core. We combine cutting-edge technology with proven
                methodologies to deliver consistent results.
              </p>

              <div className="image-row">
                <img src="/images/teamwork.jpg" alt="Teamwork" />
                <img src="/images/innovation.jpg" alt="Innovation" />
              </div>
            </div>

            {/* FAQ */}
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on complexity, but most are completed within 4–6 weeks.",
                },
                {
                  question: "Do you offer post-launch support?",
                  answer:
                    "Yes, we provide ongoing maintenance and technical support even after project completion.",
                },
                {
                  question: "Can services be customized to fit my needs?",
                  answer:
                    "Absolutely! We tailor every solution to your specific goals and requirements.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${
                    selectedFaq === i ? "open" : ""
                  }`}
                  onClick={() =>
                    setSelectedFaq(selectedFaq === i ? null : i)
                  }
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <span>{selectedFaq === i ? "▲" : "▼"}</span>
                  </div>
                  {selectedFaq === i && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
