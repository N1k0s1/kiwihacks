"use client"

import type React from "react"

interface RetroButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
}

export default function RetroButton({ onClick, children, type = "button" }: RetroButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#006600] text-white py-1.5 px-2.5 border border-[#00ff00] font-bold cursor-pointer"
    >
      {children}
    </button>
  )
}

