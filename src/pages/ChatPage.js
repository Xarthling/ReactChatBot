// pages/ChatPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatPage;
