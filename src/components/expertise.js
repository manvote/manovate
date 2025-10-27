// Expertise.js
import React from "react";
import { motion } from "framer-motion";
import { HeadProvider, Title, Meta } from "react-head";
import "../components/Expertise.css";
import { FaLaptopCode, FaCloud, FaShieldAlt, FaRobot, FaChartLine } from "react-icons/fa";

const expertiseList = [
  {
    id: 1,
    title: "Web & App Development",
    description:
      "Build responsive web and mobile applications with cutting-edge technologies to enhance user experience and business efficiency.",
    icon: <FaLaptopCode />,
    color: "#0d6efd",
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to optimize costs, improve performance, and support business growth.",
    icon: <FaCloud />,
    color: "#28a745",
  },
  {
    id: 3,
    title: "Cybersecurity",
    description:
      "Protect your business with robust cybersecurity solutions including network security, threat monitoring, and vulnerability assessment.",
    icon: <FaShieldAlt />,
    color: "#fd7e14",
  },
  {
    id: 4,
    title: "AI & Automation",
    description:
      "Leverage AI-powered automation to streamline operations, boost productivity, and gain actionable insights.",
    icon: <FaRobot />,
    color: "#6f42c1",
  },
  {
    id: 5,
    title: "Data Analytics & BI",
    description:
      "Turn raw data into actionable insights with advanced analytics and business intelligence solutions.",
    icon: <FaChartLine />,
    color: "#20c997",
  },
];

const Expertise = () => {
  return (
    <HeadProvider>
      <Title>Our Expertise | Digital Transformation & IT Mastery – Manovate</Title>
      <Meta
        name="description"
        content="Explore Manovate’s expertise in digital transformation, IT innovation, and strategic business solutions. Drive growth and operational excellence in 2025."
      />
      <Meta
        name="keywords"
        content="Manovate expertise, IT consulting, digital innovation, software development experts, web app specialists, enterprise IT strategies, AI-powered IT solutions, business automation expertise, technology consulting, IT architecture, data-driven business growth, cloud strategy experts"
      />

      <div className="expertise-page">
        {/* Header Section */}
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Expertise</h1>
          <p>Advanced technology solutions to help your business thrive</p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="expertise-grid">
          {expertiseList.map((item, index) => (
            <motion.div
              className="expertise-card"
              key={item.id}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
            >
              <div className="icon-wrapper" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="expertise-btn"
                style={{ backgroundColor: item.color }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="expertise-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-overlay"></div>
          <div className="cta-content">
            <h2>Need Expert Help?</h2>
            <p>Call us now: <strong>+91 98765 43210</strong></p>
            <motion.button whileHover={{ scale: 1.05 }}>Contact Now</motion.button>
          </div>
        </motion.div>
      </div>
    </HeadProvider>
  );
};

export default Expertise;
