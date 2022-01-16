import React from "react";

const Project = (props) => {
  const project = props.project;
  //save images in srcs variable
  const srcs = {
    movie: require("../assets/dinner_movie.png"),
    menu: require("../assets/contactless-menu.png"),
    food: require("../assets/Food-Festival.png"),
    note: require("../assets/notetaker.png"),
    zoo: require("../assets/zookeepr.png"),
    weather: require("../assets/weather_app.png")
  };

  return (
    <div className="bg-white w-7/8 mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-10 select-none ">
      <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200">
        <img src={srcs[project.img.srcId]} alt={project.img.alt} />
      </div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-200 w-full h-14 rounded-2xl">
            <p className="font-semibold underline">{project.title}</p>
          </div>
          <div className="bg-gray-200 w-full h-3 rounded-2xl">
            {project.description}
          </div>
          <div className="bg-gray-200 w-full h-3 rounded-2xl uppercase transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  ...">
            <a href={project.deployed.href} target="_blank">
              {project.deployed.text}
            </a>
          </div>
          <div className="bg-gray-200 w-full h-3 rounded-2xl uppercase transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  ...">
            <a href={project.repo.href} target="_blank">
              {project.repo.text}
            </a>
          </div>

          <div className="bg-gray-200 w-full h-3 rounded-2xl">
            Technologies used:
          </div>
        </div>
        {/* <div className="bg-gray-200 w-full h-3 rounded-2xl">
        <ul>
                {project.techs.map((t,i) => {
                    return <li key={i}>{t}</li>
                })}
            </ul>
          </div> */}
      </div>
    </div>
  );
};

export default Project;
