'use client'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useMemo, useState } from 'react'

const genderMap = {
  masculino: { title: 'Masculino' },
  feminino: { title: 'Feminino' },
  unisex: { title: 'Unisex' },
} as const

type GenderSlug = keyof typeof genderMap
type TabKey = 'tenis' | 'roupas'

export default function CatalogoGeneroPage({
  params,
}: {
  params: { gender: string }
}) {
  const gender = params.gender as GenderSlug
  if (!genderMap[gender]) return notFound()

  const [tab, setTab] = useState<TabKey>('tenis')

  const banner = useMemo(() => {
    if (tab === 'tenis') {
      return {
        href: `/catalogo/${gender}/tenis`,
        src:
          gender === 'masculino'
            ? '/images/products/tenis/JA3-WEB.webp'
            : '/images/products/tenis/air-max-tn-sunset.webp',
        alt: 'Banner Tênis',
      }
    }
    return {
      href: `/catalogo/${gender}/roupas`,
      src: '/images/products/roupas/denim-jacket-washed-black/imagem.webp',
      alt: 'Banner Roupas',
    }
  }, [gender, tab])

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {genderMap[gender].title}
          </h1>
        </div>

        {/* ✅ Abas (igual ideia Nike: só 2 opções) */}
        <div className="mb-8">
          <div className="flex justify-center gap-10 border-b border-white/10">
            <button
              type="button"
              onClick={() => setTab('tenis')}
              className={`pb-4 text-base md:text-lg font-medium transition ${
                tab === 'tenis'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Tênis
            </button>

            <button
              type="button"
              onClick={() => setTab('roupas')}
              className={`pb-4 text-base md:text-lg font-medium transition ${
                tab === 'roupas'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Roupas
            </button>
          </div>
        </div>

        {/* ✅ Área grande “vazia” (banner) — você troca as imagens quando quiser */}
        <Link
          href={banner.href}
          className="block relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 group"
          aria-label={tab === 'tenis' ? 'Ver Tênis' : 'Ver Roupas'}
        >
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />

            {/* overlay sutil */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition" />

            {/* CTA discreto no canto (sem texto extra) */}
            <div className="absolute left-5 bottom-5 sm:left-8 sm:bottom-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                Ver {tab === 'tenis' ? 'Tênis' : 'Roupas'} <span>→</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </main>
  )
}
