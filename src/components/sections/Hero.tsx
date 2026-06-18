'use client'

import { Trophy3D } from '@/components/effects/Visual'

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="text-2xl animate-bounce-subtle">⚽</span>
          <span className="text-sm font-bold uppercase tracking-widest text-amber-300">
            11 de junho — 19 de julho de 2026
          </span>
        </div>

        {/* Bandeiras das 3 sedes */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8 text-5xl sm:text-7xl animate-fade-up">
          <span className="animate-flag origin-left" style={{ animationDelay: '0s' }}>🇺🇸</span>
          <span className="text-2xl text-amber-400">•</span>
          <span className="animate-flag origin-left" style={{ animationDelay: '0.3s' }}>🇲🇽</span>
          <span className="text-2xl text-amber-400">•</span>
          <span className="animate-flag origin-left" style={{ animationDelay: '0.6s' }}>🇨🇦</span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 animate-fade-up leading-none" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient-gold glow-text block">COPA DO MUNDO</span>
          <span className="text-gradient-purple block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">2026</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          O maior Mundial da história: <span className="text-amber-400 font-bold">48 seleções</span>,{' '}
          <span className="text-purple-400 font-bold">104 jogos</span>,{' '}
          <span className="text-green-400 font-bold">16 estádios</span> em 3 países.
        </p>
        <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Mergulhe na experiência completa — grupos, chaves, estádios, calendário e tudo sobre o torneio mais aguardado da década.
        </p>

        {/* Troféu */}
        <div className="flex justify-center mb-10 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Trophy3D />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollTo('grupos')}
            className="group glass-strong px-6 py-3 rounded-full font-bold text-amber-300 hover:scale-105 transition-transform border-glow card-hover"
          >
            <span className="inline-flex items-center gap-2">
              <span>🏆</span>
              Ver Grupos
            </span>
          </button>
          <button
            onClick={() => scrollTo('chaves')}
            className="group glass-strong px-6 py-3 rounded-full font-bold text-purple-300 hover:scale-105 transition-transform border-glow card-hover"
          >
            <span className="inline-flex items-center gap-2">
              <span>⚔️</span>
              Chaves do Mata-Mata
            </span>
          </button>
          <button
            onClick={() => scrollTo('calendario')}
            className="group glass-strong px-6 py-3 rounded-full font-bold text-green-300 hover:scale-105 transition-transform border-glow card-hover"
          >
            <span className="inline-flex items-center gap-2">
              <span>📅</span>
              Calendário
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce-subtle">
          <div className="text-amber-400/60 text-sm uppercase tracking-widest mb-2">Role para explorar</div>
          <div className="text-3xl">⌄</div>
        </div>
      </div>
    </section>
  )
}
