import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Smartphone,
  Monitor,
  Utensils,
  Home as HomeIcon,
  Dumbbell,
  Hotel,
  Scissors,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

const demos = [
  {
    category: "Restaurant",
    title: "Crave Kitchen",
    description:
      "A modern restaurant website focused on menu discovery, reservations and online orders.",
    icon: <Utensils />,
    color: "restaurant",
    accent: "#ef654a",
    tags: ["Menu", "Reservations", "Online Order"],
  },
  {
    category: "Real Estate",
    title: "Prime Estates",
    description:
      "A premium property website designed to showcase listings and generate buyer enquiries.",
    icon: <HomeIcon />,
    color: "realestate",
    accent: "#5276e8",
    tags: ["Properties", "Search", "Enquiries"],
  },
  {
    category: "Fitness",
    title: "Apex Fitness",
    description:
      "An energetic fitness website with memberships, trainers, classes and transformation stories.",
    icon: <Dumbbell />,
    color: "fitness",
    accent: "#9c4de0",
    tags: ["Classes", "Trainers", "Membership"],
  },
  {
    category: "Hotel",
    title: "Luma Grand",
    description:
      "An elegant hotel experience designed around rooms, amenities, galleries and bookings.",
    icon: <Hotel />,
    color: "hotel",
    accent: "#b88745",
    tags: ["Rooms", "Gallery", "Booking"],
  },
  {
    category: "Salon",
    title: "Muse Studio",
    description:
      "A stylish salon website showcasing services, stylists, packages and appointment booking.",
    icon: <Scissors />,
    color: "salon",
    accent: "#d04f8c",
    tags: ["Services", "Stylists", "Appointments"],
  },
  {
    category: "Business",
    title: "Nexa Studio",
    description:
      "A polished business website built to communicate expertise and generate new leads.",
    icon: <BriefcaseBusiness />,
    color: "business",
    accent: "#6755dc",
    tags: ["Services", "Portfolio", "Contact"],
  },
];

