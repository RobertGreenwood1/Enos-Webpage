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
  const [featureProgress, setFeatureProgress] = useState(0)
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
        
        // Calculate progress within the current feature (0 to 1)
        const progressPerFeature = 1 / features.length
        const currentFeatureStartProgress = featureIndex * progressPerFeature
        const progressWithinFeature = (progress - currentFeatureStartProgress) / progressPerFeature
        setFeatureProgress(Math.max(0, Math.min(1, progressWithinFeature)))
      } else if (!startPin) {
        // Reset to first feature when above the section
        setActiveFeature(0)
        setScrollProgress(0)
        setFeatureProgress(0)
      } else if (endPin) {
        // Keep last feature when below the section
        setActiveFeature(features.length - 1)
        setScrollProgress(1)
        setFeatureProgress(1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const currentFeature = features[activeFeature]
  
  // Calculate video scale and opacity based on feature progress
  const calculateVideoTransform = () => {
    // First video should always be visible at start
    if (activeFeature === 0 && scrollProgress === 0) {
      return { scale: 1, opacity: 1 }
    }
    
    // For the very beginning of each feature (grow in animation)
    // Skip grow animation for first video
    if (activeFeature > 0 && featureProgress < 0.25) {
      // Extend blank state - video stays hidden until 10%
      if (featureProgress < 0.1) {
        return { scale: 0.8, opacity: 0 }
      }
      // Grow from 80% to 100% with overshoot between 10% and 25%
      const growProgress = (featureProgress - 0.1) / 0.15
      
      // Create overshoot effect - grows to 102-103% then settles to 100%
      let scale
      if (growProgress < 0.8) {
        // Growing phase: 80% to 103%
        scale = 0.8 + (growProgress / 0.8) * 0.23
      } else {
        // Settling phase: 103% back to 100%
        const settleProgress = (growProgress - 0.8) / 0.2
        scale = 1.03 - (settleProgress * 0.03)
      }
      
      return { scale, opacity: growProgress }
    }
    
    // For the last video, keep it at full size once it's shown
    if (activeFeature === features.length - 1) {
      return { scale: 1, opacity: 1 }
    }
    
    // Transition starts at 50% progress
    const transitionStart = 0.5
    
    if (featureProgress < transitionStart) {
      // Full size and opacity before transition
      return { scale: 1, opacity: 1 }
    }
    
    // Calculate transition progress (0 to 1) for the last 50%
    const transitionProgress = (featureProgress - transitionStart) / (1 - transitionStart)
    
    // Make the shrinking complete by 80% to have more blank time
    const adjustedProgress = Math.min(transitionProgress / 0.8, 1)
    
    // Scale from 100% to 80%
    const scale = 1 - (adjustedProgress * 0.2)
    
    // Opacity decreases as it scales down
    const opacity = 1 - adjustedProgress
    
    return { scale: opacity > 0 ? scale : 0.8, opacity }
  }
  
  const { scale, opacity } = calculateVideoTransform()

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
                    <span className="uppercase tracking-wider font-sans font-normal">{feature.id.replace('-', ' ')}</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {feature.title}
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    {feature.description}
                  </p>
                </div>

                {/* Video/Demo */}
                <div className="relative h-64 lg:h-80 flex items-center justify-center max-w-3xl mx-auto">
                  <div
                    className="relative"
                    style={{
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                      maskImage: 'radial-gradient(white, black)'
                    }}
                  >
                    <video
                      className="block"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '256px'
                      }}
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={`/videos/${feature.videoPlaceholder}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

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
          <div className="grid lg:grid-cols-2 gap-16 items-center overflow-visible">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Feature indicator */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-3 text-sm font-medium text-gray-600">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 transition-all duration-500">
                    {currentFeature.icon}
                  </div>
                  <span className="uppercase tracking-wider font-sans font-normal">{currentFeature.id.replace('-', ' ')}</span>
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
            <div className="relative overflow-visible">
              {/* Video container with smooth transitions */}
              <div className="relative h-80 lg:h-[400px] flex items-center justify-center overflow-visible">
                {/* Abstract shapes background */}
                <div className="absolute -inset-20 pointer-events-none" style={{ zIndex: -1 }}>
                  <div
                    className="absolute bottom-10 left-20 w-32 h-48 bg-gradient-to-tr from-blue-600/80 to-blue-400/60 shadow-2xl"
                    style={{
                      borderRadius: '67% 33% 70% 30% / 30% 62% 38% 70%',
                      transform: `rotate(${-activeFeature * 30}deg) translateX(${activeFeature * 20}px)`,
                      transition: 'transform 1s ease-out',
                      filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
                      boxShadow: '0 0 60px rgba(59, 130, 246, 0.4), inset 0 0 40px rgba(96, 165, 250, 0.3)'
                    }}
                  />
                  <div
                    className="absolute top-1/3 right-10 w-56 h-56 bg-gradient-to-bl from-blue-400/75 to-blue-500/55 shadow-2xl"
                    style={{
                      borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
                      transform: `rotate(${activeFeature * 60}deg) scale(${1 + activeFeature * 0.2})`,
                      transition: 'transform 1s ease-out',
                      filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.6))',
                      boxShadow: '0 0 80px rgba(59, 130, 246, 0.5), inset 0 0 50px rgba(96, 165, 250, 0.4)'
                    }}
                  />
                </div>
                
                {/* Video with animation */}
                <div
                  className="relative z-10"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'right center',
                    opacity: opacity,
                    transition: 'none',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    maskImage: 'radial-gradient(white, black)'
                  }}
                >
                  <video
                    key={`video-${activeFeature}`}
                    className="block"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '320px'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={`/videos/${currentFeature.videoPlaceholder}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint - hide when scrolling starts */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500"
          style={{ opacity: scrollProgress > 0 ? 0 : 1 }}
        >
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
