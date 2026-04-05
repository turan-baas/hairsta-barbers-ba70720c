"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary)]"
    >
      {/* Background geometric art */}
      <div className="absolute inset-0">
        {/* Diagonal split */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1714] to-[#0A0A0A]" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating accent shapes */}
        <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full border border-[var(--color-accent)]/20 animate-float" />
        <div className="absolute top-[20%] right-[15%] w-48 h-48 rounded-full bg-[var(--color-accent)]/5 animate-float-reverse" />
        <div className="absolute bottom-[20%] left-[8%] w-64 h-64 rounded-full border border-[var(--color-accent)]/10 animate-float-reverse" />
        <div className="absolute bottom-[10%] left-[5%] w-32 h-32 bg-[var(--color-accent)]/5 rotate-45 animate-float" />

        {/* Large decorative scissors-like cross */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[var(--color-accent)]" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-[var(--color-accent)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[var(--color-accent)]" />
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Small top label */}
        <p className="animate-fade-in-up text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.25em] font-medium mb-6">
          Premium Barber Deneyimi
        </p>

        {/* Main heading */}
        <h1 className="animate-fade-in-up-delay-1 font-[family-name:var(--font-playfair)] text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold text-white leading-[1.05] tracking-[-0.03em]">
          Hairsta
          <br />
          <span className="text-[var(--color-accent)]">Barbers</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up-delay-2 mt-8 text-white/60 text-lg md:text-xl max-w-xl mx-auto font-[family-name:var(--font-inter)] font-light leading-relaxed">
          Londra&apos;nın kalbinde, kusursuz tıraş ve modern stil bir arada.
          Zarafet ve ustalığın buluşma noktası.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up-delay-3 mt-12">
          <a
            href="#contact"
            className="inline-block rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110"
          >
            Randevu Al
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-3">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--color-accent)]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
