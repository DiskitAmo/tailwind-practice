import React from "react";
import "../css/output.css";
import illustrate from "../images/illustration-intro.svg";

const Hero = () => {
  return (
    <div
      className="container flex flex-col-reverse 
     items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
    >
      <div className="flex flex-col mb-16 space-y-12 md:w-1/2 ">
        <h1
          className="max-w-md text-4xl font-bold text-center 
        md:text-5xl md:text-left"
        >
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-gray-600 md:text-left ">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-black bg-orange-600 rounded-full 
        baseline hover:bg-orange-300"
          >
            Get Started
          </a>
        </div>
      </div>
      <div>
        <img src={illustrate} alt="illustrate"></img>
      </div>
    </div>
  );
};

export default Hero;
