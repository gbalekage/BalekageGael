import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.catgory === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Mes Recent Project</h2>

      <div className="work__filter">
        <span className="work__item" onClick={() => setItems(Menu)}>Tous les projects</span>
        <span className="work__item" onClick={() => filterItem("Frontend")}>
          Frontend
        </span>
        <span className="work__item" onClick={() => filterItem("Backend")}>Backend</span>
        <span className="work__item" onClick={() => filterItem("Full")}>Full Stack</span>
        <span className="work__item" onClick={() => filterItem("Design")}>Graphic design</span>
        <span className="work__item" onClick={() => filterItem("Photo")}>Photographie</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, catgory } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{catgory}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <FaLink />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
