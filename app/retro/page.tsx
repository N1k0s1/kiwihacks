import RetroLayout from "./components/retro-layout"
import RetroSection from "./components/retro-section"
import RetroHeading from "./components/retro-heading"
import RetroButton from "./components/retro-button"
import BlinkText from "./components/blink-text"
import Image from "next/image"
import Link from "next/link"

export default function RetroHomePage() {
  return (
    <RetroLayout title="KiwiHacks 2025 - Auckland's Premier Hackathon">
      <RetroSection>
        <RetroHeading level={1}>Welcome to KiwiHacks 2025!</RetroHeading>
        {/*<div className="my-4">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="KiwiHacks Event"
            width={400}
            height={200}
            className="border border-[#006600]"
          />
        </div>*/}
        <p>
          Join us on <b>July 19-20, 2025</b> in <b>Auckland, New Zealand</b> for an unforgettable hackathon experience!
        </p>
        <p>75+ hackers. 24 hours. Unlimited creativity!</p>
        <div className="my-4">
          <RetroButton href="https://forms.fillout.com/t/gwKJLcFXhQus?" target="_blank">Register Now!</RetroButton>
          <span className="mx-2"></span>
          <RetroButton href="/retro/contact">Contact Us!</RetroButton>
          <span className="mx-2"></span>
          <RetroButton href="https://hcb.hackclub.com/donations/start/kiwihacks">Donate!</RetroButton>
        </div>
        <p>
          <BlinkText>Registration closes in a while! You probably won&apos;t miss out!</BlinkText>
        </p>
      </RetroSection>

      <RetroSection id="about">
        <RetroHeading level={2}>About KiwiHacks</RetroHeading>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="p-1.5 align-top w-[60%]">
                <p>
                  KiwiHacks is a 24 hour Hackthon in Auckland, split over 2 days, bringing together young innovators,
                  designers, and problem-solvers 18 and under to create amazing projects.
                </p>
                <p>
                  Whether you&apos;re just starting to code or you&apos;ve been building projects for years, KiwiHacks
                  will have workshops to learn and build new things, and opportunities connect with other young tech enthusiasts.
                </p>
                <p>
                  Join us for an unforgettable weekend of creativity, mentorship, and fun as we push the boundaries of
                  what&apos;s possible in technology. Open exclusively to participants 18 and under.
                </p>
              </td>
              <td className="p-1.5 align-top w-[40%]">
                <Image
                  src="/hackers-discussing.JPEG?height=150&width=250"
                  alt="Hackers Collaborating"
                  width={250}
                  height={150}
                  className="border border-[#006600]"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </RetroSection>

      <RetroSection id="faq">
        <RetroHeading level={2}>Frequently Asked Questions</RetroHeading>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="p-1.5 align-top w-1/2">
                <p>
                  <b>What is KiwiHacks?</b>
                  <br />
                  KiwiHacks is Auckland's premier hackathon for high school students and makers 18 and under. It's organized by a small team of like-minded teenagers, who are all passionate about technology and innovation.
                </p>

                <p>
                  <b>When & where is KiwiHacks hosted?</b>
                  <br />
                  KiwiHacks will be hosted in Auckland, New Zealand from July 19-20, 2025. The event will run for 24 hours over 2 days, day 1 starting at 8:00 AM on Saturday, running through until Saturday at 8:00 PM, and day 2 starting at 8:00 AM on Sunday, running through until Sunday at 8:00 PM. (If you need to stay overnight for any reason, please email us!)
                </p>

                <p>
                  <b>Who can participate in KiwiHacks?</b>
                  <br />
                  All high-school & upper-middle-school aged students (18 and under) are welcome to come!
                </p>

                <p>
                  <b>All this, for free?</b>
                  <br />
                  Yep! Food, swag, and good vibes are all included. Thanks to our sponsors, there's no cost to participate in KiwiHacks.
                </p>

                <p>
                  <b>What do I need?</b>
                  <br />
                  Your laptop, chargers, toiletries, sleeping bag (if you plan to stay overnight), and an open mind! If you plan to work on a hardware project, bring the tools you'll need. We'll have limited tools, and a 3d printer & soldering station available.
                </p>
              </td>
              <td className="p-1.5 align-top w-1/2">
                <p>
                  <b>I&apos;m not good at coding. Can I still participate?</b>
                  <br />
                  This hackathon is for creatives of all skill levels! We'll have workshops and other events so join us and let's learn together.
                </p>

                <p>
                  <b>What can I make at KiwiHacks?</b>
                  <br />
                  Anything you can imagine! Games? Apps? Websites? Programming languages? Hardware? You name it! We'll have a bunch of resources and mentors to help you out.
                </p>

                <p>
                  <b>What if my parents are concerned?</b>
                  <br />
                  We're here to help! Parents can reach out to us at PLACEHOLDER for questions. All participants will need a signed parental consent form if under 18.
                </p>

                <p>
                  <b>What if I have more questions?</b>
                  <br />
                  Contact us! Feel free to reach out to us via email at <Link href="mailto:PLACEHOLDER" className="text-[#00ff00]">PLACEHOLDER</Link>.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </RetroSection>

      {/*<RetroSection id="sponsors">
        <RetroHeading level={2}>Our Sponsors</RetroHeading>
        <div>
          <div className="inline-block border border-[#006600] bg-[#002200] w-[150px] h-[60px] m-1.5 align-middle leading-[60px]">
            SPONSOR 1
          </div>
          <div className="inline-block border border-[#006600] bg-[#002200] w-[150px] h-[60px] m-1.5 align-middle leading-[60px]">
            SPONSOR 2
          </div>
          <div className="inline-block border border-[#006600] bg-[#002200] w-[150px] h-[60px] m-1.5 align-middle leading-[60px]">
            SPONSOR 3
          </div>
        </div>
        <div>
          <div className="inline-block border border-[#006600] bg-[#002200] w-[150px] h-[60px] m-1.5 align-middle leading-[60px]">
            SPONSOR 4
          </div>
          <div className="inline-block border border-[#006600] bg-[#002200] w-[150px] h-[60px] m-1.5 align-middle leading-[60px]">
            SPONSOR 5
          </div>
          <div className="inline-block border border-[#006600] bg-[#002200] w-[150px] h-[60px] m-1.5 align-middle leading-[60px]">
            SPONSOR 6
          </div>
        </div>
        <p className="mt-4">Interested in sponsoring? Contact us at PLACEHOLDER</p>
      </RetroSection>*/}
    </RetroLayout>
  )
}

