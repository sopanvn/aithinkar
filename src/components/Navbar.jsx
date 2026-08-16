import { ArrowRight } from "lucide-react";

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
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
          <ArrowRight size={15} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;