import React from "react";
import OneShot from "../assets/portfolio/OneShot.png";
import OnlyScaler from "../assets/portfolio/OnlyScaler.png";
import Tadlik from "../assets/portfolio/Tadlik.png";
import Taxiplanner from "../assets/portfolio/Taxiplanner.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: OneShot,
      demolink: "https://one-shot-indol.vercel.app/getbeta",
      codelink: "https://github.com/bluevine2001/OneShot",
    },
    {
      id: 2,
      src: OnlyScaler,
      demolink: "https://only-scaler.vercel.app/",
      codelink: "https://github.com/bluevine2001/OnlyScaler",
    },
    {
      id: 3,
      src: Tadlik,
      demolink: "https://tadlik-static.vercel.app/",
      codelink: "https://github.com/bluevine2001/tadlik-static",
    },
    {
      id: 4,
      src: Taxiplanner,
      demolink: "https://taxi-planner.vercel.app/",
      codelink: "https://github.com/bluevine2001/Taxi-planner-app",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Voici quelques projets sur lesquels j'ai travaillé
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demolink, codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="arrayDestruct"
                className="rounded-t-md hover:rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demolink}
                  target="_blank"
                  className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codelink}
                  target="_blank"
                  className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
