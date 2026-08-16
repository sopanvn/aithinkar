import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layout,
  Smartphone,
  Bot,
  Zap,
  Search,
  MessageCircle,
  Code2,
  Palette,
  CheckCircle2,
  Rocket,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Layout />,
    title: "Website Development",
    text: "Modern business websites designed to make a strong first impression and turn visitors into customers.",
    features: ["Business Websites", "Landing Pages", "Corporate Websites"],
    color: "purple",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    text: "Your website looks and works beautifully across phones, tablets, laptops and large screens.",
    features: ["Mobile First", "Tablet Ready", "Desktop Optimized"],
    color: "blue",
  },
  {
    icon: <Bot />,
    title: "AI Automation",
    text: "Use smart automation to reduce repetitive work and create faster business workflows.",
    features: ["AI Workflows", "Business Automation", "Smart Assistants"],
    color: "pink",
  },
  {
    icon: <Zap />,
    title: "Performance",
    text: "Fast-loading experiences built with performance, usability and reliability in mind.",
    features: ["Speed Optimization", "Clean Code", "Core Web Vitals"],
    color: "orange",
  },
  {
    icon: <Search />,
    title: "SEO",
    text: "Build a stronger foundation for search engines and make it easier for customers to find you online.",
    features: ["On-Page SEO", "Technical SEO", "SEO Structure"],
    color: "green",
  },
  {
    icon: <MessageCircle />,
    title: "WhatsApp Automation",
    text: "Connect your business with WhatsApp and automate customer communication.",
    features: ["WhatsApp API", "Auto Replies", "Notifications"],
    color: "teal",
  },
  {
    icon: <Code2 />,
    title: "Web Applications",
    text: "Custom web applications built around your business processes and requirements.",
    features: ["Dashboards", "Admin Panels", "Custom Systems"],
    color: "indigo",
  },
  {
    icon: <Palette />,
    title: "UI/UX Design",
    text: "Clean interfaces and thoughtful user experiences that make digital products easier to use.",
    features: ["UI Design", "UX Planning", "Design Systems"],
    color: "rose",
  },
];

const process = [
  {
    number: "01",
    icon: <MessageCircle />,
    title: "Understand",
    text: "We understand your business, audience, goals and what you want your website to achieve.",
  },
  {
    number: "02",
    icon: <Palette />,
    title: "Design",
    text: "We create the visual direction, layout and user experience before moving into development.",
  },
  {
    number: "03",
    icon: <Code2 />,
    title: "Build",
    text: "The approved design is transformed into a fast, responsive and functional website.",
  },
  {
    number: "04",
    icon: <Rocket />,
    title: "Launch",
    text: "We test everything, optimize the website and help you get your new digital presence live.",
  },
];

function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-glow services-glow-one" />
        <div className="services-glow services-glow-two" />

        <div className="page-container services-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <Sparkles size={14} />
              WHAT WE DO
            </span>

            <h1>
              Digital solutions
              <br />
              built for <span>growth.</span>
            </h1>

            <p>
              From websites and UI design to AI and business automation,
              we create digital solutions that help modern businesses move
              forward.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="primary-button">
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <Link to="/demos" className="outline-button">
                View Demo Sites
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="services-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="services-visual-circle" />

            <div className="services-main-card">
              <div className="services-window-bar">
                <i />
                <i />
                <i />
              </div>

              <div className="services-window-content">
                <div className="services-mini-sidebar">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="services-dashboard">
                  <small>BUSINESS DASHBOARD</small>

                  <h3>
                    Everything
                    <br />
                    <span>connected.</span>
                  </h3>

                  <div className="services-dashboard-grid">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="services-floating-card services-float-one"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Zap size={16} />
              <div>
                <b>Fast</b>
                <small>Performance</small>
              </div>
            </motion.div>

            <motion.div
              className="services-floating-card services-float-two"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <Bot size={16} />
              <div>
                <b>AI</b>
                <small>Automation</small>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list-section">
        <div className="page-container">

          <div className="section-heading-center">
            <span className="section-label">OUR SERVICES</span>

            <h2>
              Everything you need
              <br />
              <span>to grow online.</span>
            </h2>

            <p>
              Choose one service or combine multiple solutions to create a
              complete digital experience for your business.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`service-card ${service.color}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -8 }}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="service-features">
                  {service.features.map((feature) => (
                    <span key={feature}>
                      <CheckCircle2 size={14} />
                      {feature}
                    </span>
                  ))}
                </div>

                <Link to="/contact" className="service-link">
                  Get Started
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="services-process-section">
        <div className="page-container">

          <div className="section-heading-center">
            <span className="section-label">
              HOW WE WORK
            </span>

            <h2>
              From idea to
              <br />
              <span>launch.</span>
            </h2>

            <p>
              A simple and transparent process designed to keep your project
              moving.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                className="process-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="process-number">
                  {item.number}
                </div>

                <div className="process-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {index !== process.length - 1 && (
                  <ArrowRight className="process-arrow" size={20} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AI THINKAR */}
      <section className="services-benefits-section">
        <div className="page-container services-benefits-grid">

          <div className="services-benefits-visual">
            <div className="benefits-background-circle" />

            <motion.div
              className="benefits-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Settings size={28} />
              <strong>Built Around</strong>
              <span>Your Business</span>
            </motion.div>

            <div className="benefit-pill benefit-pill-one">
              <CheckCircle2 size={15} />
              Responsive
            </div>

            <div className="benefit-pill benefit-pill-two">
              <CheckCircle2 size={15} />
              Fast
            </div>

            <div className="benefit-pill benefit-pill-three">
              <CheckCircle2 size={15} />
              Modern
            </div>
          </div>

          <div className="services-benefits-content">
            <span className="section-label">
              WHY AITHINKAR
            </span>

            <h2>
              More than a website.
              <br />
              <span>A digital partner.</span>
            </h2>

            <p>
              We don't believe in one-size-fits-all websites. Every business
              has different goals, customers and challenges. That's why we
              build solutions around what actually matters to you.
            </p>

            <div className="benefits-check-list">
              <div>
                <CheckCircle2 size={18} />
                <span>Clean and modern design</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Mobile-first development</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Performance-focused technology</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Business-focused strategy</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Scalable solutions</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Ongoing improvement</span>
              </div>
            </div>

            <Link to="/contact" className="primary-button">
              Discuss Your Project
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-final-cta">
        <div className="page-container">

          <span className="section-label">
            HAVE AN IDEA?
          </span>

          <h2>
            Let's turn your idea
            <br />
            into <span>reality.</span>
          </h2>

          <p>
            Tell us what you're building and we'll help you figure out the
            best digital solution.
          </p>

          <Link to="/contact" className="cta-button">
            Start a Conversation
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Services;