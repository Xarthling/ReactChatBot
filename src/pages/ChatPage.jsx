import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatPage;
