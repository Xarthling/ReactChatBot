<div className="space-y-2 mb-2">
        <button
          className={`flex bg-white items-center space-x-2 p-1 border rounded border-gray-300 hover:shadow-lg w-full ${!isHovered ? 'pointer-events-none' : ''}`}
        >
          <FaPlus className="text-xl" />
          {isHovered && <span>Start New Chat</span>}
        </button>
        <button
          className={`flex bg-white items-center space-x-2 p-1 border rounded border-gray-300 hover:shadow-lg w-full ${!isHovered ? 'pointer-events-none' : ''}`}
        >
          <FaFileUpload className="text-xl" />
          {isHovered && <span>Upload Document</span>}
        </button>
      </div>