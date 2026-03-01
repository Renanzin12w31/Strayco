'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-6">
        {/* HERO (estilo template: banner + bloco) */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[360px] md:min-h-[420px]">
            {/* ESQUERDA: metade com a imagem (noite-iluiminosa) */}
            <div className="relative">
              <Image
                src="/images/products/noite-iluiminosa.webp"
                alt="Banner Strayco"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center"
              />
              {/* leve gradiente pra integrar com o bloco escuro */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-black/70 md:to-black/80" />
            </div>

            {/* DIREITA: bloco escuro com CTA */}
            <div className="relative flex items-center">
              <div className="w-full px-6 py-10 md:px-10">
                <div className="flex justify-center md:justify-start mb-6">
                  <Image
                    src="/logo-stray.webp"
                    alt="Stray Company"
                    width={140}
                    height={60}
                    priority
                    className="h-auto w-[120px] md:w-[140px]"
                  />
                </div>

                <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                  Drops selecionados
                </h1>
                <p className="text-white/70 mt-3 max-w-md">
                  Estoque limitado. Garanta o seu agora e finalize pelo WhatsApp.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/catalogo/masculino/tenis"
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-medium text-black hover:bg-orange-600 transition"
                  >
                    Comprar agora
                  </Link>
                  <Link
                    href="/promocoes"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 font-medium text-white hover:border-white/30 transition"
                  >
                    Ver promoções
                  </Link>
                </div>

                {/* detalhe sutil */}
                <p className="mt-6 text-[11px] tracking-[0.25em] text-white/60">
                  STRAYCO • STREET & SNEAKERS
                </p>
              </div>
            </div>
          </div>

          {/* Fade inferior pra “cortar” bonito antes da vitrine */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
