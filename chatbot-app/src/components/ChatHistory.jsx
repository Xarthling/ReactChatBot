import { FaTrashAlt, FaDownload } from 'react-icons/fa';

function ChatHistory({ isHovered, handleChatClick, handleDelete, handleDownload, chatHistory }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center p-0.5">
        {isHovered && <span>Chat History</span>}
      </div>
      {isHovered && (
        <div className="h-3/4 rounded overflow-y-auto bg-white p-0.5 shadow">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="relative group text-sm hover:bg-gray-200 p-2 rounded cursor-pointer flex justify-between items-center"
              onClick={() => handleChatClick(chat)}
            >
              {/* Chat name */}
              <span>{chat}</span>

              {/* Action Icons (Trash and Download) */}
              <div className="invisible group-hover:visible flex space-x-2">
                <FaTrashAlt
                  className="text-red-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent chat click event
                    handleDelete(chat, 'chat');
                  }}
                />
                <FaDownload
                  className="text-black-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent chat click event
                    handleDownload(chat, 'chat');
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChatHistory;
