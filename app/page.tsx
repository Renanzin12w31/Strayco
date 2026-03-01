import HeroBanner from '@/components/ui/HeroBanner'
import TrustBar from '@/components/ui/TrustBar'
import LazyProductCarousel from '@/components/product/LazyProductCarousel'

import {
  getNewProducts,
  getFeaturedProducts,
  getEssentialProducts,
  getSaleProducts,
  type Product,
} from '@/lib/data'

export default function HomePage() {
  const newProducts = getNewProducts(8)
  const bestSellers = getFeaturedProducts(8)
  const essentials = getEssentialProducts(8)
  const onSale = getSaleProducts(8)

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
        {newProducts.length > 0 && (
          <LazyProductCarousel title="Lançamentos" products={transformProducts(newProducts)} />
        )}

        {bestSellers.length > 0 && (
          <LazyProductCarousel title="Mais Vendidos" products={transformProducts(bestSellers)} />
        )}

        {essentials.length > 0 && (
          <LazyProductCarousel title="Essenciais" products={transformProducts(essentials)} />
        )}

        {onSale.length > 0 && (
          <LazyProductCarousel title="Promoções" products={transformProducts(onSale)} />
        )}

        {/* Benefícios (movido para não “quebrar” a divisão entre Hero e Lançamentos) */}
        <div className="pt-6 pb-10">
          <TrustBar />
        </div>
      </div>
    </>
  )
}
