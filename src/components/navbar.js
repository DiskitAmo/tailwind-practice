import React from "react";
import "../css/output.css";
import logo from "../images/logomain.svg";

const navbar = () => {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  const handleclick = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };
  return (
    <nav className="relative container mx-auto p-6 my-10">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:bg-orange-100">
            Pricing
          </a>
          <a href="#" className="hover:bg-orange-100">
            Product
          </a>
          <a href="#" className="hover:bg-orange-100">
            About Us
          </a>
          <a href="#" className="hover:bg-orange-100">
            Careers
          </a>
          <a href="#" className="hover:bg-orange-100">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-black bg-orange-600 rounded-full 
        baseline hover:bg-orange-300"
        >
          Get Started
        </a>
        {/* hamberger menu */}

        <button
          className="block hamburger focus:outline-none md:hidden"
          id="menu-btn"
          onClick={() => handleclick()}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold
        bg-white sm:w-auto sm:self-center left -6 right-6 drop-shadow-md px-20"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Career</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
