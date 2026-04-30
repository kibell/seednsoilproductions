import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/music", label: "Music" },
  { path: "/videos", label: "Videos" },
  { path: "/the-parable", label: "The Parable" },
  { path: "/devotion", label: "Devotion" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`nav-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="Seed & Soil Home">
          <span className="brand-icon">✦</span>
          <span className="brand-text">
            <span className="brand-main">Seed & Soil</span>
            <span className="brand-sub">The Parable</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link${location.pathname === link.path ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/links" className="nav-cta btn btn-primary">
            Links
          </Link>
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link${location.pathname === link.path ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/links" className="mobile-link mobile-cta">
            ✦ Links / Bio Page
          </Link>
        </nav>
      </div>
    </header>
  );
}
