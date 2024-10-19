import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import { FaBlog, FaHome, FaUmbraco } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <FaHome />
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <FaUser />
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <FaServer />
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <FaBook />
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <FaUmbraco />
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link">
              <FaBlog /></a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <FaMessage />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; BALEKAGE GAEL 2024</span>
      </div>
    </aside>
  );
};

export default Sidebar;
