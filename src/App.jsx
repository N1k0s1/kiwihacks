import "./App.css";
import Logo from "./assets/kiwihackslogo.png";
import ExampleImage from "./assets/example.webp";

export default function App() {
  return (
    <>
      <nav class="navbar">
        <a href="/" id="link">
          Home
        </a>
        <a href="#faq" id="link">
          FAQ
        </a>
        <a href="#about" id="link">
          About
        </a>
        <a href="#sponsor" id="link">
          Sponsors
        </a>
        <a
          class="sign-up-link"
          id="small-button"
          href="https://forms.hackclub.com/kiwihacks"
          target="_blank"
        >
          <b>Sign up for KiwiHacks</b>
        </a>
      </nav>

      <img id="logo" src={Logo} alt="KiwiHacks Logo" />

      <header id="home">
        <h1 class="display" id="title">
          KiwiHacks
        </h1>
        <h2 class="mono" id="subtitle">
          Auckland’s 24hr hackathon for teenage coders and innovators
        </h2>
      </header>

      <section id="basicinfo">
        <p class="info">Sat 21/Sun 22 March 2026</p>
        <p class="info">GridAKL/John Lysaght Building</p>
        <p class="info">75+ participants</p>
      </section>

      <a
        class="sign-up-link"
        id="big-button"
        href="https://forms.hackclub.com/kiwihacks"
        target="_blank"
      >
        <b>Sign up for KiwiHacks!</b>
      </a>

      <section id="about">
        <div class="text">
          <p class="mono" id="about-text">
            KiwiHacks is a 24 hour hackathon run by teenagers for teenagers - if
            you're 18 or under, join us for this amazing opportunity to make new
            friends and build a project together!
          </p>
          <p class="mono" id="about-text">
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
        <h1 class="mono">FAQ</h1>
        <div class="faq-box">
          <h3>What is KiwiHacks?</h3>
          <p>
            KiwiHacks is Auckland's premier hackathon for high school students
            and makers 18 and under. It's organized by a small team of
            like-minded teenagers, who are all passionate about technology and
            innovation.
          </p>
        </div>

        <div class="faq-box">
          <h3>When & where is KiwiHacks hosted?</h3>
          <p>
            KiwiHacks will be hosted in Auckland, New Zealand at the GridAKL /
            John Lysaght Startup Coworking space on the 21st until the 22nd of
            March 2026. The event will run for 24 hours, with the start being
            10am Saturday, and the end being 10am Sunday. You're welcome to
            choose to keep hacking overnight, or to go home! Contact us if this
            is the case!
          </p>
        </div>

        <div class="faq-box">
          <h3>Who can participate in KiwiHacks?</h3>
          <p>All high-school students (18 and under) are welcome to come!</p>
        </div>

        <div class="faq-box">
          <h3>All this, for free?</h3>
          <p>
            Yep! Food, swag, and everything else is all included! Shoutout to
            our sponsors!
          </p>
        </div>

        <div class="faq-box">
          <h3>What do I need?</h3>
          <p>
            Your laptop, chargers, toiletries, sleeping bag (if you plan to stay
            overnight), and an open mind! If you plan to work on a hardware
            project, bring the tools you'll need. We'll have limited tools, a 3d
            printer & soldering station available.
          </p>
        </div>

        <div class="faq-box">
          <h3>I'm not good at coding. Can I still participate?</h3>
          <p>
            This hackathon is for creatives of all skill levels! We'll have
            workshops for beginners on how to code the basics, and everyone will
            finish with a project!.
          </p>
        </div>

        <div class="faq-box">
          <h3>What can I make at KiwiHacks?</h3>
          <p>
            Anything you can imagine! Games? Apps? Websites? Programming
            languages? Hardware? You name it! We'll have a bunch of resources
            and mentors to help you out.
          </p>
        </div>
        <div class="faq-box">
          <h3>What if my parents are concerned?</h3>
          <p>
            We're here to help! Parents can reach out to us at
            niko@kiwihacks.org for questions.
          </p>
        </div>

        <div class="faq-box">
          <h3>What if I have more questions?</h3>
          <p>
            Contact us! Feel free to reach out to us via email at
            niko@kiwihacks.org.
          </p>
        </div>
      </section>
    </>
  );
}
