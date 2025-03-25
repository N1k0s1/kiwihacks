"use client"

import { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Calendar, MapPin, Users, ChevronDown, X, Leaf, Image, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

import { getRecentGalleryItems } from "@/data/gallery-items"

// Get the 5 most recent gallery items
const recentGalleryItems = getRecentGalleryItems(5)

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isScrolled, setIsScrolled] = useState(false)
  const windParticlesRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    // Enable smooth scrolling on desktop only
    if (!isMobile) {
      document.documentElement.style.scrollBehavior = "smooth"
    }

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = ""
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

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
    const particleCount = 80 // Reduced count for subtlety

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5, // Smaller particles
        speedX: Math.random() * 0.5 + 0.2, // Consistent rightward wind
        speedY: (Math.random() - 0.5) * 0.1, // Slight vertical variation
        opacity: Math.random() * 0.3 + 0.05, // More transparent
        life: Math.random() * 0.7 + 0.3, // Life factor for fading
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, index) => {
        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(144, 238, 144, ${p.opacity * p.life})`
        ctx.fill()

        // Update position with wind-like movement
        p.x += p.speedX
        p.y += p.speedY + Math.sin(p.x / 50) * 0.1 // Gentle sine wave motion

        // Reduce life gradually
        p.life -= 0.002

        // Reset particle when it goes off screen or dies
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

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

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

      <header
        className={cn(
          "fixed left-0 right-0 z-50 bg-[#0a1f0a]/80 backdrop-blur-sm border-b border-[#2a5a2a] transition-all duration-300",
          isScrolled
            ? "h-10 md:h-12 md:top-0 -top-16" // Completely off-screen on mobile when scrolled
            : "h-16 md:h-20 top-0",
        )}
      >
        <div className="container h-full flex items-center justify-between">
          <div
            className={cn(
              "font-bold text-xl md:text-2xl text-[#90ee90] flex items-center transition-all duration-300",
              isScrolled ? "opacity-0 scale-75 translate-x-[-100%]" : "opacity-100 scale-100 translate-x-0",
            )}
          >
            <Leaf className="mr-2 h-5 w-5" />
            KiwiHacks
          </div>
          <nav
            className={cn(
              "hidden md:flex items-center gap-6 transition-all duration-300",
              isScrolled ? "scale-90" : "scale-100",
            )}
          >
            <a href="#about" className="text-sm font-medium text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
              About
            </a>
            <a href="#faq" className="text-sm font-medium text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
              FAQ
            </a>
            <a href="#sponsors" className="text-sm font-medium text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
              Sponsor
            </a>
            <Link
              href="/gallery"
              className="text-sm font-medium text-[#d0ffd0] hover:text-[#90ee90] transition-colors flex items-center"
            >
              <Image className="mr-1 h-4 w-4" />
              Gallery
            </Link>
          </nav>
          <form action="https://forms.fillout.com/t/gwKJLcFXhQus" target="_blank">
            <Button
              size="sm"
              className={cn(
                "hidden md:inline-flex bg-[#2a5a2a] hover:bg-[#3a7a3a] text-white transition-all duration-300",
                isScrolled ? "scale-90" : "scale-100",
              )}
            >
              Register Now
            </Button>
          </form>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden transition-all duration-300 text-[#90ee90] hover:bg-[#2a5a2a]/50",
              isScrolled ? "scale-75" : "scale-100",
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-[#0a1f0a]/95 backdrop-blur-sm border-b border-[#2a5a2a] overflow-hidden transition-all duration-500 ease-in-out",
            mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 border-b-0",
            isScrolled ? "top-16" : "top-16", // Keep this consistent since the header is hidden when scrolled on mobile
          )}
        >
          <nav className="container py-4 flex flex-col">
            <a
              href="#about"
              className="py-3 px-4 text-sm font-medium text-[#d0ffd0] hover:bg-[#2a5a2a]/50 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-1"
              onClick={handleMobileNavClick}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                transitionDelay: "100ms",
                transitionProperty: "opacity, transform",
              }}
            >
              About
            </a>
            <a
              href="#faq"
              className="py-3 px-4 text-sm font-medium text-[#d0ffd0] hover:bg-[#2a5a2a]/50 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-1"
              onClick={handleMobileNavClick}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                transitionDelay: "150ms",
                transitionProperty: "opacity, transform",
              }}
            >
              FAQ
            </a>
            <a
              href="#sponsors"
              className="py-3 px-4 text-sm font-medium text-[#d0ffd0] hover:bg-[#2a5a2a]/50 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-1"
              onClick={handleMobileNavClick}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                transitionDelay: "200ms",
                transitionProperty: "opacity, transform",
              }}
            >
              Sponsor
            </a>
            <Link
              href="/gallery"
              className="py-3 px-4 text-sm font-medium text-[#d0ffd0] hover:bg-[#2a5a2a]/50 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-1 flex items-center"
              onClick={handleMobileNavClick}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                transitionDelay: "250ms",
                transitionProperty: "opacity, transform",
              }}
            >
              <Image className="mr-2 h-4 w-4" />
              Gallery
            </Link>
            <div
              className="pt-2 pb-1"
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                transitionDelay: "250ms",
                transitionDuration: "300ms",
                transitionProperty: "opacity, transform",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <form action="https://forms.fillout.com/t/gwKJLcFXhQus" target="_blank">
                <Button className="w-full bg-[#2a5a2a] hover:bg-[#3a7a3a] text-white" size="sm">
                  Register Now
                </Button>
              </form>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed top-4 right-4 z-50 md:hidden transition-all duration-300",
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none",
        )}
      >
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-[#0a2a0a]/80 backdrop-blur-sm border border-[#2a5a2a] text-[#90ee90] hover:bg-[#2a5a2a] shadow-[0_0_15px_rgba(144,238,144,0.15)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </Button>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1f0a] to-[#0a2a0a]"></div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(144,238,144,0.15),transparent_70%)]"></div>

          <div className="container flex flex-col items-center text-center">
            <div
              className={cn(
                "transition-all duration-1000 delay-300",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="relative inline-block">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                  Kiwi<span className="text-[#90ee90]">Hacks</span> 2025
                </h1>
                <div className="absolute -bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#90ee90] to-transparent"></div>
              </div>
              <p className="text-xl md:text-2xl text-[#a0d0a0] max-w-2xl mx-auto mb-8">
                Auckland&apos;s premier hackathon for coders and innovators 18 and under
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center mb-12 transition-all duration-1000 delay-500",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="flex items-center gap-2 text-sm md:text-base text-[#d0ffd0]">
                <Calendar className="h-5 w-5 text-[#90ee90]" />
                <span>July 19-20, 2025</span>
              </div>
              <div className="hidden md:block h-4 border-r border-[#2a5a2a]"></div>
              <div className="flex items-center gap-2 text-sm md:text-base text-[#d0ffd0]">
                <MapPin className="h-5 w-5 text-[#90ee90]" />
                <span>Auckland, New Zealand</span>
              </div>
              <div className="hidden md:block h-4 border-r border-[#2a5a2a]"></div>
              <div className="flex items-center gap-2 text-sm md:text-base text-[#d0ffd0]">
                <Users className="h-5 w-5 text-[#90ee90]" />
                <span>75+ Hackers</span>
              </div>
            </div>

            <div
              className={cn(
                "transition-all duration-1000 delay-700 justify-center flex flex-col sm:flex-row gap-4 sm:gap-4",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <form action="https://forms.fillout.com/t/gwKJLcFXhQus" target="_blank">
                <Button
                  size="lg"
                  className="w-full bg-[#2a5a2a] hover:bg-[#3a7a3a] text-white border border-[#90ee90]/30 shadow-[0_0_15px_rgba(144,238,144,0.15)]"
                >
                  Register Now
                </Button>
              </form>
              <form action="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-[#90ee90] text-[#0a2e12] hover:bg-[#90ee90]/10 hover:text-[#90ee90]"
                >
                  Contact Us
                </Button>
              </form>
              <form action="https://hcb.hackclub.com/donations/start/kiwihacks">
                <Button 
                  size="lg" 
                  className="w-full bg-[#2a5a2a] hover:bg-[#3a7a3a] text-white border border-[#90ee90]/30 shadow-[0_0_15px_rgba(144,238,144,0.15)]"
                >
                  Donate!
                </Button>
              </form>
            </div>
          </div>

          {/* Animated fern */}
          <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M10,90 Q30,70 20,50 Q10,30 30,20 Q50,10 70,30 Q90,50 80,70 Q70,90 50,80 Q30,70 10,90"
                fill="none"
                stroke="#90ee90"
                strokeWidth="0.5"
                className="animate-[dash_15s_linear_infinite]"
                strokeDasharray="200"
                strokeDashoffset="200"
              />
            </svg>
          </div>

          {/* Animated fern right */}
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M90,90 Q70,70 80,50 Q90,30 70,20 Q50,10 30,30 Q10,50 20,70 Q30,90 50,80 Q70,70 90,90"
                fill="none"
                stroke="#90ee90"
                strokeWidth="0.5"
                className="animate-[dash_20s_linear_infinite]"
                strokeDasharray="200"
                strokeDashoffset="200"
              />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-[#0a2a0a]/50 relative">
          <div className="absolute inset-0 bg-[url('/fern-pattern.svg')] opacity-5 pointer-events-none"></div>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative inline-block mx-auto">
              About KiwiHacks
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#90ee90] to-transparent"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 text-[#d0ffd0]">
                  KiwiHacks is a 24 hour Hackthon in Auckland, split over 2 days, bringing together young innovators,
                  designers, and problem-solvers 18 and under to create amazing projects.
                </p>
                <p className="text-lg mb-6 text-[#d0ffd0]">
                  Whether you&apos;re just starting to code or you&apos;ve been building projects for years, KiwiHacks
                  will have workshops to learn and build new things, and opportunities connect with other young tech enthusiasts.
                </p>
                <p className="text-lg text-[#d0ffd0]">
                  Join us for an unforgettable weekend of creativity, mentorship, and fun as we push the boundaries of
                  what&apos;s possible in technology. Open exclusively to participants 18 and under.
                </p>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden border border-[#2a5a2a] shadow-[0_0_30px_rgba(144,238,144,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#90ee90]/20 to-transparent rounded-lg"></div>
                <img
                  src="/hackers-discussing.JPEG?height=400&width=600"
                  alt="Hackers collaborating"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2a0a]/50 to-[#0a1f0a]"></div>
          <div className="container relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative inline-block mx-auto">
              Frequently Asked Questions
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#90ee90] to-transparent"></div>
            </h2>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  q: "What is KiwiHacks?",
                  a: "KiwiHacks is Auckland's premier hackathon for high school students and makers 18 and under. It's organized by a small team of like-minded teenagers, who are all passionate about technology and innovation.",
                },
                {
                  q: "When & where is KiwiHacks hosted?",
                  a: "KiwiHacks will be hosted in Auckland, New Zealand from July 19-20, 2025. The event will run for 24 hours over 2 days, day 1 starting at 8:00 AM on Saturday, running through until Saturday at 8:00 PM, and day 2 starting at 8:00 AM on Sunday, running through until Sunday at 8:00 PM. (If you need to stay overnight for any reason, please email us!)",
                },
                {
                  q: "Who can participate in KiwiHacks?",
                  a: "All high-school & upper-middle-school aged students (18 and under) are welcome to come!",
                },
                {
                  q: "All this, for free?",
                  a: "Yep! Food, swag, and good vibes are all included. Thanks to our sponsors, there's no cost to participate in KiwiHacks.",
                },
                {
                  q: "What do I need?",
                  a: "Your laptop, chargers, toiletries, sleeping bag (if you plan to stay overnight), and an open mind! If you plan to work on a hardware project, bring the tools you'll need. We'll have limited tools, and a 3d printer & soldering station available.",
                },
                {
                  q: "I'm not good at coding. Can I still participate?",
                  a: "This hackathon is for creatives of all skill levels! We'll have workshops and other events so join us and let's learn together.",
                },
                {
                  q: "What can I make at KiwiHacks?",
                  a: "Anything you can imagine! Games? Apps? Websites? Programming languages? Hardware? You name it! We'll have a bunch of resources and mentors to help you out.",
                },
                {
                  q: "What if my parents are concerned?",
                  a: "We're here to help! Parents can reach out to us at PLACEHOLDER for questions. All participants will need a signed parental consent form if under 18.",
                },
                {
                  q: "What if I have more questions?",
                  a: "Contact us! Feel free to reach out to us via email at PLACEHOLDER.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-[#2a5a2a] rounded-lg p-6 bg-[#0a2a0a]/50 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(144,238,144,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold mb-2 text-[#90ee90]">{item.q}</h3>
                  <p className="text-[#d0ffd0]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-16 md:py-24 bg-[#0a2a0a]/50 relative">
          <div className="absolute inset-0 bg-[url('/fern-pattern.svg')] opacity-5 pointer-events-none"></div>
          <div className="container relative z-10">


            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Interested in sponsoring?</h3>
              <p className="text-[#d0ffd0] max-w-2xl mx-auto mb-6">
                <s>Support the next generation of innovators and gain visibility for your brand among top tech talent.</s>
              </p>
              <form action="javascript:void(0);" >
                <Button className="bg-[#2a5a2a] hover:bg-[#3a7a3a] cursor-not-allowed text-white border border-[#90ee90]/30 shadow-[0_0_15px_rgba(144,238,144,0.15)]">
                  <s>Become a Sponsor</s>
                </Button>
              </form>
            </div>
          </div>
        </section>

                {/* Gallery Preview Section */}
                <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2a0a]/50 to-[#0a1f0a]"></div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                Event Gallery
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#90ee90] to-transparent"></div>
              </h2>
              <Link
                href="/gallery"
                className="mt-4 md:mt-0 flex items-center text-[#90ee90] hover:text-white transition-colors"
              >
                View all photos and videos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {recentGalleryItems.map((item) => (
                <Link
                  key={item.id}
                  href="/gallery"
                  className="relative aspect-square rounded-lg overflow-hidden border border-[#2a5a2a] hover:shadow-[0_0_20px_rgba(144,238,144,0.1)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-[#2a5a2a]/80 flex items-center justify-center">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white w-full">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium truncate">{item.title}</p>
                        <span className="text-xs bg-[#2a5a2a] px-1.5 py-0.5 rounded">{item.event}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/gallery">
                <Button variant="outline" className="border-[#90ee90] text-[#0a2e12] hover:bg-[#90ee90]/10 hover:text-[#90ee90]">
                  Explore Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#0a1f0a] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(144,238,144,0.1),transparent_70%)]"></div>
          <div className="container text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Hack?</h2>
            <p className="text-lg text-[#d0ffd0] max-w-2xl mx-auto mb-8">
              Join us for 24 hours of coding, creativity, and collaboration. Open to all innovators 18 and under.
              Register now to secure your spot at KiwiHacks 2025!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <form action="https://forms.fillout.com/t/gwKJLcFXhQus" target="_blank">
                <Button
                  size="lg"
                  className="px-8 bg-[#2a5a2a] hover:bg-[#3a7a3a] text-white border border-[#90ee90]/30 shadow-[0_0_15px_rgba(144,238,144,0.15)] transition-all duration-300 hover:-translate-y-1"
                >
                  Register Now
                </Button>
              </form>
              <form action="/contact">
                <Button size="lg" variant="outline" className="border-[#90ee90] text-[#0a2e12] hover:bg-[#90ee90]/10 hover:text-[#90ee90] transition-all duration-300 hover:-translate-y-1">
                  Contact Us
                </Button>
              </form>
                
            </div>
          </div>

          {/* Animated circuit lines */}
          <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden opacity-20 pointer-events-none">
            <svg viewBox="0 0 1000 100" className="w-full h-full">
              <path
                d="M0,50 L200,50 L250,20 L350,80 L450,50 L500,50 L550,20 L650,80 L750,50 L1000,50"
                fill="none"
                stroke="#90ee90"
                strokeWidth="1"
                className="animate-[dash_30s_linear_infinite]"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />
            </svg>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a1f0a] py-12 border-t border-[#2a5a2a]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#90ee90] flex items-center">
                <Leaf className="mr-2 h-5 w-5" />
                KiwiHacks
              </h3>
              <p className="text-[#d0ffd0]">Auckland&apos;s premier hackathon for coders and innovators 18 and under.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#90ee90]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
                    Sponsor
                  </a>
                </li>
                <li>
                  <Link href="/gallery" className="text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#d0ffd0] hover:text-[#90ee90] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#90ee90]">Contact</h3>
              <ul className="space-y-2 text-[#d0ffd0]">
                <li>PLACEHOLDER</li>
                <li>+64 22 135 0419</li>
                <li>Auckland, New Zealand</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#90ee90]">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#0a2a0a] border border-[#2a5a2a] flex items-center justify-center hover:bg-[#2a5a2a] transition-colors"
                >
                  <span className="sr-only">X</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#90ee90"
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/kiwihacks"
                  className="h-10 w-10 rounded-full bg-[#0a2a0a] border border-[#2a5a2a] flex items-center justify-center hover:bg-[#2a5a2a] transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#90ee90"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#0a2a0a] border border-[#2a5a2a] flex items-center justify-center hover:bg-[#2a5a2a] transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#90ee90"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2a5a2a] text-center text-sm text-[#a0d0a0]">
            <p>&copy; {new Date().getFullYear()} KiwiHacks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