function DemoSites() {
  return (
    <main className="demos-page">

      {/* HERO */}
      <section className="demos-hero">
        <div className="demos-glow demos-glow-one" />
        <div className="demos-glow demos-glow-two" />

        <div className="page-container demos-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <Sparkles size={14} />
              WEBSITE DEMOS
            </span>

            <h1>
              See what your
              <br />
              business could <span>look like.</span>
            </h1>

            <p>
              Explore some of our website concepts for different industries.
              Every design can be customized around your brand, audience and
              business goals.
            </p>

            <div className="demos-hero-points">
              <span>
                <Monitor size={15} />
                Desktop Ready
              </span>

              <span>
                <Smartphone size={15} />
                Mobile Responsive
              </span>
            </div>
          </motion.div>

          <motion.div
            className="demos-hero-preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-preview-back" />

            <div className="demo-laptop">
              <div className="demo-laptop-screen">
                <div className="demo-browser">
                  <span />
                  <span />
                  <span />
                  <b>preview.aithinkar.com</b>
                </div>

                <div className="hero-demo-website">
                  <div className="hero-demo-nav">
                    <strong>CRAVE</strong>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                    <button>Order Now</button>
                  </div>

                  <div className="hero-demo-body">
                    <div>
                      <small>FRESH • LOCAL • DELICIOUS</small>

                      <h3>
                        Taste the
                        <br />
                        <span>difference.</span>
                      </h3>

                      <p>Good food. Great moments.</p>

                      <button>Explore Menu</button>
                    </div>

                    <div className="hero-demo-food">🍕</div>
                  </div>

                  <div className="hero-demo-bottom">
                    <span>Today's Special</span>
                    <b>Wood Fired Pizza</b>
                    <strong>₹499</strong>
                  </div>
                </div>
              </div>

              <div className="demo-laptop-base" />
            </div>

            <motion.div
              className="hero-demo-phone"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="hero-phone-notch" />

              <div className="hero-phone-content">
                <div className="hero-phone-nav">
                  <b>CRAVE</b>
                  <span>☰</span>
                </div>

                <div className="hero-phone-image">🍕</div>

                <small>FRESH & DELICIOUS</small>

                <h4>
                  Taste the
                  <br />
                  difference.
                </h4>

                <button>Order Now</button>

                <div className="hero-phone-items">
                  <span>🍕</span>
                  <span>🥤</span>
                  <span>🍰</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DEMO GRID */}
      <section className="demos-list-section">
        <div className="page-container">

          <div className="section-heading-center">
            <span className="section-label">EXPLORE CONCEPTS</span>

            <h2>
              Websites for
              <br />
              <span>every industry.</span>
            </h2>

            <p>
              Different businesses need different digital experiences.
              Explore the possibilities below.
            </p>
          </div>

          <div className="demos-grid">
            {demos.map((demo, index) => (
              <DemoCard
                key={demo.title}
                demo={demo}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIVE SECTION */}
      <section className="demos-responsive-section">
        <div className="page-container demos-responsive-grid">

          <div className="responsive-preview">

            <div className="responsive-laptop">
              <div className="responsive-screen">
                <div className="responsive-top">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="responsive-site">
                  <div className="responsive-site-nav">
                    <b>BRAND</b>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>

                  <div className="responsive-site-content">
                    <small>YOUR BUSINESS</small>

                    <h3>
                      One website.
                      <br />
                      <span>Every screen.</span>
                    </h3>

                    <div className="responsive-site-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>

              <div className="responsive-base" />
            </div>

            <div className="responsive-mobile">
              <div className="responsive-notch" />

              <div className="responsive-mobile-content">
                <b>BRAND</b>

                <div className="responsive-mobile-image" />

                <small>YOUR BUSINESS</small>

                <h4>
                  Beautiful
                  <br />
                  everywhere.
                </h4>

                <div className="responsive-mobile-button" />
              </div>
            </div>

          </div>

          <div className="responsive-content">
            <span className="section-label">
              BUILT FOR EVERY SCREEN
            </span>

            <h2>
              Your customers are
              <br />
              <span>everywhere.</span>
            </h2>

            <p>
              That's why every AIThinkar website is designed to adapt
              beautifully across desktop, tablet and mobile devices.
            </p>

            <div className="responsive-checks">
              <div>
                <Monitor size={18} />
                <span>
                  <b>Desktop</b>
                  Large-screen experience
                </span>
              </div>

              <div>
                <Smartphone size={18} />
                <span>
                  <b>Mobile</b>
                  Touch-friendly experience
                </span>
              </div>

              <div>
                <Monitor size={18} />
                <span>
                  <b>Tablet</b>
                  Flexible layouts
                </span>
              </div>
            </div>

            <Link to="/contact" className="primary-button">
              Build My Website
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* CUSTOM CTA */}
      <section className="demos-cta">
        <div className="page-container">

          <span className="section-label">
            YOUR INDUSTRY. YOUR BRAND.
          </span>

          <h2>
            Don't see your business?
            <br />
            <span>We'll build it for you.</span>
          </h2>

          <p>
            These are only starting points. Tell us about your business and
            we'll create a website around your exact requirements.
          </p>

          <Link to="/contact" className="cta-button">
            Discuss Your Website
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}

function DemoCard({ demo, index }) {
  return (
    <motion.article
      className={`demo-card ${demo.color}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -10 }}
    >
      <div className="demo-card-preview">

        <div className="demo-card-browser">
          <span />
          <span />
          <span />
          <small>{demo.title.toLowerCase().replaceAll(" ", "")}.com</small>
        </div>

        <div className="demo-card-website">

          <div className="demo-card-nav">
            <strong>{demo.title.split(" ")[0]}</strong>

            <div>
              <i />
              <i />
              <i />
            </div>

            <button>Contact</button>
          </div>

          <div className="demo-card-hero">

            <div>
              <small>{demo.category.toUpperCase()}</small>

              <h3>
                {demo.category === "Restaurant" && (
                  <>
                    Food made
                    <br />
                    <em>with love.</em>
                  </>
                )}

                {demo.category === "Real Estate" && (
                  <>
                    Find a place
                    <br />
                    <em>to call home.</em>
                  </>
                )}

                {demo.category === "Fitness" && (
                  <>
                    Stronger
                    <br />
                    <em>every day.</em>
                  </>
                )}

                {demo.category === "Hotel" && (
                  <>
                    Stay somewhere
                    <br />
                    <em>special.</em>
                  </>
                )}

                {demo.category === "Salon" && (
                  <>
                    Feel good.
                    <br />
                    <em>Look amazing.</em>
                  </>
                )}

                {demo.category === "Business" && (
                  <>
                    Build your
                    <br />
                    <em>next chapter.</em>
                  </>
                )}
              </h3>

              <span className="demo-card-button">
                Explore →
              </span>
            </div>

            <div className="demo-card-art">
              {demo.category === "Restaurant" && "🍕"}
              {demo.category === "Real Estate" && "🏠"}
              {demo.category === "Fitness" && "🏋️"}
              {demo.category === "Hotel" && "🏨"}
              {demo.category === "Salon" && "✂️"}
              {demo.category === "Business" && "✦"}
            </div>

          </div>

          <div className="demo-card-bottom">
            <span />
            <span />
            <span />
          </div>

        </div>
      </div>

      <div className="demo-card-info">

        <div className="demo-card-title">
          <div className="demo-category-icon">
            {demo.icon}
          </div>

          <div>
            <small>{demo.category}</small>
            <h3>{demo.title}</h3>
          </div>
        </div>

        <p>{demo.description}</p>

        <div className="demo-tags">
          {demo.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <button className="demo-view-button">
          View Concept
          <ExternalLink size={15} />
        </button>

      </div>
    </motion.article>
  );
}

export default DemoSites;