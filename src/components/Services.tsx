"use client";

import useScrollReveal from "./useScrollReveal";

const services = [
  {
    title: "Klasik Saç Kesimi",
    price: "£25",
    description:
      "Yüz şeklinize ve tarzınıza en uygun kesimi belirleyip, makas ve makine ustalığıyla kusursuz bir sonuç ortaya koyuyoruz. Her kesim, kişiye özel bir danışmayla başlar.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.803.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664"
        />
      </svg>
    ),
  },
  {
    title: "Sakal Şekillendirme",
    price: "£20",
    description:
      "Profesyonel sakal bakımı ve şekillendirme ile yüz hatlarınızı ön plana çıkarıyoruz. Sıcak havlu uygulaması ve özel bakım yağlarıyla tamamlanan lüks bir deneyim.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Damat Paketi",
    price: "£65",
    description:
      "Özel gününüze özel hazırlık. Saç kesimi, sakal bakımı, cilt bakımı ve son rötuşları içeren kapsamlı damat paketimiz ile büyük güne mükemmel hazırlanın.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="services" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
            Hizmetlerimiz
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] leading-tight tracking-[-0.02em]">
            Ustalıkla Sunulan Hizmetler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group border border-neutral-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]/50 bg-white`}
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-semibold text-lg text-[var(--color-text)]">
                  {service.title}
                </h3>
                <span className="font-[family-name:var(--font-playfair)] text-[var(--color-accent)] font-semibold text-lg">
                  {service.price}
                </span>
              </div>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <a
            href="#contact"
            className="inline-block rounded-full bg-[var(--color-primary)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
}
