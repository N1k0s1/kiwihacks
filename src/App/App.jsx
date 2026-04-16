import "./App.css";
import Navbar from "../Navbar/Navbar";
import AnnouncementVideoPlayer from "../Video/Video";
import AnnouncementVideo from "../Video/assests/announcement.mp4";
//Branding
import Logo from "../assets/kiwihackslogo.png";
import LogoText from "../assets/kiwihackstext.png";
//Team Images
import NikoImage from "../assets/People/niko.jpg";
import JoshImage from "../assets/People/josh.jpg";
import KyleImage from "../assets/People/kyle.jpg";
import AudreyImage from "../assets/People/audrey.jpg";
import ChristieImage from "../assets/People/christie.jpg";
import MaggieImage from "../assets/People/maggie.jpg";
import SebastianImage from "../assets/People/sebastian.jpg";
import KieraImage from "../assets/People/kiera.jpg";
//Decorative Images
import ExampleImage from "../assets/example.png";
import SignatureImage from "../assets/signatures.png";
import SignatureWideImage from "../assets/signatures-wide.png";
import PolaroidImage1 from "../assets/polaroid1.png";
import PolaroidImage2 from "../assets/polaroid2.png";
import StarsImage from "../assets/stars.png";
import TapeImage from "../assets/tape.png";
//Sponsors
import ExtraordinaryLogo from "../assets/Sponsors/extraordinary-logo.svg";
import CanvaLogo from "../assets/Sponsors/canva-logo.svg";
import ElevenLabsLogo from "../assets/Sponsors/elevenlabs-logo-black.svg";
import xyzLogo from "../assets/Sponsors/xyz-white-logo.svg";
import HackClubLogo from "../assets/Sponsors/hackclub-logo.svg";
//React being react
import { useEffect } from "react";




