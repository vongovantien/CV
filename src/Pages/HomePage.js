import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Van Tien</span>
        </h1>
        <p className="h-sub-text">
          I'm a web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>

        <div className="icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/vongo.vantien"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ingvnvt"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon ins" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vongovantien"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/vongovantien"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon in" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
