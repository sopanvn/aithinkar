import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Bot,
  Palette,
  Zap,
  CheckCircle2,
  Code2,
  Smartphone,
  Rocket,
  Sparkles,
  Layers3,
  Target,
  MousePointer2,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Modern Business Website",
    category: "Websites",
    description:
      "A premium business website designed to communicate value clearly, build trust and convert visitors into customers.",
    icon: <Globe />,
    tags: ["React", "Tailwind CSS", "Responsive"],
    gradient: "purple",
    number: "01",
  },
  {
    id: 2,
    title: "AI Business Assistant",
    category: "AI & Automation",
    description:
      "An intelligent AI-powered assistant created to automate customer conversations and improve response time.",
    icon: <Bot />,
    tags: ["AI", "Automation", "WhatsApp"],
    gradient: "pink",
    number: "02",
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Branding",
    description:
      "A complete visual identity designed to create a strong, consistent and memorable brand presence.",
    icon: <Palette />,
    tags: ["Logo", "Branding", "Identity"],
    gradient: "orange",
    number: "03",
  },
  {
    id: 4,
    title: "WhatsApp Automation",
    category: "Automation",
    description:
      "A smart communication system that helps businesses automate enquiries, notifications and customer interactions.",
    icon: <Zap />,
    tags: ["WhatsApp API", "CRM", "Automation"],
    gradient: "green",
    number: "04",
  },
  {
    id: 5,
    title: "Creative Portfolio Website",
    category: "Websites",
    description:
      "A visually engaging portfolio experience built to present creative work in a premium and professional way.",
    icon: <Layers3 />,
    tags: ["React", "Framer Motion", "UI/UX"],
    gradient: "blue",
    number: "05",
  },
  {
    id: 6,
    title: "Business Automation Platform",
    category: "AI & Automation",
    description:
      "A custom automation platform designed to reduce repetitive tasks and help teams operate more efficiently.",
    icon: <Bot />,
    tags: ["Node.js", "AI", "Automation"],
    gradient: "violet",
    number: "06",
  },
];

const categories = [
  "All",
  "Websites",
  "Branding",
  "AI & Automation",
  "Automation",
];

const stats = [
  ["50+", "Creative Concepts"],
  ["100%", "Responsive"],
  ["24/7", "Digital Presence"],
  ["∞", "Possibilities"],
];

