import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { navigation } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector("a")?.focus();
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (!event.target.closest(".site-header")) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Navigimi kryesor">
        <Logo />
        <div className="desktop-navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="button button-primary nav-cta" href="#contact">
          BËHU ANËTAR <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <button
          ref={toggle}
          className="menu-toggle icon-button"
          onClick={() => setOpen(!open)}
          type="button"
          aria-label={open ? "Mbyll menunë" : "Hap menunë"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          title={open ? "Mbyll menunë" : "Hap menunë"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <div
        ref={menu}
        id="mobile-navigation"
        className="mobile-navigation"
        hidden={!open}
      >
        <nav className="container" aria-label="Navigimi në telefon">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-join"
            onClick={() => setOpen(false)}
          >
            BËHU ANËTAR <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
