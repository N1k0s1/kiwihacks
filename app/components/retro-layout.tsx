import Link from "next/link"
import type { ReactNode } from "react"

interface RetroLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

export default function RetroLayout({ children, title, description }: RetroLayoutProps) {
  return (
    <div className="font-serif bg-[#003300] text-white m-0 p-0 text-center">
      <div className="w-full max-w-[800px] mx-auto bg-[#004400] border border-[#006600] px-2 sm:px-0">
        <div className="bg-[#002200] p-2.5 border-b-2 border-[#006600]">
          <div className="text-lg sm:text-2xl font-bold text-[#00ff00]">KiwiHacks 2025</div>
          <div className="text-xs sm:text-sm text-[#00cc00]">Auckland&apos;s Premier Hackathon for Innovators 18 and Under</div>
        </div>

        <div className="bg-[#003300] p-1.5 mb-2.5 text-xs sm:text-base">
          <Link href="/retro" className="text-[#00ff00] mx-1 sm:mx-2.5 font-bold no-underline hover:underline">
            Home
          </Link>{" "}
          |
          <Link href="/retro#about" className="text-[#00ff00] mx-1 sm:mx-2.5 font-bold no-underline hover:underline">
            About
          </Link>{" "}
          |
          <Link href="/retro#faq" className="text-[#00ff00] mx-1 sm:mx-2.5 font-bold no-underline hover:underline">
            FAQ
          </Link>{" "}
          |
          <Link href="" className="text-[#00ff00] mx-1 sm:mx-2.5 font-bold no-underline hover:underline cursor-not-allowed">
            <s>Sponsors</s>
          </Link>{" "}
          |
          <Link href="/retro/contact" className="text-[#00ff00] mx-1 sm:mx-2.5 font-bold no-underline hover:underline">
            Contact
          </Link>
        </div>

        <div className="p-2.5">{children}</div>

        <div className="bg-[#002200] p-2.5 border-t-2 border-[#006600] text-xs text-[#00cc00]">
          <div>© {new Date().getFullYear()} KiwiHacks. All rights reserved.</div>
          <div className="mt-1">
            <Link href="/retro" className="text-[#00cc00] mx-1 no-underline hover:underline">
              Home
            </Link>{" "}
            |
            <Link href="/retro#about" className="text-[#00cc00] mx-1 no-underline hover:underline">
              About
            </Link>{" "}
            |
            <Link href="/retro#faq" className="text-[#00cc00] mx-1 no-underline hover:underline">
              FAQ
            </Link>{" "}
            |
            <Link href="/retro#sponsors" className="text-[#00cc00] mx-1 no-underline hover:underline">
              Sponsors
            </Link>{" "}
            |
            <Link href="/retro/contact" className="text-[#00cc00] mx-1 no-underline hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-2.5 text-[10px] text-[#006600]">
        Best viewed in Internet Explorer 6.0 or Netscape Navigator 7.0 at 800x600 resolution
      </div>
    </div>
  )
}

