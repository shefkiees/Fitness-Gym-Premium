import { ArrowUpRight, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { site } from "../data/site.js";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className={`about-visual ${site.aboutImage ? "with-photo" : ""}`}>
          <img
            src={site.aboutImage || site.logo}
            alt={
              site.aboutImage ? "Ambientet e Premium Fitness Gym" : site.name
            }
            width={site.aboutImage ? 1000 : 648}
            height={site.aboutImage ? 800 : 124}
            loading="lazy"
            decoding="async"
          />
          <div className="visual-caption">
            <span>PREMIUM FITNESS GYM</span>
            <span>VUSHTRRI, KOSOVË</span>
          </div>
        </div>
        <div>
          <SectionHeading
            number="01"
            label="Rreth nesh"
            title={
              <>
                NJË VEND PËR
                <br />
                <span>PËRKUSHTIMIN TËND.</span>
              </>
            }
          />
          <p className="body-copy">
            Premium Fitness Gym është palestra për meshkuj dhe femra në
            Vushtrri. Një vend ku mund t’i kushtosh kohë vetes dhe stërvitjes
            tënde.
          </p>
          <p className="body-copy">
            Na vizito gjatë orarit të punës ose na shkruaj në Instagram për
            informacione rreth anëtarësimit dhe palestrës.
          </p>
          <div className="inclusive-note">
            <Users size={24} aria-hidden="true" />
            <span>Për meshkuj dhe femra.</span>
          </div>
          <a href="#contact" className="text-link">
            NJIHEMI NGA AFËR <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
