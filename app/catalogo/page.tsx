import Link from 'next/link'
import Image from 'next/image'

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nosso Catálogo
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha por público e depois selecione a categoria. No Masculino e no Feminino
            também aparecem produtos Unisex.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/catalogo/masculino" className="group">
            <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/catalog/masculino.webp"
                alt="Masculino"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white">Masculino</h2>
                <p className="text-gray-300">MALE + UNISEX</p>
              </div>
            </div>
          </Link>

          <Link href="/catalogo/feminino" className="group">
            <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/catalog/feminino.webp"
                alt="Feminino"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white">Feminino</h2>
                <p className="text-gray-300">FEMALE + UNISEX</p>
              </div>
            </div>
          </Link>

          <Link href="/catalogo/unisex" className="group">
            <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/catalog/unisex.webp"
                alt="Unisex"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white">Unisex</h2>
                <p className="text-gray-300">Somente UNISEX</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
