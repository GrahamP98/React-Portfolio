import React from "react";

function About() {
  return (
    <body>
      <div>
        <p className="content is-medium">About</p>
        <hr />
        <img className="image is-128x128" src={process.env.PUBLIC_URL + '/images/ProfilePic.png'} alt="Nathanael Graham Purnell" />
        <p className="content is-italic mt-4">
          My name is Nathanael Graham Purnell but go by my middle name Graham. I'm 24 years old and live in Charlotte, North Carolina. I love to snowboard, watch football (Go Chiefs!), and take my dog (Bonnie) on adventures.
        </p>
        <p className="content">
          I am a front-end web developer leveraging customer service and sales background to build user-friendly experiences on the web. I am recently certified in full stack development through the coding Bootcamp at University of Charlotte North Carolina, with newly developed skills in responsive web design with a focus in mobile friendly applications. My goal is to use technology to engage audiences and create impactful online experiences for businesses and clients. I am dedicated to reliability, security, proactive solutions and creating effective and successful outcomes.
        </p>
      </div>
      <div>
        <ul>
          <li> <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/GrahamP98?tab=repositories"
          >
            <span className="content is-large">Github</span>
          </a></li>
          <li> <a
            href="https://www.linkedin.com/in/nathanael-purnell-a4baaa124/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="content is-large">LinkedIn</span>
          </a></li>
        </ul>
      </div>
    </body>
  );
}

export default About;