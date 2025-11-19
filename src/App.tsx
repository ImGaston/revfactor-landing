
import { Hero } from "@/components/sections/Hero"
import { Problems } from "@/components/sections/Problems"
import { HowWeHelp } from "@/components/sections/HowWeHelp"
import { SocialProof } from "@/components/sections/SocialProof"
import { Process } from "@/components/sections/Process"
import { WhoItsFor } from "@/components/sections/WhoItsFor"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/sections/Footer"
import { Header } from "@/components/Header"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <HowWeHelp />
        <SocialProof />
        <Process />
        <WhoItsFor />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}

export default App
