import React from "react";
import installNode from "../../public/assets/portfolio/plumCo.png";
import reactParallax from "../../public/assets/portfolio/project4.png";
import usestate from "../../public/assets/portfolio/project5.png";
import reactWeather from "../../public/assets/portfolio/ss.png";
import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const portfolios = [
  {
    id: 1,
    title: "PlumCo",
    imageSrc: installNode,
    url: "install-node",
    demo: "https://plumbing-frontend-tanvirrifat1.vercel.app/home",
    code: "https://github.com/tanvirrifat1/PlumCo-client",
    description:
      "It’s a plumbing service website, a user can add and book any services and delete his own services, when you go dashboard you see two options Home and Books Technology Used: Technology Used: Typescript, NextJS, Redux-Toolkit, Tailwind-CSS, PostGreSQL, ExpressJS, Prisma, JWT",
  },

  {
    id: 2,
    title: "Time-Square",
    imageSrc: reactWeather,
    url: "react-weather",
    demo: "https://watch-shop373.netlify.app/",
    code: "https://github.com/tanvirrifat1/hand-watch-shop-client",
    description:
      "It’s a Time-Square Watch shop, Here is more watch category. Here is two category DashBoard, user DashBoard, and Admin Dashboard. The userjust Ordered a watch and deleted his order and also provided any feedback.Admin can manage all parts and also manage any user.No one can order before login",
  },

  {
    id: 3,
    title: "Hot-Tube-Cinema",
    imageSrc: usestate,
    url: "use-state-hook",
    demo: "https://hot-tube-server747.netlify.app/",
    code: "https://github.com/tanvirrifat1/Hot-Tube-Cinema-Client",
    description:
      "This is a cinema website, Here are different types of movie, There are different TV shows and movies here and you can watch as much data as You want. anyone can save movies after login.Sorting the data and saving the movies or TV shows was challenging.Technology Used: ReactJS, Redux-Toolkit, SCSS, Firebase, Express, Mongoose, NODEJS, JWT",
  },
  {
    id: 4,
    title: "DENTIST",
    imageSrc: reactParallax,
    url: "react-parallax",
    demo: "https://doctors-portal-d24d1.web.app/",
    code: "https://github.com/tanvirrifat1/doctors-portal-client",
    description:
      " It is a dentists website Anyone can book an appointment for all dentists services. No one can book more than one appointment for one service with one emailAdmin can add and remove a doctor for the services that are availableTechnology Used: React.js, React-Router, Firebase, Tailwind, NodeJS, Express JS, MongoDB, JWT",
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

const OnePortfolio = ({
  portfolio: { title, imageSrc, demo, code, description },
}) => {
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
        <p>{description}</p>

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
