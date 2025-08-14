import React from "react";
import { FaEnvelope , FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/muhammadhaider02/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        href="https://github.com/muhammadhaider02"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhaiderakbar@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope  size={24} />
      </a>
      
    </footer>
  );
};

export default Footer;