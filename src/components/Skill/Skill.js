import { useState, useEffect } from "react";
import "./Skill.css";
import Loading from "../Loading/Loading";

function Skill() {
  const [skillLoading, setSkillLoading] = useState(true);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    fetch("https://reitos.pythonanywhere.com/api/technology_categories/")
      .then((r) => r.json())
      .then((data) => setTechs(data));
  }, []);

  const insertTech = (data) => {
    if (data) {
      return data.map((tech) => {
        return (
          <div key={tech.id} className="list">
            <label>{tech.name}</label>
            <img src={tech.tech_thumbnail} alt="technology-icon" />
          </div>
        );
      });
    } else {
      return;
    }
  };

  return (
    <>
      {skillLoading ? (
        <Loading
          title="Skills"
          setLoading={setSkillLoading}
          loading={skillLoading}
        />
      ) : (
        <section id="skill" className="skill section">
          <div className="skill__container container">
            <div className="skill__title__container">
              <h1 className="skill__title">
                <span aria-hidden="true">02</span>Skills
              </h1>
            </div>
            <div className="skill__content grid">
              <div className="set">
                <span className="fa-solid fa-globe"></span>
                <header>Frontend Technology</header>
                {insertTech(techs[0].technologies)}
              </div>
              <div className="set">
                <span className="fa-solid fa-screwdriver-wrench"></span>
                <header>Backend Technology</header>
                {insertTech(techs[1].technologies)}
              </div>
              <div className="set">
                <span className="fa-regular fa-comment-dots"></span>
                <header>Other Technology</header>
                {insertTech(techs[2].technologies)}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Skill;
