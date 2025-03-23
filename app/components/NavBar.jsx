import React from "react";

const NavBar = () => {
  return (
    <nav className="flex px-12 w-screen justify-between items-center fixed bg-white rounded-b-md h-28 mt-[-120px] align-top z-100">
      <div className="logo">
        <img
          src="https://www.irctc.co.in/nget/assets/images/logo.png"
          alt="Logo"
          width={75}
          height={75}
        />
      </div>
      <div className="links flex items-center justify-center  gap-4 text-bold">
        <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
          Home{" "}
        </a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
          Trains{" "}
        </a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
          Loyalty
        </a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
          IRCTC ewallet{" "}
        </a>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 text-capitalize"
        >
          BUSES{" "}
        </a>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 text-capitalize"
        >
          FLIGHTS
        </a>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 text-capitalize"
        >
          HOLIDAYS
        </a>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 text-capitalize"
        >
          MEALS
        </a>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 text-capitalize"
        >
          PROMOTIONS
        </a>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 text-capitalize"
        >
          MORE
        </a>
      </div>
      <div className="login-and-signup flex gap-4 items-center">
        <button className="w-32 bg-[#252994] text-white h-10 rounded-md hover:scale-110 cursor-pointer">
          Login
        </button>
        <p className="hover:scale-110 cursor-scroll">Sign up</p>
      </div>
    </nav>
  );
};

export default NavBar;
