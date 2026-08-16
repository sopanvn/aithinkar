import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { ArrowUpRight, Instagram } from "lucide-react";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="page-container">

        <div className="footer-top">

          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/aithinkar.png" alt="AIThinkar" />
              <span>AI<span>Thinkar</span></span>
            </Link>

            <p>
              We build modern websites, digital experiences and smart
              automation for businesses ready to grow.
            </p>

              <div className="footer-socials">
                <a href="https://www.instagram.com/aithinkar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>

                {/* <a href="#" aria-label="LinkedIn">
                  IN
                </a> */}

                {/* <a href="#" aria-label="Facebook">
                  FB
                </a> */}
              </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/demos">Demo Sites</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <Link to="/services">Website Development</Link>
            <Link to="/services">UI/UX Design</Link>
            <Link to="/services">Branding</Link>
            <Link to="/services">AI Automation</Link>
          </div>

          <div className="footer-contact">
            <span>LET'S BUILD</span>

            <h3>
              Have an idea?
              <br />
              Let's talk.
            </h3>

            <Link to="/contact">
              Start a Project
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AIThinkar. All rights reserved.
          </span>

          <span>
            Designed & built by AIThinkar
          </span>
        </div>

      </div>

      {/* BACK TO TOP */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={19} />
      </button>

    </footer>
  );
}

export default Footer;