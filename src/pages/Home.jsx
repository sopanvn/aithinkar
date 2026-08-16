import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Zap,
  Smartphone,
  Palette,
  Bot,
  Search,
  Code2,
  Rocket,
  CheckCircle2,
  MousePointer2,
  Layout,
  ShoppingBag,
  Building2,
  Dumbbell,
  Utensils,
  Hotel,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Layers3,
  MonitorSmartphone,
  Gauge,
  Wand2,
  Star,
  ChevronDown,
  Target,
  Workflow,
  BrainCircuit,
  Cloud,
  Database,
  Server,
  Cpu,
  BarChart3,
  LineChart,
  PieChart,
  Users,
  UserCheck,
  Clock,
  Clock3,
  Lightbulb,
  Settings,
  Lock,
  Check,
  CircleCheck,
  Eye,
  MousePointerClick,
  Send,
  Mail,
  Phone,
  MapPin,
  Play,
  ExternalLink,
  Heart,
  HeartHandshake,
  Award,
  Trophy,
  Briefcase,
  Megaphone,
  Headphones,
  MessageSquare,
  FileText,
  Image,
  Video,
  Terminal,
  Wifi,
  Plug,
  Link2,
  RefreshCw,
  Infinity,
  Settings2,
  ArrowUpRight,
  PencilRuler 
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../home.css";

const services = [
  {
    icon: <Layout />,
    title: "Website Development",
    text: "Modern, fast and professional websites built around your business goals.",
    color: "purple",
  },
  {
    icon: <Palette />,
    title: "UI / UX Design",
    text: "Beautiful interfaces designed to make your brand stand out and feel premium.",
    color: "pink",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    text: "Pixel-perfect experiences that look great on phones, tablets and desktops.",
    color: "blue",
  },
  {
    icon: <Bot />,
    title: "AI Automation",
    text: "Smart automation that saves time and helps your business work better.",
    color: "green",
  },
  {
    icon: <Search />,
    title: "SEO Ready",
    text: "Clean, optimized websites prepared to perform better in search engines.",
    color: "orange",
  },
  {
    icon: <Rocket />,
    title: "Business Growth",
    text: "Digital experiences focused on turning visitors into real customers.",
    color: "violet",
  },
];

const industries = [
  {
    icon: <Utensils />,
    title: "Restaurants",
    text: "Menus, reservations & online ordering",
  },
  {
    icon: <Building2 />,
    title: "Real Estate",
    text: "Property listings & lead generation",
  },
  {
    icon: <Dumbbell />,
    title: "Fitness",
    text: "Gyms, trainers & fitness brands",
  },
  {
    icon: <Hotel />,
    title: "Hotels",
    text: "Bookings & premium hotel experiences",
  },
  {
    icon: <Stethoscope />,
    title: "Healthcare",
    text: "Clinics, doctors & healthcare brands",
  },
  {
    icon: <ShoppingBag />,
    title: "E-Commerce",
    text: "Online stores & product experiences",
  },
];

const process = [
  {
    number: "01",
    icon: <MousePointer2 />,
    title: "Discover",
    text: "We understand your business, audience, goals and what makes your brand different.",
  },
  {
    number: "02",
    icon: <Palette />,
    title: "Design",
    text: "We create a visual direction that makes your business look professional and memorable.",
  },
  {
    number: "03",
    icon: <Code2 />,
    title: "Build",
    text: "We turn the design into a fast, responsive and functional digital experience.",
  },
  {
    number: "04",
    icon: <Rocket />,
    title: "Launch",
    text: "Your website goes live, optimized and ready to help your business grow.",
  },
];

