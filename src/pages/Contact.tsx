import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-button">
        <Link to="/all-articles">
          <Button message="Menu" color="color" />
        </Link>
      </div>
      <div className="contact-content"></div>
    </div>
  );
}
