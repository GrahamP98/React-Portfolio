import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="content has-text-centered">
        <div className="mb-2">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/GrahamP98?tab=repositories"
            className="m-3"
          >
            <FontAwesomeIcon icon={faGithub} size='xl' border></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/nathanael-purnell-a4baaa124/"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <FontAwesomeIcon icon={faLinkedin} size='xl' border></FontAwesomeIcon>
          </a>
          <a
            href="mailto:grahamscontactform@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <FontAwesomeIcon icon={faEnvelope} size='xl' border></FontAwesomeIcon>
          </a>
        </div>
        <p>
          <strong>React Portfolio</strong> - by{" "}
          <a href="https://github.com/GrahamP98" target="_blank" rel="noreferrer" className='has-text-dark'>
            Nathanael Graham Purnell
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
