import React, { useEffect, useState } from 'react';
import API from '../api/api.js';

export default function ChatQueue() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.get('/chat')
      .then(res => setMessages(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Chat Queue</h2>
      {messages.map(m => (
        <div key={m._id}>
          <b>{m.user}:</b> {m.content} ({m.status})
        </div>
      ))}
    </div>
  );
}
