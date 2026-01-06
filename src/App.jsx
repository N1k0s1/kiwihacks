import "./App.css";

export default function App() {
  return (
    <>
      <nav class="navbar">
        <a href="/" id="link">Home</a>
        <a href="#faq" id="link">FAQ</a>
        <a href="#about" id="link">About</a>
        <a href="#sponsor" id="link">Sponsors</a>
        <a
          class="sign-up-link"
          id="small-button"
          href="https://forms.hackclub.com/kiwihacks"
          target="_blank"
        >
          <b>Sign up for KiwiHacks</b>
        </a>
      </nav>

      <img src="kiwihackslogo.png" alt="KiwiHacks Logo" />

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
        <p class="mono">
          KiwiHacks is a 24 hour hackathon run by teenagers for teenagers - if
          you're 18 or under, join us for this amazing opportunity to make new
          friends and build a project together!
        </p>
        <p class="mono">
          It’ll be an unforgettable weekend of coding, mentorship, and fun. All
          skill levels welcome.
        </p>
      </section>
    </>
  );
}
