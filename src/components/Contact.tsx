"use client";

import useScrollReveal from "./useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact Info & Form */}
          <div className="reveal">
            <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
              İletişim
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] leading-tight tracking-[-0.02em] mb-10">
              Bize Ulaşın
            </h2>

            {/* Info */}
            <div className="space-y-5 mb-12">
              {/* Phone */}
              <a
                href="tel:+447757745963"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Telefon
                  </p>
                  <p className="font-medium text-[var(--color-text)]">
                    +44 7757 745963
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)]">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Adres
                  </p>
                  <p className="font-medium text-[var(--color-text)]">
                    244 Gray&apos;s Inn Rd, London WC1X 8JR
                  </p>
                </div>
              </div>

              {/* Google Maps Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=244+Gray%27s+Inn+Rd+London+WC1X+8JR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 rounded-full border border-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Google Maps&apos;te Aç
              </a>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Mesajınız"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[var(--color-accent)] px-10 py-3.5 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Right — Google Map */}
          <div className="reveal reveal-delay-1">
            <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden border border-[var(--color-accent)]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0!2d-0.1136!3d51.5265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3a8e5a9e67%3A0x0!2s244+Gray&#39;s+Inn+Rd%2C+London+WC1X+8JR!5e0!3m2!1sen!2suk!4v1"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hairsta Barbers - 244 Gray's Inn Rd, London WC1X 8JR"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
