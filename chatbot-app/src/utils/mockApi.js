export const getChatHistory = () => {
  // Simulate fetching chat history (mock data)
  return [
    { chat_id: '1', title: 'Chat 1', messages: ['Hello', 'Hi, how are you?'] },
    { chat_id: '2', title: 'Chat 2', messages: ['Good morning!', 'How was your day?'] },
    { chat_id: '3', title: 'Chat 3', messages: ['Did you see that movie?', 'Yes, it was great!'] },
  ];
};

export const getChatMessages = (chat_id) => {
  // Simulate fetching messages for a specific chat
  const chats = getChatHistory();
  const chat = chats.find(c => c.chat_id === chat_id);
  return chat ? chat.messages : [];
};
