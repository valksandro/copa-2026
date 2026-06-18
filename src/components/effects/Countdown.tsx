'use client'

import { useEffect, useState } from 'react'

// Contagem regressiva até 11 de junho de 2026, 21:00 (abertura)
const TARGET_DATE = new Date('2026-06-11T21:00:00-06:00').getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const now = Date.now()
  const diff = Math.max(0, TARGET_DATE - now)
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

// Estado inicial placeholder; será substituído no cliente
const INITIAL: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

export function Countdown({ compact = false }: { compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(INITIAL)
  const [mounted, setMounted] = useState(false)

  // Subscreve ao relógio do navegador (fonte externa). setState ocorre dentro do callback
  // do setInterval e do requestAnimationFrame — ambas são subscrições a fontes externas,
  // não atualizações síncronas no corpo do efeito.
  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft())
    // dispara o primeiro tick no próximo frame para evitar setState síncrono no efeito
    const raf = requestAnimationFrame(() => {
      tick()
      setMounted(true)
    })
    const id = setInterval(tick, 1000)
    return () => {
      cancelAnimationFrame(raf)
      clearInterval(id)
    }
  }, [])

  if (!mounted) {
    return null
  }

  const items = [
    { label: 'Dias', value: timeLeft.days, color: 'from-amber-400 to-orange-500' },
    { label: 'Horas', value: timeLeft.hours, color: 'from-purple-400 to-pink-500' },
    { label: 'Min', value: timeLeft.minutes, color: 'from-green-400 to-emerald-500' },
    { label: 'Seg', value: timeLeft.seconds, color: 'from-red-400 to-rose-500' },
  ]

  if (compact) {
    return (
      <div className="flex items-center gap-2 font-mono text-lg">
        <span className="text-amber-400 font-bold">{timeLeft.days}d</span>
        <span className="text-purple-400 font-bold">{String(timeLeft.hours).padStart(2, '0')}h</span>
        <span className="text-green-400 font-bold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
        <span className="text-red-400 font-bold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl">
      {items.map((item) => (
        <div
          key={item.label}
          className="glass-strong rounded-2xl p-4 sm:p-6 text-center card-hover relative overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />
          <div className="relative">
            <div
              className={`text-3xl sm:text-5xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent tabular-nums`}
            >
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mt-2 font-semibold">
              {item.label}
            </div>
          </div>
          <div className="shimmer absolute inset-0 pointer-events-none" />
        </div>
      ))}
    </div>
  )
}
