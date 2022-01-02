import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                    {item.icon}
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <h6>Technologies: {item.tech}</h6>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
