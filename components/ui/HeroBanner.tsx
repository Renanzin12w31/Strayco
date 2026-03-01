'use client'

import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-black flex justify-center overflow-hidden">

      {/* HERO com altura controlada */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] max-w-[1600px]">

        {/* IMAGEM COMPLETA (NÃO CORTA) */}
        <Image
          src="/images/products/Banner.webp"
          alt="Strayco Banner"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />

        {/* LOGO POR CIMA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/logo-stray.webp"
            alt="Stray Company"
            width={140}
            height={60}
            priority
            className="opacity-95"
          />
        </div>

      </div>
    </section>
  )
}
