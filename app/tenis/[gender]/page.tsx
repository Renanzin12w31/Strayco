import { getProductsForCatalogGender } from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'
import { notFound } from 'next/navigation'

type GenderSlug = 'masculino' | 'feminino'

type Props = {
  params: {
    gender: string
  }
}

export default function TenisGeneroPage({ params }: Props) {
  const gender = (params.gender || '').toLowerCase() as GenderSlug
  if (gender !== 'masculino' && gender !== 'feminino') return notFound()

  const genderKey = gender === 'masculino' ? 'MALE' : 'FEMALE'
  const products = getProductsForCatalogGender(genderKey).filter(
    (p) => p.categoryId === 'tenis'
  )

  return (
    <main className="min-h-screen bg-black pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Tênis {gender === 'masculino' ? 'Masculino' : 'Feminino'}
          </h1>
          <p className="text-gray-400">{products.length} produtos</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">Nenhum produto disponível</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images?.[0] || '/logo-stray.webp'}
                featured={product.featured}
                isNew={product.isNew}
                onSale={product.onSale}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
