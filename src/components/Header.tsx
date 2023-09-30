import { Link } from "react-router-dom";
import logo from "/logoV2.png";

import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} />
      </Link>

      <h1>Et si ...?</h1>
    </div>
  );
}
