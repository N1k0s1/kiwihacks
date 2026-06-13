import "./Hero.css";
import LogoText from "../../../assets/kiwihackstext.png";
import StarsImage from "../../../assets/stars.png";

export default function Hero() {
  return (
    <header id="home">
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />
      <img
        src={StarsImage}
        alt="Background Stars"
        className="stars"
        aria-hidden="true"
        draggable="false"
      />

      <img
        src={LogoText}
        alt="Kiwihacks"
        className="kiwihacks-text"
        fetchPriority="high"
        draggable="false"
      />
      <h2 className="mono subtitle">
        Auckland's free 24hr hackathon for high schoolers
      </h2>
    </header>
  );
}
