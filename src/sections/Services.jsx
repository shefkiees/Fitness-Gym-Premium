const services = ['Fitness', 'Personal Training', 'Cardio', 'Strength Area'];

function Services() {
  return (
    <section id="services" className="bg-premium-black">
      <div className="section-shell">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">Sherbimet</h2>
        <p className="section-copy">
          Lista perfundimtare e sherbimeve do te vendoset pasi te konfirmohen ofertat zyrtare.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service} className="border border-white/10 bg-premium-charcoal p-5">
              <h3 className="text-lg font-semibold text-premium-white">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">Placeholder per pershkrimin.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
