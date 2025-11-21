"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface BlinkTextProps {
  children: React.ReactNode
  color?: string
}

export default function BlinkText({ children, color = "#ff0000" }: BlinkTextProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      style={{
        visibility: visible ? "visible" : "hidden",
        color,
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  )
}

