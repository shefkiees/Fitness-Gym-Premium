function LogoPlaceholder() {
  return (
    <div className="flex items-center gap-3" aria-label="Fitness Gym Premium">
      <div className="flex h-10 w-10 items-center justify-center border-2 border-premium-orange text-sm font-black text-premium-orange">
        FGP
      </div>
      <div className="leading-tight">
        <p className="text-sm font-bold uppercase tracking-wide text-premium-white">
          Fitness Gym
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-premium-orange">
          Premium
        </p>
      </div>
    </div>
  );
}

export default LogoPlaceholder;
