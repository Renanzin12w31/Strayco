'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">

      {/* ===== BANNER (MOSTRA 100%) ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/products/Banner.webp"
          alt="Strayco Banner"
          fill
          priority
          className="object-contain object-center"
        />
      </div>

      {/* ===== OVERLAY SUAVE (DEIXA BONITO) ===== */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradiente inferior cinematic */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* ===== CONTEÚDO ===== */}
      <div className="relative z-10 text-center px-4">

        <img
          src="/images/logo-stray.webp"
          alt="Stray Company"
          className="mx-auto mb-6 w-28 md:w-32"
        />

        <p className="text-white/90 tracking-[0.25em] text-xs md:text-sm mb-8">
          DROPS SELECIONADOS • ESTOQUE LIMITADO
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/catalogo/masculino/tenis"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium text-black"
          >
            Ver Tênis
          </Link>

          <Link
            href="/promocoes"
            className="border border-white/20 hover:border-white/40 transition px-6 py-3 rounded-lg text-white"
          >
            Ver Promoções
          </Link>
        </div>

      </div>
    </section>
  )
}
