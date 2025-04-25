"use client"

import { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Leaf, MessageSquare, Users, ArrowLeft, ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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

  // Social media platforms data
  const socialPlatforms = [
    {
      name: "Discord",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
      description: "Join our Discord server to chat with fellow hackers, get event updates, and find teammates.",
      buttonText: "Join Discord Server",
      url: "https://discord.gg/WcxtjRRUCJ",
      color: "#5865F2",
      members: "N/A",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      description: "Follow us on Instagram for event photos, announcements, and behind-the-scenes content.",
      buttonText: "Follow on Instagram",
      url: "https://instagram.com/kiwihacks",
      color: "#E1306C",
      followers: "N/A",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      description: "Connect with our team and sponsors on LinkedIn for professional networking opportunities.",
      buttonText: "Connect on LinkedIn",
      url: "https://linkedin.com/company/kiwihacks",
      color: "#0077B5",
      connections: "N/A",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      description: "Follow us on Twitter for real-time updates, announcements, and hackathon highlights.",
      buttonText: "Follow on Twitter",
      url: "https://twitter.com/kiwihacks",
      color: "#1DA1F2",
      followers: "N/A",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      description: "Check out our GitHub organization for hackathon resources, starter kits, and project showcases.",
      buttonText: "Visit GitHub",
      url: "https://github.com/kiwihacksnz",
      color: "#333",
      repos: "N/A",
    },
  ]

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
                  Connect with <span className="text-[#90ee90]">KiwiHacks</span>
                </h1>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#90ee90] to-transparent"></div>
              </div>
              <p className="text-lg md:text-xl text-[#a0d0a0] max-w-2xl mx-auto mt-6">
                Join our community across various platforms to stay updated and connect with fellow hackers
              </p>
            </div>
          </div>

          {/* Direct Contact Information */}
          <div
            className={cn(
              "mb-12 transition-all duration-1000 delay-400",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="bg-[#0a2a0a]/50 backdrop-blur-sm border border-[#2a5a2a] rounded-lg p-6 md:p-8 shadow-[0_0_30px_rgba(144,238,144,0.1)]">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-[#90ee90] mr-3" />
                Get in Touch
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#90ee90] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Email Us</h3>
                    <p className="text-[#d0ffd0] mt-1">
                      <a href="mailto:kiwihacks@hackclub.com" className="hover:text-[#90ee90] transition-colors">
                        PLACEHOLDER
                      </a>
                    </p>
                    <p className="text-sm text-[#a0d0a0] mt-1">For general inquiries and support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#90ee90] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Call Us</h3>
                    <p className="text-[#d0ffd0] mt-1">
                      <a href="tel:+64221350419" className="hover:text-[#90ee90] transition-colors">
                        +64 22 135 0419
                      </a>
                    </p>
                    <p className="text-sm text-[#a0d0a0] mt-1">Mon-Fri, 9am-5pm NZST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#90ee90] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-[#d0ffd0] mt-1">Auckland, New Zealand</p>
                    <p className="text-sm text-[#a0d0a0] mt-1">Venue details coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Platforms */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {socialPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={cn(
                  "transition-all duration-1000",
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                )}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="bg-[#0a2a0a]/50 backdrop-blur-sm border border-[#2a5a2a] rounded-lg p-6 h-full shadow-[0_0_30px_rgba(144,238,144,0.1)] hover:shadow-[0_0_40px_rgba(144,238,144,0.15)] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.icon}
                    </div>
                    <h2 className="text-xl font-bold text-white">{platform.name}</h2>
                  </div>

                  <p className="text-[#d0ffd0] mb-6 min-h-[60px]">{platform.description}</p>

                  {platform.members && (
                    <div className="flex items-center mb-4 bg-[#0a1f0a] p-3 rounded-md border border-[#2a5a2a]">
                      <Users className="h-4 w-4 text-[#90ee90] mr-2" />
                      <span className="text-sm text-[#d0ffd0]">{platform.members} members</span>
                    </div>
                  )}

                  {platform.followers && (
                    <div className="flex items-center mb-4 bg-[#0a1f0a] p-3 rounded-md border border-[#2a5a2a]">
                      <Users className="h-4 w-4 text-[#90ee90] mr-2" />
                      <span className="text-sm text-[#d0ffd0]">{platform.followers} followers</span>
                    </div>
                  )}

                  {platform.connections && (
                    <div className="flex items-center mb-4 bg-[#0a1f0a] p-3 rounded-md border border-[#2a5a2a]">
                      <Users className="h-4 w-4 text-[#90ee90] mr-2" />
                      <span className="text-sm text-[#d0ffd0]">{platform.connections} connections</span>
                    </div>
                  )}

                  {platform.repos && (
                    <div className="flex items-center mb-4 bg-[#0a1f0a] p-3 rounded-md border border-[#2a5a2a]">
                      <svg
                        className="h-4 w-4 text-[#90ee90] mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.5 2.5a2.121 2.121 0 013 0l3.5 3.5a2.121 2.121 0 010 3l-3.5 3.5a2.121 2.121 0 01-3 0l-3.5-3.5a2.121 2.121 0 010-3l3.5-3.5zM7 7a2.121 2.121 0 013 0l3.5 3.5a2.121 2.121 0 010 3L10 17a2.121 2.121 0 01-3 0l-3.5-3.5a2.121 2.121 0 010-3L7 7z" />
                      </svg>
                      <span className="text-sm text-[#d0ffd0]">{platform.repos} repositories</span>
                    </div>
                  )}

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 px-4 bg-[#2a5a2a] hover:bg-[#3a7a3a] text-white rounded-md transition-all duration-300 border border-[#90ee90]/30 shadow-[0_0_15px_rgba(144,238,144,0.15)] hover:-translate-y-1"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.buttonText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
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

