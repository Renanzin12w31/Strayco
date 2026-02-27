import { getProductsForCatalogGender } from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'

type Props = {
  params: {
    gender: string
  }
}

export default function AcessoriosPage({ params }: Props) {
  const gender = (params.gender || '').toLowerCase()

  const genderKey =
    gender === 'masculino'
      ? 'MALE'
      : gender === 'feminino'
      ? 'FEMALE'
      : 'UNISEX'

  const products = getProductsForCatalogGender(genderKey).filter(
    (p: { categoryId: string }) => p.categoryId === 'acessorios'
  )

  return (
    <main className="min-h-screen bg-black pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href={`/catalogo/${params.gender}`}
          className="text-gray-400 hover:text-white"
        >
          ← Voltar
        </Link>

        <div className="mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Acessórios
          </h1>
          <p className="text-gray-400">Explore nossa coleção ({products.length} produtos)</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">Nenhum produto disponível</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: any) => (
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