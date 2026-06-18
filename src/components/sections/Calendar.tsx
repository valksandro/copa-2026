'use client'

import { useState, useMemo } from 'react'
import { groupMatches, teams, type Match } from '@/lib/worldcup-data'
import { RevealOnScroll } from '@/components/effects/Visual'

function getTeam(name: string) {
  return teams.find((t) => t.name === name)
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })
}

function formatWeekday(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('pt-BR', { weekday: 'long' })
}

function MatchCard({ match }: { match: Match }) {
  const home = getTeam(match.home)
  const away = getTeam(match.away)

  return (
    <div className="glass rounded-xl p-3 card-hover border-glow relative overflow-hidden">
      {/* Barra de cor do grupo */}
      {match.group && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-purple-400 to-green-400" />
      )}

      <div className="flex items-center justify-between mb-2 text-[10px]">
        <span className="font-bold uppercase tracking-wider text-amber-300/80">{match.id}</span>
        <span className="text-muted-foreground">{formatWeekday(match.date)}</span>
      </div>

      <div className="grid grid-cols-7 items-center gap-2">
        {/* Time casa */}
        <div className="col-span-3 flex flex-col items-end text-right">
          <div className="text-3xl mb-1 animate-flag origin-left inline-block">{home?.flag || '🏳️'}</div>
          <div className="text-xs font-bold leading-tight">{match.home}</div>
        </div>

        {/* VS */}
        <div className="col-span-1 flex flex-col items-center">
          <div className="text-xs text-muted-foreground">{match.time}</div>
          <div className="text-amber-400 font-black text-lg">VS</div>
          {match.group && (
            <div className="text-[9px] font-bold text-purple-300 mt-0.5">G {match.group}</div>
          )}
        </div>

        {/* Time fora */}
        <div className="col-span-3 flex flex-col items-start text-left">
          <div className="text-3xl mb-1 animate-flag origin-left inline-block">{away?.flag || '🏳️'}</div>
          <div className="text-xs font-bold leading-tight">{match.away}</div>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>📍 {match.stadium}</span>
        <span>{match.city}</span>
      </div>
    </div>
  )
}

export function CalendarSection() {
  const [filter, setFilter] = useState<string>('todos')

  // Agrupa jogos por data
  const byDate = useMemo(() => {
    const grouped: Record<string, Match[]> = {}
    groupMatches.forEach((m) => {
      if (!grouped[m.date]) grouped[m.date] = []
      grouped[m.date].push(m)
    })
    return grouped
  }, [])

  const dates = Object.keys(byDate).sort()
  const filteredDates = filter === 'todos' ? dates : dates.filter((d) => d === filter)

  return (
    <section id="calendario" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-red-400">📅</span>
              <span className="text-xs uppercase tracking-widest text-red-300 font-bold">Calendário Completo</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="text-gradient-purple">Fase de Grupos</span>
              <span className="text-foreground"> • 72 Jogos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Todos os 72 jogos da primeira fase, do jogo de abertura em 11 de junho ao encerramento da fase de grupos em 28 de junho. Clique em uma data para ver os confrontos.
            </p>
          </div>
        </RevealOnScroll>

        {/* Estatísticas */}
        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-3xl mx-auto">
            <div className="glass-strong rounded-2xl p-3 text-center">
              <div className="text-2xl mb-1">⚽</div>
              <div className="text-xl font-black text-amber-300">72</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Jogos Fase Grupos</div>
            </div>
            <div className="glass-strong rounded-2xl p-3 text-center">
              <div className="text-2xl mb-1">🗓️</div>
              <div className="text-xl font-black text-purple-300">18</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Dias de Fase Grupos</div>
            </div>
            <div className="glass-strong rounded-2xl p-3 text-center">
              <div className="text-2xl mb-1">🏟️</div>
              <div className="text-xl font-black text-green-300">16</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Estádios</div>
            </div>
            <div className="glass-strong rounded-2xl p-3 text-center">
              <div className="text-2xl mb-1">🌍</div>
              <div className="text-xl font-black text-red-300">3</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Países Sede</div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Seletor de data */}
        <RevealOnScroll delay={150}>
          <div className="mb-8">
            <div className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-3">Filtrar por data</div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-h-32 overflow-y-auto p-2">
              <button
                onClick={() => setFilter('todos')}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all sticky top-0 ${
                  filter === 'todos'
                    ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-background'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                📅 Todas
              </button>
              {dates.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                    filter === d
                      ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-background'
                      : 'glass text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {formatDate(d)}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Jogos por data */}
        <div className="space-y-8">
          {filteredDates.map((date, dateIdx) => (
            <RevealOnScroll key={date} delay={dateIdx * 50}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex flex-col items-center justify-center text-background font-black shadow-lg">
                    <div className="text-lg leading-none">{new Date(date + 'T12:00:00').getDate()}</div>
                    <div className="text-[9px] uppercase">{new Date(date + 'T12:00:00').toLocaleDateString('pt-BR', { month: 'short' })}</div>
                  </div>
                  <div>
                    <div className="text-lg font-black capitalize">{formatWeekday(date)}</div>
                    <div className="text-xs text-muted-foreground">
                      {byDate[date].length} {byDate[date].length === 1 ? 'jogo' : 'jogos'}
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-amber-400/40 to-transparent ml-3" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {byDate[date].map((m) => (
                    <MatchCard key={m.id} match={m} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
