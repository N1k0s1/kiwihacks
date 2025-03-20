"use client"

import { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Leaf, MessageSquare, Users, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SlackPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const windParticlesRef = useRef<HTMLCanvasElement>(null)

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
    if (!windParticlesRef.current || isMobile) return

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
  }, [isMobile])

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
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div
              className={cn(
                "transition-all duration-1000 delay-300",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="relative inline-block">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Join the <span className="text-[#90ee90]">KiwiHacks</span> Slack
                </h1>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#90ee90] to-transparent"></div>
              </div>
              <p className="text-lg md:text-xl text-[#a0d0a0] max-w-2xl mx-auto mt-6">
                Connect with fellow hackers, mentors, and organizers in our community
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div
              className={cn(
                "transition-all duration-1000 delay-500",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="bg-[#0a2a0a]/50 backdrop-blur-sm border border-[#2a5a2a] rounded-lg p-6 md:p-8 shadow-[0_0_30px_rgba(144,238,144,0.1)]">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 text-[#90ee90] mr-3" />
                  <h2 className="text-2xl font-bold text-white">Why Join Our Slack?</h2>
                </div>

                <ul className="space-y-4 text-[#d0ffd0]">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#2a5a2a] flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <p>Get the latest updates about KiwiHacks 2025 directly from the organizers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#2a5a2a] flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p>Connect with other participants before the event to form teams</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#2a5a2a] flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <p>Access exclusive resources, workshops, and mentorship opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#2a5a2a] flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <p>Join the larger Hack Club community with 48k+ young makers worldwide</p>
                  </li>
                </ul>

                <div className="mt-8 flex items-center justify-between bg-[#0a1f0a] p-4 rounded-md border border-[#2a5a2a]">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#90ee90] mr-2" />
                    <span className="text-[#d0ffd0]">3,500+ members online</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-[#2a5a2a] border-2 border-[#0a1f0a] flex items-center justify-center overflow-hidden"
                      >
                        <span className="text-xs text-[#90ee90]">
                            <img 
                                src={`/slack-profile/avatar-${i}.jpg`}
                                className="h-full w-full object-cover"
                             />
                        </span>
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-[#2a5a2a] border-2 border-[#0a1f0a] flex items-center justify-center text-xs text-[#90ee90]">
                      99+
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "transition-all duration-1000 delay-700",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="bg-[#0a2a0a]/50 backdrop-blur-sm border border-[#2a5a2a] rounded-lg p-6 md:p-8 shadow-[0_0_30px_rgba(144,238,144,0.1)]">
                <h2 className="text-2xl font-bold text-white mb-6">How to Join</h2>

                <p className="text-[#d0ffd0] mb-6">
                  To join the KiwiHacks community, you'll need to sign up for the Hack Club Slack. Click the button
                  below to go to the official Hack Club Slack signup page.
                </p>

                <a
                  href="https://hackclub.com/slack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 px-4 bg-[#2a5a2a] hover:bg-[#3a7a3a] text-white rounded-md transition-all duration-300 border border-[#90ee90]/30 shadow-[0_0_15px_rgba(144,238,144,0.15)] hover:-translate-y-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2zm1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2zm2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2zm0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2zm8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2zm-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2zm-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2zm0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2z"/></svg>
                    Join Hack Club Slack
                    <ExternalLink className="ml-2 h-4 w-4" />
                </a>

                <div className="mt-8 pt-6 border-t border-[#2a5a2a]">
                  <div className="bg-[#0a1f0a] rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">After joining:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-[#d0ffd0]">
                      <li>
                        Search for <span className="font-mono text-[#90ee90]">#kiwihacks</span> channel in the  <span className="font-mono text-[#90ee90]">+ Add channels</span> tab
                      </li>
                      <li>Click on it to join the conversation</li>
                      <li>Introduce yourself to the community</li>
                      <li>Stay updated on event announcements and find teammates</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "mt-16 text-center transition-all duration-1000 delay-900",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <h2 className="text-2xl font-bold text-white mb-6">The #kiwihacks Channel</h2>
            <p className="text-[#d0ffd0] max-w-2xl mx-auto mb-8">
              Once you're in the Hack Club Slack, be sure to join the #kiwihacks channel for event-specific discussions,
              announcements, and to connect with other participants.
            </p>
            <div className="bg-[#0a2a0a]/50 backdrop-blur-sm border border-[#2a5a2a] rounded-lg p-6 max-w-2xl mx-auto shadow-[0_0_30px_rgba(144,238,144,0.1)]">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded bg-[#4A154B] flex items-center justify-center text-white text-xs mr-2">
                  #
                </div>
                <span className="font-bold">kiwihacks</span>
                <span className="ml-2 text-sm text-[#a0d0a0]">
                  12 members
                </span>
              </div>
              <div className="bg-[#0a1f0a] rounded p-4 mb-4 text-left">
                <p className="text-[#d0ffd0] text-sm">
                  <span className="font-bold text-white">Topic:</span> Planning KiwiHacks, an Auckland based Hackathon for 50-80 teenagers over 2 days!<img width="20px" src="/favicon.png"></img>
                </p>
              </div>
              <p className="text-[#d0ffd0] text-sm italic">
                Join the conversation by signing up at{" "}
                <a
                  href="https://hackclub.com/slack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#90ee90] underline"
                >
                  hackclub.com/slack
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

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

