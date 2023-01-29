import Image from "next/image";
import React from "react";
import heroImage from "../public/assets/rifat.jpeg";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="home" className=" h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>


        <span className="text-4xl" style={{ color: 'blue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Frontend developer','Full stack developer','Mern stack developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
        </span>


        <h1 className="uppercase font-bold text-gray-700 text-7xl">
         
        </h1>

        <p className="text-gray-600 text-xl max-w-sm mx-auto">
        I want to face new challenges and learn through experiences. I am focused on working with the team and using my knowledge individually. My goal is to write clean, readable code to be very understandable and accessible for future use. 
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
