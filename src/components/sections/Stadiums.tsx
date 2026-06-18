'use client'

import { useState } from 'react'
import { stadiums, type Stadium } from '@/lib/worldcup-data'
import { RevealOnScroll } from '@/components/effects/Visual'

function StadiumCard({ stadium }: { stadium: Stadium }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="glass rounded-2xl p-5 card-hover border-glow relative overflow-hidden h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Borda colorida superior */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          background:
            stadium.country === 'EUA'
              ? 'linear-gradient(90deg, #3C3B6E, #B22234, #FFFFFF)'
              : stadium.country === 'México'
              ? 'linear-gradient(90deg, #006847, #FFFFFF, #CE1126)'
              : 'linear-gradient(90deg, #FF0000, #FFFFFF, #FF0000)',
        }}
      />

      <div className="flex items-start justify-between mb-3">
        <div className="text-5xl">{stadium.emoji}</div>
        <div className="flex flex-col items-end">
          <div className="text-3xl animate-flag origin-left">{stadium.flag}</div>
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">{stadium.country}</div>
        </div>
      </div>

      <h3 className="text-lg font-black mb-1 leading-tight">{stadium.name}</h3>
      <div className="text-sm text-amber-300 mb-3 flex items-center gap-1">
        <span>📍</span>
        <span>{stadium.city}</span>
      </div>

      <p className="text-xs text-muted-foreground mb-4 min-h-[3rem]">{stadium.description}</p>

      <div className="grid grid-cols-2 gap-2">
        <div className="glass rounded-lg p-2">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Capacidade</div>
          <div className="text-lg font-bold text-amber-300">{stadium.capacity.toLocaleString('pt-BR')}</div>
        </div>
        <div className="glass rounded-lg p-2">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Inaugurado</div>
          <div className="text-lg font-bold text-purple-300">{stadium.yearOpened}</div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-white/5">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Partidas</div>
        <div className="text-xs font-semibold text-green-300">{stadium.matches}</div>
      </div>

      {/* Barra de capacidade */}
      <div className="mt-3">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
          <span>Capacidade relativa</span>
          <span className="font-bold">{Math.round((stadium.capacity / 83000) * 100)}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: hovered ? '100%' : `${(stadium.capacity / 83000) * 100}%`,
              background: stadium.country === 'EUA'
                ? 'linear-gradient(90deg, #3C3B6E, #B22234)'
                : stadium.country === 'México'
                ? 'linear-gradient(90deg, #006847, #CE1126)'
                : 'linear-gradient(90deg, #FF0000, #FFFFFF)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function StadiumsSection() {
  const [filter, setFilter] = useState<'todos' | Stadium['country']>('todos')
  const filters: Array<'todos' | Stadium['country']> = ['todos', 'EUA', 'México', 'Canadá']

  const filtered = stadiums.filter((s) => filter === 'todos' || s.country === filter)

  // Estatísticas
  const totalCapacity = stadiums.reduce((acc, s) => acc + s.capacity, 0)

  return (
    <section id="estadios" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-green-400">🏟️</span>
              <span className="text-xs uppercase tracking-widest text-green-300 font-bold">Palcos do Mundial</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="text-gradient-gold">16 Estádios</span>
              <span className="text-foreground"> • 3 Países</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Do histórico Estádio Azteca, no México, ao moderníssimo MetLife Stadium, nos EUA — descubra os templos do futebol que receberão o Mundial 2026.
            </p>
          </div>
        </RevealOnScroll>

        {/* Estatísticas gerais */}
        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="glass-strong rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">🏟️</div>
              <div className="text-2xl font-black text-amber-300">{stadiums.length}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Estádios</div>
            </div>
            <div className="glass-strong rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">🇺🇸</div>
              <div className="text-2xl font-black text-blue-300">11</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Estádios EUA</div>
            </div>
            <div className="glass-strong rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">🇲🇽</div>
              <div className="text-2xl font-black text-green-300">3</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Estádios México</div>
            </div>
            <div className="glass-strong rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">🇨🇦</div>
              <div className="text-2xl font-black text-red-300">2</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Estádios Canadá</div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="text-center mb-6 text-sm text-muted-foreground">
            Capacidade total: <span className="text-amber-400 font-bold">{totalCapacity.toLocaleString('pt-BR')}</span> lugares
          </div>
        </RevealOnScroll>

        {/* Filtro */}
        <RevealOnScroll delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === f
                    ? 'bg-gradient-to-r from-green-400 to-emerald-600 text-background'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                {f === 'todos' ? '🌐 Todos' : f === 'EUA' ? '🇺🇸 EUA' : f === 'México' ? '🇲🇽 México' : '🇨🇦 Canadá'}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid de estádios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((s, i) => (
            <RevealOnScroll key={s.name} delay={(i % 8) * 50}>
              <StadiumCard stadium={s} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
