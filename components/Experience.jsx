import Image from "next/image";
import React from "react";
import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/Bootstrap.png";
import tailwind from "../public/assets/experience/tailwind.png";
import graphql from "../public/assets/experience/firebase.png";
import node from "../public/assets/experience/node.png";
import nextJS from "../public/assets/experience/nextjs.png";
import typescript from "../public/assets/experience/typescript.png";
import postgreSQL from "../public/assets/experience/post.png";
import Prisma from "../public/assets/experience/prisma.png";
import MongoDb from "../public/assets/experience/images.jpeg";
import Redux from "../public/assets/experience/redux.png";
import Redis from "../public/assets/experience/download.png";
import Ant from "../public/assets/experience/ant.png";
import { Typewriter } from "react-simple-typewriter";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Bootstrap",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "Firebase",
      src: graphql,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
    {
      id: 9,
      title: "Next JS",
      src: nextJS,
    },
    {
      id: 10,
      title: "Redux",
      src: Redux,
    },
    {
      id: 11,
      title: "Typescript",
      src: typescript,
    },
    {
      id: 12,
      title: "PostgreSQL",
      src: postgreSQL,
    },
    {
      id: 13,
      title: "Prisma",
      src: Prisma,
    },
    {
      id: 14,
      title: "MongoDB",
      src: MongoDb,
    },
    {
      id: 15,
      title: "Redis",
      src: Redis,
    },
    {
      id: 16,
      title: "Ant-Design",
      src: Ant,
    },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <span
          className="text-7xl"
          style={{ color: "blue", fontWeight: "bold" }}
        >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[" EXPERIENCE"]}
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
        <div className="grid lg:grid-cols-4 gap-8">
          {experience.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg odd:shadow-blue-400 even:shadow-rose-400 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <Image src={src} width="64px" height="64px" alt="randomness" />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
