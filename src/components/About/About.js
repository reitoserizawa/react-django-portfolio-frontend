import { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import image from "../../images/about__blob.jpg";
import Loading from "../Loading/Loading";

function About() {
  const [aboutLoading, setAboutLoading] = useState(true);
  return (
    <>
      {aboutLoading ? (
        <Loading
          title="About"
          setLoading={setAboutLoading}
          loading={aboutLoading}
        />
      ) : (
        <section id="about" className="about section">
          <div className="about__container container grid">
            <div className="about__title__container">
              <h1 className="about__title">
                <span aria-hidden="true">01</span>About
              </h1>
            </div>
            <div className="about__content grid">
              <div className="about__data">
                <p>
                  Hello, world! I am Reito Serizawa. Prior to pursuing a career
                  as a software engineer, I was a sales and marketing
                  professional, mainly working on B2B partnerships. I created my
                  own homepage for the first time when I was in the middle
                  school and I fell in love with coding. Though, my primary
                  focus at the time was languages and cultures.
                </p>
                <p>
                  When I immigrated to the U.S. from Japan in December 2021, I
                  thought it is a great chance to follow my dream as a software
                  engineer and I decided to go to Flatiron School in NYC in
                  April 2022.
                </p>
                <p>
                  I learned both frontend and backend engineering such as
                  JavaScript, Ruby, React, Ruby on Rails, HTML and CSS at the
                  school and graduated in July. I am continuously studying other
                  technologies such as Java, Python and Django after graduation.
                </p>
                <p>
                  When I code, I feel like there is nothing else but me. I love
                  working on different projects so please feel free to check my
                  GitHub.
                </p>
                <p>
                  I have recently been working with a few technologies below:
                </p>
                <div className="about__technologies">
                  <ul className="grid">
                    <li>Python</li>
                    <li>Django</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
              <div className="about__blob">
                <div className="about__blob__image__container">
                  <img src={image} alt="profile" />
                </div>
                <div className="about__blob__content">
                  <div className="about__blob__details">
                    <h2>
                      Reito Serizawa
                      <br />
                      <span>Full-stack Software Engineer</span>
                    </h2>
                    <div className="about__blob__data">
                      <a href="https://www.linkedin.com/in/reitos/">
                        <h3>
                          <i className="fa-brands fa-linkedin-in"></i>
                          <br />
                          <span>LinkedIn</span>
                        </h3>
                      </a>
                      <a href="https://www.github.com/reitoserizawa">
                        <h3>
                          <i className="fa-brands fa-github"></i>
                          <br />
                          <span>GitHub</span>
                        </h3>
                      </a>
                      <a href="https://medium.com/@s.reitiger">
                        <h3>
                          <i className="fa-brands fa-medium"></i>
                          <br />
                          <span>Medium</span>
                        </h3>
                      </a>
                    </div>
                    <div className="actionBtn">
                      {/* <button>Follow</button> */}
                      <Link to="/contact">
                        <button>Contact</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default About;
