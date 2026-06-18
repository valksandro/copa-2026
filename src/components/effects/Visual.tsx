'use client'

import { useEffect, useRef, useState } from 'react'

// Troféu 3D girando em CSS puro
export function Trophy3D() {
  return (
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 perspective-1000" style={{ perspective: '1000px' }}>
      <div className="animate-spin-3d preserve-3d w-full h-full relative">
        {/* Troféu - representação com emoji gigante e brilho */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl sm:text-9xl animate-pulse-glow rounded-full p-6 sm:p-10 bg-gradient-to-br from-amber-500/20 to-yellow-700/20 backdrop-blur-sm border-2 border-amber-400/40 glow-gold">
            🏆
          </div>
        </div>
        {/* Anéis orbitais */}
        <div className="absolute inset-0 border-2 border-amber-400/30 rounded-full animate-spin-slow" />
        <div className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>
      {/* Reflexo no chão */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-amber-400/30 blur-xl rounded-full" />
    </div>
  )
}

// Bandeira animada (ondulando) — componente genérico que aceita children (emoji ou SVG)
export function AnimatedFlag({ children, size = 'text-5xl', delay = 0 }: { children: React.ReactNode; size?: string; delay?: number }) {
  return (
    <div
      className={`${size} inline-block animate-flag origin-left`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

// Bandeira 3D de um país (com emoji e nome)
export function CountryFlag({
  flag,
  name,
  size = 'md',
  showName = true,
  delay = 0,
}: {
  flag: string
  name?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showName?: boolean
  delay?: number
}) {
  const sizes = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl',
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${sizes[size]} animate-flag origin-left inline-block`}
        style={{ animationDelay: `${delay}s` }}
      >
        {flag}
      </div>
      {showName && name && (
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">{name}</span>
      )}
    </div>
  )
}

// Hook: scroll position para efeitos parallax
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return scrollY
}

// Hook: detecta se elemento está visível (intersection observer)
export function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

// Componente que revela conteúdo quando entra na tela
export function RevealOnScroll({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15)

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
