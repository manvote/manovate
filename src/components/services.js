// Services.js
import React, { useState } from "react";
import { HeadProvider, Title, Meta } from 'react-head';


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

  const containerStyle = {
    display: "flex",
    maxWidth: "1200px",
    margin: "60px auto",
    padding: "0 20px",
    gap: "20px",
    fontFamily: "'Poppins', sans-serif",
    alignItems: "flex-start",
  };

  const leftColumnStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  };

  const cardStyle = {
    backgroundColor: "#f5f9ff",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    padding: "20px",
  };

  const allServicesHeading = {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "20px",
    color: "#0d6efd",
  };

  const sidebarItemStyle = (active, isHovered) => ({
    padding: "12px 15px",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: active ? "#0d6efd" : "#f8f9fa",
    color: active ? "#fff" : "#333",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: active ? "0 4px 10px rgba(0,0,0,0.15)" : "none",
    transform: isHovered ? "translateX(5px)" : "translateX(0)",
  });

  const contentContainer = {
    flex: "3",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    padding: "30px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: 1.7,
    textAlign: "justify",
  };

const [selectedFaq, setSelectedFaq] = useState(null);


  return (
    <>
     <HeadProvider>
        <Title>Manovate Services | Scalable IT, Web, App & Digital Marketing Solutions</Title>
        <Meta
          name="description"
          content="Discover Manovate’s services: scalable IT solutions, responsive web apps, AI-driven tools, and advanced digital marketing to stay ahead of competitors."
        />
        <Meta
          name="keywords"
          content="Manovate services, IT solutions, web development services, mobile app development, cloud computing, AI-driven solutions, software consulting, enterprise IT services, digital marketing solutions, business automation, SaaS development, custom software development"
        />
      </HeadProvider>

    <div style={{ paddingBottom: "60px" }}>
      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundImage:
              "linear-gradient(135deg, rgba(124, 170, 255, 0.9) 0%, rgba(0, 89, 255, 0.82) 100%), url('/images/breadcrumb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: "48px", margin: 0, fontWeight: 600 }}>
            Service Details
          </h1>
          <div style={{ marginTop: "10px", fontSize: "16px", color: "#ddd" }}>
            <a
              href="/"
              style={{ color: "#fff", textDecoration: "none", marginRight: "5px" }}
            >
              Home
            </a>{" "}
            &gt; <span>Service</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div style={containerStyle}>
        {/* LEFT SIDE (Sidebar + Opening Hours stacked) */}
        <div style={leftColumnStyle}>
          {/* All Services Box */}
          <div style={cardStyle}>
            <div style={allServicesHeading}>All Services</div>
            {servicesList.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                style={sidebarItemStyle(
                  selectedService.id === service.id,
                  hovered === service.id
                )}
              >
                <span>{service.title}</span>
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    transform:
                      hovered === service.id
                        ? "translateX(5px)"
                        : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  ➔
                </span>
              </div>
            ))}
          </div>

          {/* Opening Hours Box */}
<div
  style={{
    backgroundColor: "#f5f9ff",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    padding: "25px",
  }}
>
  {/* Heading */}
  <div style={{ marginBottom: "20px" }}>
    <h3
      style={{
        fontSize: "20px",
        fontWeight: 700,
        color: "#000",
        marginBottom: "8px",
      }}
    >
      Opening Hours
    </h3>
    <div
      style={{
        width: "40px",
        height: "3px",
        backgroundColor: "#0d6efd",
        borderRadius: "2px",
      }}
    ></div>
  </div>

  {/* Hours List */}
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    {[
      { day: "Mon – Sat", time: "10.00 AM – 4.00 PM" },
      { day: "Sun", time: "09.00 AM – 4.00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Emergency", time: "24 hours" },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 6px 15px rgba(13,110,253,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
        }}
      >
        {/* Clock Icon */}
        <span
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "rgba(13,110,253,0.1)",
            color: "#0d6efd",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          🕒
        </span>

        {/* Day + Time */}
        <span style={{ fontSize: "15px", color: "#333" }}>
          <strong>{item.day}:</strong> {item.time}
        </span>
      </div>
    ))}
  </div>
</div>

