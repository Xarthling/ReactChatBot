import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <div className="mb-4 text-xl font-semibold">ChatBot App</div>
      <ul>
        <li className="mb-2">
          <Link to="/chat" className="hover:text-blue-400">
            Chat
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/upload" className="hover:text-blue-400">
            Uploaded Documents
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/history" className="hover:text-blue-400">
            Chat History
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="hover:text-blue-400">
            User Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
