import "./NotFound.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

export default function NotFound() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="not-found-container">
        <div className="not-found-content">
          <div className="terminal-icon" aria-hidden="true">
            &gt;_
          </div>
          <h1 className="not-found-title display">404</h1>
          <h2 className="not-found-subtitle display">Error: Page Not Found</h2>
          <p className="not-found-message mono">
            access denied: route does not exist in directory tree
          </p>
          <p className="not-found-hint">
            TODO: fix broken link or navigate back to main
          </p>
          <div className="button-container">
            <a href="/" id="big-button" className="sign-up-link display">
              <b>Return to Home</b>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
