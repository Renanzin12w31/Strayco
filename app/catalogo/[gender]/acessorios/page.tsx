import { notFound } from 'next/navigation'
import { getProductsForCatalogGender } from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'

type Product = {
  id: string
  name: string
  price: number
  images?: string[]
  featured?: boolean
  isNew?: boolean
  onSale?: boolean
  categoryId: string
  gender: 'MALE' | 'FEMALE' | 'UNISEX'
}

type Props = {
  params: {
    gender: string
  }
}

export default function AcessoriosPage({ params }: Props) {
  const genderSlug = (params.gender || '').toLowerCase()

  // ✅ Acessórios só no feminino
  if (genderSlug !== 'feminino') return notFound()

  const genderKey: Product['gender'] = 'FEMALE'

  const products = getProductsForCatalogGender(genderKey).filter(
    (p: Product) => p.categoryId === 'acessorios'
  )

  return (
    <main className="min-h-screen bg-black pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Acessórios
          </h1>
          <p className="text-gray-400">
            Explore nossos acessórios ({products.length} produtos)
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">Nenhum acessório disponível</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: Product) => (
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