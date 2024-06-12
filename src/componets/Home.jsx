import "../App.css";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
  useEffect(() => {
    if (!sessionStorage.getItem("email")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-4">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
