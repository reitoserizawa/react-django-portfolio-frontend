import { Link } from "react-router-dom";
import "./WorkCard.css";

function WorkCard({ project }) {
  const technologies_front = project.technologies.slice(0, 3).map((tech) => {
    return <img key={tech.name} src={tech.tech_thumbnail} alt="tech icon" />;
  });

  const technologies_back = project.technologies.slice(0, 3).map((tech) => {
    return (
      <div key={tech.name} className="work_card__tech">
        <div className="work_card__tech_icon">
          <img src={tech.tech_thumbnail} alt="tech icon" />
        </div>
        <p className="work_card__tech_name">
          {tech.name === "JavaScript" ? "JS" : tech.name}
        </p>
      </div>
    );
  });

  return (
    <>
      <div className="work_card__container">
        <div className="work_card__front">
          <img
            className="work_card__thumbnail"
            src={project.project_thumbnail}
            alt="sample"
          />
          <h3 className="work_card__name" alt="project cover">
            {project.name}
          </h3>
          <div className="work_card__stats">
            <p className="work_card__left">Techs</p>
            <div className="work_card__techs">{technologies_front}</div>
          </div>
        </div>
        <div className="work_card__back">
          <div className="work_card__links">
            <p className="work_card__link">
              <a href={project.github} style={{ color: "white" }}>
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
            </p>

            <p className="work_card__link">
              <a href={project.demo} style={{ color: "white" }}>
                <i className="fa-brands fa-youtube"></i>
                <span>Demo</span>
              </a>
            </p>
          </div>
          <Link to={`/work/${project.id}`}>
            <button className="work_card__btn">See details</button>
          </Link>
          <div className="work_card__techs">{technologies_back}</div>
        </div>
        <div className="work_card__background">
          <img
            className="work_card__thumbnail"
            src={project.project_thumbnail}
            alt="sample"
          />
        </div>
      </div>
      <svg width="0" height="0" x="0px" y="0px">
        <defs>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path
              d="M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
	C1.8,1,1.8,0.8,2,0.8V0H1.5z"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-200 0"
              begin="0s"
              dur="10s"
              repeatCount="indefinite"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default WorkCard;
