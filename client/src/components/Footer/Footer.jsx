import React from "react";
import gitHubLogo from "../../assets/github.webp"
const Footer = () => {
  return <footer className="bg-gray-800 text-white flex justify-center items-center h-16 mt-4">
  <h4 className="text-center text-lg md:text-xl lg:text-lg max-w-2xl">
    <a href="https://github.com/Francsy" rel="noreferrer" target="_blank" className="flex items-center">
      <img src={gitHubLogo} alt="Git-hub" className="h-6 mr-2" />&nbsp;Created by Francsy
    </a>
  </h4>
</footer>
};

export default Footer;
