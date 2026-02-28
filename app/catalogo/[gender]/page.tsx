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

  // Se você quiser manter "Acessórios" só no Feminino, deixa isso aqui:
  const showAcessorios = gender === 'feminino'

  const [tab, setTab] = useState<TabKey>('tenis')

  const tabHref = useMemo(() => {
    return `/catalogo/${gender}/${tab}`
  }, [gender, tab])

  // ✅ Banner “editorial” (você troca as imagens quando quiser)
  // Se quiser deixar totalmente vazio, é só colocar src: '' nos dois.
  const banner = useMemo(() => {
    if (tab === 'tenis') {
      return {
        title: 'Tênis',
        subtitle: 'Explorar tênis exclusivos',
        src:
          gender === 'masculino'
            ? '/images/products/tenis/JA3-WEB.webp'
            : '/images/products/tenis/air-max-tn-sunset.webp',
        alt: 'Banner Tênis',
      }
    }

    return {
      title: 'Roupas',
      subtitle: 'Explorar vestuário',
      src: '/images/products/roupas/denim-jacket-washed-black/imagem.webp',
      alt: 'Banner Roupas',
    }
  }, [gender, tab])

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {genderMap[gender].title}
          </h1>
        </div>

        {/* ✅ TABS (estilo Nike) */}
        <div className="mb-8">
          <div className="flex items-end justify-center gap-10 border-b border-white/10">
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

          {/* opcional: Acessórios (só no feminino) sem virar aba */}
          {showAcessorios && (
            <div className="flex justify-center mt-4">
              <Link
                href={`/catalogo/${gender}/acessorios`}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Ver Acessórios →
              </Link>
            </div>
          )}
        </div>

        {/* ✅ ÁREA EDITORIAL (espaço grande para imagem/banner) */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 group">
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
            {/* Se quiser “vazio”, basta remover esse Image e deixar só o fundo */}
            {banner.src ? (
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center"
              />
            ) : null}

            {/* Overlay pra dar leitura premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

            {/* Texto + CTA (igual Nike: texto em cima do banner) */}
            <div className="absolute left-5 bottom-5 sm:left-8 sm:bottom-8 md:left-12 md:bottom-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {banner.title}
              </h2>
              <p className="text-gray-200/90 mt-2">{banner.subtitle}</p>

              <div className="mt-5">
                <Link
                  href={tabHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  Explorar {tab === 'tenis' ? 'Tênis' : 'Roupas'}
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ opcional: links rápidos abaixo (sem cards) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/catalogo/${gender}/tenis`}
            className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition"
          >
            Ver todos os tênis
          </Link>
          <Link
            href={`/catalogo/${gender}/roupas`}
            className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition"
          >
            Ver todas as roupas
          </Link>
        </div>
      </div>
    </main>
  )
}
