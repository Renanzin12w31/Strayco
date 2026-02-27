'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Importa o carrossel (e tudo que ele puxa junto) só quando o usuário
// estiver perto dessa seção na página.
const ProductCarousel = dynamic(() => import('./ProductCarousel'), {
  ssr: false,
  loading: () => <CarouselPlaceholder />,
})

interface Product {
  id: string
  name: string
  price: number
  image: string
  featured?: boolean
  isNew?: boolean
  onSale?: boolean
}

interface LazyProductCarouselProps {
  title: string
  products: Product[]
  /**
   * Quanto antes começar a carregar (antes de aparecer na tela).
   * Ex.: '300px' começa a carregar quando estiver a 300px da viewport.
   */
  rootMargin?: string
}

export default function LazyProductCarousel({
  title,
  products,
  rootMargin = '300px',
}: LazyProductCarouselProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (shouldRender) return
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRender(true)
          io.disconnect()
        }
      },
      { rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [shouldRender, rootMargin])

  return (
    <div ref={ref}>
      {shouldRender ? (
        <ProductCarousel title={title} products={products} />
      ) : (
        <CarouselPlaceholder />
      )}
    </div>
  )
}

function CarouselPlaceholder() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="h-10 w-56 rounded bg-white/10" />
          <div className="hidden md:flex gap-2">
            <div className="h-10 w-10 rounded-full bg-white/10" />
            <div className="h-10 w-10 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="flex gap-6 overflow-hidden pb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex-none w-72">
              <div className="h-96 rounded-2xl bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
