'use client'

import { useEffect, useState, useMemo } from 'react'

interface Particle {
  id: number
  left: number
  delay: number
  duration: number
  color: string
  size: number
  emoji?: string
}

const COLORS = ['#f4c430', '#ffd700', '#a855f7', '#22c55e', '#ef4444', '#3b82f6', '#ec4899']
const EMOJIS = ['⚽', '🏆', '🎉', '✨', '⭐']

// Gera partículas (estável para uma dada contagem e seed)
function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 8 + Math.random() * 10,
    emoji: Math.random() > 0.7 ? EMOJIS[Math.floor(Math.random() * EMOJIS.length)] : undefined,
  }))
}

function makeBalls(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 16 + Math.random() * 40,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 4,
  }))
}

function makeStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 1 + Math.random() * 3,
    delay: Math.random() * 3,
  }))
}

// Hook utilitário: só vira true depois do mount no cliente (evita hidratação divergente)
function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])
  return mounted
}

// Confete animado caindo na tela
export function Confetti({ count = 30 }: { count?: number }) {
  const mounted = useMounted()
  const particles = useMemo(() => (mounted ? makeParticles(count) : []), [count, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.emoji ? 'transparent' : p.color,
            width: p.emoji ? 'auto' : `${p.size}px`,
            height: p.emoji ? 'auto' : `${p.size * 1.4}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: p.emoji ? `${p.size + 8}px` : undefined,
            borderRadius: p.emoji ? 0 : 2,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  )
}

// Bolas de futebol flutuando no fundo
export function FloatingFootballs({ count = 12 }: { count?: number }) {
  const mounted = useMounted()
  const balls = useMemo(() => (mounted ? makeBalls(count) : []), [count, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {balls.map((b) => (
        <div
          key={b.id}
          className="absolute animate-float opacity-10"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            fontSize: `${b.size}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        >
          ⚽
        </div>
      ))}
    </div>
  )
}

// Estrelas piscando no fundo
export function StarField({ count = 50 }: { count?: number }) {
  const mounted = useMounted()
  const stars = useMemo(() => (mounted ? makeStars(count) : []), [count, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: '2s',
          }}
        />
      ))}
    </div>
  )
}
