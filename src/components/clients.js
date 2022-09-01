import React from "react";
import people1 from "../images/Ellipse 5.svg";
import people2 from "../images/Ellipse 6.svg";
import people3 from "../images/Ellipse 7.svg";

const Clients = () => {
  const peoples = [
    {
      image: people1,
      name: "Anisha li",
      para: " “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” ",
    },
    {
      image: people2,
      name: "Ankit sharma",
      para: "  “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” ",
    },
    {
      image: people3,
      name: "Richard Watts",
      para: " “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” ",
    },
  ];
  return (
    <div className="flex flex-col mx-auto mt-10">
      <h3 className="mb-10 mt-10 text-4xl font-bold tex-center">
        {" "}
        What's Different About Manage?
      </h3>
      <div className="flex flex-col text-center space-y-4 bg-gray-300 md:flex-row  md:space-y-0">
        {peoples.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center p-6 space-y-6 rounded-lg text-center"
            >
              <img src={item.image}></img>
              <h4 className="text-2xl font-bold ">{item.name}</h4>
              <p>{item.para}</p>
            </div>
          );
        })}
      </div>
      <div className="my-12">
        <a
          href="#"
          className="p-3 px-6 pt-2 text-black bg-orange-600 rounded-full 
        baseline hover:bg-orange-300"
        >
          Get Started
        </a>
      </div>
      <div className="bg-orange-600 mt-16 py-20">
        <div className="container flex flex-col space-y-10 items-center justify-between mx-auto lg:flex-row lg:space-y-0">
          <h2 className="font-bold text-3xl text-center text-white  md:text-4xl md:text-left">
            Simplify how your team works today
          </h2>
          <div className="">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-black bg-white rounded-full 
                  baseline hover:bg-gray-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
