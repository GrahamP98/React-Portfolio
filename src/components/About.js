import React from "react";

function About() {
  return (
    <body>
      <div>
        <p className="content is-medium">About</p>
        <hr />
        <div className="box">
          <div>
            <p className="is-size-1 is-underlined">Graham Purnell</p>
          </div>
          <div className="has-text-left p-2 m-1">
            <div className="media-left ">
              <figure className="image is-128x128">
                <img className="is-rounded" src={process.env.PUBLIC_URL + '/images/ProfilePic.png'} alt="Nathanael Graham Purnell" />
              </figure>
              <p className="box m-2 p-4 is-size-7">My name is Nathanael Graham Purnell but go by my middle name Graham. I'm 24 years old and live in Charlotte, North Carolina. I love to snowboard, watch football (Go Chiefs!), and take my dog (Bonnie) on adventures.</p>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="section">
                  <p className="is-size-4">
                    I'm a front-end web developer leveraging customer service and sales background to build user-friendly experiences on the web. I'm recently certified in full stack development through the coding Bootcamp at University of Charlotte North Carolina, with newly developed skills in responsive web design with a focus in mobile friendly applications. My goal is to use technology to engage audiences and create impactful online experiences for businesses and clients. I'm dedicated to reliability, security, proactive solutions and creating effective and successful outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default About;