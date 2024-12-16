import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';
import { getUser, updateUser } from '../utils/mockUser'; 
import { getUploadedDocuments, uploadDocument, deleteDocument, downloadDocument } from '../utils/mockDocument'; // Assuming these methods are in mockDocument.js
import {getChatHistory} from '../utils/chatHistory';

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState('null'); // Set default to "New Chat"
  const [uploadedDocuments, setUploadedDocuments] = useState([]); // State to hold uploaded documents

  // Fetch uploaded documents when the component loads
  useEffect(() => {
    const docs = getUploadedDocuments(); // Get documents from the mock API
    setUploadedDocuments(docs);
  }, []); // Run only once on initial render

  const handleChatSelect = (chat) => {
    setSelectedChat(chat || 'New Chat'); // Set the selected chat in state, default to "New Chat" if chat is null
    console.log(`chatpage: ${chat}`);
  };

  // Document handling functions
  const handleDocumentUpload = (file) => {
    const newDoc = uploadDocument(file);
    setUploadedDocuments((prevDocs) => [...prevDocs, newDoc]); // Add document to state
  };

  const handleDeleteDocument = (docId) => {
    deleteDocument(docId); // Mock delete operation
    setUploadedDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== docId)); // Remove from state
  };

  const handleDownloadDocument = (docId) => {
    downloadDocument(docId); // Mock download operation
  };

  
  return (
    <div className="flex">
      <Sidebar
        uploadedDocuments={uploadedDocuments} // Pass documents to Sidebar
        onDocumentUpload={handleDocumentUpload} // Handle document upload in Sidebar
        onDeleteDocument={handleDeleteDocument} // Handle document delete in Sidebar
        onDownloadDocument={handleDownloadDocument} // Handle document download in Sidebar
        onChatSelect={handleChatSelect} // Handle chat selection in Sidebar
        getUser={getUser} 
        updateUser={updateUser}
        chatHistory={getChatHistory}
      />
      <div className="flex-1 bg-gray-200">
        {selectedChat === 'New Chat' ? (
          <ChatBox
            chat={selectedChat} // Pass selected chat to ChatBox
            uploadedDocuments={uploadedDocuments} // Pass documents to ChatBox for attachment functionality
            getUser={getUser} 
          />
        ) : (
          <ChatBox
            chat={selectedChat} // Pass selected chat to ChatBox
            uploadedDocuments={uploadedDocuments} // Pass documents to ChatBox
            getUser={getUser} 
          />
        )}
      </div>
    </div>
  );
}

export default ChatPage;
