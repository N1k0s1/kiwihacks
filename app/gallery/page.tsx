"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Leaf, ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { galleryItems, getUniqueEvents, type GalleryItem } from "@/data/gallery-items"

// Custom Video Player Component
const VideoPlayer = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

    // Add autoplay when component mounts
    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            console.log("Autoplay prevented:", error);
          });
        }
      }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const duration = videoRef.current.duration
      setCurrentTime(current)
      setProgress((current / duration) * 100)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget
      const rect = progressBar.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * videoRef.current.duration
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        title={title}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="w-full h-1 bg-gray-700 rounded-full mb-2 cursor-pointer" onClick={handleProgressClick}>
          <div className="h-full bg-[#90ee90] rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" onClick={toggleMute}>
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <span className="text-xs text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/20"
            onClick={handleFullscreen}
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const windParticlesRef = useRef<HTMLCanvasElement>(null)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [filterEvent, setFilterEvent] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(true)

  // Get unique events for filter
  const events = getUniqueEvents()

  // Filtered gallery items
  const filteredItems = filterEvent ? galleryItems.filter((item) => item.event === filterEvent) : galleryItems

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Wind particles animation
  useEffect(() => {
    if (!isMounted || !windParticlesRef.current || isMobile) return

    const canvas = windParticlesRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create wind particles
    const particles = []
    const particleCount = 80

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 + 0.2,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.3 + 0.05,
        life: Math.random() * 0.7 + 0.3,
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, index) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(144, 238, 144, ${p.opacity * p.life})`
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY + Math.sin(p.x / 50) * 0.1

        p.life -= 0.002

        if (p.x > canvas.width || p.life <= 0) {
          particles[index] = {
            x: 0,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: Math.random() * 0.5 + 0.2,
            speedY: (Math.random() - 0.5) * 0.1,
            opacity: Math.random() * 0.3 + 0.05,
            life: Math.random() * 0.7 + 0.3,
          }
        }
      })

      requestAnimationFrame(drawParticles)
    }

    const animationId = requestAnimationFrame(drawParticles)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [isMobile, isMounted])

  // Handle modal navigation
  const handlePrevItem = () => {
    if (!selectedItem) return
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id)
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedItem(galleryItems[prevIndex])
  }

  const handleNextItem = () => {
    if (!selectedItem) return
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id)
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setSelectedItem(galleryItems[nextIndex])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return

      if (e.key === "Escape") {
        setSelectedItem(null)
      } else if (e.key === "ArrowLeft") {
        handlePrevItem()
      } else if (e.key === "ArrowRight") {
        handleNextItem()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedItem])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedItem])

  return (
    <div
      className={cn(
        "min-h-screen bg-[#0a1f0a] text-white transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
    >
      {/* Wind particles canvas */}
      <canvas
        ref={windParticlesRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s ease-in-out" }}
      />

      <div className="fixed inset-0 bg-[url('/fern-pattern.svg')] opacity-5 pointer-events-none z-0"></div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1f0a]/80 backdrop-blur-sm border-b border-[#2a5a2a] h-16 md:h-20">
        <div className="container h-full flex items-center justify-between">
          <Link href="/" className="font-bold text-xl md:text-2xl text-[#90ee90] flex items-center">
            <Leaf className="mr-2 h-5 w-5" />
            KiwiHacks
          </Link>
          <Link href="/" className="flex items-center text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container">
          <div className="text-center mb-12">
            <div
              className={cn(
                "transition-all duration-1000 delay-300",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="relative inline-block">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Previous <span className="text-[#90ee90]">Hackathons</span> Gallery
                </h1>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#90ee90] to-transparent"></div>
              </div>
              <p className="text-lg md:text-xl text-[#a0d0a0] max-w-2xl mx-auto mt-6">
                Explore highlights from our past events and get inspired for KiwiHacks 2025
              </p>
            </div>
          </div>

          {/* Filter by event */}
          <div
            className={cn(
              "flex flex-wrap justify-center gap-2 mb-8 transition-all duration-1000 delay-400",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <Button
              variant={filterEvent === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterEvent(null)}
              className={
                filterEvent === null
                  ? "bg-[#2a5a2a] hover:bg-[#3a7a3a]"
                  : "border-[#2a5a2a] text-[#0a2e12] hover:bg-[#90ee90]/10 hover:text-[#90ee90] "
              }
            >
              All Events
            </Button>
            {events.map((event) => (
              <Button
                key={event}
                variant={filterEvent === event ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterEvent(event)}
                className={
                  filterEvent === event
                    ? "bg-[#2a5a2a] hover:bg-[#3a7a3a]"
                    : "border-[#2a5a2a] text-[#0a2e12] hover:bg-[#90ee90]/10 hover:text-[#90ee90] "
                }
              >
                {event}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a2a0a]/50 backdrop-blur-sm border border-[#2a5a2a] rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(144,238,144,0.1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-video">
                  <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-[#2a5a2a]/80 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#90ee90]">{item.title}</h3>
                    <span className="text-xs bg-[#2a5a2a] px-2 py-1 rounded text-white">{item.event}</span>
                  </div>
                  <p className="text-sm text-[#d0ffd0] line-clamp-2">{item.description}</p>
                  <div className="mt-2 text-xs text-[#a0d0a0]">{item.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-[#0a2a0a]/30 rounded-lg border border-[#2a5a2a] mt-8">
              <p className="text-[#d0ffd0]">No gallery items found for the selected filter.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilterEvent(null)}
                className="mt-4 border-[#2a5a2a] text-[#d0ffd0] hover:bg-[#2a5a2a]/20"
              >
                Clear Filter
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Modal for viewing gallery items */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8">
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedItem(null)}
              className="h-10 w-10 rounded-full text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevItem}
              className="h-10 w-10 rounded-full text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextItem}
              className="h-10 w-10 rounded-full text-white hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="w-full max-w-4xl">
            <div className="bg-[#0a2a0a]/80 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="relative">
                {selectedItem.type === "image" ? (
                  <div className="relative aspect-video md:aspect-auto md:h-[60vh]">
                    <Image
                      src={selectedItem.src || "/placeholder.svg"}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <VideoPlayer src={selectedItem.src} title={selectedItem.title} />
                )}
              </div>

              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#90ee90]">{selectedItem.title}</h3>
                  <span className="text-sm bg-[#2a5a2a] px-2 py-1 rounded text-white">{selectedItem.event}</span>
                </div>
                <p className="text-[#d0ffd0] mb-2">{selectedItem.description}</p>
                <div className="text-sm text-[#a0d0a0]">{selectedItem.location}</div>
              </div>
            </div>

            <div className="flex justify-between mt-4 md:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevItem}
                className="border-[#2a5a2a] text-[#d0ffd0] hover:bg-[#2a5a2a]/20"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextItem}
                className="border-[#2a5a2a] text-[#d0ffd0] hover:bg-[#2a5a2a]/20"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#0a1f0a] py-8 border-t border-[#2a5a2a]">
        <div className="container text-center">
          <p className="text-[#a0d0a0]">&copy; {new Date().getFullYear()} KiwiHacks. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/" className="text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

