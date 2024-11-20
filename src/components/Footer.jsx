import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-darkBg text-white text-center py-6 mt-8">
      <p className="text-sm mb-4">Beni takip edin:</p>
      <div className="flex justify-center gap-4">
        {/* GitHub Linki */}
        <a
          href="https://github.com/hllbr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-2xl"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        {/* LinkedIn Linki */}
        <a
          href="https://www.linkedin.com/in/hllbr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-2xl"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p className="text-sm mt-4">
        © {new Date().getFullYear()} SmokeFreeJourney. Tüm Hakları Saklıdır.
      </p>
    </footer>
  );
};

export default Footer;
