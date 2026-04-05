"use client";

import useScrollReveal from "./useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-3 reveal">
            <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
              Hakkımızda
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] leading-tight tracking-[-0.02em] mb-8">
              Tıraş Bir Sanattır,
              <br />
              Biz de Ustasıyız
            </h2>
            <div className="space-y-6 text-[var(--color-text-muted)]">
              <p>
                Gray&apos;s Inn Road&apos;un hareketli atmosferinde, Hairsta
                Barbers olarak Londra&apos;nın merkezine sıcak ve samimi bir
                berber deneyimi sunuyoruz. King&apos;s Cross&apos;un enerjik
                dokusunda, geleneksel berberlik sanatını modern tekniklerle
                harmanlıyoruz.
              </p>
              <p>
                Her müşterimiz bizim için özeldir. Kapıdan girdiğiniz andan
                itibaren kendinizi rahat hissedeceğiniz, size özel bir deneyim
                yaşayacağınız bir mekân yaratmak en büyük tutkumuz. Yıllarca
                süren tecrübemizi her kesimde, her tıraşta hissedeceksiniz.
              </p>
              <p>
                İster klasik bir İngiliz tıraşı, ister cesur ve modern bir
                kesim olsun — Hairsta&apos;da her detay titizlikle ele alınır.
                Çünkü biz inanıyoruz ki iyi bir tıraş, sadece bir görünüm
                değil, bir duruş meselesidir.
              </p>
            </div>
          </div>

          {/* Decorative Column */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative">
              {/* Abstract composition */}
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                {/* Background shape */}
                <div className="absolute inset-4 rounded-3xl bg-[var(--color-surface)]" />

                {/* Accent circle */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full border-2 border-[var(--color-accent)]/30" />
                <div className="absolute bottom-8 left-0 w-24 h-24 rounded-full bg-[var(--color-accent)]/10" />

                {/* Rating display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-[6rem] font-bold text-[var(--color-text)] leading-none">
                    5.0
                  </span>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[var(--color-accent)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 text-[var(--color-text-muted)] text-sm">
                    Google Değerlendirmesi
                  </p>
                </div>

                {/* Decorative lines */}
                <div className="absolute top-12 left-8 w-16 h-[1px] bg-[var(--color-accent)]/30" />
                <div className="absolute bottom-12 right-8 w-16 h-[1px] bg-[var(--color-accent)]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
