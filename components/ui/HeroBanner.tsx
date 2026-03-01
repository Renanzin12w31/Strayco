'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Altura controlada (evita o “corte” por vh no mobile) */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[600px]">
        {/* Banner full-width, SEM CORTAR */}
        <Image
          src="/images/products/Banner.webp"
          alt="Banner Strayco"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />

        {/* Overlays para leitura + look premium */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Conteúdo por cima (safe-area por causa do header fixo) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pt-20">
          <div className="text-center max-w-[680px] w-full">
            {/* LOGO (use Next/Image). Se o arquivo não existir, você vai ver 404 no console/network. */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logo-stray.webp"
                alt="Stray Company"
                width={140}
                height={60}
                className="h-auto w-[110px] sm:w-[130px]"
                priority
              />
            </div>

            <p className="text-white/90 tracking-[0.25em] text-[10px] sm:text-xs md:text-sm mb-6">
              DROPS SELECIONADOS • ESTOQUE LIMITADO
            </p>

            <div className="flex items-center justify-center gap-3">
              <Link
                href="/catalogo/masculino/tenis"
                className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2.5 rounded-lg font-medium text-black"
              >
                Ver Tênis
              </Link>

              <Link
                href="/promocoes"
                className="border border-white/20 hover:border-white/40 transition px-5 py-2.5 rounded-lg text-white"
              >
                Ver Promoções
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
