import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const genderMap = {
  masculino: { title: 'Masculino' },
  feminino: { title: 'Feminino' },
  unisex: { title: 'Unisex' },
} as const

type GenderSlug = keyof typeof genderMap

function SubNav({ gender }: { gender: GenderSlug }) {
  return (
    <nav className="flex justify-center mb-8">
      <div className="flex items-center gap-8 md:gap-10 border-b border-white/10">
        <Link
          href={`/catalogo/${gender}/tenis`}
          className="py-3 md:py-4 text-sm md:text-base font-medium text-white/80 hover:text-white transition"
        >
          Tênis
        </Link>
        <Link
          href={`/catalogo/${gender}/roupas`}
          className="py-3 md:py-4 text-sm md:text-base font-medium text-white/80 hover:text-white transition"
        >
          Roupas
        </Link>
      </div>
    </nav>
  )
}

function Banner({
  href,
  src,
  alt,
  variant = 'tenis', // 'tenis' (JA3) ou 'roupas' (SYNA)
}: {
  href: string
  src: string
  alt: string
  variant?: 'tenis' | 'roupas'
}) {
  const isTenis = variant === 'tenis'

  return (
    <Link
      href={href}
      className="block relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 group"
    >
      {/* alturas diferentes */}
      <div
        className={`relative w-full ${
          isTenis
            ? 'h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px]'
            : 'h-[320px] sm:h-[380px] md:h-[480px] lg:h-[560px]'
        }`}
      >
        {/* ========= IMAGEM ========= */}

        {isTenis ? (
          // ✅ JA3 (continua perfeito)
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-center"
          />
        ) : (
          // ✅ SYNA — NÃO RECORTA MAIS
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 md:p-14">
            <div className="relative w-full h-full max-w-[520px]">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="100vw"
                className="object-contain object-[50%_60%] md:object-center"
              />
            </div>
          </div>
        )}

        {/* overlay leve */}
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition" />

        {/* halo suave só roupas */}
        {!isTenis && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)] pointer-events-none" />
        )}

        {/* CTA */}
        <div
          className={`absolute bottom-6 md:bottom-10 ${
            isTenis ? 'left-6 md:left-10' : 'left-1/2 -translate-x-1/2'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
            Explorar →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function CatalogoGeneroPage({
  params,
}: {
  params: { gender: string }
}) {
  const gender = params.gender as GenderSlug
  if (!genderMap[gender]) return notFound()

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {genderMap[gender].title}
          </h1>
        </div>

        <SubNav gender={gender} />

        <div className="grid gap-8">
          <Banner
            href={`/catalogo/${gender}/tenis`}
            src={
              gender === 'masculino'
                ? '/images/products/tenis/JA3-WEB.webp'
                : '/images/products/tenis/air-max-tn-sunset.webp'
            }
            alt="Banner Tênis"
            variant="tenis"
          />

          <Banner
            href={`/catalogo/${gender}/roupas`}
            src="/images/products/roupas/SYNA-WORLD-MINIMAL.webp"
            alt="Banner Roupas"
            variant="roupas"
          />
        </div>
      </div>
    </main>
  )
}
