import HeroBanner from '@/components/ui/HeroBanner'
import LazyProductCarousel from '@/components/product/LazyProductCarousel'

import {
  getNewProducts,
  getFeaturedProducts,
  getEssentialProducts,
  getSaleProducts,
  type Product,
} from '@/lib/data'

export default function HomePage() {
  // grupos de produtos
  const newProducts = getNewProducts(8)
  const bestSellers = getFeaturedProducts(8)
  const essentials = getEssentialProducts(8)
  const onSale = getSaleProducts(8)

  // transforma produtos para o carrossel
  const transformProducts = (products: Product[]) =>
    products.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.images?.[0] || '/placeholder.jpg',
      featured: p.featured,
      isNew: p.isNew,
      onSale: p.onSale,
    }))

  return (
    <>
      <HeroBanner />

      <div className="bg-black">
        {/* Lançamentos */}
        {newProducts.length > 0 && (
          <LazyProductCarousel
            title="Lançamentos"
            products={transformProducts(newProducts)}
          />
        )}

        {/* Mais vendidos */}
        {bestSellers.length > 0 && (
          <LazyProductCarousel
            title="Mais Vendidos"
            products={transformProducts(bestSellers)}
          />
        )}

        {/* Essenciais */}
        {essentials.length > 0 && (
          <LazyProductCarousel
            title="Essenciais"
            products={transformProducts(essentials)}
          />
        )}

        {/* Promoções */}
        {onSale.length > 0 && (
          <LazyProductCarousel
            title="Promoções"
            products={transformProducts(onSale)}
          />
        )}
      </div>
    </>
  )
}
