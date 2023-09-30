import { Link } from "react-router-dom";

import { Button } from "../components/Button";
import logo1 from "/logo1.png";
import gear from "/gear.svg";
import interrogationPoint from "/interrogationPoint.svg";
import tree from "/tree.svg";
import monkeyIntPoint from "/monkeyIntPoint.svg";
import russia from "/russia.svg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-gear">
        <img src={gear} />
      </div>
      <div className="home-logo">
        <img src={logo1} />
      </div>
      <div className="home-monkeyIntPoint">
        <img src={monkeyIntPoint} />
      </div>
      <div className="home-interrogationPoint">
        <img src={interrogationPoint} />
      </div>
      <div className="home-text">
        <h1>Bienvenue sur : " Et si ...? " </h1>
        <p>
          Pour ce projet, je me suis inspiré du concept de la série Disney "What
          if ...?" et de l'intelligence artificielle pour imaginer des scénarios
          qui décrivent l'état actuel du monde si certains éléments clés de
          l'histoire s'étaient produits différemment.
        </p>
        <p>
          J'ai conçu moi-même les scénarios et j'ai utilisé la puissance de l'IA
          pour générer les histoires ainsi que certaines images. Merci donc à
          Chat GPT, Crayion et Unsplash pour leurs contributions.
        </p>
      </div>
      <div className="home-nothing"></div>
      <div className="home-button">
        <Link to="/all-articles">
          <Button message="C'est parti !" />
        </Link>
      </div>
      <div className="home-russia">
        <img src={russia} />
      </div>
      <div className="home-tree">
        <img src={tree} />
      </div>
    </div>
  );
}
