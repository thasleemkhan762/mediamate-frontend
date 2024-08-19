import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import socket from '../../../socket';
import { fetchUsers, fetchMessages, sendMessage, selectUser, addMessage  } from '../../../Redux/Reducer/ChatSlice';
import MainPagesHeader from '../../Common/MainPagesHeader/MainPagesHeader';
import Pic from "./chat-dp.png"
import "./UserChat.css";

function UserChat() {
  const dispatch = useDispatch();
    const users = useSelector(state => state.chat.users);
    const currentUserId = useSelector(state => state.data.userId);
    
    const messages = useSelector(state => state.chat.messages);
    const selectedUser = useSelector(state => state.chat.selectedUser);

    const { register, handleSubmit, reset } = useForm();

    const chatBodyRef = useRef(null);

    useEffect(() => {
      dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
      if (selectedUser) {
        const selectedUserId = selectedUser._id;
        const userId = currentUserId;
          dispatch(fetchMessages({ selectedUserId, userId }));
          socket.emit('joinChat', { chatId: selectedUser._id });
      }
  }, [selectedUser, dispatch, currentUserId]);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      dispatch(addMessage(message));
      scrollToBottom(); // Auto-scroll when a new message is received
    });

    // Cleanup the socket listener on component unmount
    return () => {
      socket.off('receiveMessage');
    };
  }, [dispatch]);useEffect(() => {
      socket.on('receiveMessage', (message) => {
          dispatch(addMessage(message));
      });
  }, [dispatch]);

  const handleUserClick = (user) => {
      dispatch(selectUser(user));
  };

  const onSubmit = (data) => {
      const messageData = {
          senderId: currentUserId,  // Replace with actual current user ID
          recipientId: selectedUser._id,
          content: data.message,
      };

      dispatch(sendMessage(messageData));
      socket.emit('sendMessage', { ...messageData, chatId: selectedUser._id });
      reset();
      scrollToBottom(); 
  };
  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  return (
    <>
      <div className="container-fluid home-layout-div">
        <MainPagesHeader />
        <div className="row home-contents">
          <div className="col-md-4">
            <div className="chat-sidebar-box">
              {/* Head */}
              <div className="chat-head">
                <div className="chat-head-text">
                  <h3>Chat</h3>
                </div>
                <div className="chat-head-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </div>
                <div className="chat-head-option">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
              {/* search */}
              <div className="chat-search">
                <input type="text" placeholder="" />
                <span className="material-symbols-outlined search-icon">
                  search
                </span>
              </div>
              {/* users chats */}
              <div className="chat-users">
                <ul>
                  {users.map((user) => (
                    <li
                      key={user._id}
                      onClick={() => handleUserClick(user)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="single-chat-user ">
                        <div className="user-image">
                          <img src={Pic} alt="dp" />
                        </div>
                        <div className="user-texts">
                          <h5>{user.username}</h5>
                          <p>what was name of the song?</p>
                        </div>
                        <div className="user-infos">
                          <div className="indicator">
                            <div className="count-indicator">
                              <p>3</p>
                            </div>
                            <span className="online-indicator">0</span>
                          </div>
                          <p>38m</p>
                        </div>
                      </div>
                      <hr />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            {selectedUser ? (
              <div className="user-chat-display-main">
                <div className="user-chat-head">
                  <div className="user-chat-head-image">
                    <img src={Pic} alt="dp" />
                  </div>
                  <div className="user-chat-head-texts">
                    <h4>Christen Harper</h4>
                    <span className="online-indicator">0</span>
                  </div>
                  <div className="user-chat-head-option">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                  </div>
                </div>
                <div className="chat-body-main">
                  <div className="chat-previws">
                    <ul>
                      {messages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={
                            msg.sender === currentUserId
                              ? "message-sent"
                              : "message-received"
                          }
                        >
                          <div className="message-content">
                          {msg.content}
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className="chat-inputs">
                    <div className="chat-attach-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-paperclip"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                      </svg>
                    </div>
                    <div className="chat-input">
                      <form className='msg-send-form' onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("message")}
                          autoComplete="off"
                          placeholder="Type your message here"
                        />
                        <button type="submit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-send-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="user-chat-display">
                <div className="chat-body">
                  <h3>Select a user to chat</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserChat
