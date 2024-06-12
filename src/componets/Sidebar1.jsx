import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaGamepad, FaRegCaretSquareDown, FaUser, FaWrench } from "react-icons/fa";
import { LuUserCircle2 } from "react-icons/lu";
import { MdOutlineSettingsSuggest, MdOutlineSpeed } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar1 = ({ open }) => {
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  const location = useLocation();

  const toggleResults = () => {
    setIsResultsOpen(!isResultsOpen);
  };

  const toggleSales = () => {
    setIsSalesOpen(!isSalesOpen);
  };

  const toggleCommission = () => {
    setIsCommissionOpen(!isCommissionOpen);
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-w-md gap-6 p-5 bg-white shadow-2xl border-r">
      <div className="">
        <h1 className="text-xl font-bold flex justify-start items-center gap-2 text-gray-500">
          <span className="text-gray-500 text-2xl shadow rounded-full">
            <LuUserCircle2 />
          </span>
          Admin
        </h1>
        <div className="border border-black mt-4"></div>
      </div>
      <div className="">
        <Link to="/">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <MdOutlineSpeed /> {open && "Dashboard"}
          </div>
        </Link>
      </div>
      <div className="">
        <Link to="/distributor">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/distributor" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <FaUser /> {open && "Add Distributors"}
          </div>
        </Link>
      </div>
      <div className="">
        <Link to="/user">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/user" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <FaUser /> {open && "User"}
          </div>
        </Link>
      </div>
      <div className="">
        <Link to="/amountrate">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/amountrate" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <FaGamepad /> {open && "Amount Rate"}
          </div>
        </Link>
      </div>
      <div className="">
        <Link to="/livegame">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/livegame" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <FaWrench /> {open && "Live Game"}
          </div>
        </Link>
      </div>
      <div className="">
        <Link to="/ntpreport">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/ntpreport" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <FaWrench /> {open && "NTP Report"}
          </div>
        </Link>
      </div>

      {/* Results Section */}
      <div className="">
        <div onClick={toggleResults} className="cursor-pointer">
          <div className={`flex items-center justify-between font-bold ${location.pathname.startsWith("/results") ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <div className="flex items-center gap-2">
              <FaRegCaretSquareDown /> {open && "Results"}
            </div>
            <span>{isResultsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
        </div>
        {isResultsOpen && (
          <ul className="mt-3 ml-4">
            <li className="">
              <Link
                to="/results/game"
                className={`flex justify-start items-center gap-2 font-bold ${location.pathname === "/results/game" ? "bg-violet-500 text-white" : "text-violet-500"}`}
              >
                <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
                Game
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Sales Section */}
      <div className="">
        <div onClick={toggleSales} className="cursor-pointer">
          <div className={`flex items-center justify-between font-bold ${location.pathname.startsWith("/sales") ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <div className="flex items-center gap-2">
              <FaRegCaretSquareDown /> {open && "Sales"}
            </div>
            <span>{isSalesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
        </div>
        {isSalesOpen && (
          <ul className="mt-3 ml-4">
            <li className="">
              <Link
                to="/sales/sub1"
                className={`flex justify-start items-center gap-2 font-bold ${location.pathname === "/sales/sub1" ? "bg-violet-500 text-white" : "text-violet-500"}`}
              >
                <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
                Game
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Commission Section */}
      <div className="">
        <div onClick={toggleCommission} className="cursor-pointer">
          <div className={`flex items-center justify-between font-bold ${location.pathname.startsWith("/commission") ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <div className="flex items-center gap-2">
              <FaRegCaretSquareDown /> {open && "Commission"}
            </div>
            <span>{isCommissionOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
        </div>
        {isCommissionOpen && (
          <ul className="mt-3 ml-4">
            <li className="">
              <Link
                to="/commission/sub1"
                className={`flex justify-start items-center gap-2 font-bold ${location.pathname === "/commission/sub1" ? "bg-violet-500 text-white" : "text-violet-500"}`}
              >
                <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
                Distributor
              </Link>
            </li>
            <li className="">
              <Link
                to="/commission/sub2"
                className={`flex justify-start items-center gap-2 font-bold ${location.pathname === "/commission/sub2" ? "bg-violet-500 text-white" : "text-violet-500"}`}
              >
                <span className="text-2xl"><MdOutlineSettingsSuggest /></span>
                Retailer
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className="">
        <Link to="/changepassword">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/changepassword" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <MdOutlineSettingsSuggest /> {open && "Change Password"}
          </div>
        </Link>
      </div>
      <div className="">
        <Link to="/resultsettings">
          <div className={`flex items-center gap-2 font-bold ${location.pathname === "/resultsettings" ? "bg-violet-500 text-white" : "text-violet-500"}`}>
            <MdOutlineSettingsSuggest /> {open && "Result Settings"}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar1;
