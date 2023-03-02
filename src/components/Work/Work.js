import { useState, useEffect } from "react";
import "./Work.css";
import Loading from "../Loading/Loading";
import WorkCard from "../WorkCard/WorkCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Work() {
  const [workLoading, setWorkLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://reitos.pythonanywhere.com/api/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const items = projects.map((project) => {
    return (
      <div className="center">
        <WorkCard
          key={project.id}
          setModal={setModal}
          modal={modal}
          project={project}
        />
      </div>
    );
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      {workLoading ? (
        <Loading
          title="Work"
          setLoading={setWorkLoading}
          loading={workLoading}
        />
      ) : (
        <section id="work" className="work section">
          <div className="work__container container">
            <div className="work__title__container">
              <h1 className="work__title">
                <span aria-hidden="true">02</span>Work
              </h1>
            </div>
            <div className="work__content">
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="responsive"
                autoPlay={!modal}
                autoPlayInterval={1500}
                infinite={true}
                keyboardNavigation={true}
                renderPrevButton={() => {
                  return (
                    <button className="p-4 absolute left-0 top-0 alice_arrows">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                  );
                }}
                renderNextButton={() => {
                  return (
                    <button className="p-4 absolute right-0 top-0 alice_arrows">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  );
                }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Work;
