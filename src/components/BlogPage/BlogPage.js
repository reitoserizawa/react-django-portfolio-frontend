import "./BlogPage.css";
import { useLocation, useNavigate } from "react-router-dom";

function BlogPage() {
  const location = useLocation();
  const article = location.state.from;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/blog`);
  };

  return (
    <section id="blog_page" className="blog_page section">
      <div className="blog_page__container container ">
        <div className="blog_page__title__container">
          <h1 className="blog_page__title">
            <span aria-hidden="true">03</span>Blog
          </h1>
        </div>
        <div className="blog_page__article_title__container">
          <h1 className="blog_page__article_title">{article.title}</h1>
        </div>
      </div>
      <div
        className="blog_page__content container"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>

      <div className="blog_page__button_container container">
        <button className="go_back_bttn" onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"></i> Go back
        </button>

        <a className="go_medium_bttn" href={article.link}>
          Check on <i className="fa-brands fa-medium"></i>
        </a>
      </div>
    </section>
  );
}
export default BlogPage;
