"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function RetroButton() {
  const [blink, setBlink] = useState(true)
  const pathname = usePathname()
  const isRetroPage = pathname?.startsWith("/retro")

  // Determine button text and link based on current path
  const buttonText = isRetroPage ? "TAKE ME BACK!" : "RETRO"
  const buttonLink = isRetroPage ? "/" : "/retro"

  // Classic blinking text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 right-8 z-50 flex flex-col items-center">
      <div className="relative mb-2">
        <div
          className="text-xs text-yellow-300 font-bold relative bottom-4"
          style={{
            visibility: blink ? "visible" : "hidden",
            textShadow: "1px 1px 2px #000",
          }}
        >
          {isRetroPage ? "BACK TO THE FUTURE!" : "TIME TRAVEL!"}
        </div>
      </div>

      <Link href={buttonLink}>
        <div className="group relative">
          {/* Under construction GIF */}
          <div className="absolute -top-6 -right-6 w-8 h-8 z-10">
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-xs text-yellow-300 font-bold">
                {isRetroPage ? "GO!" : "NEW!"}
              </div>
            </div>
          </div>

          {/* Main button with classic Windows 98 / early 2000s styling */}
          <div
            className="relative px-4 py-2 w-24 text-center font-bold text-sm cursor-pointer select-none"
            style={{
              background: isRetroPage
                ? "linear-gradient(to bottom, #ee6868, #8b3d3d)"
                : "linear-gradient(to bottom, #7b68ee, #483d8b)",
              border: isRetroPage ? "2px outset #db7070" : "2px outset #9370db",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "#ffffff",
              fontFamily: '"Comic Sans MS", cursive',
              textShadow: "1px 1px 1px #000",
              transform: "rotate(-5deg)",
              animation: "retro-button-effect 2s infinite ease-in-out",
            }}
          >
            {/* Outer border effect */}
            <div className="absolute inset-0 border border-white opacity-30"></div>
            {buttonText}
            <div className="text-[10px] mt-0.5">{isRetroPage ? "v32.44" : "v4.3"}</div>
          </div>

          {/* Button press effect */}
          <div
            className="absolute inset-0 bg-black opacity-0 group-active:opacity-20 transition-opacity"
            style={{
              border: isRetroPage ? "2px inset #db7070" : "2px inset #9370db",
            }}
          ></div>
        </div>
      </Link>
    </div>
  )
}

