"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Handshake, TrendingUp, BarChart3, Play } from "lucide-react"

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
    videoPlaceholder: "customer-management-demo.mp4",
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
    videoPlaceholder: "customer-management-demo.mp4",
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
    videoPlaceholder: "customer-management-demo.mp4",
    stats: {
      number: "73%",
      description: "better decision-making with real-time analytics"
    }
  }
]

export function ScrollFeaturesResponsive() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile (increased breakpoint to avoid awkward middle mode)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024)
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
      } else if (!startPin) {
        // Reset to first feature when above the section
        setActiveFeature(0)
        setScrollProgress(0)
      } else if (endPin) {
        // Keep last feature when below the section
        setActiveFeature(features.length - 1)
        setScrollProgress(1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const currentFeature = features[activeFeature]

  // Mobile layout - stacked sections
  if (isMobile) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={feature.id} className="space-y-8">
                {/* Feature content */}
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center space-x-3 text-sm font-medium text-gray-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                    <span className="uppercase tracking-wider">{feature.id.replace('-', ' ')}</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {feature.title}
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    {feature.description}
                  </p>
                </div>

                {/* Video/Demo card */}
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 overflow-hidden max-w-4xl mx-auto">
                  <CardContent className="p-0">
                    <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={`/videos/${feature.videoPlaceholder}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {feature.stats.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {feature.stats.description}
                  </div>
                </div>

                {/* Progress indicator for mobile */}
                {index < features.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-1 h-16 bg-gradient-to-b from-blue-300 to-transparent rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop layout - pinned scroll animation
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
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Feature indicator */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-3 text-sm font-medium text-gray-600">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 transition-all duration-500">
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">
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
                        ? 'bg-blue-600 w-12'
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
                    <video
                      key={`video-${activeFeature}`}
                      className="w-full h-full object-cover transition-all duration-700 transform"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={`/videos/${currentFeature.videoPlaceholder}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div
                key={`float-${activeFeature}`}
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-700 transform hover:scale-110"
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
