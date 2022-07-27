import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Insert Title here</p>
      <hr />
      <img className="image is-128x128" src={process.env.PUBLIC_URL + '/images/ProfilePic.png'} alt="Nathanael Graham Purnell"/>
      <p className="content is-italic mt-4">
        insert short description of self
      </p>
      <p className="content">
        insert bio
      </p>
    </div>
  );
}

export default About;