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
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-32 left-16 w-80 h-80 bg-blue-50 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-40"></div>
        <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-2xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl flex flex-wrap items-baseline justify-center">
            <span>Where</span>
            <span className="mx-2 relative flex items-baseline" style={{ minHeight: '1.4em', height: '1.4em', overflow: 'hidden' }}>
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

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg group">
              Find Your Plan
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="mt-6 text-lg text-gray-600">
            <strong>Enos is free to try</strong> for as long as you'd like
          </p>
        </div>

        {/* Company Logos */}
        <div className="mt-16">
          <div className="flex justify-center items-center space-x-8 sm:space-x-12 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">GM</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-semibold text-gray-900">OpenAI</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">○</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">▲</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-purple-600">stripe</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-blue-600">IBM</span>
            </div>
          </div>
        </div>

        {/* Product Demo Video */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="relative">
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ minHeight: '400px' }}
                  >
                    <source src="/videos/customer-management-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
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
