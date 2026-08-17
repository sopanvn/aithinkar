import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  MapPin,
  Clock3,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./contact.css";

const services = [
  "Website Development",
  "UI / UX Design",
  "Website Redesign",
  "E-Commerce",
  "AI Automation",
  "SEO",
  "Branding",
  "Other",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = new FormData(form);

    data.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
    data.append("subject", "New AIThinkar Website Enquiry");
    data.append("from_name", "AIThinkar Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Unable to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />

        <div className="page-container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <Sparkles size={14} />
              LET'S BUILD SOMETHING
            </span>

            <h1>
              Let's turn your
              <br />
              <span>idea into reality.</span>
            </h1>

            <p>
              Have a business idea, website project or automation requirement?
              Tell us what you're building and let's create something people
              remember.
            </p>

            <div className="contact-hero-points">
              <span>
                <CheckCircle2 size={17} />
                Fast response
              </span>

              <span>
                <CheckCircle2 size={17} />
                Custom solutions
              </span>

              <span>
                <CheckCircle2 size={17} />
                No-pressure consultation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-main-section">
        <div className="page-container contact-grid">

          {/* LEFT */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">GET IN TOUCH</span>

            <h2>
              Let's talk about
              <br />
              <span>your project.</span>
            </h2>

            <p>
              Whether you need a brand-new website, a redesign, an online
              store or smart automation, we're ready to help.
            </p>

            <div className="contact-info-list">

              <a
                href="mailto:aithinkar@gmail.com"
                className="contact-info-card"
              >
                <div className="contact-info-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <small>Email</small>
                  <strong>aithinkar@gmail.com</strong>
                </div>

                <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <div className="contact-info-icon">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <small>WhatsApp</small>
                  <strong>Let's chat</strong>
                </div>

                <ArrowRight size={17} />
              </a>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <small>Location</small>
                  <strong>India</strong>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Clock3 size={21} />
                </div>

                <div>
                  <small>Availability</small>
                  <strong>Mon – Sat</strong>
                </div>
              </div>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">
                  <span>START A PROJECT</span>

                  <h3>
                    Tell us about
                    <br />
                    <strong>your project.</strong>
                  </h3>
                </div>

                <input
                  type="hidden"
                  name="redirect"
                  value=""
                />

                <div className="form-row">

                  <div className="form-group">
                    <label>Full Name *</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label>Business / Company</label>

                    <input
                      type="text"
                      name="company"
                      placeholder="Your business"
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label>What do you need?</label>

                  <select name="service">
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Estimated Budget</label>

                  <select name="budget">
                    <option value="">Select your budget</option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Tell us about your project *</label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your business, idea, website or requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      Sending...
                      <span className="button-loader" />
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={17} />
                    </>
                  )}
                </button>

                <p className="form-note">
                  We'll review your enquiry and get back to you as soon as
                  possible.
                </p>

              </form>
            ) : (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon">
                  <CheckCircle2 size={42} />
                </div>

                <span>MESSAGE SENT</span>

                <h3>
                  Thanks for reaching out!
                </h3>

                <p>
                  Your enquiry has been received. We'll get back to you soon
                  at the email address you provided.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="outline-button"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="contact-process-section">
        <div className="page-container">

          <div className="section-heading-center">
            <span className="section-label">WHAT HAPPENS NEXT</span>

            <h2>
              Simple from
              <br />
              <span>start to finish.</span>
            </h2>

            <p>
              No complicated process. Just a clear conversation followed by
              thoughtful execution.
            </p>
          </div>

          <div className="contact-process-grid">

            <ProcessStep
              number="01"
              title="You reach out"
              text="Tell us about your business, idea and what you want to build."
            />

            <ProcessStep
              number="02"
              title="We connect"
              text="We discuss your requirements, goals, timeline and possible solutions."
            />

            <ProcessStep
              number="03"
              title="We build"
              text="Once everything is clear, we turn the idea into a polished digital experience."
            />

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final-cta">

        <div className="contact-cta-glow" />

        <div className="page-container">

          <Sparkles size={28} />

          <h2>
            Have an idea?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <p>
            Great digital experiences start with a conversation.
          </p>

          <a
            href="mailto:aithinkar@gmail.com"
            className="cta-button"
          >
            Email AIThinkar
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}

function ProcessStep({ number, title, text }) {
  return (
    <motion.div
      className="contact-process-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <span>{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </motion.div>
  );
}

export default Contact;