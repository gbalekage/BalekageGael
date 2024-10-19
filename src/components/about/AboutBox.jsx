import React from "react";
import { FaFire } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <FaFire className="about__icon" />

        <div>
          <h3 className="about__title">198</h3>
          <span className="about__subtitle">Projects Accomplie</span>
        </div>
      </div>

      <div className="about__box">
        <FaPenAlt className="about__icon" />

        <div>
          <h3 className="about__title">1889</h3>
          <span className="about__subtitle">Designs</span>
        </div>
      </div>

      <div className="about__box">
        <FaUserAlt className="about__icon" />

        <div>
          <h3 className="about__title">889</h3>
          <span className="about__subtitle">Client Heureux</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
