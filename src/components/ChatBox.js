// components/ChatBox.js
import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { user: message }]);
      setMessage('');
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg">
      <div className="h-80 overflow-y-scroll mb-4">
        {chatHistory.map((msg, index) => (
          <div key={index} className="mb-2">
            <p className="bg-gray-200 p-2 rounded">{msg.user}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
