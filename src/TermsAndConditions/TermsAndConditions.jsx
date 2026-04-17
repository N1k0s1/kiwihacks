import "./TermsAndConditions.css";
import Navbar from "../Navbar/Navbar";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />

      <main className="tac-main">
        <section className="tac-card">
          <h1 className="tac-title mono">Terms & Conditions</h1>
          <p className="tac-subtitle">
            By registering for and attending Kiwihacks, you agree to the following terms:
          </p>

          <div className="tac-section">
            <h2 className="tac-heading mono">1. Eligibility</h2>
            <p className="tac-text">
              This event is open to participants under 18 years old. All participants must have valid parental or guardian consent to attend, including overnight participation.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">2. Parental Consent</h2>
            <p className="tac-text">
              Attendance is only permitted if a parent or legal guardian has completed the official consent and emergency contact form. Participants without completed consent will not be permitted entry or check-in.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">3. Assumption of Risk</h2>
            <p className="tac-text">
              Participants acknowledge that participation in a hackathon involves general risks including, but not limited to, use of computers, shared physical spaces, and overnight attendance. Participation is voluntary and at your own risk.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">4. Liability</h2>
            <p className="tac-text">
              KiwiHacks organisers, volunteers, venue partners, and staff are not liable for:
            </p>
            <ul className="tac-list">
              <li>Personal injury</li>
              <li>Loss or damage to personal belongings</li>
              <li>Technical issues or loss of data</li>
              <li>Travel to and from the event</li>
            </ul>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">5. Code of Conduct</h2>
            <p className="tac-text">
              All participants must comply with the KiwiHacks Code of Conduct (<a href="/conduct">kiwihacks.org/conduct</a>). Harassment, unsafe behaviour, discrimination, or disruptive conduct will not be tolerated and may result in removal from the event.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">6. Illegal or Inappropriate Activity</h2>
            <p className="tac-text">
              Participants must not use event resources to engage in illegal activity, including but not limited to hacking real systems, malicious software development, or any unlawful behaviour. Any such activity will result in immediate removal from the event and may be reported to appropriate authorities if required.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">7. Safety and Health</h2>
            <p className="tac-text">
              Participants must follow all instructions from organisers and health and safety staff. Emergency procedures must be followed at all times.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">8. Personal Property</h2>
            <p className="tac-text">
              Participants are responsible for their own belongings. KiwiHacks is not responsible for loss, theft, or damage of personal items.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">9. Data Collection</h2>
            <p className="tac-text">
              We collect personal information including names, emergency contacts, and parental consent details for safety and operational purposes only. This information will be handled in accordance with the Privacy Act 2020 and will not be shared outside event administration.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">10. Event Changes</h2>
            <p className="tac-text">
              Organisers reserve the right to modify, postpone, or cancel the event if required for safety or operational reasons.
            </p>
          </div>

          <div className="tac-section">
            <h2 className="tac-heading mono">11. Acceptance</h2>
            <p className="tac-text">
              By attending the event, participants and their guardians agree to these terms in full.
            </p>
          </div>

          <div className="tac-cta-row">
            <a className="tac-primary-cta" href="/">
              <b>Back to Home</b>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
