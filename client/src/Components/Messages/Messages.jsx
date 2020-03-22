import React from 'react';
import './Messages.css';
import Message from '../Message/Message';

import ScrollTomBottom from 'react-scroll-to-bottom';

const Messages = (props) => {
  const { messages, name } = props;

  console.log('MESSAGES', messages);
  return (
    <ScrollTomBottom>
      {messages.map((msg, idx) => (
        <div key={idx}>
          <Message message={msg} name={name} />
        </div>
      ))}
    </ScrollTomBottom>
  );
};

export default Messages;
