"use client"

import type React from "react"
import Link from "next/link"

interface RetroButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  href?: string
  target?: string
  className?: string
}

export default function RetroButton({ 
  onClick, 
  children, 
  type = "button", 
  href, 
  target,
  className = ""
}: RetroButtonProps) {
  const baseClasses = "bg-[#006600] text-white py-2 px-3 sm:py-1.5 sm:px-2.5 border border-[#00ff00] font-bold cursor-pointer text-center block w-full sm:w-auto " + className

  // If href is provided, render as a Link
  if (href) {
    return (
      <Link 
        href={href} 
        target={target}
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  // Otherwise, render as a button
  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  )
}