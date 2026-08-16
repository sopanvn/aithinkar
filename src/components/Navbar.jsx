import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/aithinkar.png" alt="AIThinkar" />
          <span>AI<span>Thinkar</span></span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/demos">Demo Sites</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>

        <div className="nav-actions">

          {/* DESKTOP CTA */}
          <Link to="/contact" className="nav-cta">
            Let's Talk
            <ArrowUpRight size={16} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/demos" onClick={closeMenu}>
          Demo Sites
        </NavLink>

        <NavLink to="/portfolio" onClick={closeMenu}>
          Portfolio
        </NavLink>

        <Link
          to="/contact"
          className="mobile-nav-cta"
          onClick={closeMenu}
        >
          Let's Talk
          <ArrowUpRight size={17} />
        </Link>

      </div>
    </header>
  );
}

export default Navbar;