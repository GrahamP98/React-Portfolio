import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <body>
      <div>
        <p className="content is-medium">About</p>
        <hr />
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img className="is-rounded" src={process.env.PUBLIC_URL + '/images/ProfilePic.png'} alt="Nathanael Graham Purnell" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className="is-underlined is-size-2">Graham Purnell</strong>
                  <br />
                  <br />
                  My name is Nathanael Graham Purnell but go by my middle name Graham. I'm 24 years old and live in Charlotte, North Carolina. I love to snowboard, watch football (Go Chiefs!), and take my dog (Bonnie) on adventures.
                </p>
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/GrahamP98?tab=repositories"
                  >
                    <FontAwesomeIcon icon={faGithub} size='xl' border></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nathanael-purnell-a4baaa124/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size='xl' border></FontAwesomeIcon>
                  </a>
                  <a
                    href="mailto:grahamscontactform@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size='xl' border></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <p className="content">
          I am a front-end web developer leveraging customer service and sales background to build user-friendly experiences on the web. I am recently certified in full stack development through the coding Bootcamp at University of Charlotte North Carolina, with newly developed skills in responsive web design with a focus in mobile friendly applications. My goal is to use technology to engage audiences and create impactful online experiences for businesses and clients. I am dedicated to reliability, security, proactive solutions and creating effective and successful outcomes.
        </p>
      </div>
    </body>
  );
}

export default About;