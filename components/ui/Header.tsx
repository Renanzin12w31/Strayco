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
        <Link href={href} className="hover:text-gray-300 transition">
          {label}
        </Link>

        <button
          type="button"
          className="text-white/80 hover:text-white transition"
          aria-label={`Abrir opções de ${label}`}
        >
          <Chevron open={false} />
        </button>
      </div>

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
  onNavigate,
}: {
  label: string
  href: string
  items: { label: string; href: string }[]
  open: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <Link
          href={href}
          onClick={onNavigate}
          className="text-white hover:text-gray-300 transition"
        >
          {label}
        </Link>

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
              onClick={onNavigate}
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

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 4a6 6 0 1 1 0 12A6 6 0 0 1 10 4m0-2a8 8 0 1 0 4.9 14.3l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0 0 10 2"
      />
    </svg>
  )
}

function IconCart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M6.2 6l.9 4.5c.1.9.9 1.5 1.8 1.5h7.7c.8 0 1.5-.5 1.8-1.3l1.6-4.7H6.2ZM5 4h17v2h-1.1l-2 6.1c-.5 1.5-1.9 2.5-3.5 2.5H8.9c-1.8 0-3.3-1.3-3.6-3.1L4.1 6H2V4h3Z"
      />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openTenis, setOpenTenis] = useState(false)
  const [openRoupas, setOpenRoupas] = useState(false)

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenTenis(false)
    setOpenRoupas(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* ESQUERDA: LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-stray.webp"
            alt="Strayco"
            width={150}
            height={44}
            priority
            className="object-contain"
          />
        </Link>

        {/* CENTRO: MENU */}
        <nav className="hidden md:flex items-center justify-center gap-10 text-sm text-white">
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

        {/* DIREITA: AÇÕES (LUPA + CARRINHO) */}
        <div className="hidden md:flex items-center justify-end gap-3 text-white">
          <Link
            href="/buscar"
            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Buscar"
          >
            <IconSearch />
          </Link>

          <Link
            href="/carrinho"
            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Carrinho"
          >
            <IconCart />
          </Link>
        </div>

        {/* MOBILE: botão menu */}
        <button
          type="button"
          className="md:hidden justify-self-end text-white px-3 py-2 border border-white/10 rounded-xl bg-white/5"
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
            {/* ações mobile */}
            <div className="flex gap-3">
              <Link
                href="/buscar"
                onClick={closeMobile}
                className="flex-1 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white flex items-center justify-center gap-2"
              >
                <IconSearch /> Buscar
              </Link>

              <Link
                href="/carrinho"
                onClick={closeMobile}
                className="flex-1 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white flex items-center justify-center gap-2"
              >
                <IconCart /> Carrinho
              </Link>
            </div>

            <MobileDropdown
              label="Tênis"
              href="/tenis"
              open={openTenis}
              onToggle={() => setOpenTenis((v) => !v)}
              onNavigate={closeMobile}
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
              onNavigate={closeMobile}
              items={[
                { label: 'Masculino', href: '/roupas/masculino' },
                { label: 'Feminino', href: '/roupas/feminino' },
              ]}
            />

            <Link href="/acessorios" onClick={closeMobile} className="text-white hover:text-gray-300 transition">
              Acessórios
            </Link>

            <Link href="/promocoes" onClick={closeMobile} className="text-white hover:text-gray-300 transition">
              Promoções
            </Link>

            <Link href="/trocas-e-devolucoes" onClick={closeMobile} className="text-white hover:text-gray-300 transition">
              Trocas e Devoluções
            </Link>

            <Link href="/duvidas-frequentes" onClick={closeMobile} className="text-white hover:text-gray-300 transition">
              Dúvidas Frequentes
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
