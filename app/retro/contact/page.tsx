"use client"

import RetroLayout from "../components/retro-layout"
import RetroSection from "../components/retro-section"
import RetroHeading from "../components/retro-heading"
import RetroButton from "../components/retro-button"
import MarqueeText from "../components/marquee-text"
import Link from "next/link"

export default function RetroContactPage() {
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

