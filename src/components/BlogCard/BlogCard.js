import { useState } from "react";
import "./BlogCard.css";
import { Spring } from "react-spring/renderprops";

function BlogCard({
  data,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
  author,
}) {
  const [toggleShare, setToggleShare] = useState(false);

  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));
  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  const convertHTMLtoText = (html) => {
    let conversion = html.trim();
    let position = conversion.search("<p>") + 3;
    let words = conversion.slice(position);
    return getWordStr(words);
  };

  const getWordStr = (str) => {
    return str.split(/\s+/).slice(0, 30).join(" ");
  };

  function getFormattedDate(pubDate) {
    const date = new Date(pubDate);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return month + "/" + day + "/" + year;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <div
          className="slide_container"
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <article className="article-card">
            <div className="img-box">
              <img src={data.thumbnail} alt="" className="article-banner" />
            </div>

            <div className="article-content">
              <a href={data.link}>
                <h3 className="article-title">{data.title}</h3>
              </a>
              <p className="article-text">
                {convertHTMLtoText(data.description)}...
              </p>

              <div className="acticle-content-footer">
                <div className="author">
                  <a href={author.link}>
                    <img src={author.image} alt="" className="author-avater" />
                  </a>
                  <div className="author-info">
                    <a href={author.link}>
                      <h4 className="author-name">{data.author}</h4>
                    </a>

                    <div className="publish-date">
                      {getFormattedDate(data.pubDate)}
                    </div>
                  </div>
                </div>

                <div className="share">
                  <button
                    className="share-button"
                    onClick={() => setToggleShare(!toggleShare)}
                  >
                    <i className="fa-solid fa-link"></i>
                  </button>

                  <div
                    className={
                      toggleShare ? "share-option active" : "share-option"
                    }
                  >
                    <a href="https://www.linkedin.com/in/reitos/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/reitoserizawa">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://medium.com/@s.reitiger">
                      <i className="fa-brands fa-medium"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </Spring>
  );
}

export default BlogCard;
