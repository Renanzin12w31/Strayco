'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

export default function HeroBanner() {
  const slides = useMemo(
    () => [
      {
        src: '/images/products/noite-iluiminosa.webp',
        alt: 'Banner Strayco - Noite Iluminosa',
      },
      {
        src: '/images/products/Banner.webp',
        alt: 'Banner Strayco - Destaques',
      },
    ],
    [],
  )

  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [slides.length])

  const goPrev = () => setActive((p) => (p - 1 + slides.length) % slides.length)
  const goNext = () => setActive((p) => (p + 1) % slides.length)

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* HERO com altura controlada (não “come” a página) */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
        {/* Slides */}
        {slides.map((s, idx) => {
          const isActive = idx === active
          return (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              {/* Background fill (preenche as laterais sem cortar a arte principal) */}
              <Image
                src={s.src}
                alt=""
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center blur-2xl scale-110 opacity-35"
              />

              {/* Foreground (100% visível) */}
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-contain object-center"
              />

              {/* Fade leve embaixo para separar do conteúdo */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
          )
        })}

        {/* LOGO POR CIMA (fixa, independente do slide) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <Image
            src="/logo-stray.webp"
            alt="Stray Company"
            width={140}
            height={60}
            priority
            className="opacity-95"
          />
        </div>

        {/* Controles (sutis) */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Banner anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/15 bg-black/35 hover:bg-black/55 transition px-3 py-2 text-white/90"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo banner"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/15 bg-black/35 hover:bg-black/55 transition px-3 py-2 text-white/90"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ir para banner ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition ${
                    i === active ? 'bg-white/85' : 'bg-white/25 hover:bg-white/45'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
