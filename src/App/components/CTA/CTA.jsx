import "./CTA.css";

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <p className="boldp">What are you waiting for?</p>
      <p className="lastp">
        Join us for an unforgettable weekend of coding, creativity, and fun.
      </p>
      <a
        href="../signup"
        className="sign-up-link last-button"
        target="_blank"
        rel="noreferrer"
      >
        Sign up for KiwiHacks
      </a>
    </section>
  );
}
