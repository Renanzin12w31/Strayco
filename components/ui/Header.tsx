'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-block transition-transform ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      ▾
    </span>
  )
}

function DesktopDropdown({
  label,
  href,
  items,
}: {
  label: string
  href: string
  items: { label: string; href: string }[]
}) {
  return (
    <div className="relative group">
      <div className="flex items-center gap-2">
        {/* clicar no texto vai para a página com cards */}
        <Link href={href} className="hover:text-gray-300 transition">
          {label}
        </Link>

        {/* setinha abre no hover (desktop) */}
        <button
          type="button"
          className="text-white/80 hover:text-white transition"
          aria-label={`Abrir opções de ${label}`}
        >
          <Chevron open={false} />
        </button>
      </div>

      {/* menu */}
      <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
        <div className="w-44 rounded-xl border border-white/10 bg-black/95 backdrop-blur shadow-lg overflow-hidden">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileDropdown({
  label,
  href,
  items,
  open,
  onToggle,
}: {
  label: string
  href: string
  items: { label: string; href: string }[]
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        {/* clicar no texto vai para a página com cards */}
        <Link href={href} className="text-white hover:text-gray-300 transition">
          {label}
        </Link>

        {/* clicar na setinha abre/fecha */}
        <button
          type="button"
          onClick={onToggle}
          className="px-3 py-2 text-white/80 hover:text-white transition"
          aria-expanded={open}
          aria-label={`Abrir opções de ${label}`}
        >
          <Chevron open={open} />
        </button>
      </div>

      {open && (
        <div className="mt-2 ml-2 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openTenis, setOpenTenis] = useState(false)
  const [openRoupas, setOpenRoupas] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO (imagem) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-stray.webp" // <-- troque aqui se o arquivo tiver outro nome/caminho
            alt="Strayco"
            width={140}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <DesktopDropdown
            label="Tênis"
            href="/tenis"
            items={[
              { label: 'Masculino', href: '/tenis/masculino' },
              { label: 'Feminino', href: '/tenis/feminino' },
            ]}
          />

          <DesktopDropdown
            label="Roupas"
            href="/roupas"
            items={[
              { label: 'Masculino', href: '/roupas/masculino' },
              { label: 'Feminino', href: '/roupas/feminino' },
            ]}
          />

          <Link href="/acessorios" className="hover:text-gray-300 transition">
            Acessórios
          </Link>

          <Link href="/promocoes" className="hover:text-gray-300 transition">
            Promoções
          </Link>

          <Link href="/trocas-e-devolucoes" className="hover:text-gray-300 transition">
            Trocas e Devoluções
          </Link>

          <Link href="/duvidas-frequentes" className="hover:text-gray-300 transition">
            Dúvidas Frequentes
          </Link>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="md:hidden text-white px-3 py-2 border border-white/10 rounded-xl bg-white/5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 text-sm">
            <MobileDropdown
              label="Tênis"
              href="/tenis"
              open={openTenis}
              onToggle={() => setOpenTenis((v) => !v)}
              items={[
                { label: 'Masculino', href: '/tenis/masculino' },
                { label: 'Feminino', href: '/tenis/feminino' },
              ]}
            />

            <MobileDropdown
              label="Roupas"
              href="/roupas"
              open={openRoupas}
              onToggle={() => setOpenRoupas((v) => !v)}
              items={[
                { label: 'Masculino', href: '/roupas/masculino' },
                { label: 'Feminino', href: '/roupas/feminino' },
              ]}
            />

            <Link href="/acessorios" className="text-white hover:text-gray-300 transition">
              Acessórios
            </Link>

            <Link href="/promocoes" className="text-white hover:text-gray-300 transition">
              Promoções
            </Link>

            <Link href="/trocas-e-devolucoes" className="text-white hover:text-gray-300 transition">
              Trocas e Devoluções
            </Link>

            <Link href="/duvidas-frequentes" className="text-white hover:text-gray-300 transition">
              Dúvidas Frequentes
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
