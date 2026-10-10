import LogoPlaceholder from './LogoPlaceholder.jsx';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-premium-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <LogoPlaceholder />
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Fitness Gym Premium. Te gjitha te drejtat e rezervuara.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
