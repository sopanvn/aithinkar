import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Zap,
  CheckCircle2,
  Play,
  Layout,
  Smartphone,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Layout />,
    title: "Website Development",
    text: "Modern websites designed to turn visitors into customers.",
    color: "purple",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    text: "Beautiful experiences across desktop, tablet and mobile.",
    color: "blue",
  },
  {
    icon: <Bot />,
    title: "AI Automation",
    text: "Automate repetitive business tasks with smart AI solutions.",
    color: "pink",
  },
];

const industries = [
  ["🍕", "Restaurants"],
  ["🏠", "Real Estate"],
  ["🏋️", "Fitness"],
  ["🏨", "Hotels"],
  ["🩺", "Healthcare"],
  ["💼", "Businesses"],
];

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-glow home-glow-one" />
        <div className="home-glow home-glow-two" />

        <div className="page-container home-hero-grid">
          <motion.div
            className="home-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-badge">
              <Sparkles size={13} />
              Digital Solutions for Growing Businesses
            </div>

            <h1>
              We Build
              <br />
              <span>Digital Experiences</span>
              <br />
              That Get Noticed.
            </h1>

            <p>
              AIThinkar helps businesses build beautiful websites, powerful
              digital experiences and smart automation that actually move the
              business forward.
            </p>

            <div className="home-buttons">
              <Link to="/contact" className="primary-button">
                Start Your Project
                <ArrowRight size={17} />
              </Link>

              <Link to="/portfolio" className="secondary-button">
                <Play size={14} />
                View Portfolio
              </Link>
            </div>

            <div className="home-trust">
              <span>
                <CheckCircle2 size={14} />
                Responsive
              </span>

              <span>
                <CheckCircle2 size={14} />
                Fast
              </span>

              <span>
                <CheckCircle2 size={14} />
                SEO Ready
              </span>
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      <section className="home-stats">
        <div className="page-container stats-grid">
          <div>
            <strong>50+</strong>
            <span>Design Concepts</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Responsive</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Digital Presence</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Creative Possibilities</span>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="page-container">
          <SectionHeading
            label="WHAT WE DO"
            title={
              <>
                Everything you need
                <br />
                <span>to grow online.</span>
              </>
            }
            text="From your first idea to a complete digital presence, AIThinkar brings design, technology and automation together."
          />

          <div className="home-service-grid">
            {services.map((service, index) => (
              <motion.div
                className={`home-service-card ${service.color}`}
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="home-service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <Link to="/services">
                  Explore Service
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="center-button">
            <Link to="/services" className="outline-button">
              View All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-demos">
        <div className="page-container">
          <div className="home-demo-heading">
            <div>
              <span className="section-label">WEBSITE CONCEPTS</span>

              <h2>
                Websites made
                <br />
                <span>for your industry.</span>
              </h2>
            </div>

            <Link to="/demos" className="white-outline-button">
              Explore All Demos
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="industry-grid">
            {industries.map(([emoji, title], index) => (
              <motion.div
                key={title}
                className="industry-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="industry-preview">
                  <div className="mini-browser">
                    <div className="mini-browser-top">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="mini-browser-body">
                      <div className="mini-lines">
                        <b>{title}</b>
                        <span />
                        <span />
                      </div>

                      <div className="industry-emoji">
                        {emoji}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="industry-info">
                  <span>Demo Website</span>
                  <h3>{title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-why">
        <div className="page-container why-grid">
          <div>
            <span className="section-label">WHY AITHINKAR</span>

            <h2>
              Not just a website.
              <br />
              <span>A digital advantage.</span>
            </h2>

            <p>
              Your website is often the first interaction a customer has with
              your business. We make sure that first impression counts.
            </p>

            <Link to="/about" className="primary-button">
              Why Choose Us
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="benefits-grid">
            <Benefit
              icon={<Zap />}
              title="Fast"
              text="Optimized for speed and smooth experiences."
            />

            <Benefit
              icon={<Globe />}
              title="Modern"
              text="Fresh designs built around today's digital standards."
            />

            <Benefit
              icon={<Smartphone />}
              title="Responsive"
              text="Looks great on every screen size."
            />

            <Benefit
              icon={<Sparkles />}
              title="Unique"
              text="No boring copy-paste templates."
            />
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-orb cta-orb-one" />
        <div className="cta-orb cta-orb-two" />

        <div className="page-container">
          <Sparkles size={28} />

          <h2>
            Ready to build something
            <br />
            <span>people remember?</span>
          </h2>

          <p>
            Tell us about your idea. Let's turn it into a digital experience.
          </p>

          <Link to="/contact" className="cta-button">
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ label, title, text }) {
  return (
    <div className="home-section-heading">
      <span className="section-label">{label}</span>

      <h2>{title}</h2>

      <p>{text}</p>
    </div>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <motion.div
      className="benefit-card"
      whileHover={{ y: -6 }}
    >
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="home-hero-visual"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="visual-glow" />

      <motion.div
        className="visual-browser"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="visual-browser-top">
          <i />
          <i />
          <i />
          <span>aithinkar.com</span>
        </div>

        <div className="visual-site">
          <div className="visual-site-nav">
            <b>BRAND</b>

            <div>
              <i />
              <i />
              <i />
            </div>

            <button>Get Started</button>
          </div>

          <div className="visual-site-hero">
            <div>
              <small>CREATIVE DIGITAL STUDIO</small>

              <h3>
                Build.
                <br />
                Create.
                <br />
                <em>Grow.</em>
              </h3>

              <p>
                Beautiful digital experiences for ambitious businesses.
              </p>

              <button>Explore →</button>
            </div>

            <div className="visual-shape">
              <span>✦</span>
            </div>
          </div>

          <div className="visual-site-bottom">
            <div />
            <div />
            <div />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="visual-phone"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="phone-top" />

        <div className="phone-content">
          <div className="phone-logo">A</div>

          <small>WELCOME</small>

          <h4>
            Your business
            <br />
            deserves better.
          </h4>

          <div className="phone-button" />

          <div className="phone-boxes">
            <i />
            <i />
            <i />
          </div>
        </div>
      </motion.div>

      <div className="visual-floating visual-floating-one">
        <Zap size={15} />
        <div>
          <b>Fast</b>
          <small>Performance</small>
        </div>
      </div>

      <div className="visual-floating visual-floating-two">
        <Globe size={15} />
        <div>
          <b>100%</b>
          <small>Responsive</small>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;