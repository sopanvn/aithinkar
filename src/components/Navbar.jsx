import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <img src="/aithinkar.png" alt="AIThinkar" />
          <span>AI<span>Thinkar</span></span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/demos">Demo Sites</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          {/* <NavLink to="/pricing">Pricing</NavLink> */}
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="nav-cta">
            Let's Talk
            <ArrowUpRight size={16} />
          </Link>

          <button className="mobile-menu-btn" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;