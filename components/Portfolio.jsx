import React from "react";
import installNode from "../public/assets/portfolio/plumCo.png";
import reactParallax from "../public/assets/portfolio/project4.png";
import usestate from "../public/assets/portfolio/project3.png";
import reactWeather from "../public/assets/portfolio/project1.png";
import Image from "next/image";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "PlumbCo",
      imageSrc: installNode,
      url: "install-node",
    },

    {
      id: 2,
      title: "MOTORS",
      imageSrc: reactWeather,
      url: "react-weather",
    },

    {
      id: 3,
      title: "E-Shop",
      imageSrc: usestate,
      url: "use-state-hook",
    },
    {
      id: 4,
      title: "DENTIST",
      imageSrc: reactParallax,
      url: "react-parallax",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <span
          className="text-7xl"
          style={{ color: "blue", fontWeight: "bold" }}
        >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["PORTFOLIO"]}
            loop={5}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>

        <h2 className="py-4 max-w-lg">
          Entrance gloating i nothing soul quoth desolate. My he bird still just
          of theeby lattice. Nearly ominous leave god is.
        </h2>
        <div className="max-w-5xl h-[700px] mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div
                key={id}
                className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md bg-blend-overlay"
              >
                <Image
                  src={imageSrc}
                  alt="random"
                  className="rounded-md  duration-200 hover:scale-105"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
