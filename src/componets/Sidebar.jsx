import React, { useState } from "react";
import { MdOutlineSpeed, MdOutlineSettingsSuggest } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import {
  FaUser,
  FaGamepad,
  FaWrench,
  FaRegCaretSquareDown,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Sidebar = () => {
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);

  const toggleResults = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    setIsResultsOpen(!isResultsOpen);
  };

  const toggleSales = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    setIsSalesOpen(!isSalesOpen);
  };

  const toggleCommission = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    setIsCommissionOpen(!isCommissionOpen);
  };

  return (
    <div className="bg-white shadow-2xl w-64 ">
      <div className="p-4">
        <h1 className="text-xl font-bold flex justify-start items-center gap-2 text-gray-500">
          <span className="text-gray-500 text-2xl shadow rounded-full">
            <LuUserCircle2 />
          </span>
          Admin
        </h1>
        <div className="border border-black mt-7"></div>
      </div>
      <nav>
        <ul className="text-violet-400 font-bold">
          <li className="px-3 py-3">
            <a
              href="/dashboard"
              className="flex justify-start items-center gap-2 bg-violet-400 rounded-full text-white py-2 px-3 transition-colors duration-300"
            >
              <span className="text-2xl"><MdOutlineSpeed /></span>
              Dashboard
            </a>
          </li>
          <li className="px-5 py-4">
            <a
              href="/distributor"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
               <span className="text-2xl"><FaUser /></span>
              Add Distributors
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/users"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
             <span className="text-2xl"><FaUser /></span>
              Add Users
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/amountrate"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <span className="text-2xl"><FaGamepad /></span>
              Amount Rate
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/livegame"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <span className="text-2xl"><FaWrench /></span>
              Live Game
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/ntpreport"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
             <span className="text-2xl"><FaWrench /></span>
              NTP Report
            </a>
          </li>
          <li
            className="px-5 py-3 flex justify-between items-center cursor-pointer"
            onClick={toggleResults}
          >
            <div className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300">
            <span className="text-2xl"> <FaRegCaretSquareDown /></span>
              <span>Results</span>
            </div>
            <span className="">{isResultsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </li>
          {isResultsOpen && (
            <ul className="px-8">
              <li className="py-2">
                <a
                  href="/results/sub1"
                  className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
                >
                    <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
                  Game
                </a>
              </li>
            </ul>
          )}
          <li
            className="px-5 py-3 flex justify-between items-center cursor-pointer"
            onClick={toggleSales}
          >
            <div className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300">
            <span className="text-2xl"><FaRegCaretSquareDown /></span>
              <span>Sales</span>
            </div>
            <span>{isSalesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </li>
          {isSalesOpen && (
            <ul className="px-8">
              <li className="py-2">
                <a
                  href="/sales/sub1"
                  className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
                >
                  <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
                  Game
                </a>
              </li>
            </ul>
          )}
          <li
            className="px-5 py-3 flex justify-between items-center cursor-pointer"
            onClick={toggleCommission}
          >
            <div className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300">
            <span className="text-2xl"><FaRegCaretSquareDown /></span>
              <span>Commission</span>
            </div>
            <span>{isCommissionOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </li>
          {isCommissionOpen && (
            <ul className="px-8">
              <li className="py-2">
                <a
                  href="/commission/sub1"
                  className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
                >
                  <span className="text-2xl"> <FaWrench /></span>
                  Distributor
                </a>
              </li>
              <li className="py-2 ">
                <a
                  href="/commission/sub1"
                  className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
                >
                  <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
                  Retailer
                </a>
              </li>
            </ul>
          )}
          <li className="px-5 py-3">
            <a
              href="/changepassword"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
              <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
              Change Password
            </a>
          </li>
          <li className="px-5 py-3">
            <a
              href="/resultsettings"
              className="flex justify-start items-center gap-2 hover:bg-violet-400 hover:rounded-full hover:text-white transition-colors duration-300"
            >
                <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
              Result Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
