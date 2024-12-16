import { useState, useEffect, useRef } from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import logo from '../assets/logo.png';
import profile from '../assets/profile.jpeg';
import { getChatHistory } from '../utils/chatHistory'; // Import mock API
import chatResponses from '../utils/chatResponses'; // Import response mock API

import UserSettings from "../components/UserSettings";

function ChatBox({ chat, uploadedDocuments ,getUser, }) {
  const [messages, setMessages] = useState([]); // To store chat messages
  const [input, setInput] = useState(''); // To store user input
  const [isBotTyping, setIsBotTyping] = useState(false); // To control bot typing animation
  const messagesEndRef = useRef(null); // To scroll to the bottom
  const chatId = typeof chat === 'object' ? chat.chat_id : chat;
  const [selectedDoc, setSelectedDoc] = useState(null);
  const userData = getUser(); // Fetch user data

  useEffect(() => {
    if (chatId) {
      const chatHistory = getChatHistory(); // Fetch all chat history
      const selectedChat = chatHistory.find((item) => item.chat_id === chatId.toString()); // Match chat_id as string
      setMessages(selectedChat ? selectedChat.messages : []); // Update messages state
    }
  }, [chat]);
  const DocOptions = uploadedDocuments.map((doc) => ({
    id: doc.id,
    name: doc.name,
  }));

  const handleAttachDocument = (docId) => {
    const selectedDoc = DocOptions.find((d) => d.id === docId);
    if (selectedDoc) {
      setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: `Attached Document: ${selectedDoc.name}` }]);
    }
  };

  const handleSelectChange = (value) => {
    const selected = DocOptions.find(doc => doc.id === parseInt(value));
    setSelectedDoc(selected);
    handleAttachDocument(value);
    document.querySelector('select').value = ""; // Reset the select element to show the placeholder
  };

  // Handle sending messages
  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = input;
    const botResponse = chatResponses[userMessage.toLowerCase()] || chatResponses.default;

    setMessages([...messages, { sender: 'user', text: userMessage }, { sender: 'bot', text: botResponse }]);
    setInput(''); // Clear input field
  };

  // Handle "Enter" key to send messages
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex-1 w-11/12 p-3 bg-white overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <img src={logo} alt="Logo" className="w-52 mb-4" />
            <p className="text-lg">Start a new chat to see messages here!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-gray-200 self-end' : 'bg-gray-100 self-start'}`}
              >
                <img
                  src={msg.sender === 'user' ? (userData.profilePic || profile) : logo}
                  alt={`${msg.sender} Logo`}
                  className="w-6 h-6 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">{msg.sender === 'user' ? 'You' : 'Bot'}</span>
                  <span className="text-sm">{msg.text}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {isBotTyping && (
          <div className="flex items-start space-x-2 p-2 rounded-lg bg-gray-100 self-start">
            <img src={logo} alt="Bot Logo" className="w-6 h-6 rounded-full" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Bot</span>
              <span className="text-sm">...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border w-11/12 border-gray-300">
        <div className="flex bg-white p-4 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 p-2 focus:outline-none border-none text-sm"
          />
          <button className="p-2 text-white bg-black rounded-r-lg hover:bg-gray-600" onClick={handleSend}>
            <FaPaperPlane className="text-xl" />
          </button>
        </div>
        <div className="flex items-center p-2 bg-white">
          <select
            className="p-1 border max-w-[150px] rounded-lg text-sm"
            onChange={(e) => handleSelectChange(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled hidden>Select a document</option>
            {DocOptions.map((doc) => (
              <option className="truncate" key={doc.id} value={doc.id} title={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
          {selectedDoc && (
            <span className="text-sm flex items-center border border-gray-300 rounded p-1 bg-white shadow-sm">
              <FaPaperclip className="text-md mr-2 text-gray-600 hover:text-red-400 cursor-pointer" onClick={() => setSelectedDoc(null)} />
              {selectedDoc.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatBox;