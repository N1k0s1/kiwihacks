"use client"

import RetroLayout from "../components/retro-layout"
import RetroSection from "../components/retro-section"
import RetroHeading from "../components/retro-heading"
import RetroButton from "../components/retro-button"
import MarqueeText from "../components/marquee-text"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"

export default function RetroContactPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [blink, setBlink] = useState(true)
  const [showPopup, setShowPopup] = useState(false) // State to show/hide popup

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)

    return () => clearInterval(interval) // Cleanup on unmount
  }, []) // Runs once on mount

  const handleTryAgainClick = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-yellow-300 p-4 font-mono">
        {/* Glitching Text */}
        <div className="relative text-3xl sm:text-5xl font-bold glitch">
          <span aria-hidden="true" className="absolute top-0 left-0 text-red-500">SORRY!</span>
          <span>SORRY!</span>
          <span aria-hidden="true" className="absolute top-0 left-0 text-blue-500">SORRY!</span>
        </div>

        {/* Blinking Warning Text */}
        <p className={`mt-4 text-xl ${blink ? "opacity-100" : "opacity-20"} text-center transition-opacity duration-500`}>
          This page doesn't work on small screens.
        </p>

        {/* Try Again Button */}
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-bold border-2 border-white shadow-md transform transition hover:scale-105 active:scale-95"
          onClick={handleTryAgainClick}
        >
          TRY AGAIN
        </button>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 p-2  bg-gray-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-xl max-w-md w-full">
              <h2 className="text-xl font-bold mb-5">Really?</h2>
              <p>Did you think that would work?</p>
              <div className="flex justify-between mt-4">
                <button
                  className="px-6 py-4 bg-red-500 text-white font-bold rounded-md text-xs"
                  onClick={handleClosePopup}
                >
                  No, never mind
                </button>
                <span className="mx-2" />
                <button
                  className="px-4 py-4 bg-green-500 text-white font-bold rounded-md text-xs"
                  onClick={handleClosePopup}
                >
                  Yes, maybe it will
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pixelated Loading Bar */}
        <div className="mt-6 w-48 h-6 bg-gray-800 border-2 border-white flex overflow-hidden">
          <div className="h-full bg-green-500 animate-loading"></div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes glitch {
            0% { transform: translate(0, 0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, -2px); }
            80% { transform: translate(2px, 2px); }
            100% { transform: translate(0, 0); }
          }
          .glitch {
            animation: glitch 0.3s infinite;
          }
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-loading {
            animation: loading 3s infinite;
          }
        `}</style>
      </div>
    )
  }
  
  return (
    <RetroLayout title="KiwiHacks 2025 - Contact Us">
      <RetroSection>
        <RetroHeading level={1}>Connect with KiwiHacks</RetroHeading>
        <p>Join our community across various platforms to stay updated and connect with fellow hackers</p>

        <div className="text-left mb-5">
          <RetroHeading level={2}>Get in Touch</RetroHeading>
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="w-1/3">
                  <b>Email:</b>
                </td>
                <td className="w-1/3">
                  <b>Phone:</b>
                </td>
                <td className="w-1/3">
                  <b>Location:</b>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="mailto:PLACEHOLDER" className="text-[#00ff00]">
                    PLACEHOLDER
                  </Link>
                </td>
                <td>+64 22 135 0419</td>
                <td>Auckland, New Zealand</td>
              </tr>
            </tbody>
          </table>
        </div>

        <RetroHeading level={2}>Our Social Platforms</RetroHeading>
        <div>
          {[
            {
              name: "Discord",
              description:
                "Join our Discord server to chat with fellow hackers, get event updates, and find teammates.",
              members: "500+",
              url: "https://discord.gg/kiwihacks",
              buttonText: "Join Discord Server",
              isNew: true,
            },
            {
              name: "Instagram",
              description: "Follow us on Instagram for event photos, announcements, and behind-the-scenes content.",
              members: "1.2k",
              url: "https://instagram.com/kiwihacks",
              buttonText: "Follow on Instagram",
            },
            {
              name: "LinkedIn",
              description: "Connect with our team and sponsors on LinkedIn for professional networking opportunities.",
              members: "300+",
              url: "https://linkedin.com/company/kiwihacks",
              buttonText: "Connect on LinkedIn",
            },
            {
              name: "Twitter",
              description: "Follow us on Twitter for real-time updates, announcements, and hackathon highlights.",
              members: "800+",
              url: "https://twitter.com/kiwihacks",
              buttonText: "Follow on Twitter",
            },
          ].map((platform, index) => (
            <div
              key={index}
              className="inline-block w-[45%] m-1.5 border border-[#006600] p-2.5 bg-[#002200] text-left align-top"
            >
              <h3 className="text-[#00ff00] mt-0">
                {platform.name}
                {platform.isNew && <span className="text-[#ff0000] font-bold text-[10px] align-super ml-1">NEW!</span>}
              </h3>
              <p>{platform.description}</p>
              <p>
                <b>Members:</b> {platform.members}
              </p>
              <p>
                <Link href={platform.url} target="_blank" className="text-[#00ff00]">
                  {platform.url}
                </Link>
              </p>
              <div className="text-center">
                <RetroButton>{platform.buttonText}</RetroButton>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-5">
          <MarqueeText>
            Join us for KiwiHacks 2025 on July 19-20 in Auckland, New Zealand! Register now to secure your spot!
          </MarqueeText>
        </div>
      </RetroSection>
    </RetroLayout>
  )
}

