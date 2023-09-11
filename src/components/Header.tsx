import logo from "/logoV2.png";

import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <img src={logo} />
      <h1>Et si ...?</h1>
    </div>
  );
}
