"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const animatedPhrases = [
  "Customer Success",
  "Business Growth", 
  "Sales Excellence",
  "Team Collaboration",
  "Smart Analytics",
  "Revenue Growth",
  "Client Relations",
  "Data Insights"
]

export function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % animatedPhrases.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center pt-12 sm:pt-16">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl flex flex-wrap items-baseline justify-center">
            <span>Where</span>
            <span className="mx-2 relative flex items-baseline" style={{ minHeight: '1.1em', height: '1.1em', overflow: 'hidden' }}>
              <span 
                key={currentPhraseIndex}
                className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent animate-slideInUp whitespace-nowrap w-full flex items-center justify-center"
                style={{ lineHeight: '1.2' }}
              >
                {animatedPhrases[currentPhraseIndex]}
              </span>
            </span>
            <span>Happens</span>
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
            Transform your customer relationships with intelligent CRM.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl font-sans font-normal">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 text-xl group font-sans font-normal">
              Find Your Plan
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>

        {/* Product Demo Video */}
        <div className="mt-16 sm:mt-20">
          <div className="relative mx-auto max-w-4xl">
            <div className="relative">
              <div className="rounded-xl bg-white p-4 shadow-lg">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ minHeight: '300px' }}
                  >
                    <source src="/videos/customer-management-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-12">
          <p className="text-center text-gray-700 font-semibold mb-4 font-sans">Proudly Partnered with</p>
          <div className="flex justify-center items-center">
            <img 
              src="/download.png" 
              alt="The Roux Institute at Northeastern University"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            transform: translateY(0%);
            opacity: 1;
          }
          90% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 3s ease-in-out;
        }
      `}</style>
    </section>
  )
}
