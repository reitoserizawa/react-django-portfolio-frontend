import { useState, useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./Blog.css";

function VerticalCarousel({ articles, author }) {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause === false) {
        moveSlide(1);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  let offsetRadius = 2;
  let animationConfig = { tension: 120, friction: 14 };
  let slides = articles;

  const mod = (a, b) => {
    return ((a % b) + b) % b;
  };

  const modBySlidesLength = (index) => {
    return mod(index, slides.length); //change the slide length
  };

  const moveSlide = (direction) => {
    setIndex(modBySlidesLength(index + direction));
  };

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2); // change the slide length
    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }
    return offsetRadius;
  };

  const getPresentableSlides = () => {
    let newOffsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = [];
    for (let i = -newOffsetRadius; i < 1 + newOffsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }
    return presentableSlides;
  };

  return (
    <>
      <div
        className="blog__wrapper"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {getPresentableSlides().map((slide, presentableIndex) => (
          <BlogCard
            key={slide.pubDate} // data key
            data={slide}
            author={author}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </div>
      <div
        className="blog__nav_bttns"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <button className="blog__nav_bttn" onClick={() => moveSlide(1)}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button className="blog__nav_bttn" onClick={() => moveSlide(-1)}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </>
  );
}

export default VerticalCarousel;
