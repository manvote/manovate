import React, { useState, useEffect } from "react";
import { HeadProvider, Title, Meta } from "react-head";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./services.css";
import logo from "./manovate.png";
import { useNavigate } from "react-router-dom";
import web from "./web_dev.jpg";
import chatbot from "./chatbot_ser.jpg";
import ecommerce from "./ecommerce.jpg";
import mobile from "./mobile.jpg";
import custom from "./custom.jpg";
import work from "./work_ser.jpg";
import recommend from "./recommend.jpg";
import machine from "./machine_serv.jpg";
import computer from "./computer.jpg";
import cloud from "./cloud.jpg";
import saas from "./saas.jpg";
import unified from "./unified.jpg";
import crm from "./crm.jpg";
import hrms from "./hrms.jpg";
import erp from "./erp.jpg";
import inventory from "./inventory.jpg";
import cyber from "./cyber.jpg";
import business from "./business_serv.jpg";
import branding from "./branding_ser.jpg";
import accounting from "./accounting.jpg";
import digital from "./digital_mar.jpg";
import customer from "./cust_ex.jpg";
import content from "./content_ser.jpg";
import administrative from "./administrative.jpg";
import appointment from "./appointment.jpg";
import iot from "./iot.jpg"

// ========== SAMPLE DATA (Replace with your own PDF content later) ==========
const servicesData = {
IT: [
{
id: 1,
title: "Website Design & Development Services",
description: `<b>Custom Website Design and Development Solutions for Every Business</b><br><br>
At <b>Manovate Technologies</b>, we design and develop modern, responsive, and high-performing
websites that bring your brand to life online.
Every website we create blends creativity, functionality, and performance ensuring visitors not
only stay engaged but also take action.
Whether you’re a startup building your first digital presence or an enterprise upgrading for
scale, we deliver that drive measurable results.<br><br>  
<b>What We Deliver</b><br><br>
<b>Custom Website Design</b><br>
Stand out with a design that reflects your brand identity, engages your audience, and
communicates your value clearly. Every element layout, color, typography is tailored to your
business goals.<br><br>
<b>Responsive Development</b><br>
We build mobile-first, cross-platform websites that deliver seamless experiences on any
device desktop, tablet, or smartphone.<br><br>
<b>High-Performance Architecture</b><br>
Our sites are optimized for speed, SEO, and usability, ensuring fast load times, improved
rankings, and an enhanced user experience that keeps visitors coming back.<br><br>
<b>
Content Management Systems (CMS)</b><br>
Manage your content effortlessly with intuitive CMS platforms such as WordPress, Wix, or
custom-built solutions giving you complete control over updates, blogs, and pages.<br><br>
<b>
E-Commerce Integration</b><br>
We integrate secure, scalable, and conversion-optimized e-commerce platforms that make
shopping smooth, simple, and successful for your customers.<br><br>
<b>
Maintenance & Support</b><br>
From regular updates to security monitoring, our dedicated team ensures your website stays
secure, fast, and future-ready at all times.<br><br>

`,
image: web,
more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● User-Centered Approach: Every website is designed with your audience and goals in
mind.<br><br>
● UI/UX Excellence: Modern design practices for intuitive navigation and visual appeal.<br><br>
● SEO-Optimized Code: Clean, secure, and search-engine-friendly structure for
maximum visibility.<br><br>
● Proven Multi-Industry Experience: From tech to retail, we build for businesses of all
sizes.<br><br>
● End-to-End Execution: Strategy, design, development, and post-launch optimization
all handled in-house.<br><br>
● Continuous Support: Ongoing enhancements to keep your digital presence relevant
and powerful. <br><br>
<b>Empower Your Digital Presence</b><br><br>
Your website is more than just an online address it’s the face of your brand and the foundation
of your digital success.<br><br>
Let’s build a website that not only looks great but performs brilliantly one that drives traffic,
converts leads, and strengthens your market presence`,
},
{
      id: 2,
      title: "Chatbot Development Services",
      description: `<b>AI-Powered Chatbots for Intelligent Customer Engagement</b><br><br>
At <b>Manovate Technologies</b>, we develop intelligent chatbot solutions that help businesses
connect, engage, and support customers effortlessly.<br><br>
Our AI-driven chatbots use <b>Natural Language Processing (NLP)</b> and <b>Machine Learning (ML)</b> to
understand intent, respond naturally, and automate conversations — delivering faster support and
better customer experiences across every digital touchpoint.<br><br>
<b>What We Deliver</b><br><br>
<b>Conversational AI Bots</b><br>
Engage users with intelligent, human-like conversations that adapt to tone, context, and intent.<br><br>
<b>Customer Support Automation</b><br>
Automate FAQs, handle queries instantly, and provide round-the-clock assistance to enhance
satisfaction.<br><br>
<b>Lead Generation Bots</b><br>
Turn interactions into opportunities by capturing leads and qualifying prospects in real time.<br><br>
<b>E-Commerce & Service Bots</b><br>
Enable easy browsing, order tracking, and service requests through seamless chat experiences.<br><br>
<b>System Integration</b><br>
Connect chatbots with CRM, ERP, or business tools for unified communication and better
decision-making.<br><br>`,
      image: chatbot,
      more_description: `<b>Why It Matters</b><br><br>
● Always-available engagement, anytime and anywhere.<br><br>
● Reduced manual workload and faster response times.<br><br>
● Personalized user experiences powered by AI insights.<br><br>
● Easy deployment across web, mobile, and messaging platforms.<br><br>
● Secure, scalable solutions adaptable to every business model.<br><br>
<b>Built for Every Business</b><br><br>
Whether you’re a startup, SME, or enterprise — our chatbot solutions adapt to your workflows,
audiences, and growth goals.<br><br>
From customer service and sales to internal operations and marketing, we help businesses
across all domains automate conversations and create meaningful digital engagement.<br><br>
<b>Our Approach</b><br><br>
1. <b>Discovery & Strategy:</b> Understand objectives, users, and key challenges.<br><br>
2. <b>Design & Development:</b> Create tailored conversational flows and intelligent responses.<br><br>
3. <b>Integration & Launch:</b> Deploy across preferred platforms with enterprise-grade security.<br><br>
4. <b>Training & Optimization:</b> Continuously improve performance using analytics and AI learning.<br><br>
<b>Why Choose Manovate Technologies</b><br><br>
● Proven expertise in AI, automation, and digital transformation.<br><br>
● Custom chatbot solutions built for measurable business outcomes.<br><br>
● End-to-end delivery from design to deployment and ongoing support.<br><br>
● Scalable architecture that grows with your business.<br><br>
● Focus on driving engagement, efficiency, and customer loyalty.<br><br>
<b>Let’s Automate the Way You Connect</b><br><br>
Empower your business with AI-driven chatbots that deliver instant, intelligent, and impactful
customer interactions.<br><br>
Partner with <b>Manovate Technologies</b> to bring automation, personalization, and innovation
together.<br><br>`,
    },

  {
  id: 3,
  title: "E-Commerce Platform Development Services",
  description: `<b>E-Commerce Website Development Services for Scalable Online Growth</b><br><br>
At <b>Manovate Technologies</b>, we build powerful, conversion-focused e-commerce
platforms that help businesses sell smarter, scale faster, and deliver seamless shopping
experiences across every device.<br><br>
Our team designs, develops, and optimizes secure, high-performance online stores
that attract customers, boost conversions, and keep sales growing — powered by the
latest digital commerce trends.<br><br>
<b>What We Deliver</b><br><br>
<b>Custom E-Commerce Development</b><br>
We create fully customized online stores using leading technologies like Shopify,
WooCommerce, Magento, and custom frameworks designed around your business
model and growth goals.<br><br>
<b>Omnichannel Shopping Experience</b><br>
Integrate your store with websites, apps, social media, and marketplaces to give
customers a consistent and connected shopping journey across all digital touchpoints.<br><br>
<b>Mobile-First Store Design</b><br>
With mobile commerce dominating 2025 trends, we build responsive, mobile-optimized
stores that deliver fast, intuitive checkout experiences.<br><br>
<b>AI-Driven Personalization</b><br>
Enhance engagement and sales with AI-powered product recommendations, smart
search, and predictive analytics that understand user intent.<br><br>
<b>Secure Payments & Data Protection</b><br>
We implement multi-layer security, encrypted gateways, and GDPR-compliant systems
to protect customer trust and ensure smooth transactions.<br><br>
<b>Analytics & Performance Optimization</b><br>
Get data-driven insights with integrated dashboards that track sales, traffic, and user
behavior — empowering you to make informed business decisions.<br><br>
<b>Maintenance & Scalability Support</b><br>
We provide ongoing technical support, feature upgrades, and cloud-based scalability to
ensure your platform performs flawlessly even as your traffic grows.<br><br>`,
  image: ecommerce,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Expertise:</b> Across Shopify, WooCommerce, Magento, and headless commerce frameworks.<br><br>
● <b>Future-Ready Architecture:</b> Using modern tools, APIs, and automation for scalable performance.<br><br>
● <b>Conversion-Optimized Design:</b> Proven ability to create high-performing product pages and user flows.<br><br>
● <b>Deep UX/UI Understanding:</b> We implement 2025-ready design trends for intuitive online shopping.<br><br>
● <b>SEO-Friendly Stores:</b> Built for speed, visibility, and high conversion rates.<br><br>
● <b>Long-Term Partnership:</b> Focused on performance, innovation, and measurable growth.<br><br>
<b>Empower Your Online Business</b><br><br>
Your e-commerce store isn’t just a sales channel — it’s your digital growth engine.<br><br>
Let’s build a platform that delivers <b>speed, trust,</b> and <b>measurable success,</b> helping your
brand stand out in the competitive online marketplace.<br><br>`,
},

{
  id: 4,
  title: "Mobile Application Development Services",
  description: `<b>Mobile App Development Services That Drive Engagement and Growth</b><br><br>
At <b>Manovate Technologies</b>, we create custom mobile applications that help
businesses connect better with their customers, improve operations, and stay
ahead in a mobile-first world.<br><br>
Our team builds intuitive, high-performance apps for Android and iOS that blend
creativity with technology — delivering seamless user experiences that drive real
business results.<br><br>
Whether you need an app to enhance customer engagement, automate operations,
or expand your market reach, we build mobile solutions that are <b>scalable, secure,</b> and
designed to deliver long-term business growth.<br><br>
<b>What We Deliver</b><br><br>
<b>Custom Mobile App Development</b><br>
We design and develop apps that match your business goals, brand identity, and
customer needs — from idea to launch.<br><br>
<b>Cross-Platform App Development</b><br>
Using the latest frameworks like <b>Flutter</b> and <b>React Native</b>, we build apps that run
smoothly across both Android and iOS with one efficient codebase.<br><br>
<b>Native App Development</b><br>
For businesses that want top performance, we create dedicated apps for each
platform with full hardware and OS integration.<br><br>
<b>User Interface and Experience Design</b><br>
Our designs are simple, engaging, and user-friendly — ensuring every interaction
feels natural and enjoyable.<br><br>
<b>API and System Integration</b><br>
We connect your app with essential tools such as CRMs, payment gateways,
and analytics platforms for smooth business operations.<br><br>
<b>Maintenance and Support</b><br>
After launch, we provide ongoing updates, monitoring, and optimization so your
app stays secure, fast, and reliable.<br><br>`,
  image: mobile,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>User-Focused Approach:</b> Every app is designed to meet real customer
needs and deliver measurable impact.<br><br>
● <b>Industry Versatility:</b> We build apps for all types of businesses, from
startups to enterprises.<br><br>
● <b>Agile and Transparent Process:</b> Flexible development with regular
progress updates.<br><br>
● <b>Scalable and Secure Solutions:</b> Apps that perform well today and grow
with your business.<br><br>
● <b>End-to-End Delivery:</b> From concept to post-launch support, everything is
handled by our in-house team.<br><br>
<b>Let’s Build Your App Together</b><br><br>
Let’s create a mobile app that strengthens your brand, simplifies your
operations, and helps you connect with customers anywhere, anytime.<br><br>`,
},

{
  id: 5,
  title: "Custom Software Development Services",
  description: `<b>Tailored Software Solutions That Simplify, Scale, and Drive Growth</b><br><br>
At <b>Manovate Technologies</b>, we develop custom software solutions designed to
fit your unique business workflows and long-term goals.<br><br>
Our software helps you automate operations, enhance efficiency, and make
smarter, data-driven decisions — all while ensuring <b>security</b>, <b>scalability</b>, and a
<b>seamless user experience</b>.<br><br>
Whether you are modernizing legacy systems or building a new platform from
scratch, our team delivers software that adapts to your business and grows with
it.<br><br>
<b>What We Deliver</b><br><br>
<b>Custom Business Applications</b><br>
End-to-end software solutions tailored to your processes, helping your team
work smarter and faster.<br><br>
<b>Enterprise Software Development</b><br>
Robust, secure, and scalable systems that simplify complex operations across
departments and teams.<br><br>
<b>Workflow and Process Automation</b><br>
Automate repetitive tasks and streamline day-to-day operations to boost
productivity and reduce errors.<br><br>
<b>Web and Desktop Applications</b><br>
Intuitive applications built with the latest technologies for performance, usability,
and flexibility.<br><br>
<b>Integration and Modernization</b><br>
Upgrade existing systems or integrate multiple platforms to ensure seamless
data flow and business continuity.<br><br>
<b>Maintenance and Support</b><br>
Continuous monitoring, optimization, and updates to keep your software reliable,
secure, and future-ready.<br><br>`,
  image: custom,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Fully Custom-Built Solutions:</b> Designed specifically for your business
challenges and objectives.<br><br>
● <b>Scalable and Future-Ready:</b> Software that grows as your organization
expands.<br><br>
● <b>Strong Security Framework:</b> Data protection and compliance built into
every layer.<br><br>
● <b>Expert Development Team:</b> Skilled professionals with experience across
industries and technologies.<br><br>
● <b>Agile and Transparent Process:</b> Clear communication and faster delivery
with flexible project management.<br><br>
<b>Empower Your Business With Smart Software</b><br><br>
Your business is unique, and your software should be too!<br><br>
Let’s create a solution that aligns perfectly with your goals — one that increases
efficiency, improves collaboration, and drives measurable business success.<br><br>`,
},

{
  id: 6,
  title: "Workflow Automation Services",
  description: `<b>Streamline Operations and Boost Productivity With Smart Automation</b><br><br>
At <b>Manovate Technologies</b>, we help businesses transform manual,
time-consuming tasks into automated, efficient workflows.<br><br>
Our workflow automation solutions use advanced technologies like <b>AI</b>,
<b>machine learning</b>, and <b>process automation tools</b> to simplify operations, reduce
errors, and improve overall business performance.<br><br>
By automating repetitive processes, we enable your teams to focus on strategic
work, speed up execution, and deliver consistent results across every
department.<br><br>
<b>What We Deliver</b><br><br>
<b>Business Process Automation</b><br>
We automate day-to-day workflows such as approvals, reporting, and task
management to increase speed and accuracy.<br><br>
<b>AI and Machine Learning Integration</b><br>
Smart automation systems that learn and adapt, helping your business make
faster, data-driven decisions.<br><br>
<b>Document and Data Automation</b><br>
Automate document processing, data entry, and validation to eliminate manual
effort and reduce human error.<br><br>
<b>Workflow Optimization</b><br>
Identify inefficiencies in your processes and implement automation that
enhances collaboration and performance.<br><br>
<b>Integration With Existing Tools</b><br>
Seamless automation across CRMs, ERPs, and other business software to
ensure data consistency and real-time visibility.<br><br>
<b>Monitoring and Continuous Improvement</b><br>
We provide insights and analytics to track workflow performance and fine-tune
automation for better results over time.<br><br>`,
  image: work,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>End-to-End Expertise:</b> From identifying automation opportunities to
full-scale implementation.<br><br>
● <b>Custom Solutions:</b> Automation tailored to your specific workflows and
business requirements.<br><br>
● <b>Multi-Industry Experience:</b> Proven results across finance, healthcare,
retail, logistics, and more.<br><br>
● <b>Secure and Scalable Framework:</b> Reliable systems that grow with your
organization.<br><br>
● <b>Proven ROI:</b> Reduced costs, improved accuracy, and faster
decision-making.<br><br>
<b>Transform How Your Business Operates</b><br><br>
Empower your business with automation that eliminates bottlenecks, enhances
productivity, and improves team collaboration.<br><br>
Let’s help you simplify complex operations and achieve measurable efficiency
gains.<br><br>`,
},

{
  id: 7,
  title: "Recommendation System Development Services",
  description: `<b>Personalized Recommendations That Drive Engagement and Sales</b><br><br>
At <b>Manovate Technologies</b>, we build intelligent recommendation systems that
deliver personalized product, content, and service suggestions to your customers
in real time.<br><br>
Our solutions use <b>Artificial Intelligence (AI)</b>, <b>Machine Learning (ML)</b>, and <b>Predictive
Analytics</b> to understand user behavior, preferences, and intent — helping
businesses increase engagement, boost sales, and enhance customer
experience.<br><br>
Whether you run an e-commerce platform, media site, or digital service, our
recommendation engines ensure every customer sees what matters most to
them.<br><br>
<b>What We Deliver</b><br><br>
<b>Product Recommendation Engines</b><br>
Smart algorithms that analyze purchase patterns and browsing behavior to
suggest products customers are most likely to buy.<br><br>
<b>Content Recommendation Systems</b><br>
Personalized recommendations for news, blogs, or media that keep users
engaged and improve session time.<br><br>
<b>User Behavior Analysis</b><br>
Data-driven insights that help understand individual customer preferences and
predict future needs accurately.<br><br>
<b>AI-Powered Personalization</b><br>
Machine learning models that adapt and evolve based on real-time user
interactions to deliver better recommendations continuously.<br><br>
<b>Cross-Selling and Upselling Solutions</b><br>
Recommend complementary or higher-value items to increase order value and
customer lifetime engagement.<br><br>
<b>Integration With Digital Platforms</b><br>
Seamless integration with your e-commerce, CRM, or content platforms to
deliver personalized experiences across channels.<br><br>`,
  image: recommend,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Data-Driven Expertise:</b> Deep understanding of AI and data modeling to
deliver precise recommendations.<br><br>
● <b>Cross-Industry Applications:</b> Ideal for e-commerce, media, healthcare,
education, and more.<br><br>
● <b>Real-Time Personalization:</b> AI systems that learn from each user
interaction to refine results instantly.<br><br>
● <b>Proven Impact:</b> Boost conversion rates, engagement metrics, and
customer retention.<br><br>
● <b>Scalable and Secure Solutions:</b> Built to handle large data volumes and
deliver reliable performance.<br><br>
<b>Deliver Personalized Experiences That Convert</b><br><br>
Engage your customers with intelligent recommendations that inspire action and
build loyalty.<br><br>
Let’s help you create a smarter digital experience powered by AI-driven
personalization.<br><br>`,
},

{
  id: 8,
  title: "Machine Learning Solutions",
  description: `<b>Transform Data Into Actionable Intelligence</b><br><br>
At <b>Manovate Technologies</b>, we deliver machine learning solutions that help
businesses make smarter, data-driven decisions and automate complex
processes.<br><br>
Our ML models are designed to analyze patterns, predict outcomes, and
continuously improve performance — giving your business a competitive edge in
today’s fast-paced digital world.<br><br>
From predictive analytics to intelligent automation, we build solutions that turn
your data into measurable business value.<br><br>
<b>What We Deliver</b><br><br>
<b>Predictive Analytics</b><br>
Identify trends, forecast demand, and make informed decisions with accurate,
data-backed predictions.<br><br>
<b>Data Classification and Clustering</b><br>
Organize and segment data intelligently to uncover hidden patterns,
relationships, and insights.<br><br>
<b>Natural Language Processing (NLP)</b><br>
Enable machines to understand and respond to human language, powering
chatbots, sentiment analysis, and voice recognition systems.<br><br>
<b>Computer Vision Solutions</b><br>
Extract meaningful insights from images and videos through object detection,
facial recognition, and visual analytics.<br><br>
<b>Recommendation and Personalization Models</b><br>
Deliver personalized content, products, or offers that increase engagement and
conversion rates.<br><br>
<b>Automation and Optimization Models</b><br>
Use machine learning to improve workflows, reduce manual intervention, and
optimize business operations.<br><br>`,
  image: machine,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>End-to-End ML Expertise:</b> From data preparation to model training,
deployment, and optimization.<br><br>
● <b>Proven Industry Experience:</b> Solutions tailored for retail, finance,
healthcare, education, logistics, and more.<br><br>
● <b>Custom-Built Algorithms:</b> Designed to meet your specific business
challenges and data needs.<br><br>
● <b>Scalable and Secure Systems:</b> Reliable performance for both small and
large-scale data environments.<br><br>
● <b>Continuous Improvement:</b> Models that evolve and adapt as new data
becomes available.<br><br>
<b>Empower Your Business With Machine Learning</b><br><br>
Unlock the full potential of your data with AI-driven insights that improve
accuracy, reduce costs, and drive innovation.<br><br>
Let’s build intelligent systems that help your business grow smarter every day.<br><br>`,
},

{
  id:9,
  title: "Computer Vision Solutions",
  description: `<b>Empowering Businesses With Intelligent Visual Insights</b><br><br>
At <b>Manovate Technologies</b>, we develop advanced computer vision solutions
that help businesses see, analyze, and act on visual data in real time.<br><br>
Our AI-driven systems interpret images and videos with high accuracy,
automating visual tasks and unlocking new levels of efficiency, security, and
customer experience.<br><br>
Whether it’s detecting defects, recognizing faces, or tracking movement, our
solutions enable smarter operations and data-driven decisions across industries.<br><br>
<b>What We Deliver</b><br><br>
<b>Image Recognition and Analysis</b><br>
Identify, classify, and tag objects or patterns within images to enhance
decision-making and automation.<br><br>
<b>Video Analytics</b><br>
Monitor, detect, and interpret activities in real time using intelligent video
analysis for security, retail, and operations.<br><br>
<b>Facial Recognition Systems</b><br>
Improve access control, user authentication, and customer engagement with
secure and accurate facial recognition technology.<br><br>
<b>Object Detection and Tracking</b><br>
Track products, people, or vehicles with precision for logistics, manufacturing, or
smart city applications.<br><br>
<b>Quality Inspection and Automation</b><br>
Automate visual inspection processes to detect defects, ensure compliance, and
maintain consistent quality standards.<br><br>
<b>Augmented Reality (AR) Integration</b><br>
Enhance user experiences with interactive AR features for training, product
visualization, or marketing.<br><br>`,
  image: computer,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>AI-Powered Visual Intelligence:</b> Solutions built using cutting-edge deep
learning and neural network models.<br><br>
● <b>Cross-Industry Expertise:</b> Applied across manufacturing, retail, security,
healthcare, and automotive sectors.<br><br>
● <b>Custom and Scalable Solutions:</b> Tailored to your business environment
and adaptable as your needs grow.<br><br>
● <b>Seamless Integration:</b> Designed to integrate with existing software, IoT
systems, and cloud platforms.<br><br>
● <b>High Accuracy and Real-Time Processing:</b> Optimized models for speed,
precision, and reliability.<br><br>
<b>See Beyond Data With Computer Vision</b><br><br>
Turn images and videos into valuable business intelligence. Our computer
vision technology helps you automate complex visual tasks, reduce costs, and
drive smarter decisions.<br><br>
Partner with us to bring innovation, speed, and accuracy to your business
operations.<br><br>`,
},

{
  id: 10,
  title: "AIoT Solutions",
  description: `<b>Connecting Intelligence With Innovation</b><br><br>
At <b>Manovate Technologies</b>, we deliver AIoT solutions that combine the power of
<b>Artificial Intelligence (AI)</b> with the <b>Internet of Things (IoT)</b> to create smarter,
data-driven ecosystems.<br><br>
Our solutions help businesses connect devices, analyze data in real time, and
automate operations for better efficiency, safety, and scalability.<br><br>
From smart manufacturing to connected healthcare and intelligent cities, we
design AIoT systems that transform how businesses sense, decide, and act.<br><br>
<b>What We Deliver</b><br><br>
<b>Smart Device Integration</b><br>
Connect and manage devices, sensors, and machines seamlessly through
intelligent networks that enable real-time monitoring and control.<br><br>
<b>Edge AI and Real-Time Analytics</b><br>
Process data closer to the source with edge computing and AI, ensuring faster
decisions and minimal latency.<br><br>
<b>Predictive Maintenance Systems</b><br>
Reduce downtime and maintenance costs by predicting failures before they
happen through data-driven insights.<br><br>
<b>Smart Manufacturing Solutions</b><br>
Enable automated production lines, quality inspection, and resource optimization
with AI-powered IoT systems.<br><br>
<b>Connected Infrastructure and Smart Cities</b><br>
Enhance public safety, traffic management, and energy efficiency through
integrated IoT and AI systems.<br><br>
<b>Data Security and Cloud Integration</b><br>
Ensure secure data flow across connected devices with encryption, access
control, and scalable cloud platforms.<br><br>`,
  image: iot,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>End-to-End AIoT Expertise:</b> From strategy and sensor integration to AI
model deployment and monitoring.<br><br>
● <b>Custom-Built Solutions:</b> Designed for your industry’s specific needs and
operational goals.<br><br>
● <b>Scalable and Secure Architecture:</b> Built to handle growing data and
evolving business demands.<br><br>
● <b>Cross-Industry Applications:</b> Trusted across manufacturing, logistics,
energy, healthcare, and retail.<br><br>
● <b>Data-Driven Efficiency:</b> Enable intelligent automation and actionable
insights across every connected process.<br><br>
<b>Elevate Your Business With Smart Connectivity</b><br><br>
Transform your operations with intelligent AIoT ecosystems that connect devices,
data, and decisions.<br><br>
At Manovate Technologies, we help you achieve operational excellence
through real-time insights, automation, and innovation.<br><br>`,
},

{
  id: 11,
  title: "Cloud Solutions & Integration",
  description: `<b>Seamless, Scalable, and Secure Cloud Transformation</b><br><br>
At <b>Manovate Technologies</b>, we deliver comprehensive cloud solutions and
integration services that help businesses modernize their IT infrastructure,
enhance scalability, and improve operational efficiency.<br><br>
Our experts specialize in building, migrating, and managing cloud ecosystems
that align with your business goals and accelerate digital transformation.<br><br>
Whether you are adopting cloud for the first time or optimizing existing systems,
we ensure a smooth and secure transition that maximizes performance and cost
efficiency.<br><br>
<b>What We Deliver</b><br><br>
<b>Cloud Migration Services</b><br>
Move your applications, data, and workloads to the cloud with zero disruption
and optimized performance.<br><br>
<b>Multi-Cloud and Hybrid Cloud Integration</b><br>
Integrate different cloud environments to achieve flexibility, resilience, and better
cost management.<br><br>
<b>Cloud Infrastructure Management</b><br>
Monitor, optimize, and maintain your cloud systems with proactive management
and performance tuning.<br><br>
<b>Application Modernization</b><br>
Upgrade legacy systems to cloud-native applications that improve agility,
scalability, and speed to market.<br><br>
<b>Cloud Security and Compliance</b><br>
Protect your cloud environment with advanced encryption, access control, and
compliance with global security standards.<br><br>
<b>Data Backup and Disaster Recovery</b><br>
Ensure business continuity with reliable data protection, backup, and recovery
solutions.<br><br>`,
  image: cloud,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Comprehensive Cloud Expertise:</b> Strategy, migration, integration, and
ongoing management under one roof.<br><br>
● <b>Cloud Professionals:</b> Skilled teams experienced with AWS, Azure, and
Google Cloud platforms.<br><br>
● <b>Cost-Optimized Solutions:</b> Pay only for what you need with scalable and
efficient infrastructure.<br><br>
● <b>Seamless Integration:</b> Smooth connectivity across cloud, on-premises,
and hybrid systems.<br><br>
● <b>24/7 Monitoring and Support:</b> Continuous management to ensure
uptime, security, and performance.<br><br>
<b>Accelerate Your Business With the Cloud</b><br><br>
Empower your organization with cloud-first technology that enhances flexibility,
reduces costs, and drives innovation.<br><br>
Partner with <b>Manovate Technologies</b> to unlock the full potential of cloud
computing through seamless migration and intelligent integration.<br><br>`,
},

{
  id: 12,
  title: "SaaS Application Development",
  description: `<b>Scalable SaaS Application Development for Modern Businesses</b><br><br>
At <b>Manovate Technologies</b>, we design and develop SaaS applications that
empower businesses to innovate faster, operate smarter, and scale without limits.<br><br>
Our team builds cloud-based software solutions that combine powerful
functionality with intuitive user experiences, ensuring seamless performance and
continuous availability.<br><br>
Whether you need a subscription-based platform, enterprise-grade software, or a
product built to serve millions of users, we deliver solutions that meet global
SaaS standards and drive measurable results.<br><br>
<b>What We Deliver</b><br><br>
<b>Custom SaaS Product Development</b><br>
Design, develop, and deploy tailored SaaS products that align with your
business model and market needs.<br><br>
<b>Multi-Tenant Architecture</b><br>
Build secure and scalable systems that support multiple users or businesses
with optimal data separation and reliability.<br><br>
<b>API Development and Integration</b><br>
Enhance functionality and interoperability with robust APIs that connect
third-party tools and services effortlessly.<br><br>
<b>Subscription Management Systems</b><br>
Simplify billing, payments, and renewals with automated subscription and
revenue management features.<br><br>
<b>Cloud Deployment and Maintenance</b><br>
Deploy SaaS applications across leading platforms like AWS, Azure, or Google
Cloud with continuous monitoring and updates.<br><br>
<b>User Experience and Performance Optimization</b><br>
Ensure fast load times, smooth navigation, and responsive designs that keep
users engaged and satisfied.<br><br>`,
  image: saas,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Proven SaaS Expertise:</b> Experience in building scalable,
high-performance SaaS platforms across industries.<br><br>
● <b>Agile Development Approach:</b> Faster go-to-market with flexible, iterative
development cycles.<br><br>
● <b>Secure and Compliant Solutions:</b> Enterprise-grade security aligned with
global standards like GDPR and ISO.<br><br>
● <b>Data-Driven Scalability:</b> Built to handle growth and changing user
demands seamlessly.<br><br>
● <b>Continuous Support and Upgrades:</b> We ensure your SaaS product
evolves with your business and technology trends.<br><br>
<b>Transform Your Idea Into a Successful SaaS Product</b><br><br>
Turn your vision into a reliable, cloud-based solution that delivers real value to
your users.<br><br>
With <b>Manovate Technologies</b>, you get more than just software — you gain a
partner dedicated to innovation, scalability, and long-term success.<br><br>`,
},

{
  id: 13,
  title: "Unified Communications (UCaaS)",
  description: `<b>Simplify Collaboration and Empower Seamless Communication</b><br><br>
At <b>Manovate Technologies</b>, we deliver Unified Communications as a Service (UCaaS)
solutions that bring together voice, video, messaging, and collaboration
tools into one powerful cloud-based platform.<br><br>
Our UCaaS services help businesses connect teams, customers, and partners
efficiently while improving productivity and reducing communication costs.<br><br>
Whether your workforce is on-site, remote, or hybrid, we enable smarter
communication through AI-powered, scalable, and integrated platforms that keep
your business connected from anywhere.<br><br>
<b>What We Deliver</b><br><br>
<b>Cloud-Based Voice and Telephony</b><br>
High-quality VoIP calling and PBX systems that ensure reliable, cost-effective
communication across all locations.<br><br>
<b>Video Conferencing Solutions</b><br>
HD video meetings with screen sharing, recording, and collaboration features for
seamless real-time interaction.<br><br>
<b>AI-Powered Collaboration Tools</b><br>
Enhance team productivity with intelligent features such as automated meeting
transcriptions, smart summaries, sentiment analysis, and AI-driven chat
assistance.<br><br>
<b>Team Messaging and File Sharing</b><br>
Centralized communication through chat, file sharing, and workflow
management to keep everyone aligned and productive.<br><br>
<b>Mobile and Remote Access</b><br>
Stay connected across devices with secure mobile apps that enable anytime,
anywhere communication.<br><br>
<b>Analytics and Reporting</b><br>
AI-based analytics to monitor usage, performance, and engagement for
data-driven communication improvements.<br><br>`,
  image: unified,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Comprehensive UCaaS Expertise:</b> Design, implementation, and
management tailored to your business needs.<br><br>
● <b>AI-Enhanced Communication:</b> Intelligent automation and insights for
faster, smarter collaboration.<br><br>
● <b>Scalable Cloud Infrastructure:</b> Flexible systems that evolve with your
team and operational growth.<br><br>
● <b>Enterprise-Grade Security:</b> Strong encryption and compliance for secure
and reliable communication.<br><br>
<b>Empower Your Business With Intelligent Communication</b><br><br>
Transform your workplace communication with AI-driven UCaaS solutions that
simplify collaboration, enhance productivity, and reduce costs.<br><br>
Partner with <b>Manovate Technologies</b> to unify your business communication
through an intelligent, cloud-based, and future-ready platform.<br><br>`,
},

{
  id: 14,
  title: "CRM Systems",
  description: `<b>Build Stronger Customer Relationships With Smarter CRM Solutions</b><br><br>
At <b>Manovate Technologies</b>, we design and implement Customer Relationship
Management (CRM) systems that help businesses manage leads, enhance
customer engagement, and drive sales growth.<br><br>
Our CRM solutions provide a unified platform to track interactions, automate
marketing, and improve customer service across all touchpoints.<br><br>
Whether you need a simple CRM for lead tracking or a fully customized solution
integrated with your existing systems, we deliver platforms that improve
productivity, visibility, and decision-making.<br><br>
<b>What We Deliver</b><br><br>
<b>Custom CRM Development</b><br>
Tailored CRM platforms built around your business model, sales process, and
customer lifecycle.<br><br>
<b>Sales and Marketing Automation</b><br>
Automate workflows, follow-ups, and campaigns to increase conversion rates
and shorten sales cycles.<br><br>
<b>Customer Service and Support Management</b><br>
Manage customer interactions efficiently with centralized support tools, ticketing,
and response tracking.<br><br>
<b>Analytics and Reporting Dashboards</b><br>
Access real-time insights into customer behavior, pipeline performance, and
campaign ROI.<br><br>
<b>Integration and Migration Services</b><br>
Connect your CRM with ERP, websites, and third-party applications for a
seamless flow of data.<br><br>
<b>Mobile CRM Solutions</b><br>
Empower your teams to manage leads, calls, and opportunities from any device,
anytime.<br><br>
<b>Data Security and Compliance</b><br>
Protect customer and business data with advanced encryption, role-based
access, and adherence to global and regional data privacy regulations to ensure
secure and trustworthy CRM operations.<br><br>`,
  image: crm,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Proficient in delivering and integrating CRM solutions</b> using leading
platforms such as Salesforce, HubSpot, Zoho, and tailor-made systems.<br><br>
● <b>Scalable and secure systems</b> designed for growing businesses.<br><br>
● <b>Industry-specific CRM customization</b> for retail, healthcare, finance, and
more.<br><br>
● <b>Data-driven insights</b> to improve customer retention and loyalty.<br><br>
● <b>Continuous support and training</b> for your internal teams.<br><br>
<b>Enhance Customer Experience With Smart CRM Solutions</b><br><br>
Improve relationships, streamline sales, and gain a complete view of your
customers.<br><br>
Partner with <b>Manovate Technologies</b> to implement a CRM system that turns
relationships into revenue.<br><br>`,
},

{
  id: 15,
  title: "ERP Systems",
  description: `<b>Streamline Operations With Intelligent ERP Solutions</b><br><br>
At <b>Manovate Technologies</b>, we deliver Enterprise Resource Planning (ERP)
systems that unify business operations, improve productivity, and provide
complete visibility across departments.<br><br>
Our ERP solutions integrate finance, inventory, HR, supply chain, and operations
into one centralized system that drives efficiency and informed decision-making.<br><br>
We help businesses replace fragmented processes with a single, intelligent
platform that adapts to your workflow and scales with your growth.<br><br>
<b>What We Deliver</b><br><br>
<b>Custom ERP Development</b><br>
ERP systems tailored to your industry, processes, and specific operational
requirements.<br><br>
<b>Modular ERP Implementation</b><br>
Flexible deployment with modules for accounting, HR, procurement, inventory,
and production.<br><br>
<b>Integration and Migration</b><br>
Seamless connection of ERP systems with CRM, e-commerce, and other
enterprise tools.<br><br>
<b>Real-Time Data and Analytics</b><br>
Access accurate, real-time business intelligence to make data-driven strategic
decisions.<br><br>
<b>Cloud-Based and On-Premise Solutions</b><br>
Choose from scalable cloud ERP or secure on-premise models based on your IT
strategy.<br><br>
<b>Automation and Optimization</b><br>
Automate repetitive processes to improve efficiency, accuracy, and compliance.<br><br>
<b>Data Security and Compliance</b><br>
Ensure the protection of sensitive business data through strong encryption,
secure access controls, and full compliance with global and regional data privacy
regulations.<br><br>`,
  image: erp,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Highly proficient in implementing and customizing top ERP systems</b>
including SAP, Oracle, and Microsoft Dynamics to optimize business
performance and efficiency.<br><br>
● <b>Proven track record</b> in multi-industry ERP implementation.<br><br>
● <b>Strong focus</b> on data security, performance, and scalability.<br><br>
● <b>Streamlined integration</b> with existing IT infrastructure.<br><br>
● <b>Ongoing support, maintenance, and system optimization</b> for long-term success.<br><br>
<b>Transform Business Efficiency With Scalable ERP Solutions</b><br><br>
Empower your organization with a connected ERP system that simplifies
workflows, reduces costs, and enhances visibility across all departments.<br><br>
Partner with <b>Manovate Technologies</b> to modernize your enterprise operations
and achieve sustainable growth.<br><br>`,
},

{
  id: 16,
  title: "Human Resource Management Systems (HRMS)",
  description: `<b>Smarter HR Solutions That Simplify Workforce Management</b><br><br>
At <b>Manovate Technologies</b>, we develop and implement Human Resource
Management Systems (HRMS) that streamline every aspect of workforce
management — from recruitment and onboarding to payroll and compliance.<br><br>
Our HRMS solutions empower businesses to manage employees efficiently,
automate routine HR tasks, and gain valuable workforce insights through intuitive
dashboards and analytics.<br><br>
Whether your organization has a small team or a large workforce, our HRMS
solutions are built to simplify complex HR processes, ensure compliance, and
improve employee engagement.<br><br>
<b>What We Deliver</b><br><br>
<b>HR Process Automation</b><br>
Automate repetitive tasks such as attendance tracking, leave requests, and
employee data management to save time and reduce errors.<br><br>
<b>Payroll and Compliance Management</b><br>
Handle salary processing, tax calculations, and statutory compliance accurately
with built-in automation and reporting tools.<br><br>
<b>Recruitment and Onboarding</b><br>
Simplify the hiring journey with integrated modules for candidate tracking,
onboarding, and performance setup.<br><br>
<b>Performance and Appraisal Management</b><br>
Monitor KPIs, conduct reviews, and align employee goals with business
objectives using data-driven insights.<br><br>
<b>Employee Self-Service Portals</b><br>
Empower employees to manage their profiles, leave requests, and payslips with
secure, user-friendly self-service dashboards.<br><br>
<b>Analytics and Reporting</b><br>
Gain actionable insights into workforce productivity, attendance trends, and HR
efficiency with detailed analytics.<br><br>`,
  image: hrms,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Proficient in developing scalable HRMS solutions</b> tailored to diverse
industries.<br><br>
● <b>Integration-ready platforms</b> compatible with payroll, ERP, and CRM
systems.<br><br>
● <b>Enhanced data security and compliance</b> with global HR standards.<br><br>
● <b>Custom modules</b> built for your specific HR processes and organizational
hierarchy.<br><br>
● <b>Ongoing support and system upgrades</b> to ensure peak performance.<br><br>
<b>Empower Your Workforce With Intelligent HRMS Solutions</b><br><br>
Simplify HR management, ensure compliance, and create a more connected,
productive workplace.<br><br>
Partner with <b>Manovate Technologies</b> to implement a Human Resource
Management System that transforms how your business manages its people.<br><br>`,
},

{
  id: 17,
  title: "Inventory Management Systems",
  description: `<b>Real-Time Inventory Management Solutions That Drive Efficiency and Control</b><br><br>
At <b>Manovate Technologies</b>, we design and implement Inventory Management
Systems that help businesses monitor, control, and optimize their inventory with
accuracy and speed.<br><br>
Our solutions give you real-time insights into stock levels, order statuses, and
supply chain performance, ensuring that every product movement is tracked
efficiently from procurement to delivery.<br><br>
Our inventory management solutions empower businesses across warehouses,
retail, and distribution networks to reduce errors, forecast demand accurately,
and enhance overall operational performance.<br><br>
<b>What We Deliver</b><br><br>
<b>Real-Time Inventory Tracking</b><br>
Monitor stock levels, product movement, and reorder points in real time to
prevent stockouts and overstocking.<br><br>
<b>Automated Replenishment</b><br>
Set intelligent restocking alerts and automate purchase orders based on
demand and sales trends.<br><br>
<b>Multi-Location Inventory Control</b><br>
Easily manage and sync inventory across multiple warehouses, stores, or
regions from a single dashboard.<br><br>
<b>Barcode and RFID Integration</b><br>
Improve accuracy and speed in inventory updates with advanced scanning and
tagging capabilities.<br><br>
<b>Analytics and Forecasting</b><br>
Leverage predictive analytics to understand demand patterns and make
data-driven restocking decisions.<br><br>
<b>Seamless System Integration</b><br>
Integrate your inventory management software with ERP, CRM, and
e-commerce platforms for smooth data flow and operational transparency.<br><br>`,
  image: inventory,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Expertise</b> in custom and cloud-based inventory management solutions.<br><br>
● <b>Real-time analytics</b> for faster decision-making and improved accuracy.<br><br>
● <b>Scalable platforms</b> designed for small businesses and large enterprises alike.<br><br>
● <b>Enhanced security and reliability</b> to safeguard business data.<br><br>
● <b>Continuous support, upgrades, and performance monitoring</b> to ensure system stability.<br><br>
<b>Optimize Inventory, Maximize Efficiency</b><br><br>
Gain complete visibility and control over your supply chain with a powerful,
data-driven Inventory Management System.<br><br>
Partner with <b>Manovate Technologies</b> to streamline operations, reduce costs,
and ensure your products are always where they need to be.<br><br>`,
},
{
  id: 18,
  title: "Cybersecurity Services",
  description: `<b>Comprehensive Cybersecurity Solutions to Safeguard Your Business</b><br><br>
In today’s digital landscape, every organization needs strong protection against
data breaches and online threats. <b>Manovate Technologies</b> helps businesses
secure their systems, networks, and applications with practical, scalable
cybersecurity services.<br><br>
Our focus is on <b>prevention, detection, and continuous monitoring</b> to keep your
operations safe and compliant. From safeguarding sensitive data to managing
risk effectively, we help you maintain trust and business continuity.<br><br>
<b>Our Key Cybersecurity Solutions</b><br><br>
<b>Network and Infrastructure Security</b><br>
Safeguard servers, endpoints, and communication systems from unauthorized
access using advanced network defense tools and regular system audits.<br><br>
<b>Application and Cloud Security</b><br>
Ensure your web, mobile, and cloud applications are built and maintained with
secure architecture and proactive vulnerability checks.<br><br>
<b>Data Protection and Compliance</b><br>
Keep sensitive business data protected through encryption, access control, and
compliance with international data security standards.<br><br>
<b>Threat Monitoring and Response</b><br>
Identify and respond to suspicious activity quickly with intelligent threat detection
and managed response systems.<br><br>
<b>Security Testing and Assessments</b><br>
Uncover and address system weaknesses through penetration testing and
periodic security reviews.<br><br>`,
  image: cyber,
  more_description: `<b>Why Businesses Choose Us</b><br><br>
● <b>Balanced approach</b> combining technology and security best practices.<br><br>
● <b>Solutions tailored</b> to each organization’s size, sector, and risk level.<br><br>
● <b>Regular updates and reporting</b> to stay ahead of new threats.<br><br>
● <b>Support from skilled cybersecurity professionals</b> with hands-on experience.<br><br>
<b>Protect What Drives Your Business Forward</b><br><br>
Secure your data, systems, and customer trust with <b>Manovate Technologies’</b>
Cybersecurity Services.<br><br>
We help you stay resilient and ready for the challenges of a connected world.<br><br>`,
},


],
NonIT: [
{
  id: 1,
  title: "Business Consulting Services",
  description: `<b>Strategic Business Consulting for Sustainable Growth</b><br><br>
At <b>Manovate Technologies</b>, we help businesses strengthen their foundation,
streamline operations, and plan for measurable growth. Our consulting services
combine <b>data-driven insights</b> with real-world expertise to align business goals
with practical execution.<br><br>
We partner with startups, SMEs, and enterprises to uncover inefficiencies,
improve decision-making, and design strategies that drive lasting impact.<br><br>
<b>Our Business Consulting Expertise</b><br><br>
<b>Operational Efficiency Improvement</b><br>
Identify process gaps and implement smart strategies to increase productivity,
reduce costs, and optimize resource utilization.<br><br>
<b>Business Strategy Development</b><br>
Create long-term business roadmaps that align with your vision, market trends,
and evolving customer expectations.<br><br>
<b>Organizational Transformation</b><br>
Support leadership teams in restructuring, change management, and culture
building to enhance business agility.<br><br>
<b>Financial and Performance Analysis</b><br>
Use data-backed insights to evaluate performance, control costs, and strengthen
profitability.<br><br>
<b>Market and Competitive Intelligence</b><br>
Stay ahead of industry shifts with research-driven insights that guide expansion,
partnerships, and innovation.<br><br>`,
  image: business,
  more_description: `<b>Why Partner with Us</b><br><br>
● <b>Consultants with diverse industry insights</b> and practical problem-solving
expertise.<br><br>
● <b>Tailored business strategies</b> based on measurable goals.<br><br>
● <b>Proven frameworks</b> for sustainable and scalable growth.<br><br>
● <b>Continuous guidance</b> for strategic execution and performance tracking.<br><br>
<b>Drive Smarter Growth</b><br><br>
Build a stronger, more efficient business with <b>Manovate Technologies</b> Business
Consulting Services.<br><br>
Our strategic approach empowers organizations to make confident decisions and
achieve consistent success.<br><br>`,
},

{
  id: 2,
  title: "Branding & Design Services",
  description: `<b>Create a Powerful Brand Identity That Inspires and Connects</b><br><br>
At <b>Manovate Technologies</b>, we help businesses establish a brand that tells their
story, builds trust, and creates lasting impressions. Our branding and design
services go beyond visuals — we craft experiences that communicate your value
and connect emotionally with your audience.<br><br>
We work with startups and established enterprises to develop cohesive brand
identities that stand out across digital and print platforms.<br><br>
<b>Our Branding & Design Expertise</b><br><br>
<b>Brand Strategy Development</b><br>
Define your brand’s vision, mission, and positioning with a clear strategy that
differentiates you in a competitive market.<br><br>
<b>Logo & Visual Identity Design</b><br>
Create unique, memorable, and meaningful brand visuals including logos, color
palettes, and typography systems that reflect your identity.<br><br>
<b>Marketing Collateral Design</b><br>
Design professional brochures, presentations, and promotional materials that
strengthen your marketing efforts and brand consistency.<br><br>
<b>Digital & Social Media Branding</b><br>
Ensure your brand looks and feels consistent across websites, social media
platforms, and online campaigns.<br><br>
<b>Rebranding & Brand Refresh</b><br>
Revitalize your existing brand with a modern design approach that aligns with
current trends and customer expectations.<br><br>`,
  image: branding,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Holistic approach</b> combining creativity and brand strategy.<br><br>
● <b>Experienced designers</b> with cross-industry expertise.<br><br>
● <b>Design systems optimized</b> for both digital and print presence.<br><br>
● <b>Consistent branding</b> that enhances credibility and engagement.<br><br>
<b>Build a Brand That Lasts</b><br><br>
Your brand is your most powerful business asset. Partner with <b>Manovate
Technologies</b> to build a brand identity that inspires trust, attracts customers, and
fuels long-term growth.<br><br>`,
},

{
  id: 3,
  title: "Accounting & Financial Operations Services",
  description: `<b>Streamline Your Finances with Accuracy, Transparency, and Control</b><br><br>
At <b>Manovate Technologies</b>, we help businesses simplify their financial
management and gain actionable insights for smarter decision-making. Our
accounting and financial operations services are designed to ensure accuracy,
compliance, and efficiency in every transaction.<br><br>
From bookkeeping to financial analysis, we provide tailored solutions that help
organizations maintain clarity, optimize performance, and focus on growth.<br><br>
<b>Our Core Financial Solutions</b><br><br>
<b>Bookkeeping & Accounting</b><br>
Accurate, real-time financial tracking that keeps your records organized and your
business audit-ready.<br><br>
<b>Payroll & Compliance Management</b><br>
Timely payroll processing with complete adherence to tax laws and regulatory
requirements.<br><br>
<b>Financial Planning & Analysis</b><br>
Data-driven insights that guide budgeting, forecasting, and long-term business
planning.<br><br>
<b>Accounts Payable & Receivable Automation</b><br>
Streamlined systems that improve cash flow, reduce errors, and ensure financial
accuracy.<br><br>
<b>Expense & Asset Management</b><br>
Comprehensive tracking of assets and expenditures for better resource
utilization and financial visibility.<br><br>`,
  image: accounting,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Reliable financial operations</b> built on accuracy and compliance.<br><br>
● <b>Expert support</b> for startups, SMEs, and enterprise-level businesses.<br><br>
● <b>Cloud-based financial tools</b> for secure, real-time access to data.<br><br>
● <b>Scalable solutions</b> that adapt as your business grows.<br><br>
<b>Drive Financial Efficiency and Business Growth</b><br><br>
Gain better financial control with <b>Manovate Technologies’ Accounting &
Financial Operations Services.</b><br><br>
We empower your business with transparency, precision, and strategic insights
to help you make confident financial decisions.<br><br>`,
},

{
  id: 4,
  title: "Digital Marketing Services",
  description: `<b>Boost Your Online Presence and Turn Clicks into Customers</b><br><br>
At <b>Manovate Technologies</b>, we help businesses grow online through
data-driven digital marketing strategies that attract, engage, and convert. Our
team blends creativity with analytics to deliver measurable results across every
digital channel.<br><br>
From brand visibility to lead generation, we ensure your business reaches the
right audience at the right time — maximizing ROI and long-term growth.<br><br>
<b>Our Digital Marketing Expertise</b><br><br>
<b>Search Engine Optimization (SEO)</b><br>
Enhance your website’s visibility and rank higher on Google with proven SEO
techniques that drive organic traffic and qualified leads.<br><br>
<b>Pay-Per-Click (PPC) Advertising</b><br>
Target your ideal audience with high-performing ad campaigns that deliver
measurable conversions and controlled costs.<br><br>
<b>Social Media Marketing (SMM)</b><br>
Build brand awareness and engagement through tailored campaigns across
platforms like Instagram, LinkedIn, Facebook, and X.<br><br>
<b>Content Marketing</b><br>
Develop compelling blogs, web copy, and digital assets that position your brand
as an authority and attract loyal audiences.<br><br>
<b>Email & Automation Campaigns</b><br>
Convert prospects into customers with personalized email strategies and
automated workflows that nurture relationships.<br><br>
<b>Analytics & Performance Tracking</b><br>
Get real-time insights into campaign performance, ROI, and user behavior for
continuous optimization.<br><br>`,
  image: digital,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Full-suite digital marketing solutions</b> under one roof.<br><br>
● <b>Campaigns built on real data</b>, not guesswork.<br><br>
● <b>Proven strategies</b> to improve visibility, engagement, and conversions.<br><br>
● <b>Certified experts</b> in SEO, paid media, and social marketing.<br><br>
● <b>Scalable solutions</b> for startups, SMEs, and enterprises.<br><br>
<b>Accelerate Your Brand Growth</b><br><br>
Partner with <b>Manovate Technologies</b> to build a strong digital footprint that
drives consistent traffic, quality leads, and measurable sales growth.<br><br>
Let’s create a marketing strategy that moves your business forward.<br><br>`,
},

{
  id: 5,
  title: "Customer Experience Management Services",
  description: `<b>Deliver Exceptional Customer Journeys That Build Loyalty and Growth</b><br><br>
At <b>Manovate Technologies</b>, we help businesses create meaningful customer
experiences that drive satisfaction, retention, and lifetime value. Our <b>Customer
Experience Management (CXM)</b> solutions focus on understanding customer
behavior, improving engagement, and building stronger brand relationships
across every touchpoint.<br><br>
We combine technology, analytics, and human insight to help your business
deliver consistent, personalized, and impactful customer interactions that turn
satisfaction into long-term loyalty.<br><br>
<b>Our CXM Service Expertise</b><br><br>
<b>Customer Journey Mapping</b><br>
Analyze every stage of the customer journey to identify pain points, improve
touchpoints, and enhance overall satisfaction.<br><br>
<b>Omnichannel Engagement</b><br>
Ensure seamless communication across channels including web, social media,
email, and customer support for a unified brand experience.<br><br>
<b>Customer Feedback & Sentiment Analysis</b><br>
Leverage AI-driven tools to capture feedback, monitor sentiment, and make
data-backed improvements in real time.<br><br>
<b>Personalized Experience Design</b><br>
Use behavioral insights and automation to deliver tailored experiences that
increase engagement and conversion rates.<br><br>
<b>Customer Retention Strategies</b><br>
Implement proactive service strategies and loyalty programs that strengthen
long-term customer relationships.<br><br>`,
  image: customer,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Proficient in customer analytics and experience strategy</b><br><br>
● <b>Technology-driven approach</b> for consistent engagement<br><br>
● <b>Proven methods</b> to boost retention, satisfaction, and advocacy<br><br>
● <b>Seamless integration</b> with CRM, support, and marketing systems<br><br>
● <b>Dedicated CX professionals</b> ensuring measurable improvements<br><br>
<b>Transform Every Interaction into an Opportunity</b><br><br>
Empower your business to deliver experiences that delight customers and
strengthen brand loyalty.<br><br>
Partner with <b>Manovate Technologies</b> to optimize every customer interaction
for growth and retention.<br><br>`,
},

{
  id: 6,
  title: "Content Creation & Management Services",
  description: `<b>Power Your Brand with Strategic, Impactful Content</b><br><br>
At <b>Manovate Technologies</b>, we create content that not only captures attention
but also drives measurable business results. Our <b>Content Creation and
Management Services</b> help businesses communicate their value clearly,
strengthen brand authority, and connect meaningfully with their audience across
every digital platform.<br><br>
We blend creativity with strategy to deliver consistent, high-quality content that
supports your marketing goals and fuels long-term growth.<br><br>
<b>Our Content Solutions Include</b><br><br>
<b>Content Strategy & Planning</b><br>
Develop a clear roadmap that aligns your messaging with brand goals, audience
needs, and market trends.<br><br>
<b>Website & Blog Content</b><br>
Craft SEO-optimized, engaging copy that attracts visitors, improves rankings,
and converts readers into customers.<br><br>
<b>Social Media Content</b><br>
Create impactful posts, visuals, and campaigns that enhance engagement and
visibility across platforms.<br><br>
<b>Copywriting & Brand Messaging</b><br>
Deliver persuasive, brand-aligned messaging for marketing materials, ads, and
digital campaigns.<br><br>
<b>Content Management & Optimization</b><br>
Maintain a consistent voice and ensure your content stays relevant through
regular updates and performance tracking.<br><br>`,
  image: content,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Strategic content</b> built for visibility, engagement, and conversion<br><br>
● <b>Skilled writers and content strategists</b> with multi-industry experience<br><br>
● <b>SEO-integrated approach</b> for stronger search rankings<br><br>
● <b>Streamlined management</b> for consistent publishing and branding<br><br>
● <b>Tailored solutions</b> that evolve with your business needs<br><br>
<b>Inspire Trust and Action Through Authentic Content</b><br><br>
Strong content is the foundation of effective communication.<br><br>
Partner with <b>Manovate Technologies</b> to create and manage content that drives
awareness, builds trust, and accelerates business growth.<br><br>`,
},

{
  id: 7,
  title: "Appointment Management Services",
  description: `<b>Optimize Scheduling and Enhance Customer Convenience</b><br><br>
At <b>Manovate Technologies</b>, we help businesses simplify appointment
scheduling through smart, automated systems that improve coordination, reduce
manual effort, and enhance customer satisfaction. Our <b>Appointment
Management Services</b> are designed to optimize time, increase staff productivity,
and ensure a seamless booking experience for both customers and teams.<br><br>
We deliver user-friendly, scalable solutions that make scheduling faster, smarter,
and more efficient — helping your business focus on what truly matters: delivering
value.<br><br>
<b>Our Appointment Management Solutions</b><br><br>
<b>Automated Scheduling Systems</b><br>
Enable real-time booking, rescheduling, and reminders to eliminate manual
coordination and missed appointments.<br><br>
<b>Staff & Resource Allocation</b><br>
Manage team availability and resource utilization effectively through centralized
dashboards and intelligent scheduling.<br><br>
<b>Customer Self-Booking Portals</b><br>
Empower customers to book appointments anytime, anywhere, with a simple
and secure online interface.<br><br>
<b>Calendar & System Integration</b><br>
Sync with Google Calendar, Outlook, CRM, and other platforms to maintain
organized workflows and prevent overlaps.<br><br>
<b>Performance & Analytics Reporting</b><br>
Track booking trends, attendance, and staff performance through insightful
analytics for continuous improvement.<br><br>`,
  image: appointment,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Comprehensive appointment automation solutions</b><br><br>
● <b>Seamless integration</b> with existing business tools<br><br>
● <b>Enhanced efficiency</b> and reduced administrative workload<br><br>
● <b>Scalable systems</b> suitable for businesses of any size<br><br>
● <b>Improved customer satisfaction</b> through instant scheduling<br><br>
<b>Simplify Your Scheduling Experience</b><br><br>
Empower your business with <b>Manovate Technologies Appointment
Management Solutions</b> that make scheduling effortless, efficient, and reliable.<br><br>
Deliver convenience for customers and productivity for your team — all through
one smart system.<br><br>`,
},

{
  id: 8,
  title: "Administrative Support Services",
  description: `<b>Smart, Reliable, and Scalable Back-Office Solutions</b><br><br>
At <b>Manovate Technologies</b>, our <b>Administrative Support Services</b> help
businesses stay organized, efficient, and focused on growth. We provide
comprehensive back-office support that streamlines day-to-day operations,
reduces manual workload, and improves overall productivity.<br><br>
Our expert team handles essential administrative tasks with precision and
confidentiality, allowing your business to operate smoothly without distractions or
downtime. Whether you are a startup, SME, or enterprise, we deliver dependable
support tailored to your specific business processes.<br><br>
<b>Our Administrative Support Solutions</b><br><br>
<b>Data Management & Documentation</b><br>
Accurate handling of records, reports, and files with systematic organization to
ensure easy accessibility and compliance.<br><br>
<b>Email & Communication Management</b><br>
Professional management of business correspondence to maintain clarity,
consistency, and timely responses.<br><br>
<b>Scheduling & Coordination</b><br>
Efficient management of meetings, calendars, and task coordination to help
teams stay on track and productive.<br><br>
<b>Reporting & Analytics Support</b><br>
Preparation of performance reports, data summaries, and insights to aid better
decision-making.<br><br>
<b>Virtual Administrative Assistance</b><br>
Remote support for administrative and operational tasks, ensuring flexibility and
cost-effectiveness.<br><br>`,
  image: administrative,
  more_description: `<b>Why Choose Manovate Technologies</b><br><br>
● <b>Skilled professionals</b> with cross-industry administrative expertise<br><br>
● <b>Time-saving and cost-efficient</b> operational support<br><br>
● <b>High accuracy, confidentiality, and compliance</b> with business standards<br><br>
● <b>Scalable solutions</b> to match your company’s growth and workflow needs<br><br>
● <b>Flexible engagement models</b> for full-time or project-based support<br><br>
<b>Optimize Your Operations with Smart Support</b><br><br>
Let <b>Manovate Technologies</b> handle your administrative processes while you
focus on strategic business goals.<br><br>
We provide dependable, efficient, and technology-backed support that enhances
productivity and operational excellence.<br><br>`,
},


],
};

