import React from "react";
import installNode from "../../public/assets/portfolio/plumCo.png";
import reactParallax from "../../public/assets/portfolio/project4.png";
import usestate from "../../public/assets/portfolio/project3.png";
import reactWeather from "../../public/assets/portfolio/project1.png";
import navbar from "../../public/assets/portfolio/navbar.jpg";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const portfolios = [
    {
      id: 1,
      title: "install node",
      imageSrc: installNode,
      url: "install-node",
    },

    {
      id: 2,
      title: "react weather app",
      imageSrc: reactWeather,
      url: "react-weather",
    },

    {
      id: 3,
      title: "use state explained",
      imageSrc: usestate,
      url: "use-state-hook",
    },
    {
      id: 4,
      title: "react parallax scroll",
      imageSrc: reactParallax,
      url: "react-parallax",
    },
  ];

  return {
    props: { portfolios },
  };
};

const index = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <p className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Portfolio
        </p>
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
                  className="rounded-md duration-200 hover:scale-105"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
