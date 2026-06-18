'use client'

import { useState, useMemo } from 'react'
import { teams, type Team } from '@/lib/worldcup-data'
import { RevealOnScroll } from '@/components/effects/Visual'

function TeamCard({ team }: { team: Team }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="glass rounded-2xl p-4 card-hover border-glow relative overflow-hidden h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${team.color}30, ${team.color2}20, transparent)`
          : undefined,
      }}
    >
      {/* Borda colorida */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(90deg, ${team.color}, ${team.color2})` }}
      />

      {/* Cabeçalho: bandeira + título */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-6xl mb-1 animate-flag origin-left inline-block" style={{ animationDelay: `${team.fifaRanking * 0.05}s` }}>
            {team.flag}
          </div>
          <div className="font-black text-lg leading-tight">{team.name}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">{team.code} • Grupo {team.group}</div>
        </div>
        {team.titles > 0 && (
          <div className="flex flex-col items-end gap-1">
            <div className="text-2xl">🏆</div>
            <div className="text-xs font-bold text-amber-400">x{team.titles}</div>
          </div>
        )}
      </div>

      {/* Estrelas de força */}
      <div className="text-lg mb-3" title="Nível da seleção">
        {team.starPower}
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="glass rounded-lg px-2 py-1.5">
          <div className="text-muted-foreground uppercase tracking-wider text-[10px]">FIFA Ranking</div>
          <div className="font-bold text-amber-300">#{team.fifaRanking}</div>
        </div>
        <div className="glass rounded-lg px-2 py-1.5">
          <div className="text-muted-foreground uppercase tracking-wider text-[10px]">Confederação</div>
          <div className="font-bold text-purple-300">{team.federation}</div>
        </div>
      </div>

      {/* Barra de força */}
      <div className="mt-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
          <span>Força do elenco</span>
          <span className="font-bold text-amber-300">{team.strength}/100</span>
        </div>
        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: hovered ? `${team.strength}%` : `${team.strength * 0.85}%`,
              background: `linear-gradient(90deg, ${team.color}, ${team.color2})`,
            }}
          />
        </div>
      </div>

      {/* Técnico e craque */}
      <div className="mt-3 space-y-1.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">👔</span>
          <span className="text-muted-foreground">Técnico:</span>
          <span className="font-semibold truncate">{team.coach}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">⭐</span>
          <span className="text-muted-foreground">Craque:</span>
          <span className="font-semibold truncate">{team.starPlayer}</span>
        </div>
      </div>
    </div>
  )
}

export function TeamsSection() {
  const [filter, setFilter] = useState<'todos' | Team['federation']>('todos')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return teams
      .filter((t) => filter === 'todos' || t.federation === filter)
      .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()) || t.code.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => b.strength - a.strength)
  }, [filter, search])

  const federations: Array<'todos' | Team['federation']> = ['todos', 'CONMEBOL', 'UEFA', 'CONCACAF', 'CAF', 'AFC', 'OFC']

  return (
    <section id="selecoes" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-purple-400">🌍</span>
              <span className="text-xs uppercase tracking-widest text-purple-300 font-bold">Seleções Classificadas</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="text-gradient-purple">As 48 Seleções</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça todas as seleções classificadas para o Mundial 2026. Bandeiras, técnicos, craques e estatísticas de cada país.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filtros */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {federations.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    filter === f
                      ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-background'
                      : 'glass text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {f === 'todos' ? '🌐 Todas' : f}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar seleção..."
              className="glass px-4 py-2 rounded-full text-sm w-full sm:w-64 outline-none focus:ring-2 ring-amber-400/50"
            />
          </div>
        </RevealOnScroll>

        {/* Contagem de resultados */}
        <div className="text-center mb-6 text-sm text-muted-foreground">
          Mostrando <span className="text-amber-400 font-bold">{filtered.length}</span> seleções
        </div>

        {/* Grid de times */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((t, i) => (
            <RevealOnScroll key={t.code} delay={(i % 8) * 50}>
              <TeamCard team={t} />
            </RevealOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <div className="text-6xl mb-4">🔍</div>
            Nenhuma seleção encontrada com esses filtros.
          </div>
        )}
      </div>
    </section>
  )
}
