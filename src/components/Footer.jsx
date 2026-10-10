import { ArrowUp, ArrowUpRight, Instagram } from "lucide-react";
import Logo from "./Logo.jsx";
import { navigation, site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-description">Përkushtim. Stërvitje. Premium.</p>
          <a
            className="footer-social"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} aria-hidden="true" />
            {site.instagramHandle}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <nav aria-label="Navigimi në fund të faqes">
          <h2>EKSPLORO</h2>
          {navigation
            .filter((item) => item.href !== "#home")
            .map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
        </nav>
        <div className="footer-details">
          <h2>NA VIZITO</h2>
          <p>
            {site.days}
            <br />
            <strong>{site.hours}</strong>
          </p>
          <p>E diel: kontaktoni palestrën për orarin.</p>
          <a href={site.maps} target="_blank" rel="noopener noreferrer">
            {site.location}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. Të gjitha të drejtat e
          rezervuara.
        </p>
        <a
          className="back-top"
          href="#home"
          aria-label="Kthehu në ballinë"
          title="Kthehu në ballinë"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
