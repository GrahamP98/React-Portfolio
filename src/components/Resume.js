import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-link"
          href={process.env.PUBLIC_URL + "/docs/Resume.pdf"}
          target="_blank" rel="noreferrer" download="Graham's Resume"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>MySQL, NoSQL, MERN stack, REST API's</li>
            <li>React, Node.js, Express.js, Progressive Web Applications (PWAs)</li>
            <li>Github Repo Management, Database Development, Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;