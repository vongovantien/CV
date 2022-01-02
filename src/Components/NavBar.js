import React from "react";
import avatar from "../img/avatar.png";
import {
  faEnvelopeOpen,
  faBriefcase,
  faUser,
  faHome,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              <FontAwesomeIcon
                icon={faHome}
                className="icon"
                style={{ marginRight: "8px" }}
              />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              <FontAwesomeIcon
                icon={faUser}
                className="icon"
                style={{ marginRight: "8px" }}
              />
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="icon"
                style={{ marginRight: "8px" }}
              />
              Portfolios
            </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              <FontAwesomeIcon
                icon={faComments}
                className="icon"
                style={{ marginRight: "8px" }}
              />
              Blogs
            </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>@VanTien</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
