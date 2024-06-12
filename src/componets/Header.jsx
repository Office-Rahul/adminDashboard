import React from "react";
import { IoIosMenu } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center ">
      <div className="flex justify-center items-center gap-16">
      <div className="flex justify-center items-center gap-5">
      <span className="text-2xl"> <IoIosMenu /></span>
        Home
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center items-center gap-1 font-medium">

        Download latest version
        <span className="text-xl">
          <MdDownload />
        </span>
      </button>
      </div>

      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded flex justify-center items-center gap-1 font-bold ">
          Logout
          <span className="text-xl "><BsBoxArrowInRight /></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
