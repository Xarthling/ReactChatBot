// utils/chatHistory.js
export const getChatHistory = () => {
    return [
      {
      chat_id: null,
          chat_name: 'Chat New',
          messages: [
            { sender: 'Bot', text: 'Hi, how are you?' },
          ]
        },
      {
        
        chat_id: '1',
        chat_name: 'Chat 1',
        messages: [
          { sender: 'user', text: 'Hi, how are you?' },
          { sender: 'bot', text: 'I am good, how can I help you?' },
          { sender: 'user', text: 'Can you tell me the weather?' },
          { sender: 'bot', text: 'Sure, its sunny today!' },
        ]
      },
      {
        chat_id: '2',
        chat_name: 'Chat 2',
        messages: [
          { sender: 'user', text: 'Hello, I need some help!' },
          { sender: 'bot', text: 'Of course! What do you need help with?' },
        ]
      },
      {
        chat_id: '3',
        chat_name: 'Chat 3',
        messages: [
          { sender: 'user', text: 'What is the time?' },
          { sender: 'bot', text: 'It is 3:30 PM.' },
        ]
      },
    ];
  };
  