import React from "react";
import Project from "./Project";

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
    title: "E-Fit",
    languages: "HTML, Javascript, CSS, React",
    image: "/images/E-Fit-walkthrough.gif",
    packages: "stripe, apollo, axios, bcrypt, express, graphql, jsonwebtoken, mongoose, stripe",
    description: "“E-Fit”, is a web application that will allow users to purchase their fitness apparel, accessories, equipment, learn from the pros and more, to help users knockout and achieve their fitness goals. Our web application will be a one-stop-shop for users looking to shape their nutrition, grow confidence, tackle their fitness challenges, purchase the necessary gear, to feel amazing and to get the job done! ",
    repo: "https://github.com/VanessaLiaw021/E-Fit",
    live: "https://polar-shelf-24197.herokuapp.com/",
  },
  {
    id: 2,
    title: "Work Day Scheduler",
    languages: "HTML, Javascript, CSS",
    packages: "bootstrap, google fonts, moment.js",
    image: "/images/workdayschedulerwalkthrough.gif",
    description: "This is a work day scheduler that tracks in real time the current, past and future timeblocks and saves the information inputted into local storage.",
    repo: "https://github.com/GrahamP98/Work-Day-Scheduler",
    live: "https://grahamp98.github.io/Work-Day-Scheduler/"
  },
  {
    id: 3,
    title: "Food Genie",
    languages: "HTML, CSS, Javascript",
    packages: "bulma, google fonts",
    image: "/images/FoodGenie.gif",
    description: "As a food enthusiast I want to be able to easily search my favorite recipes and then be presented with that recipe and top video hits for that recipe SO THAT I have the ability to see my favorite recipe and some helpful video in one spot.",
    repo: "https://github.com/N3330/Food-Genie",
    live: "https://n3330.github.io/Food-Genie/"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "HTML, Javascript, CSS",
    packages: "moment.js",
    image: "/images/weatherdashboard walkthrough.gif",
    description: "This is a weather dashboard that gives you the temperature, wind speed, humidity, and color coordinated uv index of a searched city. also includes a 5 day forecast.",
    repo: "https://github.com/GrahamP98/weather-dashboard",
    live: "https://grahamp98.github.io/weather-dashboard/",
  },
  {
    id: 5,
    title: "Coding Quiz",
    languages: "HTML, Javascript, CSS",
    packages: "",
    image: "/images/codingquizwalkthrough.gif",
    description: "This is a webpage that tests your coding knowledge! answer the questions in a given time limit. incorrect answers take off time and the highest scores get saved locally.",
    repo: "https://github.com/GrahamP98/Coding-Quiz",
    live: "https://grahamp98.github.io/Coding-Quiz/",
  }
];

function Portfolio() {
  return (
    <body>
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />

        <Project projects={projects} />
      </div>
    </body>
  );
}

export default Portfolio;