import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  // On mobile, only show nav-links when open. On desktop, always show.
  const navLinksStyle = isMobile ? { display: isOpen ? "flex" : "none" } : {};

  return (
    <nav className="navbar">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggle}
        aria-label="Toggle navigation"
        type="button"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className="nav-links" style={navLinksStyle}>
        <a href="../" className="nav-link" onClick={close}>Home</a>
        <a href="../#about" className="nav-link" onClick={close}>About</a>
        <a href="../#faq" className="nav-link" onClick={close}>FAQ</a>
        <a href="../#sponsorships" className="nav-link" onClick={close}>Sponsors</a>
        <a href="../#team" className="nav-link" onClick={close}>Meet The Team</a>
        <a
          className="nav-signup"
          href="../signup"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <b>Sign up for KiwiHacks</b>
        </a>
      </div>
    </nav>
  );
}
