import { Menu } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder.jsx';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-premium-black/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <LogoPlaceholder />

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/75 transition hover:text-premium-orange"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-premium-white md:hidden"
          type="button"
          aria-label="Open navigation"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
