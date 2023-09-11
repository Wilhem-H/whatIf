import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { articles } from "../utils/data";
import { Article1 } from "../App";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import "./Articles.css";

export default function Article() {
  const params = useParams();
  const id = params.id ? parseInt(params.id) : 0;

  const currentArticle: Article1 | undefined = articles.find(
    (article: Article1) => article.id === id
  );

  if (currentArticle) {
    return (
      <div className="article-content">
        <Header />
        <div className="article-content-articleId">{`article ${id}`}</div>
        <div className="article-content-link">
          <Link
            to={`/article/${id - 1}`}
            className={id > 1 ? "enable" : "disabled"}
          >
            <Button message="Article précédent" />
          </Link>
          <Link to="/all-articles">
            <Button message="Menu" />
          </Link>
          <Link
            to={`/article/${id + 1}`}
            className={id < articles.length ? "enable" : "disabled"}
          >
            <Button message="Article suivant" />
          </Link>
        </div>

        <div className="article-content-scenario">
          <h2>{currentArticle.title}</h2>
          <h5>{currentArticle.resume}</h5>
          <p>{currentArticle.scenario}</p>
        </div>
      </div>
    );
  } else {
    return <div>Aucun article trouvé pour l'ID {id}</div>;
  }
}
