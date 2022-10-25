import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/luis-gustavo-gouv%C3%AAa-dami%C3%A3o-alves-8a7232224/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Gustavo121/Gustavo121" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
