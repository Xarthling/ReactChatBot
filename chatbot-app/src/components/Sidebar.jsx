import { useState, useEffect } from "react";
import { FaUser, FaSignOutAlt, FaPlus, FaFileUpload, FaHistory, FaTrashAlt, FaDownload, FaCog } from 'react-icons/fa';

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import UserSettings from "./UserSettings";

function Sidebar({
  getUser,
  updateUser,
  uploadedDocuments,
  onDocumentUpload,
  onDeleteDocument,
  onDownloadDocument,
  onChatSelect,
  chatHistory
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeChat, setActiveChat] = useState(null); // Track the active chat
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false); // State to control modal visibility
  const userData = getUser(); // Fetch user data
const ChatHistory = chatHistory();
  
  const handleNewChat = () => {
    onChatSelect(null); // Pass `null` to start a new chat
    console.log("Sidebar: New Chat initiated");
  };

  const handleChatClick = (chat) => {
    setActiveChat(chat.id);
    onChatSelect(chat.id); // Pass selected chat ID to parent (ChatBox)
    console.log(chat.id);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newDocument = { id: uploadedDocuments.length + 1, name: file.name };
      onDocumentUpload(newDocument); // Pass uploaded document to parent
    }
  };

  const handleDelete = (item) => {
    onDeleteDocument(item.id); // Call parent delete function
  };

  const handleDownload = (item) => {
    onDownloadDocument(item.id); // Call parent download function
  };
  const handleSettingsClick = () => {
    setIsSettingsModalOpen(true); // Open the settings modal
  };
  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false); // Close the settings modal
  };
  return (
    <div
      className={`bg-gray-50 text-black flex flex-col h-screen p-4 transition-all duration-300 border-r border-gray-300 ${isHovered ? "w-64" : "w-16"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <img src={logo} alt="Logo" className="w-12 mx-auto" />
      </div>

      {/* Section 1: New Chat and Upload Document Buttons */}
      <div className="space-y-2 mb-2">
        <button
          className={`flex bg-white items-center space-x-3 mb-1 p-1 border rounded border-gray-300 hover:shadow-lg w-full hover:bg-black hover:text-white  ${!isHovered ? "pointer-events-none" : ""
            }`}
          onClick={handleNewChat}
        >
          <FaPlus className="text-xl" />
          {isHovered && <span>Start New Chat</span>}
        </button>
        <label
          className={`flex bg-white items-center space-x-2 p-1 border rounded border-gray-300 hover:bg-black hover:text-white hover:shadow-lg w-full ${!isHovered ? "pointer-events-none" : ""
            }`}
        >
          <FaFileUpload className="text-xl" />
          {isHovered && <span>Upload Document</span>}
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>
      </div>

      {/* Section 2: Scrollable Chat History and Uploaded Documents */}
      <div className="flex-1 overflow-hidden space-y-1 mb-1 flex flex-col">
        {/* Chat History Section */}
        <div className="flex flex-col">
          <div className="flex items-center p-0.5">
            {isHovered && <span>Chat History</span>}
          </div>
          {isHovered && (
            <div className="h-[25vh] rounded overflow-y-auto bg-white p-0.5 shadow">
              {ChatHistory.map((chat) => (
                <div
                  
                  className="relative group text-sm hover:bg-black hover:text-white p-2 rounded cursor-pointer flex justify-between items-center"
                  key={chat.chat_id} onClick={() => handleChatClick(chat)}
                >
                  <span> {chat.chat_name}</span>

                  {/* Action Icons (Trash and Download) */}
                  <div className="invisible group-hover:visible flex space-x-2">
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent chat click event
                        handleDelete(chat);
                      }}
                    />
                    <FaDownload
                      className="text-black-500 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent chat click event
                        handleDownload(chat);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Uploaded Documents Section */}
        <div className="flex flex-col">
          {isHovered && (
            <div className="flex flex-col">
              <div className="flex items-center p-1">
                {isHovered && <span>Uploaded Documents</span>}
              </div>
              {isHovered && (
                <div className="h-[25vh] rounded overflow-y-auto bg-white p-1 shadow">
                  {uploadedDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="relative group flex justify-between items-center p-2 text-sm hover:bg-black hover:text-white rounded cursor-pointer"
                    >
                      <span className="truncate max-w-[150px]">{doc.name}</span>
                      <div className="invisible group-hover:visible flex space-x-2">
                        
                        <button
                          onClick={() => handleDelete(doc)}
                          title="Delete"
                        >
                          <FaTrashAlt className="text-black-500 cursor-pointer text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Section 3: User Profile and Logout */}
      <div className="space-y-2 mt-auto">
        <button
          onClick={handleSettingsClick}
          className={`flex bg-white items-center space-x-3 mb-1 p-1 border rounded border-gray-300 hover:shadow-lg hover:bg-black hover:text-white w-full ${!isHovered ? "pointer-events-none" : ""
            }`}
        >
          <img
            src={userData.profilePic || 'src/assets/profile.jpeg'}
            alt="Profile"
            className="w-8 rounded-full border"
          />
          {isHovered && <span>{userData.name}</span>}
        </button>

        <button
          className={`flex bg-white items-center space-x-3 mb-1 p-1 border rounded border-gray-300 hover:shadow-lg hover:bg-black hover:text-white w-full ${!isHovered ? "pointer-events-none" : ""
            }`}
        >
          <FaSignOutAlt className="text-xl text-red-500" />
          {isHovered && <span>Logout</span>}
        </button>
      </div>
      {isSettingsModalOpen && <UserSettings
        getUser={getUser}
        updateUser={updateUser}
        onClose={closeSettingsModal}
      />}
    </div>
  );
}

export default Sidebar;
