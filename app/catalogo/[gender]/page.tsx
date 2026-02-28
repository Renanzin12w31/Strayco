import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const genderMap = {
  masculino: { title: 'Masculino' },
  feminino: { title: 'Feminino' },
  unisex: { title: 'Unisex' },
} as const

type GenderSlug = keyof typeof genderMap

export default function CatalogoGeneroPage({
  params,
}: {
  params: { gender: string }
}) {
  const gender = params.gender as GenderSlug
  if (!genderMap[gender]) return notFound()

  const showAcessorios = gender === 'feminino'
  const showJa3Hero = gender === 'masculino'

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {genderMap[gender].title}
          </h1>
        </div>

        {/* HERO JA3 (SÓ NO MASCULINO) */}
        {showJa3Hero && (
          <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 group">
            <div className="relative h-[320px] md:h-[420px]">
              <Image
                src="/images/products/tenis/JA3-WEB.webp"
                alt="Nike Ja 3"
                fill
                priority
                className="object-cover"
              />

              {/* overlay leve (pra manter leitura do botão) */}
              <div className="absolute inset-0 bg-black/20" />

              {/* CTA discreto */}
              <div className="absolute left-8 bottom-8 md:left-12 md:bottom-12">
                <Link
                  href="/produto/14"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  Comprar
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Se feminino: 3 colunas. Se não: 2 colunas */}
        <div
          className={`grid gap-6 ${
            showAcessorios ? 'md:grid-cols-3' : 'md:grid-cols-2'
          }`}
        >
          {/* TÊNIS */}
          <Link href={`/catalogo/${gender}/tenis`} className="group block">
            <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/products/tenis/air-max-tn-sunset.webp"
                alt="Sneakers"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white">Sneakers</h2>
                <p className="text-gray-300">Explorar tênis exclusivos</p>
              </div>
            </div>
          </Link>

          {/* ROUPAS */}
          <Link href={`/catalogo/${gender}/roupas`} className="group block">
            <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/products/roupas/denim-jacket-washed-black/imagem.webp"
                alt="Streetwear"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white">Streetwear</h2>
                <p className="text-gray-300">Explorar vestuário</p>
              </div>
            </div>
          </Link>

          {/* ✅ ACESSÓRIOS (SÓ FEMININO) */}
          {showAcessorios && (
            <Link
              href={`/catalogo/${gender}/acessorios`}
              className="group block"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src="/images/products/acessorios/vancleef-corrente.webp"
                  alt="Acessórios"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white">Acessórios</h2>
                  <p className="text-gray-300">Explorar acessórios</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
