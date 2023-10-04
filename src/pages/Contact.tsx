import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import cat from "/contact/cat.jpg";
import eclipse3 from "/contact/eclipse3.jpg";
import eclipse7 from "/contact/eclipse7.jpg";
import france from "/contact/france.jpg";
import poutine from "/contact/poutine.jpg";

import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";

import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    scenario: "",
    details: "",
  });

  const randomImg = [cat, france, eclipse3, eclipse7, poutine];
  const randomNumber = Math.floor(Math.random() * randomImg.length);
  const randomImage = randomImg[randomNumber];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.info("Nous avons bien reçu votre suggestion ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/all-articles");
  };

  return (
    <div className="contact">
      <Header />
      <div className="contact-button">
        <Link to="/all-articles">
          <Button message="Menu" color="color" />
        </Link>
      </div>
      <div className="contact-content">
        <div className="contact-content-img">
          <img src={randomImage} alt="" />
        </div>
        <div className="contact-content-form">
          <h3>Vous avez une idée de scénario à proposer ?</h3>
          <h3>CONTACTEZ NOUS!</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nom*"
              id="firstName"
              name="firstName"
              value={message.firstName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Prénom*"
              id="lastName"
              name="lastName"
              value={message.lastName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Mail*"
              id="mail"
              name="mail"
              value={message.mail}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Scénario*"
              id="scenario"
              name="scenario"
              value={message.scenario}
              onChange={handleInputChange}
            />

            <TextField
              fullWidth
              id="details"
              name="details"
              label="Précision ?"
              placeholder="Placeholder"
              multiline
              value={message.details}
              onChange={handleInputChange}
            />

            <Button message="Valider" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
