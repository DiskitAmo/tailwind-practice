import React from "react";
import logo from "../images/logo-white.svg";

const Footer = () => {
  const pages = ["Home", "Pricing", "Product", "About Us"];
  const privacy = ["Careers", "Community", "Privacy Policy"];
  return (
    <div className="bg-black py-12">
      <div className="container flex flex-col-reverse items-center justify-between space-y-10 mx-auto md:flex-row md:space-y-0 ">
        <div
          className="flex flex-col items-center space-y-10 pt-10 md:pt-0"
          //"flex flex-col items-center my-6 space-y-6 text-center md:my-0 md:space-y-0"
        >
          <img src={logo} alt="white-logo" className="h-8 w-40"></img>
          <div className="hidden flex flex-row md:block">
            <p>fb</p>
            <p>twt</p>
            <p>insta</p>
          </div>
          <p className="text-white opacity-50 md:hidden">
            {" "}
            Copyright &copy; 2022, All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row justify-around space-x-32 items-center">
          <div className="w-1/2">
            <ul className="flex flex-col space-y-3  text-left">
              {pages.map((item, index) => {
                return (
                  <li key={index} className="text-white">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="flex flex-col space-y-3  text-left">
              {privacy.map((item, index) => {
                return (
                  <li key={index} className="text-white">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-row">
            <input
              placeholder="Update in your inbox"
              className=" flex-1 rounded-full p-3 px-4 mr-2 focus:outline-none"
            ></input>
            <button className="rounded-full p-3 px-4 bg-orange-600 hover:bg-orange-300">
              Go
            </button>
          </div>
          <p className="hidden text-white opacity-50 md:block">
            Copyright &copy; 2022, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
