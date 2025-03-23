import React from "react";
import { TbTransfer } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-screen h-[100vh] flex justify-left items-center mt-28 banner p-28 z-0">
      <div className="w-[80vh] h-[70vh] bg-white rounded-2xl flex flex-col justify-center  items-center">
        <span className="text-3xl font-bold mt-4">Book Ticket</span>
        <div className="flex items-center justify-evenly w-[80vh] py-12 px-4 gap-4 ">
          <div className="flex items-center">
            <FiMapPin size={25} className="absolute z-1 ml-1" />
            <input
              type="text"
              className="bg-gray-100 border-none outline-none w-[15rem] p-4 px-8 rounded-md z-0"
            />
          </div>
          <button className="bg-white border w-12 h-12 hover:bg-black hover:text-white cursor-pointer rounded-full p-4">
            <TbTransfer />
          </button>
          <div className="flex gap-4 justify-center items-center">
            <div
              className="flex items-center w-[80vh] p-4
            "
            >
              <FaPaperPlane size={25} className="absolute z-1 ml-1" />

              <input
                type="text"
                className="bg-gray-100 border-none outline-none w-[15rem] p-4 px-8 rounded-md z-0"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <input
            type="date"
            className="w-[75vh] bg-gray-100 h-12 rounded-md mb-[10px] mt-[-50px] p-4"
          />
        </div>
        <div className="flex gap-4">
          <select
            name=""
            id=""
            className="bg-gray-100 border-none outline-none w-[37.5vh] p-4 px-8 rounded-md z-0 "
          >
            <option value="General">All Classes</option>
          </select>
          <select
            name=""
            id=""
            value={"General"}
            className="bg-gray-100 border-none outline-none w-[35.5vh] p-4 px-8 rounded-md z-0"
          >
            <option value="General">General</option>
          </select>{" "}
        </div>
        <div className="flex gap-4 mt-10">
          <input type="checkbox" name="" id="" />
          Person With Disability Concession
          <input type="checkbox" name="" id="" />
          Flexible With Date
        </div>
        <div className="flex gap-4">
          <input type="checkbox" name="" id="" />
          Train with Available Berth
          <input type="checkbox" name="" id="" />
          Railway Pass Concession
        </div>
        <br />
        <button className="bg-orange-500 w-28 h-12 rounded-md hover:scale-110 cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
