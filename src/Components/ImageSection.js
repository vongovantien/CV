import React from "react";
import about from "../img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          <span>Vo Ngo Van Tien</span>
        </h4>
        <p className="about-text">
          The goal will be to become a software engineer in the future. I
          hope to be able to develop my work and pursue my passion.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Phone</p>
            <p>Email</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Võ Ngô Văn Tiền</p>
            <p>: 0329 29 2209</p>
            <p>: vongovantien@gmail.com</p>
            <p>: Vietnamese, English</p>
            <p>: 387/29 Nguyễn Kiệm, Ward 3, Gò Vấp District, HCM City</p>
          </div>
        </div>

        <a
          href="flask_cheatsheet.pdf"
          download
          className="btn"
          style={{ display: "inline-block", textDecoration: "none" }}
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
