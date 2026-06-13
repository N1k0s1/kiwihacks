import "./CTA.css";

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <p className="boldp">What are you waiting for?</p>
      <p className="lastp">
    Find out more about our biggest event yet!
      </p>
      <a
        href="https://nova.kiwihacks.org"
        className="nova-sign-up-link nova-last-button"
        target="_blank"
        rel="noreferrer"
      >
        Explore KiwiHacks Nova!
      </a>
    </section>
  );
}
