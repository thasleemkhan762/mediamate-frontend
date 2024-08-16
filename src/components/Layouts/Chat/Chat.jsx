import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import socket from './socket';
import { addMessage } from './chatSlice';

const Chat = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    // Listen for chat messages from the server
    socket.on('chat message', (msg) => {
      dispatch(addMessage(msg));
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.off('chat message');
    };
  }, [dispatch]);

  const onSubmit = (data) => {
    const { message } = data;
    if (message) {
      // Emit the chat message to the server
      socket.emit('chat message', message);
      reset(); // Reset the form input after submission
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('message')}
          autoComplete="off"
          placeholder="Type your message here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
