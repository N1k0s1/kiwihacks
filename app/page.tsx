"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    // Enable smooth scrolling on desktop only
    if (!isMobile) {
      document.documentElement.style.scrollBehavior = "smooth"
    }

    return () => {
      clearTimeout(timer)
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = ""
    }
  }, [isMobile])

  return (
    <div
      className={cn(
        "min-h-screen bg-background transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
    >
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="font-bold text-xl md:text-2xl text-primary">KiwiHacks</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#sponsors" className="text-sm font-medium hover:text-primary transition-colors">
              Sponsors
            </a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            Register Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,255,120,0.1),transparent_50%)]"></div>
          <div className="container flex flex-col items-center text-center">
            <div
              className={cn(
                "transition-all duration-1000 delay-300",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Kiwi<span className="text-primary">Hacks</span> 2025
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Auckland&apos;s Hack Club hackathon for Teen Hackers!
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center mb-12 transition-all duration-1000 delay-500",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Calendar className="h-5 w-5 text-primary" />
                <span>July 19-20, 2025</span>
              </div>
              <div className="hidden md:block h-4 border-r border-muted"></div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Auckland, New Zealand</span>
              </div>
              <div className="hidden md:block h-4 border-r border-muted"></div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Users className="h-5 w-5 text-primary" />
                <span>100 Hackers</span>
              </div>
            </div>

            <div
              className={cn(
                "transition-all duration-1000 delay-700",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <Button size="lg" className="mr-4">
                Register Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About KiwiHacks</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6">
                  KiwiHacks is Auckland&apos;s premier 24-hour / 12-hour Hack Club hackathon bringing together young innovators,
                  designers, and problem-solvers 18 and under to create amazing projects.
                </p>
                <p className="text-lg mb-6">
                  Whether you&apos;re just starting to code or you&apos;ve been building projects for years, KiwiHacks
                  provides the perfect platform to learn, build, and connect with other young tech enthusiasts.
                </p>
                <p className="text-lg">
                  Join us for an unforgettable weekend of creativity, mentorship, and fun as we push the boundaries of
                  what&apos;s possible in technology. Open exclusively to participants 18 and under.
                </p>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg"></div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hackers collaborating"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  q: "What is KiwiHacks?",
                  a: "KiwiHacks is Auckland's premier hackathon for high school students and makers 18 and under. It's organized by Hack Club, a 501(c)(3) nonprofit that supports a global community of 48k+ high school makers.",
                },
                {
                  q: "When & where is KiwiHacks hosted?",
                  a: "KiwiHacks will be hosted in Auckland, New Zealand from July 19-20, 2025. The event will run for 36 hours, starting at 9:00 AM on Friday and ending at 6:00 PM on Saturday.",
                },
                {
                  q: "Who can participate in KiwiHacks?",
                  a: "All high-school & upper-middle-school aged students (18 and under) are welcome to come! You don't have to be a member of the Hack Club community or be a Hack Club leader.",
                },
                {
                  q: "All this, for free?",
                  a: "Yep! Food, swag, and good vibes are all included. Thanks to our sponsors and Hack Club, there's no cost to participate in KiwiHacks.",
                },
                {
                  q: "What do I need?",
                  a: "Your laptop, chargers, toiletries, sleeping bag (if you plan to stay overnight), and an open mind! If you plan to work on a hardware project, bring the tools you'll need.",
                },
                {
                  q: "I'm not good at coding. Can I still participate?",
                  a: "This hackathon is for creatives of all skill levels! We'll have workshops and other events so join us and let's learn together. If you'd like to start exploring some introductory projects, check out Hack Club Workshops.",
                },
                {
                  q: "What can I make at KiwiHacks?",
                  a: "Anything you can imagine! Games? Apps? Websites? Programming languages? Hardware? You name it! We'll have a bunch of resources and mentors to help you out.",
                },
                {
                  q: "What has Hack Club done before?",
                  a: "Hack Club has run an overnight hackathon in San Francisco, a Game Jam across 50 cities, a hackathon on a Train from Vermont to Los Angeles, and much more!",
                },
                {
                  q: "What if my parents are concerned?",
                  a: "We're here to help! Parents can reach out to us at kiwihacks@hackclub.com for questions. All participants will need a signed parental consent form if under 18.",
                },
                {
                  q: "What if I have more questions?",
                  a: "Contact us! Feel free to reach out to us in the #kiwihacks channel on the Hack Club slack or email us at kiwihacks@hackclub.com.",
                },
              ].map((item, index) => (
                <div key={index} className="border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-bold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Sponsors</h2>

            <div className="space-y-12">
              {/* Platinum Sponsors */}
              <div>
                <h3 className="text-xl font-medium text-center mb-6">Platinum Sponsors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-[3/1] bg-card rounded-lg flex items-center justify-center p-6">
                      <img src="/placeholder-logo.svg" alt={`Platinum Sponsor ${i}`} className="max-h-12 max-w-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gold Sponsors */}
              <div>
                <h3 className="text-xl font-medium text-center mb-6">Gold Sponsors</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-[3/1] bg-card rounded-lg flex items-center justify-center p-4">
                      <img src="/placeholder-logo.svg" alt={`Gold Sponsor ${i}`} className="max-h-10 max-w-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Silver Sponsors */}
              <div>
                <h3 className="text-xl font-medium text-center mb-6">Silver Sponsors</h3>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-[3/1] bg-card rounded-lg flex items-center justify-center p-3">
                      <img src="/placeholder-logo.svg" alt={`Silver Sponsor ${i}`} className="max-h-8 max-w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Interested in sponsoring?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Support the next generation of innovators and gain visibility for your brand among top tech talent.
              </p>
              <Button>Become a Sponsor</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Hack?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join us for 36 hours of coding, creativity, and collaboration. Open to all innovators 18 and under.
              Register now to secure your spot at KiwiHacks 2025!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Register Now
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-4">KiwiHacks</h3>
              <p className="text-muted-foreground">
                Auckland&apos;s premier Hack Club hackathon for innovators 18 and under.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="text-muted-foreground hover:text-primary transition-colors">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>kiwihacks@hackclub.com</li>
                <li>+64 9 123 4567</li>
                <li>Auckland, New Zealand</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
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
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
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

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} KiwiHacks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

