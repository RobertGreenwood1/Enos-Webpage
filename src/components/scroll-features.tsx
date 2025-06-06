"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Handshake, TrendingUp, BarChart3 } from "lucide-react"

interface FeatureState {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  videoPlaceholder: string
  stats: {
    number: string
    description: string
  }
}

const features: FeatureState[] = [
  {
    id: "customer-management",
    title: "Customer Management",
    description: "Centralize all customer data and interactions in one powerful platform. Track every touchpoint, manage relationships, and deliver personalized experiences that drive loyalty.",
    icon: <Users className="h-8 w-8" />,
    videoPlaceholder: "customer-management-demo.mp4",
    stats: {
      number: "85%",
      description: "improvement in customer satisfaction scores"
    }
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    description: "Break down silos and unite your teams around customer success. Share insights, coordinate efforts, and ensure everyone has the context they need to deliver excellence.",
    icon: <Handshake className="h-8 w-8" />,
    videoPlaceholder: "team-collaboration-demo.mp4",
    stats: {
      number: "92%",
      description: "faster response times with unified workflows"
    }
  },
  {
    id: "pipeline-tracking",
    title: "Pipeline Tracking",
    description: "Visualize your entire sales pipeline with real-time updates and predictive insights. Track deals, forecast revenue, and identify opportunities at every stage.",
    icon: <TrendingUp className="h-8 w-8" />,
    videoPlaceholder: "pipeline-tracking-demo.mp4",
    stats: {
      number: "47%",
      description: "increase in sales velocity with smart tracking"
    }
  },
  {
    id: "performance-reports",
    title: "Performance Reports",
    description: "Transform data into actionable insights with comprehensive analytics and beautiful reports. Monitor KPIs, track trends, and make data-driven decisions that fuel growth.",
    icon: <BarChart3 className="h-8 w-8" />,
    videoPlaceholder: "performance-reports-demo.mp4",
    stats: {
      number: "73%",
      description: "better decision-making with real-time analytics"
    }
  }
]

export function ScrollFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    // Don't run scroll animation on mobile
    if (isMobile) return
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate when section should be pinned
      const startPin = rect.top <= 0
      const endPin = rect.bottom <= windowHeight

      if (startPin && !endPin) {
        // Section is pinned - calculate scroll progress through the section
        const totalScrollDistance = sectionHeight - windowHeight
        const currentScroll = Math.abs(rect.top)
        const progress = Math.min(currentScroll / totalScrollDistance, 1)

        setScrollProgress(progress)

        // Calculate which feature should be active based on scroll progress
        const featureIndex = Math.min(
          Math.floor(progress * features.length),
          features.length - 1
        )
        setActiveFeature(featureIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const currentFeature = features[activeFeature]

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: '400vh' }} // 4x viewport height to allow for scroll
    >
      {/* Sticky content container */}
      <div
        ref={contentRef}
        className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Feature indicator */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-3 text-sm font-medium text-gray-600">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 transition-all duration-500">
                    {currentFeature.icon}
                  </div>
                  <span className="uppercase tracking-wider">{currentFeature.id.replace('-', ' ')}</span>
                </div>
              </div>

              {/* Main content with smooth transitions */}
              <div className="space-y-6">
                <h2
                  key={`title-${activeFeature}`}
                  className="text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-700 transform"
                >
                  {currentFeature.title}
                </h2>

                <p
                  key={`desc-${activeFeature}`}
                  className="text-xl text-gray-600 leading-relaxed transition-all duration-700 transform"
                >
                  {currentFeature.description}
                </p>

                {/* Stats */}
                <div
                  key={`stats-${activeFeature}`}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-700 transform"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {currentFeature.stats.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentFeature.stats.description}
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex space-x-2">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeFeature
                        ? 'bg-purple-600 w-12'
                        : 'bg-gray-300 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Video/Demo */}
            <div className="relative">
              <Card className="relative bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  {/* Video container with smooth transitions */}
                  <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      key={`video-${activeFeature}`}
                      src="placeholder.png"
                      alt={`${currentFeature.title} Demo`}
                      className="w-full h-full object-cover transition-all duration-700 transform"
                      style={{ minHeight: '400px' }}
                    />

                    {/* Video overlay with feature info */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-700">
                      <div className="text-center text-gray-700">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          {currentFeature.icon}
                        </div>
                        <div className="text-lg font-semibold">
                          {currentFeature.title} Demo
                        </div>
                        <div className="text-sm mt-2 opacity-75">
                          Interactive preview
                        </div>
                      </div>
                    </div>

                    {/* Animated play button */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <div className="absolute top-4 left-10 text-xs text-gray-600 font-medium">REC</div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div
                key={`float-${activeFeature}`}
                className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-700 transform hover:scale-110"
              >
                {activeFeature + 1}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-sm text-gray-500 mb-2">Scroll to explore features</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto relative">
            <div
              className="w-1 h-3 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 transition-all duration-700"
              style={{
                transform: `translateX(-50%) translateY(${scrollProgress * 16}px)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
