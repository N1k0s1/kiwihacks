import "./Prizes.css";
import { FaTrophy, FaMedal } from "react-icons/fa6";

export default function Prizes() {
  return (
    <section id="prizes" className="prizes-section">
      <h1 className="mono">Placing Prizes</h1>
      <p className="prizes-subtitle">Compete and win amazing gear for your setup!</p>
      <div className="prizes-container podium-layout">
        <div className="prize-card silver">
          <div className="prize-medal"><FaMedal /></div>
          <h3 className="mono">2nd Place</h3>
          <ul className="prize-list">
            <li>Gaming Headset</li>
            <li>Active Smart Watch</li>
            <li>Posca Paint Markers</li>
          </ul>
        </div>
        
        <div className="prize-card gold">
          <div className="prize-medal"><FaTrophy /></div>
          <h3 className="mono">1st Place</h3>
          <ul className="prize-list">
            <li>Noise-cancelling Earbuds</li>
            <li>Instax Digital Camera</li>
            <li>Drawing Tablet</li>
          </ul>
        </div>

        <div className="prize-card bronze">
          <div className="prize-medal"><FaMedal /></div>
          <h3 className="mono">3rd Place</h3>
          <ul className="prize-list">
            <li>Galaxy Projector</li>
            <li>Gaming Mouse</li>
            <li>Bluetooth Speaker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
