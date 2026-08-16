import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
  Heart,
  Zap,
  Users,
  Code2,
  Palette,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <Palette />,
    title: "Design First",
    text: "Every project starts with a strong visual direction. We focus on creating experiences that look premium and feel effortless.",
    color: "purple",
  },
  {
    icon: <Code2 />,
    title: "Technology",
    text: "Clean, modern and scalable technology keeps your website fast, reliable and ready to grow with your business.",
    color: "blue",
  },
  {
    icon: <Target />,
    title: "Business Focus",
    text: "A beautiful website means little if it doesn't help your business. Every section has a purpose.",
    color: "pink",
  },
  {
    icon: <Rocket />,
    title: "Growth Mindset",
    text: "We build digital experiences that give businesses a strong foundation for their next stage of growth.",
    color: "green",
  },
];

const reasons = [
  "Modern and original designs",
  "Mobile-first responsive development",
  "Performance-focused websites",
  "SEO-friendly structure",
  "Conversion-focused layouts",
  "Scalable technology",
];

function About() {
  return (
    <main className="about-page">

      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-glow about-glow-one" />
        <div className="about-hero-glow about-glow-two" />

        <div className="page-container about-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <Sparkles size={14} />
              ABOUT AITHINKAR
            </span>

            <h1>
              We don't just build
              <br />
              <span>websites.</span>
            </h1>

            <p>
              We create digital experiences that help businesses look better,
              communicate clearly and grow online.
            </p>

            <div className="about-hero-actions">
              <Link to="/contact" className="primary-button">
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <Link to="/services" className="outline-button">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="about-orb about-orb-one" />
            <div className="about-orb about-orb-two" />

            <div className="about-main-card">
              <div className="about-card-top">
                <span />
                <span />
                <span />
              </div>

              <div className="about-card-content">
                <small>DIGITAL EXPERIENCE</small>

                <h3>
                  Think.
                  <br />
                  Create.
                  <br />
                  <span>Grow.</span>
                </h3>

                <div className="about-card-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <motion.div
              className="about-floating-card about-floating-one"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Zap size={17} />

              <div>
                <b>Fast</b>
                <small>Performance</small>
              </div>
            </motion.div>

            <motion.div
              className="about-floating-card about-floating-two"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <Users size={17} />

              <div>
                <b>Human</b>
                <small>Experience</small>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro-section">
        <div className="page-container about-intro-grid">
          <div>
            <span className="section-label">OUR STORY</span>

            <h2>
              Helping businesses
              <br />
              <span>stand out online.</span>
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              AIThinkar was created around a simple idea: businesses deserve
              better digital experiences.
            </p>

            <p>
              Your website shouldn't simply exist. It should communicate your
              value, build trust with visitors and make it easier for people
              to choose your business.
            </p>

            <p>
              We combine thoughtful design, modern development and smart
              technology to create websites that are beautiful, functional and
              ready for the future.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values-section">
        <div className="page-container">

          <div className="section-heading-center">
            <span className="section-label">WHAT WE BELIEVE</span>

            <h2>
              Our work is built
              <br />
              <span>around four ideas.</span>
            </h2>

            <p>
              The principles behind every website and digital experience we
              create.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={`about-value-card ${value.color}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -9 }}
              >
                <div className="about-value-icon">{value.icon}</div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

                <span className="about-value-number">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="about-why-section">
        <div className="page-container about-why-grid">

          <div className="about-why-visual">
            <div className="why-gradient-circle" />

            <div className="why-center-card">
              <Sparkles size={28} />
              <strong>AIThinkar</strong>
              <span>Digital Experiences</span>
            </div>

            <div className="why-small-card why-small-one">
              <Palette size={17} />
              Design
            </div>

            <div className="why-small-card why-small-two">
              <Code2 size={17} />
              Technology
            </div>

            <div className="why-small-card why-small-three">
              <Rocket size={17} />
              Growth
            </div>
          </div>

          <div className="about-why-content">
            <span className="section-label">WHY WORK WITH US</span>

            <h2>
              Design that looks good.
              <br />
              <span>Technology that works.</span>
            </h2>

            <p>
              We bring creative thinking and technical execution together so
              your website doesn't have to choose between looking beautiful
              and working beautifully.
            </p>

            <div className="about-check-list">
              {reasons.map((reason) => (
                <div key={reason}>
                  <CheckCircle2 size={18} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="primary-button">
              Let's Build Something
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission-section">
        <div className="page-container">
          <div className="mission-card">

            <div className="mission-icon">
              <Heart />
            </div>

            <span className="section-label">OUR MISSION</span>

            <h2>
              Make great digital experiences
              <br />
              <span>accessible to every business.</span>
            </h2>

            <p>
              Whether you're launching a new business, upgrading an old
              website or building something completely new, our goal is to
              give you a digital presence you can be proud of.
            </p>

            <Link to="/contact" className="mission-button">
              Start Your Journey
              <ArrowRight size={16} />
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-final-cta">
        <div className="page-container">
          <span className="section-label">LET'S CREATE</span>

          <h2>
            Your next website
            <br />
            <span>starts here.</span>
          </h2>

          <p>
            Have an idea? Let's turn it into something people remember.
          </p>

          <Link to="/contact" className="cta-button">
            Talk to AIThinkar
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default About;