import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const demos = [
  {
    type: "Restaurant",
    title: "Food & Restaurant",
    text: "Menus, reservations, delivery and mouth-watering visuals.",
    emoji: "🍕",
    className: "demo-red",
  },
  {
    type: "Real Estate",
    title: "Real Estate",
    text: "Property listings, locations, galleries and enquiry forms.",
    emoji: "🏠",
    className: "demo-blue",
  },
  {
    type: "Fitness",
    title: "Gym & Fitness",
    text: "Memberships, trainers, programs and transformation stories.",
    emoji: "🏋️",
    className: "demo-purple",
  },
  {
    type: "Hotel",
    title: "Hotels & Resorts",
    text: "Beautiful rooms, amenities, galleries and bookings.",
    emoji: "🏨",
    className: "demo-orange",
  },
  {
    type: "Healthcare",
    title: "Clinic & Healthcare",
    text: "Doctors, services, appointments and patient information.",
    emoji: "🩺",
    className: "demo-cyan",
  },
  {
    type: "Business",
    title: "Business & Services",
    text: "Professional websites designed to generate enquiries.",
    emoji: "💼",
    className: "demo-green",
  },
];

function DemoSites() {
  return (
    <section className="demos-section" id="demos">
      <div className="demo-background-shape shape-one" />
      <div className="demo-background-shape shape-two" />

      <div className="section-container">
        <motion.div
          className="demo-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-label">DEMO WEBSITES</span>

            <h2>
              Your industry.
              <br />
              <span>Your website.</span>
            </h2>
          </div>

          <p>
            Explore website concepts designed for different types of
            businesses. Your website should feel as unique as your business.
          </p>
        </motion.div>

        <div className="demos-grid">
          {demos.map((demo, index) => (
            <motion.div
              className={`demo-card ${demo.className}`}
              key={demo.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -10 }}
            >
              <div className="demo-card-top">
                <span className="demo-type">{demo.type}</span>

                <span className="demo-number">
                  0{index + 1}
                </span>
              </div>

              <div className="demo-visual">
                <div className="fake-browser">
                  <div className="fake-browser-bar">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="fake-page">
                    <div className="fake-page-nav">
                      <b>{demo.title.split(" ")[0]}</b>
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="fake-page-content">
                      <div>
                        <small>WELCOME</small>

                        <strong>{demo.title}</strong>

                        <em />
                        <em />
                      </div>

                      <div className="fake-image">
                        {demo.emoji}
                      </div>
                    </div>

                    <div className="fake-page-cards">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>

                <div className="demo-phone-mini">
                  <div className="mini-notch" />

                  <div className="mini-content">
                    <b>{demo.emoji}</b>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className="demo-card-info">
                <h3>{demo.title}</h3>

                <p>{demo.text}</p>

                <button>
                  View Concept
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="demo-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <Sparkles size={20} />

            <div>
              <strong>Don't see your industry?</strong>
              <span>We can create something completely custom.</span>
            </div>
          </div>

          <a href="#contact">
            Let's Build Yours
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default DemoSites;