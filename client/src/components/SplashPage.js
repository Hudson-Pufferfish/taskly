import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./splash.css";

export default function SplashPage() {
  const [email, setEmail] = useState("");
  // const body = document.querySelector('body')
  // body.style.backgroundColor = '#eae6ff'

  // REMOVES THE WIDTH PROPERTY OF ROOT SO THAT IT DOESNT AFFECT CSS IN OTHER PAGES
  useEffect(() => {
    const root = document.getElementById("root");
    root.style.removeProperty("width");
  });

  function saveEmail() {
    document.cookie = `email=${email}`;
  }

  return (
    <>
      <section id="hero">
        <div id="big-container-1">
          <div id="container-1" className="flex-row">
            <div id="container-1-text">
              <h1 id="container-1-heading">Taskly helps teams move work forward.</h1>
              <p id="container-1-paragraph">
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is
                unique—accomplish it all with Taskly.
              </p>
              <input id="splash-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <Link to="/sign-up">
                <button id="sign-up-free" onClick={saveEmail}>
                  Sign up-it's free!
                </button>
              </Link>
            </div>
            <div id="img-1-container">
              <img
                id="img-1"
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="container-2">
          <div id="container-2-text">
            <div id="text-offset">
              <h2 id="container-2-heading">It's more than work. It's a way of working together.</h2>
              <p id="container-2-paragraph">
                Start with a Taskly board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize
                tasks, and build team spirit—all in one place.
              </p>
              <Link to="/sign-up">
                <button id="start-doing">Start doing →</button>
              </Link>
            </div>
          </div>
          <div id="img-2-container">
            <img
              id="img-2"
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/product/89d378b845766a8f0c48e955336266f8/board.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <footer className="flex-row">
        {/* <span>Connect with the developer :</span> */}
        <div id="technologies" className="flex-row">
          <img src="/tech-images/js.png" alt="javascript" />
          <img src="/tech-images/html.png" alt="html5" />
          <img src="/tech-images/css3.png" alt="css3" />
          <img src="/tech-images/react.png" alt="react" />
          <img src="/tech-images/redux.png" alt="redux" />
          <img src="/tech-images/tailwind.png" alt="tailwindcss" />
          <img src="/tech-images/styled-components.png" alt="styled-components" />

          <img src="/tech-images/flask.png" alt="flask" />
          <img src="/tech-images/alembic.png" alt="alembic" />
          <img id="last-tech" src="/tech-images/postgresql.png" alt="" />
        </div>
        <div id="about" className="flex-row">
          <div className="about-img">
            <a href="https://github.com/Hudson-Pufferfish" target="_blank" rel="noopener noreferrer">
              <img src="GitHub.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/son-hudson-nguyen711/" target="_blank" rel="noopener noreferrer">
              <img id="linkedIn-logo" src="/LinkedIn2.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
