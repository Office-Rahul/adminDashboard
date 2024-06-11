import React from 'react';


const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin</h1>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700"><a href="/dashboard">Dashboard</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="/users">Users</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
