import React from "react";
import Project from "../Project";

function Portfolio() {
  //save projects as objects in array
  const projects = [
    {
      title: "Contactless Menu",
      description: "An app for contactless menu ordering.",
      img: {
        srcId: "menu",
        alt: "image that shows homepage of contactless menu with dropdown",
      },
      deployed: {
        href: "https://polar-earth-23819.herokuapp.com/",
        text: "visit Contactless Menu!",
      },
      repo: {
        href: "https://github.com/ncpandrade/contactless-menu",
        text: "Github Repository",
      },
      // techs: [
      //   "Node.js",
      //   "Bootstrap",
      //   "Express",
      //   "MySQL",
      //   "dotenv",
      //   "bcrypt",
      //   "Handlebars",
      //   "express-session",
      //   "connect-session-sequelize",
      //   "nodemon",
      // ],
    },
    {
      title: "Movies",
      description: "A website that helps you chose dinner and a movie.",
      img: {
        srcId: "movie",
        alt: "image that shows movie poster and food",
      },
      deployed: {
        href: "https://jayibarra.github.io/movies/",
        text: "visit Dinner and a Movie!",
      },
      repo: {
        href: "https://github.com/ncpandrade/movies",
        text: "Github Repository",
      },
      // techs: ["Node.js", "Bulma", "express.js"],
    },
    {
      title: "Food Festival",
      description:
        "An app that provides info about the international Food Festival.",
      img: {
        srcId: "food",
        alt: "image that shows food",
      },
      deployed: {
        href: "https://ncpandrade.github.io/food-festival/",
        text: "visit Contactless Menu!",
      },
      repo: {
        href: "https://github.com/ncpandrade/food-festival",
        text: "Github Repository",
      },
      // techs: ["Bootstrap", "webpack"],
    },
    {
      title: "Zookepr",
      description: "An app that helps organize Zoo animals.",
      img: {
        srcId: "zoo",
        alt: "image that shows zoo catalog",
      },
      deployed: {
        href: "https://zookeeprnew.herokuapp.com/",
        text: "visit Zookeepr!",
      },
      repo: {
        href: "https://github.com/ncpandrade/zookeepr",
        text: "Github Repository",
      },
      // techs: ["Express", "Heroku"],
    },
    {
      title: "Note Taker",
      description: "A note taking app",
      img: {
        srcId: "note",
        alt: "image that shows notes",
      },
      deployed: {
        href: "https://note-taker-new.herokuapp.com/",
        text: "visit NoteTaker!",
      },
      repo: {
        href: " https://github.com/ncpandrade/note-taker",
        text: "Github Repository",
      },
      // techs: ["Express", "Insomnia"],
    },
    {
      title: "Weather App",
      description: "A weather forecast app",
      img: {
        srcId: "weather",
        alt: "image that shows forecast",
      },
      deployed: {
        href: "https://ncpandrade.github.io/Weather-Dashboard/",
        text: "visit Weather Dashboard!",
      },
      repo: {
        href: " https://github.com/ncpandrade/Weather-Dashboard",
        text: "Github Repository",
      },
      // techs: ["Express"],
    },
  ];

  //map over projects array and pass objects to Projects.js component to be rendered
  return (
    <div>
      <ul>
        {projects.map((p, i) => {
          return (
            <li key={i}>
              <Project project={p} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Portfolio;
