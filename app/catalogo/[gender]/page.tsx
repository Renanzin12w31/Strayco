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
    <nav className="flex justify-center gap-10 border-b border-white/10 mb-10">
      <Link
        href={`/catalogo/${gender}/tenis`}
        className="py-4 text-base md:text-lg text-gray-300 hover:text-white transition"
      >
        Tênis
      </Link>

      <Link
        href={`/catalogo/${gender}/roupas`}
        className="py-4 text-base md:text-lg text-gray-300 hover:text-white transition"
      >
        Roupas
      </Link>
    </nav>
  )
}

function Banner({
  href,
  src,
  alt,
  eyebrow,
  title,
  cta,
}: {
  href: string
  src: string
  alt: string
  eyebrow?: string
  title: string
  cta: string
}) {
  return (
    <Link
      href={href}
      className="block relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 group"
    >
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
          className="object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent group-hover:from-black/60 transition" />

        {/* texto */}
        <div className="absolute left-5 bottom-5 sm:left-8 sm:bottom-8 md:left-12 md:bottom-12">
          {eyebrow ? (
            <p className="text-sm text-gray-200/80 mb-2">{eyebrow}</p>
          ) : null}

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h2>

          <div className="mt-5">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
              {cta} <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {genderMap[gender].title}
          </h1>
        </div>

        {/* ✅ Sub-menu estilo Nike (só links) */}
        <SubNav gender={gender} />

        {/* ✅ Dentro do Masculino/Feminino: as duas imagens (Tênis e Roupas) */}
        <div className="grid gap-8">
          <Banner
            href={`/catalogo/${gender}/tenis`}
            src={
              gender === 'masculino'
                ? '/images/products/tenis/JA3-WEB.webp'
                : '/images/products/tenis/air-max-tn-sunset.webp'
            }
            alt="Banner Tênis"
            eyebrow="Coleção"
            title="TÊNIS"
            cta="Explorar"
          />

          <Banner
            href={`/catalogo/${gender}/roupas`}
            src="/images/products/roupas/denim-jacket-washed-black/imagem.webp"
            alt="Banner Roupas"
            eyebrow="Coleção"
            title="ROUPAS"
            cta="Explorar"
          />
        </div>
      </div>
    </main>
  )
}
