import { useState, useEffect } from 'react';
import { fetchChatMessages } from '../utils/mockApi';

const useChatData = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const data = await fetchChatMessages();
                setMessages(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadMessages();
    }, []);

    return { messages, loading, error };
};

export default useChatData;