import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="" className="home__social-link" target="_blank">
        <FaInstagram />
      </a>
      <a href="" className="home__social-link" target="_blank">
        <FaGithub />
      </a>
      <a href="" className="home__social-link" target="_blank">
        <FaLinkedin />
      </a>
      <a href="" className="home__social-link" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default HeaderSocials;
