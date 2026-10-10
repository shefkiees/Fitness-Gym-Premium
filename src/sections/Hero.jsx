import { ArrowDown, ArrowUpRight, Clock3, MapPin, Users } from "lucide-react";
import { site } from "../data/site.js";

export default function Hero() {
  return (
    <section
      id="home"
      className={`hero ${site.heroImage ? "has-photo" : ""}`}
      aria-labelledby="hero-title"
    >
      {site.heroImage && (
        <img
          className="hero-photo"
          src={site.heroImage}
          alt="Ambienti i Premium Fitness Gym"
          width="1284"
          height="844"
          fetchPriority="high"
        />
      )}
      <div className="hero-track" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" /> {site.location}
        </p>
        <p className="hero-brand">PREMIUM FITNESS GYM</p>
        <h1 id="hero-title">
          FORCA JOTE.
          <br />
          <span>LIMITET E TUA.</span>
        </h1>
        <p className="hero-copy">
          Stërvitu me përkushtim dhe puno çdo ditë drejt versionit tënd më të
          fortë.
        </p>
        <div className="actions">
          <a href="#contact" className="button button-primary">
            BËHU ANËTAR <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href="#about" className="button button-outline">
            EKSPLORO PALESTRËN <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        {!site.heroImage && (
          <div className="hero-signature" aria-hidden="true">
            <img src={site.logo} alt="" width="648" height="124" />
          </div>
        )}
        <a href="#about" className="scroll-link">
          VAZHDO MË POSHTË <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-facts">
        <div className="container facts-grid">
          <div>
            <Clock3 aria-hidden="true" />
            <p>
              <span>{site.days}</span>
              <strong>{site.hours}</strong>
            </p>
          </div>
          <div>
            <Users aria-hidden="true" />
            <p>
              <span>Përkushtim pa dallim</span>
              <strong>Për meshkuj dhe femra</strong>
            </p>
          </div>
          <a href={site.maps} target="_blank" rel="noopener noreferrer">
            <MapPin aria-hidden="true" />
            <p>
              <span>Na gjeni në</span>
              <strong>{site.location}</strong>
            </p>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
