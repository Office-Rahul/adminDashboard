import React from 'react';
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center ">
        <div className="flex justify-center items-center gap-6"><IoIosMenu />Home</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Download latest version</button>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
}

export default Header;