const approach = [
  {
    icon: <Target />,
    title: "Business First",
    text: "We start with your goals, audience and business requirements before designing anything.",
  },
  {
    icon: <Palette />,
    title: "Premium Design",
    text: "Every interface is carefully designed to feel modern, polished and memorable.",
  },
  {
    icon: <Code2 />,
    title: "Modern Technology",
    text: "We use modern development tools to create fast, responsive and scalable experiences.",
  },
  {
    icon: <TrendingUp />,
    title: "Built to Grow",
    text: "Your digital presence should evolve with your business, not hold it back.",
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="portfolio-page">

      {/* HERO */}

      <section className="portfolio-hero">
        <div className="portfolio-glow portfolio-glow-one" />
        <div className="portfolio-glow portfolio-glow-two" />
        <div className="portfolio-grid-pattern" />

        <div className="page-container portfolio-hero-content">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="portfolio-hero-copy"
          >
            <span className="section-label">
              <Sparkles size={14} />
              OUR PORTFOLIO
            </span>

            <h1>
              Work that
              <br />
              <span>speaks for itself.</span>
            </h1>

            <p>
              Explore websites, branding experiences, AI solutions and
              automation systems designed to help businesses stand out,
              connect with customers and grow online.
            </p>

            <div className="portfolio-hero-actions">
              <Link to="/contact" className="primary-button">
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <a href="#projects" className="outline-button">
                Explore Work
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="portfolio-mini-stats">
              <div>
                <strong>50+</strong>
                <span>Concepts</span>
              </div>

              <div>
                <strong>6+</strong>
                <span>Categories</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Responsive</span>
              </div>
            </div>
          </motion.div>

          {/* HERO VISUAL */}

          <motion.div
            className="portfolio-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <motion.div
              className="portfolio-orbit portfolio-orbit-one"
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="portfolio-orbit portfolio-orbit-two"
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="portfolio-preview-card">

              <div className="preview-browser-top">
                <span />
                <span />
                <span />

                <small>aithinkar.com</small>
              </div>

              <div className="preview-browser-content">

                <div className="preview-navigation">
                  <strong>AIThinkar</strong>

                  <div>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <div className="preview-main-content">

                  <div>
                    <small>DIGITAL EXPERIENCE</small>

                    <h3>
                      Build.
                      <br />
                      <span>Grow.</span>
                    </h3>

                    <p>
                      Websites that make businesses look better online.
                    </p>

                    <div className="preview-button">
                      Explore
                      <ArrowRight size={12} />
                    </div>
                  </div>

                  <div className="preview-shape">
                    <Sparkles size={34} />
                  </div>

                </div>

                <div className="preview-bottom-lines">
                  <i />
                  <i />
                  <i />
                </div>

              </div>
            </div>

            <motion.div
              className="portfolio-floating-card portfolio-floating-one"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Zap size={17} />

              <div>
                <b>Fast</b>
                <small>Performance</small>
              </div>
            </motion.div>

            <motion.div
              className="portfolio-floating-card portfolio-floating-two"
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
            >
              <Smartphone size={17} />

              <div>
                <b>Responsive</b>
                <small>Every screen</small>
              </div>
            </motion.div>

            <motion.div
              className="portfolio-floating-badge"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <CheckCircle2 size={15} />
              Premium Design
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="portfolio-stats-section">
        <div className="page-container portfolio-stats-grid">

          {stats.map(([number, text], index) => (
            <motion.div
              key={text}
              className="portfolio-stat-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <strong>{number}</strong>
              <span>{text}</span>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}

      <section className="portfolio-projects-section" id="projects">
        <div className="page-container">

          <motion.div
            className="section-heading-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">
              SELECTED WORK
            </span>

            <h2>
              Ideas turned into
              <br />
              <span>digital experiences.</span>
            </h2>

            <p>
              A selection of concepts showing how design, technology and
              automation can come together to create something meaningful.
            </p>
          </motion.div>

          {/* FILTERS */}

          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* GRID */}

          <motion.div layout className="portfolio-project-grid">

            <AnimatePresence mode="popLayout">

              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.id}
                  className="portfolio-project-card"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                >

                  {/* PREVIEW */}

                  <div
                    className={`portfolio-project-preview ${project.gradient}`}
                  >

                    <div className="project-preview-glow" />

                    <span className="project-number">
                      {project.number}
                    </span>

                    <div className="project-preview-icon">
                      {project.icon}
                    </div>

                    <div className="project-preview-info">

                      <span>
                        {project.category}
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                    </div>

                    <motion.div
                      className="project-preview-circle"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight />
                    </motion.div>

                  </div>

                  {/* CONTENT */}

                  <div className="portfolio-project-content">

                    <h3>{project.title}</h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="portfolio-project-tags">

                      {project.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                    <div className="portfolio-project-footer">

                      <span>
                        AIThinkar Project
                      </span>

                      <button>
                        View Project
                        <ExternalLink size={15} />
                      </button>

                    </div>

                  </div>

                </motion.article>
              ))}

            </AnimatePresence>

          </motion.div>

        </div>
      </section>

      {/* APPROACH */}

      <section className="portfolio-approach-section">
        <div className="page-container">

          <div className="section-heading-center">

            <span className="section-label">
              OUR APPROACH
            </span>

            <h2>
              More than just
              <br />
              <span>beautiful design.</span>
            </h2>

            <p>
              Every project is created with a balance of creativity,
              technology and business thinking.
            </p>

          </div>

          <div className="portfolio-approach-grid">

            {approach.map((item, index) => (
              <motion.div
                className="portfolio-approach-card"
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                <div className="portfolio-approach-icon">
                  {item.icon}
                </div>

                <span className="portfolio-approach-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURED EXPERIENCE */}

      <section className="portfolio-featured-section">
        <div className="page-container">

          <div className="portfolio-featured-card">

            <div className="featured-background-glow" />

            <div className="featured-content">

              <span className="section-label">
                <Sparkles size={14} />
                THE AIThinkar DIFFERENCE
              </span>

              <h2>
                Design that gets
                <br />
                <span>attention.</span>
              </h2>

              <p>
                We don't believe your website should look like everyone
                else's. We combine visual storytelling, thoughtful UX and
                modern technology to create digital experiences people
                remember.
              </p>

              <div className="featured-points">

                <div>
                  <CheckCircle2 />
                  <span>Original visual direction</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Conversion-focused layouts</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Mobile-first experiences</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Modern interactions</span>
                </div>

              </div>

              <Link
                to="/services"
                className="primary-button"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>

            </div>

            <div className="featured-visual">

              <motion.div
                className="featured-window"
                initial={{
                  rotateY: -12,
                  rotateX: 5,
                }}
                whileInView={{
                  rotateY: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >

                <div className="featured-window-top">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="featured-window-body">

                  <div className="featured-line large" />
                  <div className="featured-line medium" />
                  <div className="featured-line small" />

                  <div className="featured-boxes">

                    <div />
                    <div />
                    <div />

                  </div>

                </div>

              </motion.div>

              <div className="featured-sparkle sparkle-one">
                <Sparkles />
              </div>

              <div className="featured-sparkle sparkle-two">
                <Zap />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}

      <section className="portfolio-process-section">

        <div className="page-container">

          <div className="section-heading-center">

            <span className="section-label">
              HOW WE WORK
            </span>

            <h2>
              From concept
              <br />
              <span>to experience.</span>
            </h2>

          </div>

          <div className="portfolio-process-grid">

            {[
              ["01", <MousePointer2 />, "Discover", "We understand your business, audience and goals."],
              ["02", <Palette />, "Design", "We create a visual direction that fits your brand."],
              ["03", <Code2 />, "Build", "We turn the concept into a responsive digital experience."],
              ["04", <Rocket />, "Launch", "We prepare your experience for the real world."],
            ].map(([number, icon, title, text], index) => (
              <motion.div
                className="portfolio-process-card"
                key={number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
              >

                <span>{number}</span>

                <div>
                  {icon}
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="portfolio-final-cta">

        <div className="portfolio-cta-glow-one" />
        <div className="portfolio-cta-glow-two" />

        <div className="page-container">

          <Sparkles size={30} />

          <span className="section-label">
            LET'S BUILD
          </span>

          <h2>
            Your next project
            <br />
            <span>could be here.</span>
          </h2>

          <p>
            Have an idea in mind? Let's turn it into something your
            customers remember.
          </p>

          <Link
            to="/contact"
            className="cta-button"
          >
            Start Your Project
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Portfolio;