{/* Need Help / Call Us Section */}
<div style={{ position: "relative", marginTop: "20px", borderRadius: "12px", overflow: "hidden" }}>
  {/* Image */}
  <img
    src="/images/support.jpg" // replace with your image path
    alt="Support"
    style={{
      width: "100%",
      display: "block",
      transition: "transform 0.4s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  />

  {/* Text Overlay */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      textAlign: "center",
      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
    }}
  >
    <h3 style={{ fontSize: "25px", fontWeight: 700, margin: 0 }}>
      Need Help? Call Us
    </h3>
    <p style={{ fontSize: "20px", marginTop: "5px" }}>+1 234 567 890</p>
  </div>
</div>



        </div>

        

        {/* RIGHT SIDE (Content) */}
        <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <div style={contentContainer}>
          <h2 style={{ fontSize: "32px", color: "#0d6efd", fontWeight: 600 }}>
            {selectedService.title}
          </h2>
          <p style={paragraphStyle}>{selectedService.description}</p>
          <img
            src={selectedService.image}
            alt={selectedService.title}
            style={imageStyle}
          />
          <p style={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <p style={paragraphStyle}>
            Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia
            nunc.
          </p>
          {/* Benefits Section with Side Image */}
<div
  style={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "25px",
    marginTop: "40px",
    flexWrap: "wrap",
  }}
>
  {/* Left Side - Image */}
  <div
    style={{
      flex: "1",
      minWidth: "250px",
    }}
  >
    <img
      src="/images/benefits.jpg" // replace with your real image path
      alt="Benefits Illustration"
      style={{
        width: "100%",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        transition: "transform 0.4s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
  </div>

  {/* Right Side - Benefits List */}
  <div
    style={{
      flex: "1.2",
      minWidth: "300px",
      backgroundColor: "#f5f9ff",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      padding: "25px",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 10px 25px rgba(13,110,253,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.08)";
    }}
  >
    <h3
      style={{
        fontSize: "22px",
        fontWeight: 700,
        color: "#0d6efd",
        marginBottom: "20px",
      }}
    >
      Benefits with Our Service
    </h3>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {[
        "Professional and Experienced Team",
        "24/7 Customer Support",
        "Guaranteed Quality and Timely Delivery",
      ].map((benefit, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "12px 16px",
            marginBottom: "12px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
              "0 4px 10px rgba(13,110,253,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 2px 8px rgba(0,0,0,0.05)";
          }}
        >
          <span
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "rgba(13,110,253,0.1)",
              color: "#0d6efd",
              fontWeight: 600,
              marginRight: "10px",
            }}
          >
            ✔
          </span>
          <span style={{ color: "#333", fontSize: "15px" }}>{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

{/* Extra Content Section */}
<div style={{ marginTop: "50px" }}>
  <h3
    style={{
      fontSize: "24px",
      fontWeight: 700,
      color: "#0d6efd",
      marginBottom: "15px",
    }}
  >
    Why Choose Our Service?
  </h3>

  <p
    style={{
      fontSize: "16px",
      color: "#555",
      lineHeight: 1.8,
      marginBottom: "30px",
      textAlign: "justify",
    }}
  >
    Our solutions are built with innovation and client satisfaction at the
    core. We combine cutting-edge technology with proven methodologies to
    deliver consistent results. Our experts ensure smooth implementation,
    transparent communication, and measurable outcomes that help your business
    grow stronger every day.
  </p>

  {/* Side-by-side Images */}
  <div
    style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        flex: "1",
        minWidth: "250px",
        maxWidth: "45%",
        height: "180px", // reduced height
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.4s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="/images/teamwork.jpg" // replace with your real image
        alt="Team Collaboration"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          display: "block",
        }}
      />
    </div>

    <div
      style={{
        flex: "1",
        minWidth: "250px",
        maxWidth: "45%",
        height: "180px", // reduced height
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.4s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="/images/innovation.jpg" // replace with your real image
        alt="Innovation"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          display: "block",
        }}
      />
    </div>
  </div>
</div>



{/* FAQ Section */}
<div style={{ marginTop: "40px" }}>
  <h3
    style={{
      fontSize: "22px",
      fontWeight: 700,
      color: "#0d6efd",
      marginBottom: "20px",
    }}
  >
    Frequently Asked Questions
  </h3>
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
    {
      question: "Can services be customized to fit my needs?",
      answer:
        "Absolutely! We tailor every solution to your specific goals and requirements.",
    },
    {
      question: "Can services be customized to fit my needs?",
      answer:
        "Absolutely! We tailor every solution to your specific goals and requirements.",
    },
  ].map((faq, index) => (
    <div
      key={index}
      onClick={() =>
        setSelectedFaq(selectedFaq === index ? null : index)
      }
      style={{
        marginBottom: "12px",
        backgroundColor: "#f5f9ff",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
        }}
      >
        <span style={{ fontWeight: 600, color: "#333" }}>{faq.question}</span>
        <span style={{ color: "#0d6efd", fontSize: "20px" }}>
          {selectedFaq === index ? "▲" : "▼"}
        </span>
      </div>
      {selectedFaq === index && (
        <div
          style={{
            padding: "0 20px 15px 20px",
            color: "#555",
            lineHeight: 1.6,
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Services;
