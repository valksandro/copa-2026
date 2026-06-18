'use client'

import { useState } from 'react'
import { knockoutBracket, type KnockoutMatch } from '@/lib/worldcup-data'
import { RevealOnScroll } from '@/components/effects/Visual'

function MatchCard({ match, highlight }: { match: KnockoutMatch; highlight?: boolean }) {
  const isFinal = match.stage === 'Final'
  const isThird = match.stage === '3º Lugar'
  const isSemi = match.stage === 'Semifinal'

  const accentColor = isFinal
    ? 'from-amber-400 to-yellow-600'
    : isThird
    ? 'from-orange-400 to-red-500'
    : isSemi
    ? 'from-purple-400 to-pink-500'
    : 'from-blue-400 to-cyan-500'

  return (
    <div
      className={`glass rounded-xl p-3 card-hover relative overflow-hidden border-glow ${
        highlight ? 'ring-2 ring-amber-400' : ''
      }`}
    >
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accentColor}`} />

      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
          {match.id}
        </span>
        <span className="text-[10px] text-amber-300/80 font-mono">
          {new Date(match.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="text-muted-foreground truncate text-xs">{match.label.split(' vs ')[0]}</span>
          <span className="text-amber-400 font-bold">vs</span>
          <span className="text-muted-foreground truncate text-xs">{match.label.split(' vs ')[1]}</span>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-white/5 text-[10px] text-muted-foreground">
        📍 {match.stadium}, {match.city}
      </div>
    </div>
  )
}

function StageColumn({ title, matches, color }: { title: string; matches: KnockoutMatch[]; color: string }) {
  return (
    <div className="space-y-3">
      <div className="sticky top-0 z-10">
        <div className={`bg-gradient-to-r ${color} rounded-lg py-2 px-3 text-center font-black uppercase tracking-wider text-sm text-background shadow-lg`}>
          {title}
          <div className="text-[10px] font-normal opacity-80">{matches.length} jogos</div>
        </div>
      </div>
      <div className="space-y-3">
        {matches.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
    </div>
  )
}

export function BracketSection() {
  const [selectedStage, setSelectedStage] = useState<'todos' | KnockoutMatch['stage']>('todos')

  const stages: Array<KnockoutMatch['stage']> = ['Rodada de 32', 'Oitavas', 'Quartas', 'Semifinal', '3º Lugar', 'Final']
  const stageColors: Record<string, string> = {
    'Rodada de 32': 'from-emerald-400 to-cyan-500',
    Oitavas: 'from-blue-400 to-cyan-500',
    Quartas: 'from-purple-400 to-pink-500',
    Semifinal: 'from-amber-400 to-orange-500',
    '3º Lugar': 'from-orange-400 to-red-500',
    Final: 'from-yellow-400 to-amber-600',
  }

  return (
    <section id="chaves" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
              <span className="text-purple-400">⚔️</span>
              <span className="text-xs uppercase tracking-widest text-purple-300 font-bold">Mata-Mata</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="text-gradient-purple">As Chaves</span>
              <span className="text-foreground"> da Glória</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              32 times se enfrentam na nova Rodada de 32, seguida de Oitavas, Quartas, Semifinais e a grande decisão no MetLife Stadium, em Nova York, no dia 19 de julho de 2026.
            </p>
          </div>
        </RevealOnScroll>

        {/* Visualização do caminho */}
        <RevealOnScroll delay={100}>
          <div className="glass-strong rounded-3xl p-6 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-purple-500/5 to-green-500/5" />
            <div className="relative grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
              {[
                { stage: 'Rodada 32', count: 16, icon: '🚪', desc: '32 seleções' },
                { stage: 'Oitavas', count: 8, icon: '🥁', desc: '16 seleções' },
                { stage: 'Quartas', count: 4, icon: '🎯', desc: '8 seleções' },
                { stage: 'Semifinal', count: 2, icon: '⭐', desc: '4 seleções' },
                { stage: '3º Lugar', count: 1, icon: '🥉', desc: 'Disputa do bronze' },
                { stage: 'Final', count: 1, icon: '🏆', desc: 'A grande decisão' },
              ].map((s, i) => (
                <div key={s.stage} className="relative">
                  <div className="glass rounded-xl p-3">
                    <div className="text-3xl mb-1">{s.icon}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.stage}</div>
                    <div className="text-2xl font-black text-amber-300">{s.count}</div>
                    <div className="text-[10px] text-muted-foreground">{s.desc}</div>
                  </div>
                  {i < 5 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 text-amber-400/50">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Filtro de fase */}
        <RevealOnScroll delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedStage('todos')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedStage === 'todos'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-background'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              🌐 Todas as fases
            </button>
            {stages.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStage(s)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedStage === s
                    ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-background'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Bracket */}
        {selectedStage === 'todos' ? (
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[1200px] grid grid-cols-6 gap-4">
              <StageColumn title="Rodada 32" matches={knockoutBracket.filter((m) => m.stage === 'Rodada de 32')} color={stageColors['Rodada de 32']} />
              <StageColumn title="Oitavas" matches={knockoutBracket.filter((m) => m.stage === 'Oitavas')} color={stageColors['Oitavas']} />
              <StageColumn title="Quartas" matches={knockoutBracket.filter((m) => m.stage === 'Quartas')} color={stageColors['Quartas']} />
              <StageColumn title="Semifinal" matches={knockoutBracket.filter((m) => m.stage === 'Semifinal')} color={stageColors['Semifinal']} />
              <StageColumn title="3º Lugar" matches={knockoutBracket.filter((m) => m.stage === '3º Lugar')} color={stageColors['3º Lugar']} />
              <StageColumn title="Final" matches={knockoutBracket.filter((m) => m.stage === 'Final')} color={stageColors['Final']} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {knockoutBracket
              .filter((m) => m.stage === selectedStage)
              .map((m, i) => (
                <RevealOnScroll key={m.id} delay={i * 40}>
                  <MatchCard match={m} highlight={m.stage === 'Final'} />
                </RevealOnScroll>
              ))}
          </div>
        )}

        {/* Card especial da final */}
        <RevealOnScroll delay={200}>
          <div className="mt-12 glass-strong rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent" />
            <div className="relative grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-3">
                  <span className="text-amber-400">🏆</span>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">19 de julho de 2026</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black mb-3">
                  <span className="text-gradient-gold">A Grande Final</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  O MetLife Stadium, em Nova Jersey, receberá a finalíssima da Copa do Mundo 2026. Com capacidade para mais de 82 mil torcedores, será o maior palco do futebol mundial naquele dia.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">📍</span>
                    <span className="font-semibold">MetLife Stadium</span>
                    <span className="text-muted-foreground">— Nova York / Nova Jersey</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">👥</span>
                    <span className="font-semibold">82.500 lugares</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">🕐</span>
                    <span className="font-semibold">16:00 (horário local)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-[10rem] sm:text-[14rem] animate-pulse-glow rounded-full p-8 bg-gradient-to-br from-amber-500/20 to-yellow-700/20 border-2 border-amber-400/40 glow-gold">
                  🏆
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
