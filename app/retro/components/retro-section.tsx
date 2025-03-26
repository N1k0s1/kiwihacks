import type { ReactNode } from "react"

interface RetroSectionProps {
  children: ReactNode
  id?: string
}

export default function RetroSection({ children, id }: RetroSectionProps) {
  return (
    <div id={id} className="mb-5 p-2.5 border border-[#006600] bg-[#003300]">
      {children}
    </div>
  )
}

