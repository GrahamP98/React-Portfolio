import React from "react";
import Project from "./project";

const projects = [
  {
    id: 0,
    title: "Blast OFF!",
    languages: "CSS, Javascript, HTML",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, moment, mysql2, node-schedule, sequelize",
    image: "/images/BlastOff-GIF.gif",
    description: "Our website is a space launch application that allows users to see the upcoming space launches from SpaceX. The user will not be able to interact with the application unless they have an account or created an account. Once login/signup is complete, the user gains the ability to add comments about any launch. The user also has the ability to add their favorite launches on the saved pages. The user also has the ability to search by the launch name or rocket name.",
    repo: "https://github.com/JtheFox/blastoff",
    live: "https://blastoff2.herokuapp.com/",
  },
  {
    id: 1,
    title: "Food Genie",
    languages: "HTML, CSS, Javascript",
    packages: "",
    image: "/images/FoodGenie.gif",
    description: "As a food enthusiast I want to be able to easily search my favorite recipes and then be presented with that recipe and top video hits for that recipe SO THAT I have the ability to see my favorite recipe and some helpful video in one spot.",
    repo: "https://github.com/N3330/Food-Genie",
    live: "https://n3330.github.io/Food-Genie/"
  },
  {
    id: 2,
    title: "Coding Quiz",
    languages: "HTML, Javascript, CSS",
    packages: "",
    image: "",
    description: "",
    repo: "https://github.com/GrahamP98/Coding-Quiz",
    live: "https://grahamp98.github.io/Coding-Quiz/",
  },
  {
    id: 3,
    title: "",
    languages: "",
    image: "",
    packages: "",
    description: "",
    repo: "https://github.com/GrahamP98/Team-Profile-Generator",
    live: "",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "HTML, Javascript, ",
    packages: "",
    image: "",
    description: "This is a weather dashboard that gives you the temperature, wind speed, humidity, and color coordinated uv index of a searched city. also includes a 5 day forecast.",
    repo: "https://github.com/GrahamP98/weather-dashboard",
    live: "https://grahamp98.github.io/weather-dashboard/",
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
  }
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