// ==========================================================================

const Services = () => {
const [category, setCategory] = useState("IT");
const [selectedService, setSelectedService] = useState(servicesData.IT[0]);
const [hovered, setHovered] = useState(null);
const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

const toggleMenu = () => setMenuOpen(!menuOpen);

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 50);
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Change category
const handleCategoryChange = (cat) => {
setCategory(cat);
setSelectedService(servicesData[cat][0]);
};
const navigate = useNavigate();
const handleContactClick = () => {
    navigate("/contact");
  };

return (
<>
<HeadProvider>
<Title>Manovate Services | Scalable IT & Non-IT Solutions</Title>
<Meta name="description" content="Explore Manovate Technologies’ IT and Non-IT Services — professional, innovative, and scalable solutions for every business need." />
</HeadProvider>

  {/* NAVBAR */}
  <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="Manovate Logo" className="nav-logo" />
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="/" onClick={toggleMenu}>Home</a></li>
        <li><a href="/about" onClick={toggleMenu}>About</a></li>
        <li><a href="/services" onClick={toggleMenu}>Services</a></li>
        <li><a href="/products" onClick={toggleMenu}>Products</a></li>
        <li><a href="/solution" onClick={toggleMenu}>Solutions</a></li>
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

  {/* HERO */}
  <div className="services-hero">
    <div className="overlay"></div>
    <div className="hero-content">
      <h1>Our Services</h1>
      <div className="breadcrumbs">
        <a href="/">Home</a> &gt; <span>Services</span>
      </div>
    </div>
  </div>

  {/* MAIN SECTION */}
  <div className="services-container">
    {/* LEFT SIDE */}
    <div className="services-left">
      {/* Category Switch */}
      <div className="card category-tabs">
        <div
          className={`category-tab ${category === "IT" ? "active" : ""}`}
          onClick={() => handleCategoryChange("IT")}
        >
          IT Services
        </div>
        <div
          className={`category-tab ${category === "NonIT" ? "active" : ""}`}
          onClick={() => handleCategoryChange("NonIT")}
        >
          Non-IT Services
        </div>
      </div>

      {/* Sidebar List */}
      <div className="card all-services-card">
        <div className="card-title">{category} Services</div>
        {servicesData[category].map((service) => (
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
            { day: "Mon – Fri", time: "9.30 AM – 6.30 PM" },
             { day: "Saturday", time: "09.30 AM – 1.30 PM" },
            { day: "Sun", time: "Closed" },
           
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

      {/* Support */}
      <div className="support-section">
        <img src="/images/support.jpg" alt="Support" />
        <div className="support-text">
          <h3>Need Help? Call Us</h3>
          <p>+91 9787066569</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="services-right">
      <div className="content-card">
        <h2>{selectedService.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: selectedService.description }}></p>
        <img src={selectedService.image} alt={selectedService.title} />
        <p dangerouslySetInnerHTML={{ __html: selectedService.more_description }}></p>
        <button className="cta-button" onClick={handleContactClick}>
            Contact Us
          </button>
      </div>
    </div>
  </div>

  {/* STATIC SECTIONS */}
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

  

  {/* FOOTER */}
  <footer className="footer">
    <div className="footer-top">
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
      <p>© 2021 Manovate Technologies | Innovating The Future</p>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/company/108395213/admin/dashboard/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://share.google/1muxM9QFVEQhZBK1k" target="_blank" rel="noreferrer">
          <FaMapMarkerAlt />
        </a>
        <a href="https://www.instagram.com/manovate_tech/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61581412741189" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  </footer>
</>
);
};

export default Services;