const capabilities = [
  {
    icon: <MonitorSmartphone />,
    title: "Responsive Everywhere",
    text: "Your website adapts beautifully across mobile, tablet and desktop.",
  },
  {
    icon: <Gauge />,
    title: "Performance Focused",
    text: "Fast interfaces and optimized experiences designed for better engagement.",
  },
  {
    icon: <ShieldCheck />,
    title: "Reliable Foundation",
    text: "Clean architecture and scalable technology for long-term growth.",
  },
  {
    icon: <TrendingUp />,
    title: "Growth Ready",
    text: "Layouts and experiences designed with business results in mind.",
  },
  {
    icon: <Workflow />,
    title: "Smart Automation",
    text: "Reduce repetitive work with AI, WhatsApp and business automation.",
  },
  {
    icon: <Wand2 />,
    title: "Premium Experience",
    text: "Thoughtful interactions, animations and visual details that feel modern.",
  },
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites can be completed within a few weeks depending on the number of pages, features and content required.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign an existing website while improving its visual design, responsiveness, performance and overall user experience.",
  },
  {
    question: "Do you build custom websites?",
    answer:
      "Yes. We focus on custom digital experiences rather than simply giving every business the same template.",
  },
  {
    question: "Can you add AI and automation?",
    answer:
      "Yes. AI assistants, WhatsApp automation, lead workflows and other business automations can be integrated based on your requirements.",
  },
];


const technology = [
  {
    icon: <Code2 />,
    title: "Modern Development",
    text: "Clean, scalable and maintainable code built for long-term growth.",
  },
  {
    icon: <BrainCircuit />,
    title: "AI Powered",
    text: "Smart AI solutions that help automate tasks and improve customer experiences.",
  },
  {
    icon: <Cloud />,
    title: "Cloud Ready",
    text: "Modern infrastructure designed for reliable digital experiences.",
  },
  {
    icon: <Database />,
    title: "Data Driven",
    text: "Digital systems designed to turn useful information into better decisions.",
  },
];

const transformationSteps = [
  {
    icon: <Eye />,
    title: "Get noticed",
    text: "Create a digital presence that immediately communicates quality and credibility.",
  },
  {
    icon: <HeartHandshake />,
    title: "Build trust",
    text: "Give visitors the confidence they need before they contact or buy from you.",
  },
  {
    icon: <Target />,
    title: "Guide action",
    text: "Turn attention into meaningful actions with clear user journeys.",
  },
  {
    icon: <LineChart />,
    title: "Grow",
    text: "Build a digital foundation that can evolve with your business.",
  },
];

const impactStats = [
  {
    icon: <Users />,
    number: "24/7",
    title: "Always Online",
    text: "Your business keeps working even when you are not.",
  },
  {
    icon: <Zap />,
    number: "Fast",
    title: "Better Experience",
    text: "Quick and smooth interactions keep visitors engaged.",
  },
  {
    icon: <BarChart3 />,
    number: "Growth",
    title: "Business Focused",
    text: "Every section has a purpose beyond simply looking good.",
  },
  {
    icon: <Globe />,
    number: "Global",
    title: "Reach More People",
    text: "Your digital presence can connect with customers anywhere.",
  },
];

const websiteBenefits = [
  "Make a stronger first impression",
  "Explain your business clearly",
  "Build trust before the first conversation",
  "Generate more enquiries",
  "Showcase your products or services",
  "Give customers a reason to choose you",
];

