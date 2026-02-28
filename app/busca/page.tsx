'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import products from '@/data/products.json'

type Product = {
  id: string
  name: string
  description?: string
  price: number
  images?: string[]
  colors?: string[]
  sizes?: string[]
}

function normalize(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function BuscaPage() {
  const [q, setQ] = useState('')

  const list = products as unknown as Product[]

  const results = useMemo(() => {
    const term = normalize(q.trim())
    if (!term) return []

    return list.filter((p) => {
      const hay = normalize(
        `${p.name} ${p.description ?? ''} ${(p.colors ?? []).join(' ')} ${(p.sizes ?? []).join(' ')}`
      )
      return hay.includes(term)
    })
  }, [q, list])

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Resultados da busca</h1>
        <p className="text-gray-400 mb-8">Digite algo para buscar.</p>

        {/* INPUT */}
        <div className="mb-10">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Digite para buscar…"
            className="w-full max-w-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-white/30"
          />
        </div>

        {!q.trim() ? (
          <p className="text-gray-400">Digite algo para buscar.</p>
        ) : results.length === 0 ? (
          <p className="text-gray-400">Nenhum produto encontrado.</p>
        ) : (
          <>
            <p className="text-gray-400 mb-6">
              Encontramos <span className="text-white">{results.length}</span> resultado(s).
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((p) => (
                <Link
                  key={p.id}
                  href={`/produto/${p.id}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
                >
                  <div className="relative h-56 bg-black">
                    <Image
                      src={p.images?.[0] ?? '/logo-stray.webp'}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition"
                    />
                  </div>

                  <div className="p-4">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-gray-400 text-sm mt-1">
                      R$ {Number(p.price).toFixed(0)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
