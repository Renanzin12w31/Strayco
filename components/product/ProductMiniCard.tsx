'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

interface ProductMiniCardProps {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductMiniCard({ id, name, price, image }: ProductMiniCardProps) {
  return (
    <Link
      href={`/produto/${id}`}
      className="group block rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-lg transition"
    >
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 70vw, (max-width: 1200px) 25vw, 220px"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-4 py-3">
        <div className="text-[12px] font-medium text-black/80 line-clamp-2">{name}</div>
        <div className="mt-2 text-[13px] font-semibold text-black">{formatPrice(price)}</div>
      </div>
    </Link>
  )
}
