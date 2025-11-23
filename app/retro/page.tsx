"use client";

import RetroLayout from "../components/retro-layout";
import RetroSection from "../components/retro-section";
import RetroHeading from "../components/retro-heading";
import RetroButton from "../components/retro-button";
import BlinkText from "../components/blink-text";
import Image from "next/image";
import Link from "next/link";
// import { useMediaQuery } from "@/hooks/use-mobile"
// import { useState, useEffect } from "react"

export default function RetroHomePage() {
  // const isMobile = useMediaQuery("(max-width: 800px)")
  // const [blink, setBlink] = useState(true)
  // const [showPopup, setShowPopup] = useState(false) // State to show/hide popup

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBlink((prev) => !prev)
  //   }, 500)
  //
  //   return () => clearInterval(interval) // Cleanup on unmount
  // }, []) // Runs once on mount
  //
  // const handleTryAgainClick = () => {
  //   setShowPopup(true)
  // }
  //
  // const handleClosePopup = () => {
  //   setShowPopup(false)
  // }

  // if (isMobile) {
  //   return (
  //     <div className="h-screen flex flex-col items-center justify-center bg-black text-yellow-300 p-4 font-mono">
  //       {/* Glitching Text */}
  //       <div className="relative text-3xl sm:text-5xl font-bold glitch">
  //         <span aria-hidden="true" className="absolute top-0 left-0 text-red-500">SORRY!</span>
  //         <span>SORRY!</span>
  //         <span aria-hidden="true" className="absolute top-0 left-0 text-blue-500">SORRY!</span>
  //       </div>
  //
  //       {/* Blinking Warning Text */}
  //       <p className={`mt-4 text-xl ${blink ? "opacity-100" : "opacity-20"} text-center transition-opacity duration-500`}>
  //         This page doesn't work on small screens.
  //       </p>
  //
  //       {/* Try Again Button */}
  //       <button
  //         className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-bold border-2 border-white shadow-md transform transition hover:scale-105 active:scale-95"
  //         onClick={handleTryAgainClick}
  //       >
  //         TRY AGAIN
  //       </button>
  //
  //       {/* Popup */}
  //       {showPopup && (
  //         <div className="fixed inset-0 p-2  bg-gray-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
  //           <div className="bg-white text-black p-6 rounded-lg shadow-xl max-w-md w-full">
  //             <h2 className="text-xl font-bold mb-5">Really?</h2>
  //             <p>Did you think that would work?</p>
  //             <div className="flex justify-between mt-4">
  //               <button
  //                 className="px-6 py-4 bg-red-500 text-white font-bold rounded-md text-xs"
  //                 onClick={handleClosePopup}
  //               >
  //                 No, never mind
  //               </button>
  //               <span className="mx-2" />
  //               <button
  //                 className="px-4 py-4 bg-green-500 text-white font-bold rounded-md text-xs"
  //                 onClick={handleClosePopup}
  //               >
  //                 Yes, maybe it will
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //
  //       {/* Pixelated Loading Bar */}
  //       <div className="mt-6 w-48 h-6 bg-gray-800 border-2 border-white flex overflow-hidden">
  //         <div className="h-full bg-green-500 animate-loading"></div>
  //       </div>
  //
  //       {/* CSS Animations */}
  //       <style jsx>{`
  //         @keyframes glitch {
  //           0% { transform: translate(0, 0); }
  //           20% { transform: translate(-2px, 2px); }
  //           40% { transform: translate(2px, -2px); }
  //           60% { transform: translate(-2px, -2px); }
  //           80% { transform: translate(2px, 2px); }
  //           100% { transform: translate(0, 0); }
  //         }
  //         .glitch {
  //           animation: glitch 0.3s infinite;
  //         }
  //         @keyframes loading {
  //           0% { width: 0%; }
  //           100% { width: 100%; }
  //         }
  //         .animate-loading {
  //           animation: loading 3s infinite;
  //         }
  //       `}</style>
  //     </div>
  //   )
  // }

  return (
    <RetroLayout title="KiwiHacks 2026 - Retro">
      <RetroSection>
        <RetroHeading level={1}>Welcome to KiwiHacks!</RetroHeading>
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
          Join us in <b>March 2026</b> in <b>Auckland, New Zealand</b> for an
          unforgettable hackathon experience!
        </p>
        <p>75+ hackers. 24 hours. Unlimited creativity!</p>
        <div className="my-4 flex flex-col sm:flex-row gap-2">
          <RetroButton
            href="https://forms.fillout.com/t/gwKJLcFXhQus?"
            target="_blank"
          >
            Register Now!
          </RetroButton>
          <RetroButton href="/retro/contact">Contact Us!</RetroButton>
          <RetroButton href="https://hcb.hackclub.com/donations/start/kiwihacks">
            Donate!
          </RetroButton>
        </div>
        <p>
          <BlinkText>
            Registration closes in a while! You probably won&apos;t miss out!
          </BlinkText>
        </p>
      </RetroSection>

      <RetroSection id="about">
        <RetroHeading level={2}>About KiwiHacks</RetroHeading>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-[60%]">
            <p>
              KiwiHacks is a 24 hour Hackthon in Auckland, split over 2 days,
              bringing together young innovators, designers, and problem-solvers
              18 and under to create amazing projects.
            </p>
            <p>
              Whether you&apos;re just starting to code or you&apos;ve been
              building projects for years, KiwiHacks will have workshops to
              learn and build new things, and opportunities connect with other
              young tech enthusiasts.
            </p>
            <p>
              Join us for an unforgettable weekend of creativity, mentorship,
              and fun as we push the boundaries of what&apos;s possible in
              technology. Open exclusively to participants 18 and under.
            </p>
          </div>
          <div className="lg:w-[40%] flex justify-center lg:justify-start">
            <Image
              src="/hackers-discussing.JPEG?height=150&width=250"
              alt="Hackers Collaborating"
              width={250}
              height={150}
              className="border border-[#006600] max-w-full h-auto"
            />
          </div>
        </div>
      </RetroSection>

      <RetroSection id="faq">
        <RetroHeading level={2}>Frequently Asked Questions</RetroHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p>
              <b>What is KiwiHacks?</b>
              <br />
              KiwiHacks is Auckland's premier hackathon for high school students
              and makers 18 and under. It's organized by a small team of
              like-minded teenagers, who are all passionate about technology and
              innovation.
            </p>

            <p>
              <b>When & where is KiwiHacks hosted?</b>
              <br />
              KiwiHacks will be hosted in Auckland, New Zealand in March 2026.
              The event will run for 24 hours over 2 days, day 1 starting at
              8:00 AM on Saturday, running through until Saturday at 8:00 PM,
              and day 2 starting at 8:00 AM on Sunday, running through until
              Sunday at 8:00 PM. (If you need to stay overnight for any reason,
              please email us!)
            </p>

            <p>
              <b>Who can participate in KiwiHacks?</b>
              <br />
              All high-school & upper-middle-school aged students (18 and under)
              are welcome to come!
            </p>

            <p>
              <b>All this, for free?</b>
              <br />
              Yep! Food, swag, and good vibes are all included. Thanks to our
              sponsors, there's no cost to participate in KiwiHacks.
            </p>

            <p>
              <b>What do I need?</b>
              <br />
              Your laptop, chargers, toiletries, sleeping bag (if you plan to
              stay overnight), and an open mind! If you plan to work on a
              hardware project, bring the tools you'll need. We'll have limited
              tools, and a 3d printer & soldering station available.
            </p>
          </div>
          <div>
            <p>
              <b>I&apos;m not good at coding. Can I still participate?</b>
              <br />
              This hackathon is for creatives of all skill levels! We'll have
              workshops and other events so join us and let's learn together.
            </p>

            <p>
              <b>What can I make at KiwiHacks?</b>
              <br />
              Anything you can imagine! Games? Apps? Websites? Programming
              languages? Hardware? You name it! We'll have a bunch of resources
              and mentors to help you out.
            </p>

            <p>
              <b>What if my parents are concerned?</b>
              <br />
              We're here to help! Parents can reach out to us at PLACEHOLDER for
              questions. All participants will need a signed parental consent
              form if under 18.
            </p>

            <p>
              <b>What if I have more questions?</b>
              <br />
              Contact us! Feel free to reach out to us via email at{" "}
              <Link href="mailto:PLACEHOLDER" className="text-[#00ff00]">
                PLACEHOLDER
              </Link>
              .
            </p>
          </div>
        </div>
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
  );
}
