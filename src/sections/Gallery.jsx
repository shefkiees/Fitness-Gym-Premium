function Gallery() {
  return (
    <section id="gallery" className="bg-premium-charcoal">
      <div className="section-shell">
        <p className="section-kicker">Gallery</p>
        <h2 className="section-title">Galeria</h2>
        <p className="section-copy">
          Fotografite reale te fitnesit do te vendosen ne `public/images/` dhe do te integrohen ketu.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex aspect-[4/3] items-center justify-center border border-dashed border-white/20 bg-premium-black text-sm uppercase tracking-wide text-white/40"
            >
              Image Placeholder
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