function Home() {
  return (
    <main className="home-page">
      <Hero />

      {/* STATS */}
      <section className="home-stats-section">
        <div className="page-container stats-grid">
          {[
            ["50+", "Design Concepts", <Palette />],
            ["100%", "Responsive", <Smartphone />],
            ["24/7", "Digital Presence", <Globe />],
            ["∞", "Creative Possibilities", <Sparkles />],
          ].map(([number, text, icon], index) => (
            <motion.div
              className="stat-card"
              key={text}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -7 }}
            >
              <div className="stat-icon">{icon}</div>
              <strong>{number}</strong>
              <span>{text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services-section">
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

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className={`service-card ${service.color}`}
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.015 }}
              >
                <div className="service-icon">{service.icon}</div>

                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <Link to="/services">
                  Explore Service <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="section-button">
            <Link to="/services" className="outline-button">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="home-feature-section">
        <div className="page-container featured-grid">
          <motion.div
            className="featured-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">
              <Sparkles size={14} />
              FEATURED EXPERIENCE
            </span>

            <h2>
              Your website can become
              <br />
              <span>your best salesperson.</span>
            </h2>

            <p>
              We design websites that do more than look attractive. They
              communicate your value, build trust and guide visitors toward
              taking action.
            </p>

            <div className="featured-points">
              <span>
                <CheckCircle2 /> Premium visual design
              </span>

              <span>
                <CheckCircle2 /> Clear customer journeys
              </span>

              <span>
                <CheckCircle2 /> Mobile-first experience
              </span>

              <span>
                <CheckCircle2 /> Conversion-focused sections
              </span>
            </div>

            <Link to="/portfolio" className="primary-button">
              Explore Our Work
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            className="featured-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="featured-glow" />

            <motion.div
              className="featured-browser"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="featured-browser-top">
                <i />
                <i />
                <i />
                <span>yourbusiness.com</span>
              </div>

              <div className="featured-browser-body">
                <small>YOUR DIGITAL PRESENCE</small>

                <h3>
                  Think.
                  <br />
                  Create.
                  <br />
                  <span>Grow.</span>
                </h3>

                <div className="featured-lines">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="featured-button">
                  Explore Website
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="featured-floating-card featured-floating-one"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <TrendingUp size={17} />
              <div>
                <strong>Growth</strong>
                <small>Focused</small>
              </div>
            </motion.div>

            <motion.div
              className="featured-floating-card featured-floating-two"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <Zap size={17} />
              <div>
                <strong>Fast</strong>
                <small>Experience</small>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WEBSITE SHOWCASE */}
      <section className="home-demos-section">
        <div className="page-container">
          <div className="section-heading-row">
            <div>
              <span className="section-label">WEBSITE SHOWCASE</span>

              <h2>
                Websites built for
                <br />
                <span>real businesses.</span>
              </h2>

              <p>
                Explore some of the website concepts we can create for
                different industries.
              </p>
            </div>

            <Link to="/demos" className="outline-button">
              View All Demos
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="demo-showcase-grid">
            <DemoCard
              type="restaurant"
              title="Restaurant Website"
              subtitle="Modern food & restaurant experience"
              emoji="🍕"
            />

            <DemoCard
              type="realestate"
              title="Real Estate Website"
              subtitle="Premium property showcase"
              emoji="🏠"
            />

            <DemoCard
              type="fitness"
              title="Fitness Website"
              subtitle="Bold gym & fitness experience"
              emoji="🏋️"
            />
          </div>
        </div>
      </section>

      {/* WHY AITHINKAR */}
      <section className="home-why-section">
        <div className="page-container why-grid">
          <div className="why-content">
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
              Discover AIThinkar
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
              text="Looks beautiful on every screen size."
            />

            <Benefit
              icon={<Sparkles />}
              title="Unique"
              text="No boring copy-paste templates."
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="home-capabilities-section">
        <div className="page-container">
          <SectionHeading
            label="BUILT DIFFERENT"
            title={
              <>
                More than design.
                <br />
                <span>Built for performance.</span>
              </>
            }
            text="Every AIThinkar project combines visual quality with technology, usability and business thinking."
          />

          <div className="capabilities-grid">
            {capabilities.map((item, index) => (
              <motion.div
                className="capability-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -8 }}
              >
                <div className="capability-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span>0{index + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="home-industries-section">
        <div className="page-container">
          <SectionHeading
            label="WHO WE BUILD FOR"
            title={
              <>
                Your industry.
                <br />
                <span>Your digital experience.</span>
              </>
            }
            text="We create websites tailored to the way different businesses attract customers and grow."
          />

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div
                className="industry-card"
                key={industry.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="industry-icon">{industry.icon}</div>

                <h3>{industry.title}</h3>

                <p>{industry.text}</p>

                <ArrowRight size={17} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="home-process-section">
        <div className="page-container">
          <SectionHeading
            label="OUR PROCESS"
            title={
              <>
                From idea
                <br />
                <span>to online.</span>
              </>
            }
            text="A simple process designed to turn your idea into a website you are proud to share."
          />

          <div className="process-grid">
            {process.map((item, index) => (
              <motion.div
                className="process-card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="process-number">{item.number}</div>

                <div className="process-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {index !== process.length - 1 && (
                  <div className="process-arrow">
                    <ArrowRight size={17} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}
        <section className="home-transformation-section">
          <div className="page-container">
            <SectionHeading
              label="THE DIGITAL DIFFERENCE"
              title={
                <>
                  Turn your website into
                  <br />
                  <span>a business asset.</span>
                </>
              }
              text="A great digital presence should attract attention, create trust and make it easier for customers to take the next step."
            />

            <div className="transformation-grid">
              {transformationSteps.map((item, index) => (
                <motion.div
                  className="transformation-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="transformation-top">
                    <span>0{index + 1}</span>

                    <motion.div
                      className="transformation-icon"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="transformation-line" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      
      {/* TECHNOLOGY */}
      <section className="home-technology-section">
        <div className="page-container technology-grid">
          <motion.div
            className="technology-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">
              <Settings2 size={14} />
              MODERN TECHNOLOGY
            </span>

            <h2>
              Creative on the surface.
              <br />
              <span>Powerful underneath.</span>
            </h2>

            <p>
              We combine modern design with reliable technology to create websites
              and digital systems that are beautiful today and ready for tomorrow.
            </p>

            <div className="technology-checks">
              <span>
                <Check />
                Scalable architecture
              </span>

              <span>
                <Check />
                Modern development practices
              </span>

              <span>
                <Check />
                Performance-focused experiences
              </span>

              <span>
                <Check />
                Automation-ready systems
              </span>
            </div>

            <Link to="/services" className="primary-button">
              Explore Our Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="technology-visual">
            <motion.div
              className="technology-orbit orbit-one"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="technology-orbit orbit-two"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="technology-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles size={34} />

              <strong>AIThinkar</strong>

              <span>Digital Experience</span>
            </motion.div>

            <motion.div
              className="tech-floating tech-one"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Code2 />
            </motion.div>

            <motion.div
              className="tech-floating tech-two"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BrainCircuit />
            </motion.div>

            <motion.div
              className="tech-floating tech-three"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <Cloud />
            </motion.div>
          </div>
        </div>

        <div className="page-container technology-cards">
          {technology.map((item, index) => (
            <motion.div
              className="technology-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7 }}
            >
              <div className="technology-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUSINESS IMPACT */}
        <section className="home-impact-section">
          <div className="page-container">
            <SectionHeading
              label="DESIGNED FOR IMPACT"
              title={
                <>
                  Your digital presence
                  <br />
                  <span>works while you work.</span>
                </>
              }
              text="Your website is more than an online brochure. It can become one of your most valuable business tools."
            />

            <div className="impact-grid">
              {impactStats.map((item, index) => (
                <motion.div
                  className="impact-card"
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="impact-icon">{item.icon}</div>

                  <strong>{item.number}</strong>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    
      {/* WEBSITE VALUE */}
      <section className="home-website-value-section">
        <div className="page-container website-value-grid">
          <motion.div
            className="website-value-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="value-glow" />

            <motion.div
              className="value-main-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="value-card-top">
                <span>YOUR BUSINESS</span>

                <ArrowUpRight size={18} />
              </div>

              <div className="value-card-title">
                <small>Digital presence</small>

                <h3>
                  Make your
                  <br />
                  <span>first impression count.</span>
                </h3>
              </div>

              <div className="value-bars">
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="value-mini-row">
                <span>
                  <TrendingUp size={14} />
                  Growth ready
                </span>

                <span>
                  <Zap size={14} />
                  Fast
                </span>
              </div>
            </motion.div>

            <motion.div
              className="value-floating-card value-card-one"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <CheckCircle2 />
              <span>Professional</span>
            </motion.div>

            <motion.div
              className="value-floating-card value-card-two"
              animate={{ x: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <Sparkles />
              <span>Memorable</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="website-value-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">
              <Lightbulb size={14} />
              WHY IT MATTERS
            </span>

            <h2>
              People judge your business
              <br />
              <span>before they contact you.</span>
            </h2>

            <p>
              Your website can instantly influence whether someone trusts your
              business, understands your offer or decides to move on.
            </p>

            <div className="website-benefits">
              {websiteBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <CheckCircle2 size={18} />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    {/* MINI CTA */}
    <section className="home-mini-cta">
      <div className="page-container">
        <motion.div
          className="mini-cta-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mini-cta-icon">
            <PencilRuler size={24} />
          </div>

          <div className="mini-cta-content">
            <span>HAVE AN IDEA?</span>

            <h3>
              Let's turn it into something
              <span> worth seeing.</span>
            </h3>

            <p>
              Whether you need a new website, redesign or automation solution,
              let's talk about what you're building.
            </p>
          </div>

          <Link to="/contact" className="mini-cta-button">
            Let's Talk
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>


      {/* TRUST */}
      <section className="home-trust-section">
        <div className="page-container trust-box">
          <div>
            <span className="section-label">BUILT FOR BUSINESS</span>

            <h2>
              Your website should
              <br />
              <span>work for you.</span>
            </h2>

            <p>
              Beautiful design is only the beginning. We combine design,
              performance, responsiveness and business thinking to create
              digital experiences that make an impact.
            </p>
          </div>

          <div className="trust-list">
            <span>
              <CheckCircle2 /> Mobile-first design
            </span>

            <span>
              <CheckCircle2 /> Fast loading experience
            </span>

            <span>
              <CheckCircle2 /> SEO-friendly structure
            </span>

            <span>
              <CheckCircle2 /> Conversion-focused layouts
            </span>

            <span>
              <CheckCircle2 /> Modern animations
            </span>

            <span>
              <CheckCircle2 /> Easy to scale
            </span>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST */}
      <section className="home-testimonial-section">
        <div className="page-container">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <blockquote>
              “A great website should make people understand your business
              before they even speak to you.”
            </blockquote>

            <div className="testimonial-author">
              <div className="testimonial-avatar">A</div>

              <div>
                <strong>AIThinkar</strong>
                <span>Digital Experience Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="home-faq-section">
        <div className="page-container faq-grid">
          <div>
            <span className="section-label">FAQ</span>

            <h2>
              Questions?
              <br />
              <span>We've got answers.</span>
            </h2>

            <p>
              Everything you need to know before starting your next digital
              project.
            </p>

            <Link to="/contact" className="outline-button">
              Ask Us Anything
              <MessageCircle size={16} />
            </Link>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={18} />
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-final-cta">
        <div className="cta-glow cta-glow-one" />
        <div className="cta-glow cta-glow-two" />

        <motion.div
          className="cta-floating-icon cta-icon-one"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Code2 />
        </motion.div>

        <motion.div
          className="cta-floating-icon cta-icon-two"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          <Sparkles />
        </motion.div>

        <div className="page-container">
          <Sparkles size={30} />

          <h2>
            Ready to build something
            <br />
            <span>people remember?</span>
          </h2>

          <p>
            Tell us about your idea. Let's turn it into a digital experience
            that gets noticed.
          </p>

          <Link to="/contact" className="cta-button">
            Start Your Project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ label, title, text }) {
  return (
    <motion.div
      className="section-heading-center"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-label">{label}</span>

      <h2>{title}</h2>

      <p>{text}</p>
    </motion.div>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <motion.div className="benefit-card" whileHover={{ y: -7, scale: 1.02 }}>
      <div className="benefit-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </motion.div>
  );
}

function DemoCard({ type, title, subtitle, emoji }) {
  return (
    <motion.div
      className={`demo-showcase-card ${type}`}
      whileHover={{ y: -10, scale: 1.015 }}
    >
      <div className="demo-browser">
        <div className="demo-browser-bar">
          <i />
          <i />
          <i />
          <span>aithinkar.com</span>
        </div>

        <div className="demo-browser-content">
          <div className="demo-content-text">
            <small>AIThinkar DEMO</small>

            <h3>{title}</h3>

            <p>{subtitle}</p>

            <button>Explore →</button>
          </div>

          <motion.div
            className="demo-big-emoji"
            animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {emoji}
          </motion.div>
        </div>
      </div>

      <div className="demo-card-footer">
        <span>Responsive Website</span>

        <ArrowRight size={16} />
      </div>
    </motion.div>
  );
}

export default Home;