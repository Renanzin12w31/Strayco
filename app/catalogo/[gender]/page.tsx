import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const genderMap = {
  masculino: { title: 'Masculino' },
  feminino: { title: 'Feminino' },
  unisex: { title: 'Unisex' },
} as const

type GenderSlug = keyof typeof genderMap

export default function CatalogoGeneroPage({ params }: { params: { gender: string } }) {
  const gender = params.gender as GenderSlug
  if (!genderMap[gender]) return notFound()

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {genderMap[gender].title}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href={`/catalogo/${gender}/tenis`} className="group">
            <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/products/tenis/air-max-tn-sunset.webp"
                alt="Sneakers"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white">Sneakers</h2>
                <p className="text-gray-300">Explorar tênis exclusivos</p>
              </div>
            </div>
          </Link>

          <Link href={`/catalogo/${gender}/roupas`} className="group">
            <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/products/roupas/denim-jacket-washed-black/imagem.webp"
                alt="Streetwear"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white">Streetwear</h2>
                <p className="text-gray-300">Explorar vestuário e acessórios</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
