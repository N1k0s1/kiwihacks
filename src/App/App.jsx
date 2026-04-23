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
// Sponsors
import sponsorsData from "./sponsors.json";
// Automatically import all logos in the Sponsors directory
const sponsorLogos = import.meta.glob("../assets/Sponsors/*", { import: "default", eager: true });
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneFlip, FaDiscord, FaGitlab } from "react-icons/fa6";

//React being react
import { useEffect } from "react";




export default function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const stars = document.querySelectorAll(".stars");
      stars.forEach((star) => {
        const rect = star.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          star.classList.add("star-hovered");
        } else {
          star.classList.remove("star-hovered");
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
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

      <div className="section-tape-divider" aria-hidden="true">
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
        <img src={TapeImage} alt="" className="divider-tape" />
      </div>

      <section id="swag" className="merch">
        <h1 className="mono section-heading">Swag</h1>
        <div className="merch-content">
          <div className="merch-copy">
            <h3>Shirts for every attendee</h3>
            <p className="merch-text">
              Every hacker that ships a project gets a KiwiHacks tee, completely free! Here’s a
              look at the front and back of this year’s shirt.
            </p>
          </div>
          <div className="merch-gallery">
            <figure className="merch-card">
              <div className="merch-image-shell">
                <img
                  className="merch-image"
                  src="/kiwihacks_shirt_front_cutout.png"
                  alt="Front of the KiwiHacks shirt"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <figcaption className="mono">Front</figcaption>
            </figure>

            <figure className="merch-card">
              <div className="merch-image-shell">
                <img
                  className="merch-image"
                  src="/kiwihacks_shirt_back_cutout.png"
                  alt="Back of the KiwiHacks shirt"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <figcaption className="mono">Back</figcaption>
            </figure>
          </div>
        </div>
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
            I’m not a good coder. Can I come?
          </h2>
          <p className="faq-answer">
            Absolutely &mdash; KiwiHacks is for creatives of all skill levels! We’ll
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
            hardware project, bring the tools you’ll need. We’ll have limited
            tools, a 3D printer & soldering station available. We’ll provide
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
            anything else you can dream up. We’ll have a bunch of resources and
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
              href="./parents-guide"
              target="_blank"
            >
              parents guide
            </a>
            . If your parents have any questions or concerns, we’re here to help
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

      <section id="partnerships" className="partnerships" data-role="partners">
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

        <div className="partners" data-role="partners">
          {sponsorsData.map((sponsor, idx) => {
            const logoSrc = sponsorLogos[`../assets/Sponsors/${sponsor.logo}`];
            return (
              <a
                key={idx}
                className="partner-link" data-role="partner-link"
                href={sponsor.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="partner" data-role="partner">
                  <img
                    className="partner-img"
                    src={logoSrc}
                    alt={sponsor.alt || `${sponsor.name} Logo`}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </a>
            );
          })}
        </div>

        <p className="partner-text" data-role="partner-cta">
          {" "}
          By becoming a partner, you support the next generation of innovators
          and gain visibility for your brand within the tech community.
        </p>
        <br />
        <p className="partner-text" data-role="partner-contact">
          If you’re interested in making the hackathon better by partnering with
          KiwiHacks, please reach out to{" "}
          <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>.
        </p>
        <br />
        <p className="partner-text" data-role="partner-thanks">
          We’re really grateful for your support.
        </p>
      </section>

      <section id="team">
        <h1>Meet the Team!</h1>
        <div className="meet-the-team">
          <div className="team-member-div">
            <img src={NikoImage} alt="Niko Purdie" loading="lazy" />
            <h2>Niko Purdie</h2>
            <div className="team-socials">
              <a href="mailto:niko@kiwihacks.org" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              <a href="tel:0221350419" aria-label="Phone" target="_blank" rel="noreferrer"><FaPhoneFlip /></a>
              <a href="https://www.instagram.com/niko_p101/?hl=en" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/nikopurdie?originalSubdomain=nz" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/N1k0s1" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
            <p>
              I’m a 17 year old coder from Sacred Heart College and the lead
              organiser of KiwiHacks. This is the fourth hackathon I’ve
              organized for students in Auckland! I’m passionate about both
              sailing and coding, and I’m super excited to help create an
              awesome experience for everyone who attends!!
            </p>
          </div>

          <div className="team-member-div">
            <img src={SebastianImage} alt="Sebastian Johnson" loading="lazy" />
            <h2>Sebastian Johnson</h2>
            <div className="team-socials">
              <a href="mailto:pakkid@stuffandthings.cc" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              <a href="https://www.instagram.com/le_snakey" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/sebastian-johnson-61389138b" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/pakkid" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
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
            <div className="team-socials">
              <a href="mailto:josh@kiwihacks.org" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/josh-palmer-b9942237b/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/heycastawhat" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://gitlab.com/castawhat" aria-label="GitLab" target="_blank" rel="noreferrer"><FaGitlab /></a>
            </div>
            <p>
              I’m a 14 year old scout from Selwyn College leading outreach +
              helping out the website. I’m passionate about coding & learning. I
              love the thrill of getting a project finally working & I’m super
              excited to see what people create at KiwiHacks!
            </p>
          </div>

          <div className="team-member-div">
            <img src={AudreyImage} alt="Audrey Shi" loading="lazy" />
            <h2>Audrey Shi</h2>
            <div className="team-socials">
              <a href="mailto:audrey@kiwihacks.org" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/audrey-shi-0657213b4/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              {/* <a href="https://github.com/AudreyShi" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a> */}
            </div>
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
            <div className="team-socials">
              <a href="mailto:kyle@kiwihacks.org" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              <a href="https://linkedin.com/in/kyle-b-134a48390" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Dekoder-py" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://gitlab.com/dekoder-py" aria-label="GitLab" target="_blank" rel="noreferrer"><FaGitlab /></a>
            </div>
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
            <div className="team-socials">
              <a href="mailto:christie@kiwihacks.org" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              {/* <a href="https://www.linkedin.com/in/christie-berenshteyn-3b3b3b/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a> */}
              <a href="https://github.com/Christie125" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
            <p>
              I’m a Year 11 Glendowie College student helping with outreach and marketing, among other things. Outside of coding, 
              I enjoy playing the piano, baking, learning new things, and leading several school clubs. 
              I’m really excited to make KiwiHacks New Zealand’s BEST hackathon!
            </p>
          </div>

          <div className="team-member-div">
            <img src={MaggieImage} alt="Maggie Berenshteyn" loading="lazy" />
            <h2>Maggie Berenshteyn</h2>
            <div className="team-socials">
              <a href="mailto:maggie.berenshteyn@gmail.com" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              {/* <a href="https://www.linkedin.com/in/maggie-berenshteyn-3b3b3b/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/MaggieBerenshteyn" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a> */}
            </div>
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
            <div className="team-socials">
              <a href="mailto:kiera.langridge@gmail.com" aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/kiera-langridge-459098322/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              {/* <a href="https://github.com/KieraLangridge" aria-label="Github" target="_blank" rel="noreferrer"><FaGithub /></a> */}
            </div>
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
          href="./signup"
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
            <FaDiscord />
          </a>
          <a
            href="https://www.instagram.com/kiwihacks/"
            target="_blank"
            className="footer-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://nz.linkedin.com/company/kiwihacks"
            target="_blank"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/orgs/KiwiHacksNZ"
            target="_blank"
            className="footer-link"
            aria-label="GitHub"
          >
            <FaGithub />
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
