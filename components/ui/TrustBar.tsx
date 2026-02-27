'use client'

import { ShieldCheck, Truck, CreditCard, MessageCircle } from 'lucide-react'

const items = [
  {
    icon: Truck,
    title: 'Envio rápido',
    desc: 'Postagem em até 24–48h',
  },
  {
    icon: CreditCard,
    title: 'Pague no cartão',
    desc: 'Checkout simples e seguro',
  },
  {
    icon: ShieldCheck,
    title: 'Compra segura',
    desc: 'Suporte e rastreio',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Atendimento rápido',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-6 mb-2 rounded-2xl border border-white/10 bg-white/5">
          <div className="flex gap-3 overflow-x-auto p-4 no-scrollbar">
            {items.map((it) => {
              const Icon = it.icon
              return (
                <div
                  key={it.title}
                  className="min-w-[220px] flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-orange-primary/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-orange-primary" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{it.title}</p>
                    <p className="text-gray-400 text-xs leading-tight mt-0.5">{it.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}