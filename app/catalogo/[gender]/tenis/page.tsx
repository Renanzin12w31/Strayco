import { getProductsForCatalogGender } from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'
import { notFound } from 'next/navigation'

const allowed = new Set(['masculino', 'feminino', 'unisex'])

export default function TenisGeneroPage({ params }: { params: { gender: string } }) {
  if (!allowed.has(params.gender)) return notFound()

  const genderKey =
    params.gender === 'masculino' ? 'MALE' :
    params.gender === 'feminino' ? 'FEMALE' : 'UNISEX'

  const products = getProductsForCatalogGender(genderKey).filter(p => p.categoryId === 'tenis')

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Sneakers
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              salePrice={p.salePrice}
              image={p.images?.[0]}
              featured={p.featured}
              isNew={p.isNew}
              onSale={p.onSale}
            />
          ))}
        </div>
      </div>
    </main>
  )
}