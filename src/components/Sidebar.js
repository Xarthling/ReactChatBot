// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl mb-4">Chatbot</h2>
      <ul>
        <li>
          <Link to="/chat" className="block py-2">New Chat</Link>
        </li>
        <li>
          <button className="block py-2">Uploaded Documents</button>
        </li>
        <li>
          <button className="block py-2">Chat History</button>
        </li>
        <li>
          <button className="block py-2">User Settings</button>
        </li>
        <li>
          <button className="block py-2">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
