import "./App.css";
import Logo from "./assets/kiwihackslogo.png";
import ExampleImage from "./assets/example.png";
import SignatureImage from "./assets/signatures.png";
import PolaroidImage1 from "./assets/polaroid1.png";
import PolaroidImage2 from "./assets/polaroid2.png";
import StarsImage from "./assets/stars.png";
import TapeImage from "./assets/tape.png";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.faq-box');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <nav className="navbar">
        <a href="/" id="link">
          Home
        </a>
        <a href="#about" className="link">
          About
        </a>
        <a href="#faq" className="link">
          FAQ
        </a>
        <a href="#sponsorships" id="link">
          Sponsors
        </a>
        <a
          className="sign-up-link"
          id="small-button"
          href="https://forms.hackclub.com/kiwihacks"
          target="_blank"
        >
          <b>Sign up for KiwiHacks</b>
        </a>
      </nav>

      <img id="logo" src={Logo} alt="KiwiHacks Logo" />

      <header id="home">
        <img src={StarsImage} alt="cute little stars" id="stars" />
        <img src={StarsImage} alt="cute little stars" id="stars" />
        <img src={StarsImage} alt="cute little stars" id="stars" />
        <img src={StarsImage} alt="cute little stars" id="stars" />
        <img src={StarsImage} alt="cute little stars" id="stars" />
        <img src={StarsImage} alt="cute little stars" id="stars" />
        <img src={StarsImage} alt="cute little stars" id="stars" />

        <h1 className="display" id="title">
          KiwiHacks
        </h1>
        <h2 className="mono" id="subtitle">
          Auckland’s free 24hr hackathon for teenage coders and innovators
        </h2>
      </header>

      <section id="basicinfo">
        <p className="info">Sat 21/Sun 22 March 2026</p>
        <p className="info">GridAKL/John Lysaght Building</p>
        <p className="info">75+ teenage participants</p>
      </section>

      <a
        className="sign-up-link"
        id="big-button"
        href="https://forms.hackclub.com/kiwihacks"
        target="_blank"
      >
        <b>Sign up for KiwiHacks!</b>
      </a>

      <section id="about">
        <div className="text">
          <h2>About KiwiHacks</h2>
          <p id="about-text">
            KiwiHacks is a 24 hour hackathon run FOR FREE by teenagers for
            teenagers - if you're 18 or under, join us for this amazing
            opportunity to make new friends and build a project together!
          </p>
          <p id="about-text">
            It’ll be an unforgettable weekend of coding, mentorship, and fun.
            All skill levels welcome.
          </p>
        </div>
        <img
          id="example"
          src={ExampleImage}
          alt="Image of previous hackathon"
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
            Startup Coworking space on the 21st until the 22nd of March 2026.
            The event will run for 24 hours, starting at 10am on Saturday,
            finishing at 10am on Sunday. You can either keep hacking overnight,
            or to go home and return in the morning!
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">Who can attend KiwiHacks?</h2>
          <p className="faq-answer">
            All high-school students 18 and under are welcome at KiwiHacks!
          </p>
        </div>
        <img src={PolaroidImage2} alt="Photo from a previous hackathon" id="small-decorative-image" />

        <div className="faq-box">
          <h2 className="mono faq-question">
            I'm not a good coder. Can I come?
          </h2>
          <p className="faq-answer">
            Absolutely -- KiwiHacks is for creatives of all skill levels!
            We'll have workshops for beginners on how to code the basics, and everyone
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
        <img src={PolaroidImage1} alt="Photo from a previous hackathon" id="small-decorative-image" />

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
            anything else you can dream up. We'll have a bunch resources and
            mentors to help you out!
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">
            What if my parents are concerned?
          </h2>
          <p className="faq-answer">
            We understand that parents want to ensure their children are safe.
            If your parents have any questions or concerns, we're here to help -
            please have them reach out to us at niko@kiwihacks.org!
          </p>
        </div>
        <div className="faq-box">
          <h2 className="mono faq-question">What if I have more questions?</h2>
          <p className="faq-answer">
            No worries, just contact us! Feel free to reach out to us via email at
            niko@kiwihacks.org.
          </p>
        </div>
      </section>

      <section id="sponsorships">
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <img src={TapeImage} alt="Piece of tape" id="tape" />
        <h1>Sponsorships</h1>

        <p id="sponsor-text">A HUGE thank you to our sponsors!</p>

        <div id="sponsors">
          <a id="sponsor-link" href="https://hackclub.com" target="_blank">
            <div id="sponsor">
              <img src="https://assets.hackclub.com/flag-standalone.svg" />
              <p>Hack Club</p>
            </div>
          </a>
        </div>

        <p id="sponsor-text">
          {" "}
          By becoming a sponsor, you support the next generation of innovators
          and gain visibility for your brand within the tech community.
        </p>
        <br />
        <p id="sponsor-text">
          If you're interested in making the hackathon better by sponsoring
          KiwiHacks, please reach out to niko@kiwihacks.org.
        </p>
        <br />
        <p id="sponsor-text">We're really grateful for your support.</p>

      </section>

      <section id="cta">
        <p className="boldp">What are you waiting for?</p>
        <p className="lastp">
          Join us for an unforgettable weekend of coding, creativity, and fun.
        </p>
        <a
          href="https://forms.hackclub.com/kiwihacks"
          className="sign-up-link"
          id="last-button"
        >
          Sign up for KiwiHacks
        </a>
      </section>

      <footer>
        <div className="footer-text">
          <p className="footer-text-piece">© 2026 KiwiHacks</p>
          <p className="footer-text-piece">
            Built with ❤️ by teens, for teens.
          </p>
        </div>
        <img src={SignatureImage} alt="Signatures of the KiwiHacks team" id="signatures" />
      </footer>
    </>
  );
}
