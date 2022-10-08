import React from "react";

function Resume() {
  return (
    <body className="columns layout">
      <div className="column ml-2 mr-2">
        <p className="content is-medium">Resume</p>
        <hr />
        <iframe src="/docs/Resume.pdf" width="100%" height="500px" title="Resume">
        </iframe>
        <a
          className="button is-dark"
          href={process.env.PUBLIC_URL + "/docs/Resume.pdf"}
          target="_blank" rel="noreferrer" download="Graham's Resume"
        >
          <div>Download Resume</div>
        </a>
      </div>
      <div className="column ml-2 mr-2">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul className='box'>
          <li>HTML, CSS, Javascript</li>
          <li>MySQL, NoSQL, MERN stack, REST API's</li>
          <li>React, Node.js, Express.js, Progressive Web Applications (PWAs)</li>
          <li>Github Repo Management, Database Development, Git</li>
        </ul>
        <div><img src={process.env.PUBLIC_URL + '/images/coding-full-stack-web-development-certificate.png'} alt="UNCC Certificate Badge" /></div>
        <a className="button is-dark"
          href={process.env.PUBLIC_URL + "https://www.credly.com/badges/65a607b0-a922-4955-bbdd-668c268d145d/public_url"}
          target="_blank" rel="noreferrer" download="Graham's Certificate">
          View Certificate
        </a>
      </div>
    </body>
  );
}

export default Resume;