import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { id: Date.now(), sender: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput('');

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, sender: 'bot', text: 'This is a simulated response.' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-lg rounded-lg p-4">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