export default function App() {  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".faq-box");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const announcementVideoConfig = {
    src: AnnouncementVideo,
    title: "Announcement",
    autoPlay: true,
    defaultMuted: false,
    loop: false,
    desktopMinWidth: 768,
    mobilePageHref: "/announcement",
    mobileBannerText: "Watch update",
  };

  return (
    <>
      <Navbar />

    {/*<a
        className="date-change-chip"
        href="/date-change"
        aria-label="Learn more about the KiwiHacks date change"
      >
        <strong>DATE CHANGE</strong>
        <span className="date-change-main">
          May 2nd - 3rd, 2026 (was March 28th - 29th)
        </span>
        <span>
          We apologize for the inconvenience, but we are working hard to make
          this the best hackathon possible.
        </span>
        <span className="date-change-cta">Click to learn more</span>
      </a>
    */}

      <img className="logo" src={Logo} alt="KiwiHacks Kiwi Bird" fetchPriority="high" width="150" height="150" draggable="false" />

      <main>
      <header id="home">
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />
        <img src={StarsImage} alt="Background Stars" className="stars" aria-hidden="true" draggable="false" />

        <img src={LogoText} alt="Kiwihacks" className="kiwihacks-text" fetchPriority="high" draggable="false" />
        <h2 className="mono subtitle">
          Auckland’s free 24hr hackathon for high schoolers
        </h2>
      </header>

      <section className="basicinfo">
        <p className="info">May 2nd - 3rd 2026</p>
        <p className="info">
          <a
            href="https://maps.app.goo.gl/K1r9xAjy5etimeZx8"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            GridAKL/John Lysaght Building
          </a>
        </p>
        <p className="info">100+ teenage participants</p>
      </section>

      <div className="button-container">
        <a
          className="sign-up-link big-button"
          href="https://forms.hackclub.com/kiwihacks"
          target="_blank"
        >
          <b>Sign up for KiwiHacks!</b>
        </a>
        {/* <a
          className="sign-up-link calendar-button"
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=KiwiHacks+2026&dates=20260320T210000Z/20260321T210000Z&details=Auckland%E2%80%99s+free+24hr+hackathon+for+teenage+coders+and+innovators.+Join+us+for+a+weekend+of+coding%2C+mentorship%2C+and+fun!&location=GridAKL+%2F+John+Lysaght+Building%2C+Auckland"
          target="_blank"
        >
          <b>Add to Calendar</b>
        </a> */}
      </div>

      <section id="about" className="about">
        <div className="text">
          <h2>About KiwiHacks</h2>
          <p className="about-text">
            KiwiHacks is a free 24-hour hackathon run by teenagers, for teenagers. 
            If you’re 18 or under, come along to meet new people, learn new skills, 
            and build something awesome together.
          </p>
          <p className="about-text">
            Held at the GridAKL / John Lysaght Building, 
            KiwiHacks brings together 100+ students for a full weekend of creating and experimenting. 
            You can build any coding or hardware project you like - 
            apps, games, websites, robots, or something totally different.
          </p>
          <p className="about-text">
            Throughout the event there will be mentors and beginner-friendly workshops to help you get started or solve problems along the way. 
            Food, snacks, and drinks are all provided for free, plus there are free T-shirts, swag, and prizes for some of the best projects.
          </p>
          <p className="about-text">
            It’s an unforgettable weekend of coding, creativity, and collaboration, and all skill levels are welcome.
          </p>
        </div>
        <img
          className="example"
          src={ExampleImage}
          alt="Students hacking at previous events"
          loading="lazy"
        />
      </section>

      <section id="faq">
        <h1 className="mono">Event Info</h1>
        <div className="faq-box">
          <h2 className="mono faq-question">
            When & where is KiwiHacks hosted?
          </h2>
          <p className="faq-answer">
            KiwiHacks will be hosted in Auckland at the GridAKL / John Lysaght
            Startup Coworking space on May 2nd - 3rd 2026.
            The event will run for 24 hours, starting at 11am on Saturday,
            finishing at 11am on Sunday. You can either keep hacking overnight,
            or go home and return in the morning!
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">Who can attend KiwiHacks?</h2>
          <p className="faq-answer">
            All high-school students 18 and under are welcome at KiwiHacks!
          </p>
        </div>
        {/* TODO: Add back when fixed — these images break layout on large screens
        <img
          src={PolaroidImage2}
          alt=""
          className="small-decorative-image"
          loading="lazy"
        />
        */}

        <div className="faq-box">
          <h2 className="mono faq-question">
            I'm not a good coder. Can I come?
          </h2>
          <p className="faq-answer">
            Absolutely &mdash; KiwiHacks is for creatives of all skill levels! We'll
            have workshops for beginners on how to code the basics, and everyone
            will finish a project.
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">
            What should I bring to the hackathon?
          </h2>
          <p className="faq-answer">
            Bring your laptop, charger, toiletries and sleeping bag (if you plan
            to stay overnight), and an open mind! If you plan to work on a
            hardware project, bring the tools you'll need. We'll have limited
            tools, a 3D printer & soldering station available. We'll provide
            food, drinks, and snacks throughout the event.
          </p>
        </div>
        {/* TODO: Add back when fixed — these images break layout on large screens
        <img
          src={PolaroidImage1}
          alt=""
          className="small-decorative-image"
          loading="lazy"
        />
        */}

        <div className="faq-box">
          <h2 className="mono faq-question">All this, for free?</h2>
          <p className="faq-answer">
            Yep! KiwiHacks (and swag!) is completely free thanks to our generous
            sponsors. Just sign up, turn up, and have fun!
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">What can I make at KiwiHacks?</h2>
          <p className="faq-answer">
            Anything you want! You can build a website, app, game, robot, or
            anything else you can dream up. We'll have a bunch of resources and
            mentors to help you out!
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">
            What if my parents are concerned?
          </h2>
          <p className="faq-answer">
            We understand that parents want to ensure their children are safe.
            Check out our{" "}
            <a
              href="https://docs.google.com/document/d/14HMPfRkPQrFVf1E87cvsUqguILbtwoifEJ5hYUwhgRM/edit?tab=t.0#heading=h.12mg8uzylly"
              target="_blank"
            >
              parents guide
            </a>
            . If your parents have any questions or concerns, we're here to help
            - please have them reach out to us at{" "}
            <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>!
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">What if I have more questions?</h2>
          <p className="faq-answer">
            No worries, just contact us! Feel free to reach out to us via email
            at{" "}
            <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>.
          </p>
        </div>
      </section>

      <section id="partners" className="partners-section">
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <img src={TapeImage} alt="Tape" className="tape" aria-hidden="true" />
        <h1>Partners</h1>

        <p className="partner-text">A HUGE thank you to our partners!</p>

        <div className="partners-grid">
          <a 
              className="partner-item" 
              href="https://hackclub.com" 
              target="_blank" 
              rel="noreferrer"
            >
            <div className="partner-card">
              <img className="partner-logo" src={HackClubLogo} alt="Hack Club Flag Logo" loading="lazy" draggable="false" />
            </div>
          </a>

          <a 
              className="partner-item" 
              href="https://gen.xyz/" 
              target="_blank" 
              rel="noreferrer"
            >
            <div className="partner-card">
              <img className="partner-logo" src={xyzLogo} alt=".xyz domains Logo" loading="lazy" draggable="false" />
            </div>
          </a>

          <a
              className="partner-item"
              href="https://www.extraordinarypay.com/"
              target="_blank"
              rel="noreferrer"
            >
            <div className="partner-card">
              <img className="partner-logo" src={ExtraordinaryLogo} alt="Extraordinary Pay Logo" loading="lazy" draggable="false" />
            </div>
          </a>

          <a
              className="partner-item"
              href="https://www.canva.com/"
              target="_blank"
              rel="noreferrer"
            >
            <div className="partner-card">
              <img className="partner-logo" src={CanvaLogo} alt="Canva Logo" loading="lazy" draggable="false" />
            </div>
          </a>

          <a
              className="partner-item"
              href="https://elevenlabs.io/"
              target="_blank"
              rel="noreferrer"
            >
            <div className="partner-card">
              <img className="partner-logo" src={ElevenLabsLogo} alt="ElevenLabs Logo" loading="lazy" draggable="false" />
            </div>
          </a>
        </div>

        <p className="partner-text">
          {" "}
          By becoming a partner, you support the next generation of innovators
          and gain visibility for your brand within the tech community.
        </p>
        <br />
        <p className="partner-text">
          If you're interested in making the hackathon better by partnering
          with KiwiHacks, please reach out to{" "}
          <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>.
        </p>
        <br />
        <p className="partner-text">We're really grateful for your support.</p>
      </section>

      <section id="team">
        <h1>Meet the Team!</h1>
        <div className="meet-the-team">
          <div className="team-member-div">
            <img src={NikoImage} alt="Niko Purdie" loading="lazy" />
            <h2>Niko Purdie</h2>
            <p>
              <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>
              <br />
              <a href="tel:0221350419">022 135 0419</a>
            </p>
            <p>
              I'm a 17 year old coder from Sacred Heart College and the lead
              organiser of KiwiHacks. This is the fourth hackathon I’ve
              organized for students in Auckland! I’m passionate about both
              sailing and coding, and I’m super excited to help create an
              awesome experience for everyone who attends!!
            </p>
          </div>

          <div className="team-member-div">
            <img src={SebastianImage} alt="Sebastian Johnson" loading="lazy" />
            <h2>Sebastian Johnson</h2>
            <p><a href="mailto:pakkid@stuffandthings.cc">pakkid@stuffandthings.cc</a></p>
            <p>
              I’m a 15 year old student from Pakuranga College helping out with the
              website and technical infrastructure for KiwiHacks. I’m passionate about
              technology, AV, and building cool systems that make events run smoothly.
              I’m excited to help bring KiwiHacks to life and see the amazing projects
              people create during the hackathon!
            </p>
          </div>

          <div className="team-member-div">
            <img src={JoshImage} alt="Josh Palmer" loading="lazy" />
            <h2>Josh Palmer</h2>
            <p>
              <a href="mailto:josh@kiwihacks.org">josh@kiwihacks.org</a>
            </p>
            <p>
              I’m a 14 year old scout from Selwyn College leading outreach +
              helping out the website. I'm passionate about coding & learning. I
              love the thrill of getting a project finally working & I’m super
              excited to see what people create at KiwiHacks!
            </p>
          </div>

          <div className="team-member-div">
            <img src={AudreyImage} alt="Audrey Shi" loading="lazy" />
            <h2>Audrey Shi</h2>
            <p>
              <a href="mailto:audrey@kiwihacks.org">audrey@kiwihacks.org</a>
            </p>
            <p>
              Hey there! I’m a 15 year old coder from Glendowie College, and the
              Art & Branding lead at KiwiHacks. I have a passion for all sorts
              of things, including coding, art, and learning. I’m extremely
              grateful to be a part of the team, and I’m excited to make
              KiwiHacks an amazing event for all our attendees!
            </p>
          </div>

          <div className="team-member-div">
            <img src={KyleImage} alt="Kyle Bendall" loading="lazy" />
            <h2>Kyle Bendall</h2>
            <p>
              <a href="mailto:kyle@kiwihacks.org">kyle@kiwihacks.org</a>
            </p>
            <p>
              I’m a 16 year old coder from Marcellin College leading website
              building and helping with outreach. I’m passionate about coding
              and learning (and playing video games). I’m excited to help people
              create something cool at KiwiHacks!
            </p>
          </div>

          <div className="team-member-div">
            <img src={ChristieImage} alt="Christie Berenshteyn" loading="lazy" />
            <h2>Christie Berenshteyn</h2>
            <p>
              <a href="mailto:christie@kiwihacks.org">christie@kiwihacks.org</a>
            </p>
            <p>
              I’m a Year 11 Glendowie College student helping with the website, outreach, and marketing, among other things &mdash; I have my eggs in a lot of baskets! <br />
              Outside of coding, I enjoy playing the piano, baking, and learning new things. I'm also super passionate about supporting my community, and lead several school clubs. <br />
              I’m really excited to make KiwiHacks New Zealand’s BEST hackathon!
            </p>
          </div>

          <div className="team-member-div">
            <img src={MaggieImage} alt="Maggie Berenshteyn" loading="lazy" />
            <h2>Maggie Berenshteyn</h2>
            <p><a href="mailto:maggie.berenshteyn@gmail.com">maggie.berenshteyn@gmail.com</a></p>
            <p>
              I’m a 15 year old student from Glendowie College who organises the
              social media and advertising for KiwiHacks. I’m excited to help
              spread the word about KiwiHacks to make it a super fun event for
              everyone!
            </p>
          </div>

          <div className="team-member-div">
            <img src={KieraImage} alt="Kiera Langridge" loading="lazy" />
            <h2>Kiera Langridge</h2>
            <p><a href="mailto:kiera.langridge@gmail.com">kiera.langridge@gmail.com</a></p>
            <p>
              I’m a 16 year old student from Baradene College helping out with outreach and branding. 
              I’m passionate about learning, writing, and coding awesome projects. 
              I can’t wait to see what people create at KiwiHacks, 
              and I’m so excited to help bring the event to life!
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <p className="boldp">What are you waiting for?</p>
        <p className="lastp">
          Join us for an unforgettable weekend of coding, creativity, and fun.
        </p>
        <a
          href="https://forms.hackclub.com/kiwihacks"
          className="sign-up-link last-button"
          target="_blank"
          rel="noreferrer"
        >
          Sign up for KiwiHacks
        </a>
      </section>
      </main>
      <footer>
        <div className="footer-signature-container">
          <picture>
            <source
              srcSet={SignatureWideImage}
              media="(min-width: 768px)"
            />
            <img
              src={SignatureImage}
              alt="Signatures of the KiwiHacks team"
              className="signatures"
              draggable="false"
            />
          </picture>
        </div>
        <div className="footer-text">
          <p className="footer-text-piece">© 2026 KiwiHacks</p>
          <p className="footer-text-piece">
            Built with ❤️ by teens, for teens.
          </p>
          <p className="footer-text-piece">
            <a href="https://github.com/N1k0s1/kiwihacks" target="_blank" rel="noreferrer">
              View our code on GitHub
            </a>
          </p>
        </div>
        <div className="footer-links">
          <a
            href="./discord"
            target="_blank"
            className="footer-link"
            aria-label="Discord"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/kiwihacks/"
            target="_blank"
            className="footer-link"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://nz.linkedin.com/company/kiwihacks"
            target="_blank"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://github.com/orgs/KiwiHacksNZ"
            target="_blank"
            className="footer-link"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <div className="footer-important-links">
          <p>Important Links</p>
          <a href="/code-of-conduct">Code of Conduct</a>
        </div>
      </footer>
      <AnnouncementVideoPlayer {...announcementVideoConfig} />
    </>
  );
}
