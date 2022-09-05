import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/comendrun/"
      >
        <BsLinkedin />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/profile.php?id=100075303231964"
      >
        <FaFacebookF />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/comendrun">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
