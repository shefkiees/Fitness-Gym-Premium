import {
  ArrowUpRight,
  Instagram,
  MapPin,
  ParkingCircle,
  Phone,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { site } from "../data/site.js";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          number="05"
          label="Kontakti"
          title={
            <>
              HAPI I PARË?
              <br />
              <span>NA KONTAKTO.</span>
            </>
          }
        >
          Për anëtarësim dhe informacione, na shkruaj ose na vizito në palestër.
        </SectionHeading>
        <div className="contact-grid">
          <div className="contact-info">
            <a
              className="contact-row"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram aria-hidden="true" />
              <div>
                <span>Instagram zyrtar</span>
                <strong>{site.instagramHandle}</strong>
              </div>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <div className="contact-row">
              <Phone aria-hidden="true" />
              <div>
                <span>Telefoni</span>
                {site.phone ? (
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                    {site.phone}
                  </a>
                ) : (
                  <p>Për momentin, na kontakto në Instagram.</p>
                )}
              </div>
            </div>
            <div className="parking-note">
              <ParkingCircle size={21} aria-hidden="true" />
              <p>
                Informacion për parkingun gjen te Highlights në Instagram-in
                tonë.
              </p>
            </div>
            <a
              className="button button-primary"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              NA KONTAKTO <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
          <div className="location-panel">
            <MapPin
              className="location-mark"
              size={72}
              strokeWidth={1}
              aria-hidden="true"
            />
            <p className="eyebrow">Të presim në palestër</p>
            <h3>
              VUSHTRRI,
              <br />
              KOSOVË.
            </h3>
            <p>Premium Fitness Gym</p>
            <a
              className="button button-outline"
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              HAP NË GOOGLE MAPS <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
