import { ArrowUpRight, Clock3 } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { site } from "../data/site.js";

export default function Hours() {
  return (
    <section id="hours" className="section hours-section">
      <div className="container hours-grid">
        <SectionHeading
          number="04"
          label="Orari"
          title={
            <>
              GJEJ KOHË.
              <br />
              <span>PËR VETEN.</span>
            </>
          }
        >
          Planifiko stërvitjen tënde gjatë orarit të punës.
        </SectionHeading>
        <div className="hours-table">
          <div className="hours-primary">
            <div>
              <Clock3 size={22} aria-hidden="true" />
              <h3>{site.days}</h3>
            </div>
            <p>{site.hours}</p>
          </div>
          <div className="hours-sunday">
            <h3>E diel</h3>
            <p>Kontaktoni palestrën për orarin.</p>
          </div>
          <a href="#contact" className="text-link">
            PYET PËR ORARIN <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
