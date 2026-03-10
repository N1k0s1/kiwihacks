import "./CodeOfConduct.css";
import Navbar from "../Navbar/Navbar";

export default function CodeOfConduct() {
  return (
    <>
      <Navbar />

      <main className="coc-main">
        <section className="coc-card">
          <h1 className="coc-title mono">Code of Conduct</h1>
          <p className="coc-subtitle">
            KiwiHacks is dedicated to providing a safe, inclusive, and
            harassment-free experience for everyone.
          </p>

          <div className="coc-section">
            <h2 className="coc-heading mono">Our Pledge</h2>
            <p className="coc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>

          <div className="coc-section">
            <h2 className="coc-heading mono">Expected Behaviour</h2>
            <ul className="coc-list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Pellentesque habitant morbi tristique senectus et netus.</li>
              <li>Fusce dapibus, tellus ac cursus commodo, tortor mauris.</li>
              <li>Donec sed odio dui. Cras justo odio, dapibus ut facilisis.</li>
              <li>Maecenas sed diam eget risus varius blandit sit amet non.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2 className="coc-heading mono">Unacceptable Behaviour</h2>
            <ul className="coc-list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>Nullam quis risus eget urna mollis ornare vel eu leo.</li>
              <li>Cras mattis consectetur purus sit amet fermentum.</li>
              <li>Aenean eu leo quam. Pellentesque ornare sem lacinia quam.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2 className="coc-heading mono">Consequences</h2>
            <p className="coc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit. Cras mattis consectetur purus
              sit amet fermentum.
            </p>
          </div>

          <div className="coc-section">
            <h2 className="coc-heading mono">Reporting</h2>
            <p className="coc-text">
              If you experience or witness any behaviour that violates this Code
              of Conduct, please report it immediately to a member of the
              KiwiHacks organising team or email us at{" "}
              <a href="mailto:niko@kiwihacks.org">niko@kiwihacks.org</a>.
            </p>
            <p className="coc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante venenatis dapibus posuere velit aliquet.
              Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh.
            </p>
          </div>

          <div className="coc-section">
            <h2 className="coc-heading mono">Scope</h2>
            <p className="coc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
              nulla non metus auctor fringilla.
            </p>
          </div>

          <div className="coc-cta-row">
            <a className="coc-primary-cta" href="/">
              <b>Back to Home</b>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
