import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBowlFood } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";

const Service = () => {
  return (
    <div className="flex flex-col w-screen h-[100vh] justify-center items-center">
      <div className="flex flex-col">
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full scale-150">
              <IoAirplaneSharp />
            </button>
            Flight
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full scale-150">
              <LiaHotelSolid />
            </button>
            Hotel
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full scale-150">
              <BsGraphUpArrow />
            </button>
            Rail Drishti
          </div>
          <div className="flex flex-col"></div>
          <button className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full scale-150">
            <FaBowlFood />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full scale-150">
            <FaBus />
          </button>
        </div>
        <div className="flex gap-12">
          <button className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full scale-150">
            <BsGraphUpArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
