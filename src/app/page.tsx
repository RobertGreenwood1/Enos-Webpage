import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ScrollFeaturesResponsive } from "@/components/scroll-features-responsive"
import { Agentforce } from "@/components/agentforce"
import { Statistics } from "@/components/statistics"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ScrollFeaturesResponsive />
        <Agentforce />
        <Statistics />
      </main>
      <Footer />
    </div>
  )
}
