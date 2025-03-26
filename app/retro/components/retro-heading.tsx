import type { ReactNode } from "react"

interface RetroHeadingProps {
  level: 1 | 2 | 3
  children: ReactNode
}

export default function RetroHeading({ level, children }: RetroHeadingProps) {
  switch (level) {
    case 1:
      return <h1 className="text-[#00ff00] text-2xl font-bold">{children}</h1>
    case 2:
      return <h2 className="text-[#00ff00] text-xl font-bold border-b border-[#006600] pb-1.5">{children}</h2>
    case 3:
      return <h3 className="text-[#00ff00] text-lg font-bold">{children}</h3>
    default:
      return <h2 className="text-[#00ff00] text-xl font-bold">{children}</h2>
  }
}

