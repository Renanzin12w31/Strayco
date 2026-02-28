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
  fit = 'cover',
  ctaPosition = 'left',
}: {
  href: string
  src: string
  alt: string
  fit?: 'cover' | 'contain'
  ctaPosition?: 'left' | 'center'
}) {
  return (
    <Link
      href={href}
      className="block relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 group"
    >
      <div className="relative w-full h-[340px] sm:h-[420px] md:h-[520px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 960px"
          className={`${fit === 'contain' ? 'object-contain' : 'object-cover'} object-center`}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition" />

        <div
          className={`absolute bottom-6 md:bottom-10 ${
            ctaPosition === 'center'
              ? 'left-1/2 -translate-x-1/2'
              : 'left-6 md:left-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
            Explorar
            <span className="group-hover:translate-x-1 transition-transform">→</span>
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

        {/* ✅ Dois banners SEM texto extra */}
        <div className="grid gap-8">
          <Banner
            href={`/catalogo/${gender}/tenis`}
            src={
              gender === 'masculino'
                ? '/images/products/tenis/JA3-WEB.webp'
                : '/images/products/tenis/air-max-tn-sunset.webp'
            }
            alt="Banner Tênis"
            fit="cover"
            ctaPosition="left"
          />

          <Banner
            href={`/catalogo/${gender}/roupas`}
            src="/images/products/roupas/SYNA-WORLD-MINIMAL.webp"
            alt="Banner Roupas"
            fit="contain"
            ctaPosition="center"
          />
        </div>
      </div>
    </main>
  )
}
