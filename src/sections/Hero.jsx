function Hero() {
  return (
    <section id="home" className="bg-premium-black">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="section-kicker">Vushtrri, Kosove</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight text-premium-white sm:text-5xl lg:text-6xl">
            Fitness Gym Premium
          </h1>
          <p className="section-copy">
            Skelet fillestar per website-in zyrtar. Permbajtja, fotografite dhe detajet e biznesit do te plotesohen pas konfirmimit.
          </p>
        </div>

        <div className="min-h-72 border border-dashed border-white/25 bg-premium-charcoal p-6">
          <div className="flex h-full min-h-60 items-center justify-center text-center text-sm font-medium uppercase tracking-wide text-white/45">
            Vend per fotografine kryesore te fitnesit
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
