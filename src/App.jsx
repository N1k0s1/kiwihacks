import "./App.css";

export default function App() {
  return (
    <>
      <header>
      <nav class="navbar">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#sponsor">Sponsors</a>
      </nav>
      </header>

      <h1 class="display" id="title">
        KiwiHacks
      </h1>
      <h2 class="mono">
        Auckland’s 24hr hackathon for teenage coders and innovators
      </h2>
      <p>March 21-22. GridAKL.</p>

      <a
        id="sign-up-link"
        href="https://forms.hackclub.com/kiwihacks"
        target="_blank"
      >
        <b>Sign up for KiwiHacks!</b>
      </a>

      <div>
        <p class="mono">
          KiwiHacks is a 24 hour hackathon run by teenagers for teenagers - if
          you're 18 or under, join us for this amazing opportunity to make new
          friends and build a project together!
          <br />
          It’ll be an unforgettable weekend of coding, mentorship, and fun. All
          skill levels welcome.
        </p>
      </div>
    </>
  );
}
