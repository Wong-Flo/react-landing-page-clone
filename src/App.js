import './allSection.css';
import './index.module.css';
import styles from './App.module.css';
import { ReactComponent as Logo } from './svgFiles/Logo.svg';

export default function App() {
  return (
    <>
      <main>
        <div id="sectionOne">
          <header className={styles.header}>
            <Logo />
            <nav>
              <ul>
                <li className="navBarItem">
                  <a href="/">Pricing</a>
                </li>
                <li className="navBarItem">
                  <a href="/">How It Works</a>
                </li>
                <li className="navBarItem">
                  <a href="/">Case Studies</a>
                </li>
                <li className="navBarItem">
                  <a href="/">Blog</a>
                </li>
                <li className="navBarItem">
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </nav>
          </header>
          <section id="sectionText">
            <h1>Unlimited email design. </h1>
            <h2>One low-priced monthly rate.</h2>
            <p>
              With Limitless, you can get unlimited email design requests, and
              revisions for 70% less than the cost of a full-time designer.
            </p>
            <div className="dots">
              <span>•</span>
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </div>
            <p>Sorry, all spots are sold out for September.</p>
            <button>Join the waitlist</button>
            <h2>Trusted by these innovative companies</h2>
            <footer>
              <div>different Logos (6) </div>
            </footer>
          </section>
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>next section</div>
    </>
  );
}
