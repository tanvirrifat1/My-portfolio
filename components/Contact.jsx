import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import contactusImage from "../public/assets/contact-us.jpg";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vw7flis",
        "template_757l3hu",
        form.current,
        "ftumh3iw7skXi5eFi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
          console.log("dsfds");
        }
      );
    toast.success("Message Sent successfully");
    e.target.reset();
  };

  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <span
          className="text-7xl"
          style={{ color: "blue", fontWeight: "bold" }}
        >
          <Typewriter
            words={["CONTACT"]}
            loop={5}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>

        <h2 className="py-4 max-w-lg">
          Fearing lenore above songs hauntedtell yore of ghost undaunted spoken
          raven. My i ghastly dream hauntedtell seeing.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
            <div className="h-full p-8">
              <div>
                <Image
                  src={contactusImage}
                  alt="man with laptop"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>

              <div>
                <p className="pt-2 pb-8">
                  I am open to talk regarding freelancing or full-time
                  opportunities. Fell free to contact me using your preferred
                  medium.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                  <a
                    href="https://www.linkedin.com/in/md-rifat-miah-48555b257/"
                    className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                  <a
                    href="https://github.com/tanvirrifat1"
                    className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200"
                  >
                    <FaGithub size={25} />
                  </a>
                  <a
                    href="https://twitter.com/RifatKh77041896"
                    className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200"
                  >
                    <FaTwitter size={25} />
                  </a>
                  <a
                    href="https://www.facebook.com/rifat.khan7625"
                    className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200"
                  >
                    <FaFacebook size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
            <div className="p-4 text-left">
              <form
                data-aos="fade-up"
                data-aos-duration="1500"
                className="flex flex-col gap-2  text-black"
                ref={form}
                onSubmit={sendEmail}
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="w-full p-6 bg-transparent border-2 rounded-md text-black "
                />
                <input
                  type="text"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-6 bg-transparent border-2 rounded-md text-black "
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required
                  className="w-full p-6 bg-transparent border-2 rounded-md text-black "
                ></textarea>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    value="Send"
                    className="group my-8 w-full bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer"
                  >
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
