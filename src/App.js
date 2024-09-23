import './allSection.css';
import './index.module.css';
import styles from './App.module.css';

export default function App() {
  return (
    <>
      <main>
        <div id="sectionOne">
          <header className={styles.header}>
            <img
              alt="Logo"
              /* className="navBarItem"
              src="https://limitless.email/wp-content/themes/limitless/img/img-logo-light.svg"
              alt="limitless" */
            />
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
          <section>
            <h1>Unlimited email design. One low-priced monthly rate.</h1>
            <p>
              With Limitless, you can get unlimited email design requests, and
              revisions for 70% less than the cost of a full-time designer.
            </p>
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
