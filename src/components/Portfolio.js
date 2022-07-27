import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 1,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 2,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    live: "",
    repo: "",
  },
  {
    id: 3,
    title: "",
    languages: "",
    image: "",
    packages: "",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 4,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: ""
  },
  {
    id: 5,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: ""
  },
  {
    id: 6,
    title: "",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live:""
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;