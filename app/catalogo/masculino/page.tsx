import Link from 'next/link'
import Image from 'next/image'

export default function MasculinoPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HERO JA3 */}
        <section className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10">

          {/* IMAGEM */}
          <Image
            src="/images/products/tenis/JA3-WEB.webp"
            alt="Nike Ja 3"
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY ESCURO */}
          <div className="absolute inset-0 bg-black/50" />

          {/* TEXTO */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              CONTROLE <br /> O RITMO.
            </h1>

            <p className="text-gray-300 mt-4 text-lg">
              Velocidade criada para decidir.
            </p>

            {/* BOTÕES */}
            <div className="flex gap-4 mt-8">
              <Link
                href="/produto/14"
                className="px-7 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition"
              >
                Comprar Ja 3
              </Link>

              <Link
                href="/tenis/masculino"
                className="px-7 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
              >
                Ver Tênis
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
