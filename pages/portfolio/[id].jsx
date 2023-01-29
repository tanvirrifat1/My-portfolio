import React from "react";
import installNode from "../../public/assets/portfolio/project2.png";
import reactParallax from "../../public/assets/portfolio/project4.png";
import usestate from "../../public/assets/portfolio/project3.png";
import reactWeather from "../../public/assets/portfolio/project1.png";
import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const portfolios = [
  {
    id: 1,
    title: "MOTORS",
    imageSrc: reactWeather,
    url: "react-weather",
    demo:"https://final-project-3130f.web.app/",
    code:'https://github.com/tanvirrifat1/Car-portal-Client'
  },
  {
    id: 2,
    title: "FAST FOOD",
    imageSrc: installNode,
    url: "install-node",
    demo:"https://assignment-project-33308.web.app/",
    code:'https://github.com/tanvirrifat1/assignment-11-client'
  },
  {
    id: 3,
    title: "E-Shop",
    imageSrc: usestate,
    url: "use-state-hook",
    demo:"https://final-project-3130f.web.app/",
    code:'https://github.com/tanvirrifat1/Car-portal-Client'
  },
  {
    id: 4,
    title: "DENTIST",
    imageSrc: reactParallax,
    url: "react-parallax",
    demo:"https://doctors-portal-d24d1.web.app/",
    code:'https://github.com/tanvirrifat1/doctors-portal-client'
  },
];

export async function getStaticPaths() {
  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

const getPortfolioFrom = (url) =>
  portfolios.filter((portfolio) => portfolio.url === url)[0];

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return { props: { portfolio } };
}

const OnePortfolio = ({ portfolio: { title, imageSrc,demo,code } }) => {
  return (
    <div id="home" className=" h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 text-indigo-500 font-bold capitalize rounded-md tracking-wider cursor-pointer">
              <span className="">
                <BiChevronLeft size={25} />
              </span>
              back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
        <h2 className="text-left my-4 text-2xl font-bold">Description</h2>
        <p>
        This Site mainly sells and buys old cars, anyone can sell their car if they want or buy a car
        Some roles on this site are buyer seller and admin, admin can delete any user or buyer
        And the seller can add a car and can advertise a product after clicking on the advertised
          <span className="font-semibold">Technology Used: TailwindCss, DaisyUI React, React-Router, Firebase, NodeJS, ExpressJS,MongoDB</span>

        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href={demo}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-100 ease-in">
                <AiOutlineCaretRight size={20} className="ml-2" />
              </span>
            </div>
          </Link>
          <Link href={code}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              github
              <span className="duration-100 ease-in">
                <FaGithub size={20} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
