import "./FAQ.css";
import TapeImage from "../../../assets/tape.png";

export default function FAQ() {
  return (
    <section id="faq" className="faq-section" style={{ position: "relative" }}>
      <div
        className="tape-divider-container"
        style={{ backgroundImage: `url(${TapeImage})` }}
        aria-hidden="true"
      ></div>
      <h1 className="mono">Event Info</h1>
      <div className="faq-box">
        <h2 className="mono faq-question">
          When & where is KiwiHacks hosted?
        </h2>
        <p className="faq-answer">
          KiwiHacks will be hosted in Auckland at the GridAKL / John Lysaght
          Startup Coworking space on May 2nd - 3rd 2026. The event will run
          for 24 hours, starting at 11am on Saturday, finishing at 11am on
          Sunday. You can either keep hacking overnight, or go home and
          return in the morning!
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
          Absolutely &mdash; KiwiHacks is for creatives of all skill levels!
          We'll have workshops for beginners on how to code the basics, and
          everyone will finish a project.
        </p>
      </div>
      <div className="faq-box">
        <h2 className="mono faq-question">
          What should I bring to the hackathon?
        </h2>
        <p className="faq-answer">
          Bring your laptop, charger, toiletries and sleeping bag (if you
          plan to stay overnight), and an open mind! If you plan to work on
          a hardware project, bring the tools you'll need. We'll have
          limited tools, a 3D printer & soldering station available. We'll
          provide food, drinks, and snacks throughout the event.
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
          Yep! KiwiHacks (and swag!) is completely free thanks to our
          generous sponsors. Just sign up, turn up, and have fun!
        </p>
      </div>
      <div className="faq-box">
        <h2 className="mono faq-question">What can I make at KiwiHacks?</h2>
        <p className="faq-answer">
          Anything you want! You can build a website, app, game, robot, or
          anything else you can dream up. We'll have a bunch of resources
          and mentors to help you out!
        </p>
      </div>
      <div className="faq-box">
        <h2 className="mono faq-question">
          What if my parents are concerned?
        </h2>
        <p className="faq-answer">
          We understand that parents want to ensure their children are safe.
          Check out our{" "}
          <a href="./parents-guide" target="_blank">
            parents guide
          </a>
          . If your parents have any questions or concerns, we're here to
          help - please have them reach out to us at{" "}
          <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>!
        </p>
      </div>
      <div className="faq-box">
        <h2 className="mono faq-question">
          What if I have more questions?
        </h2>
        <p className="faq-answer">
          No worries, just contact us! Feel free to reach out to us via
          email at{" "}
          <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>.
        </p>
      </div>
    </section>
  );
}
