import './allSection.css';
import style from './App.module.css';
import { ReactComponent as LogoArticulate } from './svgFiles/Articulate.svg';
import { ReactComponent as LogoLimitless } from './svgFiles/Logo.svg';
import { ReactComponent as LogoMailchimp } from './svgFiles/Mailchimp.svg';
import { ReactComponent as LogoMicrosoft } from './svgFiles/Microsoft.svg';
import { ReactComponent as LogoMybite } from './svgFiles/Mybite.svg';
import { ReactComponent as LogoUber } from './svgFiles/Uber.svg';

export default function App() {
  return (
    <main>
      <div id="sectionOne">
        <header className="header">
          <LogoLimitless />
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
          <p className={style.description}>
            With Limitless, you can get unlimited email design requests, and
            revisions for
          </p>
          <p className={style.descriptionUnderline}>
            70% less than the cost of a full-time designer.
          </p>
          <div className={style.dots}>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
          <p
            className="description"
            style={{
              color: 'white',
            }}
          >
            Sorry, all spots are sold out for September.
          </p>
          <button>Join the waitlist</button>
          <h2
            className="description"
            style={{
              fontSize: '16px',
              opacity: '0.7',
            }}
          >
            Trusted by these innovative companies
          </h2>
          <footer>
            <div className="differentCompanies">
              <LogoArticulate />
              <LogoMailchimp />
              <LogoMicrosoft />
              <LogoMybite />
              <LogoUber />
            </div>
          </footer>
        </section>
      </div>

      <div>
        <section id="sectionTwo">
          <div id="slogan">
            <p id="sloganTitle">
              Finding a reliable freelancer is really hard. Hiring a full-time
              designer is too expensive.
            </p>
            <p id="sloganSubTitle">Limitless makes email easy.</p>
            <p id="sloganContext">
              Our high-quality email design service is stress-free and
              affordable. We give you access to world-class design, unlimited
              projects, and limitless revisions for one flat monthly fee.
            </p>
            <button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                alignItems: 'left',
                marginRight: 'auto',
              }}
            >
              How it works
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
