'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative min-h-[62vh] md:min-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black pt-24">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-orange-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <img src="/logo-stray.webp" alt="Stray Company" className="h-24 md:h-32 w-auto" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white font-bold tracking-tight text-4xl md:text-6xl"
        >
          Streetwear &amp; Sneakers
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-gray-300 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto"
        >
          Peças selecionadas com estética noir, entrega rápida e suporte via WhatsApp.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/tenis"
            className="w-full sm:w-auto rounded-xl bg-orange-primary px-6 py-3 text-black font-semibold hover:opacity-90 transition"
          >
            Ver Tênis
          </Link>
          <Link
            href="/promocoes"
            className="w-full sm:w-auto rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
          >
            Ver Promoções
          </Link>
        </motion.div>

        {/* Scroll Indicator (comentado) */}
        {/*
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-600 rounded-full" />
          </motion.div>
        </motion.div>
        */}
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
