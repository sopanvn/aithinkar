import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">◈</span>
          <span>AIThinkar</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="navbar-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/demos">Demos</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link to="/contact" className="navbar-cta">
          Start a Project
          <ArrowRight size={15} />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/demos" onClick={closeMenu}>
          Demos
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          to="/contact"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          Start a Project
          <ArrowRight size={16} />
        </Link>

      </div>
    </header>
  );
}

export default Navbar;