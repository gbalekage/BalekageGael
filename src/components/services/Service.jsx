import React from "react";
import "./service.css";

import { data } from "../../data";

const Service = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">
        Mes Services
      </h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} className="services__img" alt="" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Service;
