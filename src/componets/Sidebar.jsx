import React from "react";
import { MdOutlineSpeed, MdOutlineSettingsSuggest } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import {
  FaUser,
  FaGamepad,
  FaWrench,
  FaRegCaretSquareDown,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-2xl w-64 h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold flex justify-start items-center gap-2 text-gray-500">
          <span className="text-gray-500 text-2xl shadow rounded-full">
            <LuUserCircle2 />
          </span>
          Admin
        </h1>
      </div>
      <nav>
        <ul className="text-violet-400 font-bold">
          <li className="px-3 py-4">
            <a
              href="/dashboard"
              className="flex justify-start items-center gap-2 bg-violet-400 rounded-full text-white py-2 px-3 transition-colors duration-300"
            >
              <MdOutlineSpeed />
              Dashboard
            </a>
          </li>
          <li className="px-5 py-4">
            <a
              href="/distributor"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaUser />
              Add Distributors
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/users"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaUser />
              Add Users
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/amountrate"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaGamepad />
              Amount Rate
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/livegame"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaWrench />
              Live Game
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/ntpreport"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaWrench />
              NTP Report
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/results"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaRegCaretSquareDown />
              Results
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/sales"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaRegCaretSquareDown />
              Sales
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/commission"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <FaRegCaretSquareDown />
              Commission
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/changepassword"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <MdOutlineSettingsSuggest />
              Change Password
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/resultsettings"
              className="flex justify-start items-center gap-2  hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300 "
            >
              <MdOutlineSettingsSuggest />
              Result Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
