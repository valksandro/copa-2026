'use client'

import { useState, useEffect } from 'react'
import { Countdown } from '@/components/effects/Countdown'

const navLinks = [
  { id: 'grupos', label: 'Grupos', icon: '🏆' },
  { id: 'selecoes', label: 'Seleções', icon: '🌍' },
  { id: 'chaves', label: 'Chaves', icon: '⚔️' },
  { id: 'estadios', label: 'Estádios', icon: '🏟️' },
  { id: 'calendario', label: 'Calendário', icon: '📅' },
  { id: 'historia', label: 'História', icon: '📚' },
  { id: 'curiosidades', label: 'Curiosidades', icon: '✨' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Ticker de jogadores/times no topo */}
      <div className="relative bg-gradient-to-r from-amber-500 via-purple-500 to-green-500 text-background py-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-3 text-xs font-bold uppercase tracking-wider">
              <span>⚽ Copa do Mundo 2026</span>
              <span>🏆 48 Seleções</span>
              <span>🏟️ 16 Estádios</span>
              <span>🌍 3 Países Sede</span>
              <span>📅 11 jun — 19 jul 2026</span>
              <span>🔥 104 Jogos</span>
              <span>⭐ Nova Zelândia estreia</span>
              <span>🎉 12 Grupos de 4</span>
              <span>📊 32 times nas oitavas</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar principal */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
              <span className="text-2xl animate-bounce-subtle">⚽</span>
              <span className="font-black text-lg">
                <span className="text-gradient-gold">WC 2026</span>
              </span>
            </button>

            {/* Links desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  <span className="mr-1">{link.icon}</span>
                  {link.label}
                </button>
              ))}
            </div>

            {/* Countdown compacto */}
            <div className="hidden md:block">
              <Countdown compact />
            </div>

            {/* Botão mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden glass p-2 rounded-lg"
              aria-label="Menu"
            >
              <div className="space-y-1">
                <div className={`w-5 h-0.5 bg-amber-300 transition-transform ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-5 h-0.5 bg-amber-300 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
                <div className={`w-5 h-0.5 bg-amber-300 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileOpen && (
          <div className="lg:hidden glass-strong border-t border-white/10 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="glass px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </button>
              ))}
              <div className="col-span-2 glass px-3 py-2 rounded-lg flex justify-center">
                <Countdown compact />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
