import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <body className='layout'>
      <div>
        <p className="content is-medium">About</p>
        <hr />
          <div className="card">
              <p className="is-underlined is-centered is-size-1 box">
                Graham Purnell
              </p>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image proPic">
                    <img className="is-rounded" src={process.env.PUBLIC_URL + '/images/ProfilePic.png'} alt="Nathanael Graham Purnell" />
                  </figure>
                </div>
                <div className="media-content">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/GrahamP98?tab=repositories"
                    className="m-3 is-responsive fontAicon"
                  >
                    <FontAwesomeIcon icon={faGithub} border></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nathanael-purnell-a4baaa124/"
                    target="_blank"
                    rel="noreferrer"
                    className="m-3 is-responsive fontAicon"
                  >
                    <FontAwesomeIcon icon={faLinkedin} border></FontAwesomeIcon>
                  </a>
                  <a
                    href="mailto:grahamscontactform@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="m-3 is-responsive fontAicon"
                  >
                    <FontAwesomeIcon icon={faEnvelope} border></FontAwesomeIcon>
                  </a>
                </div>
              </div>
              <div className="content box">
                <p className="is-size-6">My name is Nathanael Graham Purnell but go by my middle name Graham. I'm 24 years old and live in Charlotte, North Carolina. I love to snowboard, watch football (Go Chiefs!), and take my dog (Bonnie) on adventures.</p>
              </div>
            </div>
            <div className="media-content">
              <div className="content m-3 box">
                <p className="is-size-4 p-3">
                  I'm a front-end web developer leveraging customer service and sales background to build user-friendly experiences on the web. I'm recently certified in full stack development through the coding Bootcamp at University of Charlotte North Carolina, with newly developed skills in responsive web design with a focus in mobile friendly applications. My goal is to use technology to engage audiences and create impactful online experiences for businesses and clients. I'm dedicated to reliability, security, proactive solutions and creating effective and successful outcomes.
                </p>
              </div>
            </div>
          </div>
      </div>
    </body>
  );
}

export default About;