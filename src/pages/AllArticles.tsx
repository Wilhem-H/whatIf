import { Link } from "react-router-dom";

import { articles } from "../utils/data";
import { Article1 } from "../App";
import { Header } from "../components/Header";
import interrogationPoint from "/interrogationPoint.svg";
import tree from "/tree.svg";
import monkeyIntPoint from "/monkeyIntPoint.svg";
import russia from "/russia.svg";

import "./AllArticles.css";

export default function AllArticles() {
  return (
    <div className="allArticles">
      <div className="allArticles-svg">
        <div className="allArticles-svg-interrogationPoint">
          <img src={interrogationPoint} alt="" />
        </div>
        <div className="allArticles-svg-monkey">
          <img src={monkeyIntPoint} alt="" />
        </div>
        <div className="allArticles-svg-tree">
          <img src={tree} alt="" />
        </div>
        <div className="allArticles-svg-russia">
          <img src={russia} alt="" />
        </div>{" "}
      </div>

      <div className="allArticles-ContentPage">
        <Header />
        <div className="allArticles-Content">
          {articles.map((article: Article1) => (
            <Link to={`/article/${article.id}`} key={article.id}>
              <div className="allArticles-Article">
                <div>
                  <img src={article.image} />
                </div>
                <div className="allArticles-title">
                  <h2>{article.title}</h2>
                  <p>{article.resume}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
