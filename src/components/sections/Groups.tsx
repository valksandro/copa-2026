'use client'

import { useState } from 'react'
import { teams, groups, type Team } from '@/lib/worldcup-data'
import { RevealOnScroll } from '@/components/effects/Visual'

function federationColor(fed: Team['federation']): string {
  const map: Record<string, string> = {
    CONMEBOL: 'text-yellow-400',
    UEFA: 'text-blue-400',
    CONCACAF: 'text-red-400',
    CAF: 'text-green-400',
    AFC: 'text-pink-400',
    OFC: 'text-cyan-400',
  }
  return map[fed] || 'text-muted-foreground'
}

function TeamRow({ team, rank }: { team: Team; rank: number }) {
  // Pontuação simulada com base na força (não é resultado real)
  const points = rank === 1 ? 7 : rank === 2 ? 5 : rank === 3 ? 3 : 1
  const wins = Math.floor(points / 3)
  const draws = points - wins * 3
  const losses = 3 - wins - draws
  const goalsFor = wins * 2 + draws
  const goalsAgainst = losses * 2 + 1
  const goalDiff = goalsFor - goalsAgainst

  return (
    <div
      className="grid grid-cols-12 items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
      style={{ borderLeft: `3px solid ${team.color}` }}
    >
      <div className="col-span-1 font-bold text-center text-muted-foreground">{rank}</div>
      <div className="col-span-5 sm:col-span-4 flex items-center gap-2 min-w-0">
        <span className="text-xl animate-flag origin-left inline-block">{team.flag}</span>
        <span className="font-semibold truncate">{team.name}</span>
      </div>
      <div className="hidden sm:flex col-span-1 text-center text-xs text-muted-foreground">{team.fifaRanking}º</div>
      <div className="col-span-1 text-center tabular-nums">{wins}</div>
      <div className="col-span-1 text-center tabular-nums">{draws}</div>
      <div className="col-span-1 text-center tabular-nums">{losses}</div>
      <div className="hidden sm:block col-span-1 text-center tabular-nums text-xs">{goalsFor}:{goalsAgainst}</div>
      <div className="col-span-1 text-center tabular-nums font-semibold">{goalDiff > 0 ? `+${goalDiff}` : goalDiff}</div>
      <div className="col-span-1 text-center font-black tabular-nums text-amber-400">{points}</div>
    </div>
  )
}

function GroupCard({ groupName }: { groupName: string }) {
  const groupTeams = teams.filter((t) => t.group === groupName).sort((a, b) => b.strength - a.strength)

  return (
    <div className="glass rounded-2xl p-4 card-hover border-glow h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-black text-lg text-background shadow-lg">
            {groupName}
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Grupo</div>
            <div className="text-sm font-bold">{groupName === 'A' ? 'Abertura' : groupName === 'L' ? 'Encerramento' : 'Fase Inicial'}</div>
          </div>
        </div>
        <span className="text-2xl">⚽</span>
      </div>

      {/* Header da tabela */}
      <div className="grid grid-cols-12 gap-2 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold border-b border-white/5 mb-1">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-5 sm:col-span-4">Seleção</div>
        <div className="hidden sm:flex col-span-1 text-center">FIFA</div>
        <div className="col-span-1 text-center">V</div>
        <div className="col-span-1 text-center">E</div>
        <div className="col-span-1 text-center">D</div>
        <div className="hidden sm:block col-span-1 text-center">GP:GC</div>
        <div className="col-span-1 text-center">SG</div>
        <div className="col-span-1 text-center">Pts</div>
      </div>

      {/* Times */}
      <div className="space-y-0.5">
        {groupTeams.map((t, i) => (
          <TeamRow key={t.code} team={t} rank={i + 1} />
        ))}
      </div>

      {/* Classificação visual */}
      <div className="mt-3 pt-3 border-t border-white/5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span>Classificados</span>
          <span className="w-2 h-2 rounded-full bg-amber-400 ml-2" />
          <span>Repescagem</span>
        </div>
      </div>
    </div>
  )
}

export function GroupsSection() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <section id="grupos" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-amber-400">🏆</span>
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Fase de Grupos</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="text-gradient-gold">12 Grupos</span>
              <span className="text-foreground"> • 48 Seleções</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pela primeira vez na história, 48 seleções divididas em 12 grupos de 4. Os dois primeiros de cada grupo mais 8 melhores terceiros avançam para as oitavas de final.
            </p>
          </div>
        </RevealOnScroll>

        {/* Legenda das confederações */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs">
            {[
              { label: 'CONMEBOL', color: 'text-yellow-400' },
              { label: 'UEFA', color: 'text-blue-400' },
              { label: 'CONCACAF', color: 'text-red-400' },
              { label: 'CAF', color: 'text-green-400' },
              { label: 'AFC', color: 'text-pink-400' },
              { label: 'OFC', color: 'text-cyan-400' },
            ].map((f) => (
              <div key={f.label} className="glass px-3 py-1.5 rounded-full">
                <span className={`${f.color} font-bold`}>●</span> <span className="text-muted-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid de grupos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <RevealOnScroll key={g} delay={i * 50}>
              <GroupCard groupName={g} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
