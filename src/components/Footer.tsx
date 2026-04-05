export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight">
              <span className="text-[var(--color-accent)]">Hairsta</span>{" "}
              Barbers
            </p>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              Londra&apos;nın kalbinde, geleneksel berberlik sanatını modern
              tekniklerle buluşturuyoruz.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=244+Gray%27s+Inn+Rd+London+WC1X+8JR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                aria-label="Google Maps"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-6">
              Hızlı Bağlantılar
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#hero", label: "Ana Sayfa" },
                { href: "#about", label: "Hakkımızda" },
                { href: "#services", label: "Hizmetler" },
                { href: "#reviews", label: "Yorumlar" },
                { href: "#contact", label: "İletişim" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Working Hours */}
          <div>
            <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-6">
              Çalışma Saatleri
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/50">
                <span>Pazartesi - Cuma</span>
                <span className="text-white/70">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Cumartesi</span>
                <span className="text-white/70">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Pazar</span>
                <span className="text-white/70">Kapalı</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-6">
              İletişim
            </p>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+447757745963"
                className="flex items-center gap-3 text-white/50 hover:text-[var(--color-accent)] transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +44 7757 745963
              </a>
              <div className="flex items-start gap-3 text-white/50">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                244 Gray&apos;s Inn Rd, London WC1X 8JR
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2026 Hairsta Barbers. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-xs">
            Londra, Birleşik Krallık
          </p>
        </div>
      </div>
    </footer>
  );
}
