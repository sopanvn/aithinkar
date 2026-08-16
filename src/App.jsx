import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Globe,
  Zap,
  MousePointer2,
  CheckCircle2,
} from "lucide-react";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#" className="logo">
          <img src="/aithinkar.png" alt="AIThinkar" />
          <span>AI<span>Thinkar</span></span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#demos">Demo Sites</a>
          <a href="#work">Portfolio</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
          <ArrowRight size={15} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-badge">
            <Sparkles size={13} />
            Modern Websites for Modern Businesses
          </div>

          <h1>
            Your Business
            <br />
            Deserves a
            <br />
            <span>Beautiful Website.</span>
          </h1>

          <p>
            We design fast, modern and conversion-focused websites that help
            businesses look professional, build trust and get more customers.
          </p>

          <div className="hero-actions">
            <a href="#demos" className="primary-button">
              Explore Demo Sites
              <ArrowRight size={17} />
            </a>

            <a href="#work" className="secondary-button">
              <Play size={15} />
              View Our Work
            </a>
          </div>

          <div className="hero-points">
            <span>
              <CheckCircle2 size={14} />
              Mobile Responsive
            </span>
            <span>
              <CheckCircle2 size={14} />
              Fast & Modern
            </span>
            <span>
              <CheckCircle2 size={14} />
              SEO Ready
            </span>
          </div>
        </motion.div>

        <HeroPreview />
      </div>

      <div className="hero-bottom">
        <div>
          <Zap size={17} />
          <span>Fast Performance</span>
        </div>
        <div>
          <Globe size={17} />
          <span>Responsive Everywhere</span>
        </div>
        <div>
          <MousePointer2 size={17} />
          <span>Designed for Conversion</span>
        </div>
      </div>
    </main>
  );
}

function HeroPreview() {
  return (
    <motion.div
      className="hero-preview"
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <div className="preview-orb orb-one" />
      <div className="preview-orb orb-two" />

      <motion.div
        className="laptop"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="laptop-screen">
          <div className="browser-bar">
            <span />
            <span />
            <span />
            <div className="browser-url">aithinkar.com</div>
          </div>

          <div className="demo-site">
            <div className="demo-nav">
              <b>PI<span>ZA</span></b>
              <div>
                <i />
                <i />
                <i />
              </div>
              <button>Order Now</button>
            </div>

            <div className="demo-hero">
              <div>
                <small>FRESH • HOT • DELICIOUS</small>
                <h3>Pizza made<br />with passion.</h3>
                <p>Handcrafted with fresh ingredients.</p>
                <button>View Menu →</button>
              </div>

              <div className="pizza-art">
                🍕
              </div>
            </div>

            <div className="demo-cards">
              <div>
                <span>🍕</span>
                <b>Margherita</b>
                <small>Fresh & classic</small>
              </div>
              <div>
                <span>🍕</span>
                <b>Pepperoni</b>
                <small>Customer favourite</small>
              </div>
              <div>
                <span>🍕</span>
                <b>Veggie</b>
                <small>Loaded with flavour</small>
              </div>
            </div>
          </div>
        </div>

        <div className="laptop-base" />
      </motion.div>

      <motion.div
        className="phone"
        animate={{ y: [0, -12, 0], rotate: [2, 1, 2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="phone-notch" />

        <div className="phone-screen">
          <div className="mobile-header">
            <b>PI<span>ZA</span></b>
            <span>☰</span>
          </div>

          <div className="mobile-image">
            🍕
          </div>

          <small>BEST PIZZA IN TOWN</small>
          <h4>Made fresh.<br />Served hot.</h4>

          <button>Order Now</button>

          <div className="mobile-items">
            <span>🍕</span>
            <span>🥤</span>
            <span>🍟</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="floating-card card-performance"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Zap size={16} />
        <div>
          <b>98%</b>
          <small>Performance</small>
        </div>
      </motion.div>

      <motion.div
        className="floating-card card-responsive"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity }}
      >
        <Globe size={16} />
        <div>
          <b>100%</b>
          <small>Responsive</small>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;