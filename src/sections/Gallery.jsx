import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { galleryImages, site } from "../data/site.js";

const categories = [
  { id: "all", label: "Të gjitha" },
  { id: "ambient", label: "Ambienti" },
  { id: "equipment", label: "Pajisjet" },
  { id: "training", label: "Stërvitja" },
];

export default function Gallery() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const photos = galleryImages.filter(
    (photo) => category === "all" || photo.category === category,
  );
  const photo = selected === null ? null : photos[selected];

  useEffect(() => {
    if (selected !== null) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    dialog.current?.close();
  }, [selected]);

  const move = (step) =>
    setSelected((value) => (value + step + photos.length) % photos.length);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="03"
            label="Galeria"
            title={
              <>
                BRENDA
                <br />
                <span>PREMIUM.</span>
              </>
            }
          />
          <a
            className="text-link"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            SHIKO NË INSTAGRAM <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
        {galleryImages.length > 0 ? (
          <>
            <div
              className="gallery-filters"
              role="group"
              aria-label="Kategoritë e fotografive"
            >
              {categories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={category === item.id}
                  onClick={() => setCategory(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="gallery-grid">
              {photos.map((item, index) => (
                <button
                  key={item.src}
                  className={`gallery-item ${item.height > item.width ? "gallery-item-portrait" : ""}`}
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-label={`Hap fotografinë: ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    {item.alt}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
            {photos.length === 0 && (
              <p className="body-copy">
                Fotografitë e kësaj kategorie do të shtohen së shpejti.
              </p>
            )}
          </>
        ) : (
          <div className="gallery-empty">
            <Camera size={34} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <h3>Fotografitë e palestrës së shpejti.</h3>
              <p>Ndërkohë, njihu me ambientin në profilin tonë zyrtar.</p>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              {site.instagramHandle}{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        aria-label="Fotografia e palestrës"
      >
        {photo && (
          <div className="lightbox-content">
            <button
              className="icon-button lightbox-close"
              type="button"
              title="Mbyll fotografinë"
              aria-label="Mbyll fotografinë"
              onClick={() => setSelected(null)}
            >
              <X aria-hidden="true" />
            </button>
            <img src={photo.src} alt={photo.alt} />
            <div className="lightbox-caption">
              <p>{photo.alt}</p>
              <div>
                <button
                  className="icon-button"
                  type="button"
                  title="Fotografia e mëparshme"
                  aria-label="Fotografia e mëparshme"
                  onClick={() => move(-1)}
                >
                  <ArrowLeft aria-hidden="true" />
                </button>
                <span>
                  {selected + 1} / {photos.length}
                </span>
                <button
                  className="icon-button"
                  type="button"
                  title="Fotografia e radhës"
                  aria-label="Fotografia e radhës"
                  onClick={() => move(1)}
                >
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
