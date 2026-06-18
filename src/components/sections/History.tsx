'use client'

import { useState } from 'react'
import { topScorers, champions } from '@/lib/worldcup-data'
import { RevealOnScroll } from '@/components/effects/Visual'

export function HistorySection() {
  const [view, setView] = useState<'scorers' | 'champions'>('scorers')

  // Títulos por país
  const titlesByCountry = champions.reduce((acc, c) => {
    acc[c.country] = (acc[c.country] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sortedTitles = Object.entries(titlesByCountry).sort((a, b) => b[1] - a[1])

  return (
    <section id="historia" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-amber-400">📚</span>
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">História das Copas</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="text-gradient-gold">Lendas</span>
              <span className="text-foreground"> & </span>
              <span className="text-gradient-purple">Campeões</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Reviva a história das Copas do Mundo: os maiores artilheiros de todos os tempos e os países que ergueram a taça nas 22 edições anteriores.
            </p>
          </div>
        </RevealOnScroll>

        {/* Toggle */}
        <RevealOnScroll delay={100}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setView('scorers')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                view === 'scorers'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-background'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              ⚽ Maiores Artilheiros
            </button>
            <button
              onClick={() => setView('champions')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                view === 'champions'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-600 text-background'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              🏆 Campeões
            </button>
          </div>
        </RevealOnScroll>

        {/* Artilheiros */}
        {view === 'scorers' && (
          <RevealOnScroll delay={150}>
            <div className="glass-strong rounded-3xl p-4 sm:p-6">
              <div className="grid grid-cols-12 gap-2 px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold border-b border-white/10 mb-2">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-4">Jogador</div>
                <div className="col-span-3 hidden sm:block">País</div>
                <div className="col-span-2 text-center">Copas</div>
                <div className="col-span-1 text-center hidden sm:block">Anos</div>
                <div className="col-span-1 sm:col-span-1 text-center">⚽ Gols</div>
              </div>
              <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
                {topScorers.map((s) => (
                  <div
                    key={s.rank}
                    className="grid grid-cols-12 gap-2 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors items-center"
                    style={{
                      background: s.rank <= 3 ? 'linear-gradient(90deg, rgba(244,196,48,0.08), transparent)' : undefined,
                    }}
                  >
                    <div className="col-span-1 text-center">
                      <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-black text-xs ${
                        s.rank === 1 ? 'bg-amber-400 text-background' : s.rank === 2 ? 'bg-gray-300 text-background' : s.rank === 3 ? 'bg-orange-400 text-background' : 'glass text-muted-foreground'
                      }`}>
                        {s.rank}
                      </div>
                    </div>
                    <div className="col-span-4 flex items-center gap-2">
                      <span className="text-xl animate-flag origin-left inline-block">{s.flag}</span>
                      <div className="min-w-0">
                        <div className="font-bold text-sm truncate flex items-center gap-1">
                          {s.player}
                          {s.active && <span className="text-[9px] bg-green-500/20 text-green-300 px-1.5 rounded-full font-bold">ATIVO</span>}
                        </div>
                        <div className="text-xs text-muted-foreground sm:hidden">{s.country}</div>
                      </div>
                    </div>
                    <div className="col-span-3 hidden sm:block text-sm text-muted-foreground">{s.country}</div>
                    <div className="col-span-2 text-center text-sm tabular-nums">{s.worldCups}</div>
                    <div className="col-span-1 text-center text-[10px] text-muted-foreground hidden sm:block">{s.years.split('-')[0]}</div>
                    <div className="col-span-1 sm:col-span-1 text-center">
                      <span className="text-lg font-black text-amber-400 tabular-nums">{s.goals}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Campeões */}
        {view === 'champions' && (
          <>
            {/* Ranking de títulos */}
            <RevealOnScroll delay={150}>
              <div className="glass-strong rounded-2xl p-4 mb-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 text-center font-bold">
                  🏆 Ranking de Títulos
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {sortedTitles.map(([country, count]) => {
                    const champ = champions.find((c) => c.country === country)
                    return (
                      <div key={country} className="glass rounded-xl px-4 py-2 flex items-center gap-2">
                        <span className="text-2xl animate-flag origin-left inline-block">{champ?.flag}</span>
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{country}</div>
                          <div className="font-black text-amber-300">
                            {count} {count === 1 ? 'título' : 'títulos'}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </RevealOnScroll>

            {/* Lista de campeões por edição */}
            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[...champions].reverse().map((c, i) => (
                  <div
                    key={c.year}
                    className="glass rounded-xl p-3 card-hover border-glow relative overflow-hidden"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-600" />
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-black text-amber-300">{c.year}</div>
                      <div className="text-3xl animate-flag origin-left inline-block">{c.flag}</div>
                    </div>
                    <div className="text-sm font-black flex items-center gap-1">
                      <span>🏆</span>
                      <span>{c.country}</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1">Sede: {c.host}</div>
                    <div className="mt-2 pt-2 border-t border-white/5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span>🥈</span>
                      <span>{c.flagRunnerUp}</span>
                      <span>{c.runnerUp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </>
        )}
      </div>
    </section>
  )
}
