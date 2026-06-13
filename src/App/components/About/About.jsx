import "./About.css";
import ExampleImage from "../../../assets/example.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="text">
        <h2>About KiwiHacks</h2>
        <p className="about-text">
          KiwiHacks is a free 24-hour hackathon for high school students 18 and under. 
          It's a chance to meet new people, learn some new skills, and build something 
          you're actually proud of, whether that's an app, game, website, robot, or 
          a chair that runs away from you.
        </p>
        <p className="about-text">
          It's held at GridAKL in Auckland and brings together 100+ students for a full 
          weekend of creating. We've got mentors around to help, plus beginner-friendly 
          workshops if you're just getting started. Food, drinks, T-shirts, and prizes 
          are all included.
        </p>
        <p className="about-text">
          No matter your skill level, you're welcome. Just sign up, show up, and give 
          it a go.
        </p>
      </div>
      <img
        className="example"
        src={ExampleImage}
        alt="Students hacking at previous events"
        loading="lazy"
      />
    </section>
  );
}
