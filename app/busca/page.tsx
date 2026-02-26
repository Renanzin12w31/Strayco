import { searchProducts } from "@/lib/data"
import ProductCard from "@/components/product/ProductCard"

export default function BuscaPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q ?? ""
  const results = query ? searchProducts(query) : []

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">
            Resultados da busca
          </h1>

          {query && (
            <p className="text-gray-400 mt-2">
              Buscando por:{" "}
              <span className="text-white font-semibold">
                {query}
              </span>{" "}
              — {results.length} resultado(s)
            </p>
          )}
        </div>

        {results.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">
              Nenhum produto encontrado.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                image={product.images[0]}
                featured={product.featured}
                isNew={product.isNew}
                onSale={product.onSale}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}