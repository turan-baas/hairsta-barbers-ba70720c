"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetler" },
  { href: "#reviews", label: "Yorumlar" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-[12px] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight"
        >
          <span className="text-[var(--color-accent)]">Hairsta</span>{" "}
          <span className={scrolled ? "text-[var(--color-primary)]" : "text-white"}>Barbers</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover-underline text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors hover:text-[var(--color-accent)] ${
                scrolled ? "text-[var(--color-text)]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`ml-4 inline-block rounded-full px-7 py-2.5 text-[0.8rem] uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${
              scrolled
                ? "bg-[var(--color-accent)]"
                : "bg-[var(--color-accent)]/90 backdrop-blur-sm"
            }`}
          >
            Randevu Al
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menüyü aç"
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen || scrolled ? "bg-[var(--color-primary)]" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen || scrolled ? "bg-[var(--color-primary)]" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen || scrolled ? "bg-[var(--color-primary)]" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-primary)]/95 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="stagger-item font-[family-name:var(--font-playfair)] text-3xl text-white/90 hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="stagger-item mt-4 rounded-full bg-[var(--color-accent)] px-10 py-3 text-sm uppercase tracking-[0.15em] font-medium text-white"
          >
            İletişim
          </a>
        </div>
      )}
    </header>
  );
}
