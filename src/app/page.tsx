'use client'

import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { GroupsSection } from '@/components/sections/Groups'
import { TeamsSection } from '@/components/sections/Teams'
import { BracketSection } from '@/components/sections/Bracket'
import { StadiumsSection } from '@/components/sections/Stadiums'
import { CalendarSection } from '@/components/sections/Calendar'
import { HistorySection } from '@/components/sections/History'
import { FactsSection, Footer } from '@/components/sections/Facts'
import { FloatingFootballs, StarField } from '@/components/effects/Confetti'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Efeitos de fundo */}
      <StarField count={40} />
      <FloatingFootballs count={10} />

      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        <GroupsSection />
        <TeamsSection />
        <BracketSection />
        <StadiumsSection />
        <CalendarSection />
        <HistorySection />
        <FactsSection />
      </main>

      <Footer />
    </div>
  )
}
