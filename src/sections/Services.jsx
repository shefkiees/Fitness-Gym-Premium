import { ArrowUpRight, Dumbbell } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { services, site } from "../data/site.js";

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHeading
          number="02"
          label="Shërbimet"
          title={
            <>
              STËRVITJA JOTE.
              <br />
              <span>PËRKUSHTIMI YNË.</span>
            </>
          }
        />
        <div className="services-layout">
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.id}>
                {service.image ? (
                  <img
                    className="service-image"
                    src={service.image}
                    alt={service.title}
                    width="800"
                    height="500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <Dumbbell
                    className="service-icon"
                    size={44}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                )}
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="text-link">
                  PYET PËR ANËTARËSIM{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <div className="services-note">
            <p className="eyebrow">Hapi yt i radhës</p>
            <h3>
              ÇDO FILLIM
              <br />
              NIS ME TY.
            </h3>
            <p>
              Për shërbimet, programet dhe kushtet e anëtarësimit, kontakto
              drejtpërdrejt palestrën.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              NA SHKRUAJ <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
