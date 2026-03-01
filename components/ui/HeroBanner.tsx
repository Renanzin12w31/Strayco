'use client'

import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="w-full bg-black flex justify-center">
      
      {/* Container apenas para centralizar */}
      <div className="relative w-full max-w-[1800px]">

        <Image
          src="/images/products/Banner.webp"
          alt="Strayco Banner"
          width={1800}
          height={800}
          priority
          sizes="100vw"
          className="
            w-full
            h-auto
            object-contain
            select-none
          "
        />

      </div>
    </section>
  )
}
