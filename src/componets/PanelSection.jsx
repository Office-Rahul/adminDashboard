import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "./Sidebar1";
import TopHeader from "./TopHeader";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import AmountRate from "../pages/AmountRate";
import Distributor from "../pages/Distributor";
import LiveGame from "../pages/LiveGame";
import NtpReport from "../pages/NtpReport";
import Results from "../pages/Results";
import Commision from "../pages/Commision";
import Sales from "../pages/Sales";
import ChangePassword from "../pages/ChangePassword";
import ResultSettings from "../pages/ResultSettings";

const PanelSection = () => {
  const path = window.location.pathname;
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("email")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex gap-2">
      <div className={`${open ? "w-[270px]" : "w-[100px]"}`}>
        <Sidebar1 open={open} />
      </div>
      <div className={`${open ? "w-[80%]" : "w-full"}`}>
        <TopHeader open={open} setOpen={setOpen} />
        <div className="mt-2">
          {path === "/" && <Dashboard />}

          {path === "/distributor" && <Distributor />}

          {path === "/user" && <Users />}
          {path === "/amountrate" && <AmountRate />}
          {path === "/livegame" && <LiveGame />}
          {path === "/ntpreport" && <NtpReport />}
          {path === "/result" && <Results />}
          {path === "/sales" && <Sales />}
          {path === "/commision" && <Commision />}
          {path === "/changepassword" && <ChangePassword />}
          {path === "/resultsettings" && <ResultSettings />}
        </div>
      </div>
    </div>
  );
};

export default PanelSection;
