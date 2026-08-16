import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "✦",
    title: "Website Development",
    text: "Modern, responsive websites designed around your business and customers.",
    className: "purple",
  },
  {
    icon: "◈",
    title: "UI / UX Design",
    text: "Clean interfaces and intuitive experiences that people enjoy using.",
    className: "blue",
  },
  {
    icon: "◎",
    title: "Brand Identity",
    text: "Build a memorable visual identity with logos, colors and consistent branding.",
    className: "pink",
  },
  {
    icon: "⌁",
    title: "SEO Optimization",
    text: "Make your website easier to discover and ready for search engines.",
    className: "green",
  },
  {
    icon: "◉",
    title: "WhatsApp Automation",
    text: "Turn conversations into leads with smart WhatsApp automation.",
    className: "orange",
  },
  {
    icon: "✧",
    title: "AI Automation",
    text: "Use AI to automate repetitive tasks and make your business smarter.",
    className: "cyan",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">WHAT WE DO</span>

          <h2>
            Everything your
            <br />
            <span>business needs online.</span>
          </h2>

          <p>
            From your first idea to a complete digital presence, we build
            everything you need to look professional online.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className={`service-card ${service.className}`}
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>

              <div className="service-number">
                0{index + 1}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="service-arrow">
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;