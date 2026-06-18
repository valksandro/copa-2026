'use client'

import { facts, mascotInfo } from '@/lib/worldcup-data'
import { RevealOnScroll } from '@/components/effects/Visual'

export function FactsSection() {
  return (
    <section id="curiosidades" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-purple-400">✨</span>
              <span className="text-xs uppercase tracking-widest text-purple-300 font-bold">Curiosidades</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="text-gradient-purple">Tudo sobre</span>
              <span className="text-foreground"> o Mundial 2026</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fatos incríveis, números recordes e informações oficiais da maior Copa do Mundo da história.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid de fatos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {facts.map((f, i) => (
            <RevealOnScroll key={f.title} delay={i * 80}>
              <div className="glass rounded-2xl p-5 card-hover border-glow h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-amber-500/5" />
                <div className="relative">
                  <div className="text-5xl mb-3 animate-bounce-subtle" style={{ animationDelay: `${i * 0.2}s` }}>{f.icon}</div>
                  <h3 className="font-black text-lg mb-2 text-amber-300">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.text}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Mascote e bola */}
        <RevealOnScroll delay={100}>
          <div className="glass-strong rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-amber-500/10 to-green-500/10 animate-gradient" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Mascote */}
              <div className="text-center">
                <div className="text-[8rem] mb-4 animate-float">🦊</div>
                <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-3">
                  <span className="text-xs uppercase tracking-widest text-purple-300 font-bold">Mascotes Oficiais</span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-gradient-purple">{mascotInfo.name}</h3>
                <p className="text-sm text-muted-foreground">{mascotInfo.description}</p>
              </div>

              {/* Bola oficial */}
              <div className="text-center">
                <div className="text-[8rem] mb-4 animate-spin-slow">⚽</div>
                <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-3">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Bola Oficial</span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-gradient-gold">{mascotInfo.ball}</h3>
                <p className="text-sm text-muted-foreground">{mascotInfo.ballDescription}</p>
              </div>
            </div>

            {/* Info adicional */}
            <div className="relative mt-8 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl mb-2">🎵</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Música Tema</div>
                <div className="font-bold">{mascotInfo.song}</div>
                <div className="text-xs text-muted-foreground mt-1">{mascotInfo.songDescription}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Formato</div>
                <div className="font-bold">12 grupos de 4</div>
                <div className="text-xs text-muted-foreground mt-1">32 times nas oitavas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Final</div>
                <div className="font-bold">19 de julho de 2026</div>
                <div className="text-xs text-muted-foreground mt-1">MetLife Stadium, Nova York</div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Banner de países sede */}
        <RevealOnScroll delay={150}>
          <div className="mt-8 glass rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-500 to-green-600" />
            </div>
            <div className="relative grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-7xl sm:text-8xl mb-3 animate-flag origin-left inline-block">🇺🇸</div>
                <div className="text-xl font-black text-blue-300">Estados Unidos</div>
                <div className="text-xs text-muted-foreground mt-1">11 estádios • 78 jogos</div>
                <div className="text-[10px] text-muted-foreground mt-1">Inclui a final em Nova York</div>
              </div>
              <div>
                <div className="text-7xl sm:text-8xl mb-3 animate-flag origin-left inline-block" style={{ animationDelay: '0.3s' }}>🇲🇽</div>
                <div className="text-xl font-black text-green-300">México</div>
                <div className="text-xs text-muted-foreground mt-1">3 estádios • 13 jogos</div>
                <div className="text-[10px] text-muted-foreground mt-1">Jogo de abertura no Azteca</div>
              </div>
              <div>
                <div className="text-7xl sm:text-8xl mb-3 animate-flag origin-left inline-block" style={{ animationDelay: '0.6s' }}>🇨🇦</div>
                <div className="text-xl font-black text-red-300">Canadá</div>
                <div className="text-xs text-muted-foreground mt-1">2 estádios • 13 jogos</div>
                <div className="text-[10px] text-muted-foreground mt-1">Toronto e Vancouver</div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative mt-auto py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4 text-4xl">
            <span className="animate-flag origin-left">🇺🇸</span>
            <span className="text-amber-400">•</span>
            <span className="animate-flag origin-left" style={{ animationDelay: '0.3s' }}>🇲🇽</span>
            <span className="text-amber-400">•</span>
            <span className="animate-flag origin-left" style={{ animationDelay: '0.6s' }}>🇨🇦</span>
          </div>
          <div className="text-2xl font-black mb-2">
            <span className="text-gradient-gold">Copa do Mundo 2026</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Site não oficial dedicado ao maior Mundial de Futebol da história. Dados baseados nas informações oficiais divulgadas pela FIFA até a presente data.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a href="#grupos" className="glass px-3 py-1.5 rounded-full text-xs hover:text-amber-300 transition-colors">Grupos</a>
            <a href="#selecoes" className="glass px-3 py-1.5 rounded-full text-xs hover:text-amber-300 transition-colors">Seleções</a>
            <a href="#chaves" className="glass px-3 py-1.5 rounded-full text-xs hover:text-amber-300 transition-colors">Chaves</a>
            <a href="#estadios" className="glass px-3 py-1.5 rounded-full text-xs hover:text-amber-300 transition-colors">Estádios</a>
            <a href="#calendario" className="glass px-3 py-1.5 rounded-full text-xs hover:text-amber-300 transition-colors">Calendário</a>
            <a href="#historia" className="glass px-3 py-1.5 rounded-full text-xs hover:text-amber-300 transition-colors">História</a>
          </div>
          <div className="text-xs text-muted-foreground">
            ⚽ Feito com paixão pelo futebol • 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
