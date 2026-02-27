import { notFound } from 'next/navigation'
import Link from 'next/link'

// 👇 AJUSTE ESTE IMPORT para o caminho real do seu array de produtos
// Exemplo comum: import { products } from '@/data/products'
import { products } from '@/data/products'

type Product = {
  id: string
  name: string
  description: string
  price: number
  categoryId: string
  images: string[]
  gender: 'MALE' | 'FEMALE' | 'UNISEX'
}

export default function AcessoriosPage({ params }: { params: { gender: string } }) {
  const gender = params.gender

  // Você quer acessórios só no feminino
  if (gender !== 'feminino') return notFound()

  const items = (products as Product[]).filter(
    (p) => p.categoryId === 'acessorios' && (p.gender === 'FEMALE' || p.gender === 'UNISEX')
  )

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Acessórios</h1>
          <p className="text-gray-400">Colar e pulseira Van Cleef e outros acessórios</p>
        </div>

        {items.length === 0 ? (
          <div className="text-gray-300">
            Nenhum acessório encontrado. Verifique se os produtos têm:
            <span className="text-white"> categoryId: "acessorios" </span>
            e <span className="text-white"> gender: "FEMALE" ou "UNISEX"</span>.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((p) => (
              <Link
                key={p.id}
                href={`/produto/${p.id}`}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
              >
                <div className="aspect-square bg-black/40">
                  {/* imagem simples sem next/image pra evitar dor de cabeça.
                      se quiser, eu troco pra Image */}
                  <img
                    src={p.images?.[0] || '/images/placeholder.webp'}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-3">
                  <div className="text-white font-semibold text-sm">{p.name}</div>
                  <div className="text-gray-400 text-xs line-clamp-2">{p.description}</div>
                  <div className="text-white mt-2 font-bold">R$ {p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}