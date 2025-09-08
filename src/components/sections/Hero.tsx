import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showLoading, setShowLoading] = useState(true)
  const [videoFailed, setVideoFailed] = useState(false)
  const [connectionSpeed, setConnectionSpeed] = useState<'fast' | 'slow'>('fast')
  const [videoDetected, setVideoDetected] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Detect connection speed
    const detectConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        const effectiveType = connection.effectiveType
        const downlink = connection.downlink
        if (effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g' || downlink < 1.5) {
          setConnectionSpeed('slow')
        }
      }
    }

    // Simulate loading progress
    const simulateProgress = () => {
      let progress = 0
      const interval = setInterval(() => {
        progress += Math.random() * 15
        if (progress >= 100) {
          progress = 100
          clearInterval(interval)
        }
        setLoadingProgress(progress)
      }, 200)
    }

    // Preload the video with more aggressive optimization
    const preloadVideo = () => {
      const quality = connectionSpeed === 'slow' ? 'small' : 'medium'
      const preloadIframe = document.createElement('iframe')
      preloadIframe.src = `https://www.youtube.com/embed/2P0hYcrQluE?autoplay=1&mute=1&loop=1&playlist=2P0hYcrQluE&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&start=0&end=0&quality=${quality}`
      preloadIframe.style.display = 'none'
      preloadIframe.loading = 'eager'
      document.body.appendChild(preloadIframe)
      
      // Clean up preload iframe after main video loads
      setTimeout(() => {
        if (document.body.contains(preloadIframe)) {
          document.body.removeChild(preloadIframe)
        }
      }, 15000) // Increased cleanup time
    }

    // Preload critical resources
    const preloadResources = () => {
      // Preload the video thumbnail/poster
      const img = new Image()
      img.src = 'https://raw.githubusercontent.com/eddiebullock/landing-page-assets/main/WhatsApp%20Image%202025-08-30%20at%2020.53.25.jpeg'
      
      // Preload YouTube player script
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      document.head.appendChild(script)
    }

    // Detect connection speed first
    detectConnectionSpeed()
    
    // Start loading simulation
    simulateProgress()
    
    // Start preloading immediately
    preloadResources()
    preloadVideo()

    // Check if video loads successfully with faster detection
    const checkVideoLoad = () => {
      const iframe = iframeRef.current
      if (iframe) {
        try {
          // Faster detection - check if iframe has loaded content
          if (iframe.contentDocument || iframe.contentWindow) {
            // Wait longer to ensure video is actually playing
            setTimeout(() => {
              setVideoLoaded(true)
              setIsLoading(false)
              // Keep spinner visible longer to ensure video is playing
              setTimeout(() => setShowLoading(false), 2000)
            }, 3000)
          } else {
            // Check dimensions as fallback
            setTimeout(() => {
              if (iframe.offsetWidth > 0 && iframe.offsetHeight > 0) {
                // Wait longer to ensure video is actually playing
                setTimeout(() => {
                  setVideoLoaded(true)
                  setIsLoading(false)
                  setTimeout(() => setShowLoading(false), 2000)
                }, 3000)
              } else {
                setVideoLoaded(false)
                setIsLoading(false)
                setTimeout(() => setShowLoading(false), 1000)
              }
            }, 1000)
          }
        } catch (error) {
          // Cross-origin restrictions - use dimension check
          setTimeout(() => {
            if (iframe.offsetWidth > 0 && iframe.offsetHeight > 0) {
              // Wait longer to ensure video is actually playing
              setTimeout(() => {
                setVideoLoaded(true)
                setIsLoading(false)
                setTimeout(() => setShowLoading(false), 2000)
              }, 3000)
            } else {
              setVideoLoaded(false)
              setIsLoading(false)
              setTimeout(() => setShowLoading(false), 1000)
            }
          }, 1500)
        }
      }
    }

    // More responsive video detection
    const checkVideoPlaying = () => {
      if (videoDetected) return // Stop if already detected
      
      const iframe = iframeRef.current
      if (iframe) {
        // Check if iframe is loaded and has content
        if (iframe.offsetWidth > 0 && iframe.offsetHeight > 0) {
          // Try to detect if video is actually playing by checking for visual content
          try {
            // Check if iframe has loaded content (indicates video is ready)
            if (iframe.contentDocument || iframe.contentWindow) {
              setVideoDetected(true)
              setVideoLoaded(true)
              setIsLoading(false)
              setLoadingProgress(100)
              // Quick fade out once video is detected
              setTimeout(() => setShowLoading(false), 500)
              return true // Video detected, stop further checks
            }
          } catch (error) {
            // Cross-origin restrictions - use dimension check with shorter timeout
            setTimeout(() => {
              setVideoDetected(true)
              setVideoLoaded(true)
              setIsLoading(false)
              setLoadingProgress(100)
              setTimeout(() => setShowLoading(false), 500)
            }, 1000) // Reduced timeout
          }
        }
      }
      return false
    }

    // Check for video failure after reasonable time
    const checkVideoFailure = () => {
      if (!videoDetected && !videoLoaded) {
        // If no video detected after 8 seconds, consider it failed
        setTimeout(() => {
          if (!videoDetected && !videoLoaded) {
            setVideoFailed(true)
            setIsLoading(false)
            setShowLoading(false)
          }
        }, 8000)
      }
    }

    // More frequent but shorter checks - only if not detected yet
    if (!videoDetected) {
      setTimeout(checkVideoPlaying, 500)   // Faster initial check
      setTimeout(checkVideoPlaying, 1000)
      setTimeout(checkVideoPlaying, 1500)  // More frequent checks
      setTimeout(checkVideoPlaying, 2000)
      setTimeout(checkVideoPlaying, 2500)
      setTimeout(checkVideoPlaying, 3000)
      setTimeout(checkVideoPlaying, 4000)
      checkVideoFailure() // Start failure check
    }

    // Use Intersection Observer for smarter loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, start checking
            checkVideoPlaying()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [connectionSpeed])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/2P0hYcrQluE?autoplay=1&mute=1&loop=1&playlist=2P0hYcrQluE&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&start=0&end=0&quality=${connectionSpeed === 'slow' ? 'small' : 'medium'}`}
          className="absolute inset-0 w-full h-full z-10"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="eager"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
        />
        
        {/* Loading Bar */}
        {showLoading && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/20">
            <div className="flex flex-col items-center space-y-6">
              {/* Loading text */}
              <div className="text-white text-xl font-medium">
                Loading video...
              </div>
              
              {/* Progress bar container */}
              <div className="w-80 h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              
              {/* Progress percentage */}
              <div className="text-white text-sm font-medium">
                {Math.round(loadingProgress)}%
              </div>
            </div>
          </div>
        )}
        
        {/* Fallback image - only shows if video actually fails to load */}
        {videoFailed && (
          <img
            src="https://raw.githubusercontent.com/eddiebullock/landing-page-assets/main/WhatsApp%20Image%202025-08-30%20at%2020.53.25.jpeg"
            alt="Cinematic background"
            className="w-full h-full object-cover absolute inset-0 z-5"
            loading="eager"
          />
        )}
        {/* Dimming overlay - applied to both video and fallback */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/70 to-dark-900/90 z-20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in"
          style={{ willChange: 'opacity, transform' }}
        >
          Science, Made Accessible.
        </h1>
        <p 
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          style={{ willChange: 'opacity, transform' }}
        >
          We turn cutting-edge research into stories the world can see.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ willChange: 'opacity, transform' }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ willChange: 'transform, background-color' }}
          >
            Our Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-dark-900 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ willChange: 'transform, background-color, color' }}
          >
            Work With Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        style={{ willChange: 'transform' }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

