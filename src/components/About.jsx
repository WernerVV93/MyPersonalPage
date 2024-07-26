import React from "react";
import Werner from "../assets/wernervv.png";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, My Name is Werner.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Field Service Engineer with over 12 years of experience in IT
            Support. My responsibilities over the years are to assist with
            troubleshooting hardware and software issues as well as assisting
            with basic networking troubleshooting. Working for national and
            international companies, I have built up a broad variety of
            knowledge within the IT space and was able to share the knowledge I
            have acquired over the years with my peers. I’ve also recently
            started to learn JavaScript and React and want to further my
            knowledge and skills in coding as well I`m very passionate about
            technology and equally passionate about running and trail running
            and just being in the outdoors to have that balanced life. I`m
            constantly learning and working on my up skills to better myself and
            to ensure that have the knowledge of new and changing technologies.
            I`m certified in Microsoft Azure Administrator and AWS Cloud
            Practitioner and currently working on the AWS Certified Developer
            certification. I’ve also recently started to learn JavaScript and
            React and want to further my knowledge and skills in coding as well
            I`m very passionate about technology and equally passionate about
            running and trail running and just being in the outdoors to have
            that balanced life I`m always up for a new challenge in my life and
            to work towards the success of myself as well as my employer.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-48 lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={Werner}
          />
        </div>
      </div>
    </section>
  );
}
