"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"

interface MarqueeTextProps {
  children: React.ReactNode
  speed?: number
  color?: string
}

export default function MarqueeText({ children, speed = 3, color = "#00ff00" }: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
      setContentWidth(contentRef.current.offsetWidth)
    }
  }, [children])

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        if (prev <= -contentWidth) {
          return containerWidth
        }
        return prev - speed
      })
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [contentWidth, containerWidth, speed])

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap" style={{ color }}>
      <div
        ref={contentRef}
        style={{
          display: "inline-block",
          transform: `translateX(${position}px)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

