'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="text-9xl mb-6 animate-bounce-subtle">⚽</div>
        <h1 className="text-7xl sm:text-9xl font-black mb-4">
          <span className="text-gradient-gold glow-text">404</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-black mb-4">
          <span className="text-gradient-purple">Bola fora!</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Esta página saiu pela linha de fundo. Volte para o jogo e continue navegando pela Copa do Mundo 2026.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full font-bold text-amber-300 hover:scale-105 transition-transform border-glow card-hover"
        >
          <span>🏠</span>
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
