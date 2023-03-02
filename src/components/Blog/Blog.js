import { useState, useEffect } from "react";
import VerticalCarousel from "./VerticalCarousel";
import Loading from "../Loading/Loading";

function Blog() {
  const [blogLoading, setBlogLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@s.reitiger"
    )
      .then((r) => r.json())
      .then((data) => {
        setArticles(data.items);
        setAuthor(data.feed);
      });
  }, []);

  return (
    <>
      {blogLoading ? (
        <Loading
          title="Blog"
          setLoading={setBlogLoading}
          loading={blogLoading}
        />
      ) : (
        <section id="blog" className="blog section">
          <div className="blog__container">
            <div className="blog__content">
              <div className="blog__title__container container">
                <h1 className="blog__title ">
                  <span aria-hidden="true">03</span>Blog
                </h1>
              </div>
              <VerticalCarousel articles={articles} author={author} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Blog;
