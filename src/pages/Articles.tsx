import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { articles } from "../utils/data";
import { Article1 } from "../App";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import interrogationPoint from "/interrogationPoint.svg";
import tree from "/tree.svg";
import monkeyIntPoint from "/monkeyIntPoint.svg";
import russia from "/russia.svg";

import "./Articles.css";

export default function Article() {
  const params = useParams();
  const id = params.id ? parseInt(params.id) : 0;

  const currentArticle: Article1 | undefined = articles.find(
    (article: Article1) => article.id === id
  );

  if (currentArticle) {
    return (
      <div className="article">
        <div className="article-background">
          <div className="article-svg-interrogationPoint">
            <img src={interrogationPoint} alt="" />
          </div>
          <div className="article-svg-monkey">
            <img src={monkeyIntPoint} alt="" />
          </div>
          <div className="article-svg-tree">
            <img src={tree} alt="" />
          </div>
          <div className="article-svg-russia">
            <img src={russia} alt="" />
          </div>{" "}
        </div>
        <div className="article-content">
          <Header />
          <div className="article-content-overflow">
            <div className="article-content-button">
              <Link
                to={`/article/${id - 1}`}
                className={id > 1 ? "enable" : "disabled"}
              >
                <Button message="Article précédent" />
              </Link>
              <Link to="/all-articles">
                <Button message="Menu" color="color" />
              </Link>
              <Link
                to={`/article/${id + 1}`}
                className={id < articles.length ? "enable" : "disabled"}
              >
                <Button message="Article suivant" />
              </Link>
            </div>
          </div>

          <div className="article-content-scenario">
            <div className="article-content-scenario-image1">
              <img src={currentArticle.image2} />
            </div>
            <div className="article-content-scenarioOfArticle">
              <h2>{currentArticle.title}</h2>
              <h5>{currentArticle.resume}</h5>
              <br />
              <p>{currentArticle.scenario}</p>
              <br />
              <p>{currentArticle.acteI}</p>
              <br />
              <p className="extend">{currentArticle.acteII}</p>
              <br />
              <p className="extend">{currentArticle.acteIII}</p>
              <br />
              <p className="extend">{currentArticle.conclusion}</p>
            </div>
            <div className="article-content-scenario-image2">
              <img src={currentArticle.image} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Aucun article trouvé pour l'ID {id}</div>;
  }
}
