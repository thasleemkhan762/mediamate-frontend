import React, { useEffect, useRef } from 'react';
import { debounce } from 'lodash'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import socket from '../../../socket';
import { fetchUsers, fetchMessages, /*sendMessage,*/ selectUser, addMessage, updateLastMessage  } from '../../../Redux/Reducer/ChatSlice';
import MainPagesHeader from '../../Common/MainPagesHeader/MainPagesHeader';
import "./UserChat.css";
import dummy from '../../../dummyImages/dummy.png'

function UserChat() {
  const dispatch = useDispatch();
    const users = useSelector(state => state.chat.users);
    const currentUserId = useSelector(state => state.data.userId);
    const messages = useSelector(state => state.chat.messages);
    const selectedUser = useSelector(state => state.chat.selectedUser);
    const chatId = useSelector((state) => state.chat.chatId);
    const { register, handleSubmit, reset } = useForm();
    const chatBodyRef = useRef(null);
    const previousChatIdRef = useRef(null);
    const error = useSelector(state => state.chat.error);

    useEffect(() => {
      dispatch(fetchUsers(currentUserId));
  }, [dispatch,currentUserId]);

  useEffect(() => {
    if (selectedUser) {
      const selectedUserId = selectedUser.userId;
      const userId = currentUserId;

      // Fetch messages and handle socket join
      dispatch(fetchMessages({ selectedUserId, userId }))
        .unwrap()
        .then((data) => {
          // Handle chat room joining
          if (previousChatIdRef.current) {
            socket.emit('leaveChat', { chatId: previousChatIdRef.current });
          }
          socket.emit('joinChat', { chatId: data._id });
          previousChatIdRef.current = data._id;
        })
        .catch((error) => {
          console.error("Failed to fetch messages:", error);
          // Optionally handle error (e.g., show notification)
        });
    }
  }, [selectedUser, dispatch, currentUserId]);

  // const lastMessage = messages[messages.length-1].content;


  useEffect(() => {
    // Handle receiving messages via socket
    const handleReceiveMessage = (message) => {
      console.log("Received message:", message);
      dispatch(addMessage(message));
      scrollToBottom();
    };

    socket.on('receiveMessage', handleReceiveMessage);

    // Cleanup the socket listener on component unmount
    return () => {
      socket.off('receiveMessage', handleReceiveMessage);
    };
  }, [dispatch]);

  useEffect(() => {
    // Scroll to the bottom whenever the messages array changes
    scrollToBottom();
  }, [messages]);


  const handleUserClick = debounce((user) => {
    if (!selectedUser || selectedUser.userId !== user.userId) {
      dispatch(selectUser(user));
    }
  }, 0);

  const onSubmit = (data) => {
    if (!selectedUser) return;

      const messageData = {
          senderId: currentUserId,  // Replace with actual current user ID
          recipientId: selectedUser.userId,
          content: data.message,
      };

      dispatch(updateLastMessage({
        userId: selectedUser.userId,
        message: {
          content: data.message,
          // timestamp: result.timestamp,
        },
      }));

      socket.emit('sendMessage', { ...messageData, chatId: chatId}); 

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
                {users.length > 0 ? (
                  <ul>
                    {users.map((user) => (
                      <li
                        key={user.userId}
                        onClick={() => handleUserClick(user)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="single-chat-user">
                          <div className="user-image">
                            {user.image ? (
                              <img
                                src={`http://localhost:5001/${user.image}`}
                                alt="dp"
                              />
                            ) : (
                              <img
                                src={dummy}
                                className="chat-user-pro-pic"
                                alt="default"
                              />
                            )}
                          </div>
                          <div className="user-texts">
                            <h5>{user.username}</h5>
                            <p>{user.lastMessage}</p>
                          </div>
                          <div className="user-infos">
                            <div className="indicator">
                              <div className="count-indicator">
                                <p>3</p>
                              </div>
                              <span className="online-indicator"></span>
                            </div>
                            <p>38 m</p>
                          </div>
                        </div>
                        <hr />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="no-users">
                    <p>
                      No users available. Start a conversation or search for a
                      user to chat with!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            {selectedUser ? (
              <div className="user-chat-display-main">
                <div className="user-chat-head">
                  <div className="user-chat-head-image">
                    {selectedUser.image ? (
                      <img
                        src={`http://localhost:5001/${selectedUser.image}`}
                        alt="dp"
                      />
                    ) : (
                      <img src={dummy} className="chat-pro-pic" alt="" />
                    )}
                  </div>
                  <div className="user-chat-head-texts">
                    <h4>{selectedUser.username}</h4>
                    <span className="online-indicator"></span>
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
                    <ul ref={chatBodyRef}>
                      {messages.map((msg) => (
                        <div
                          key={msg._id}
                          className={
                            msg.sender === currentUserId
                              ? "message-sent"
                              : "message-received"
                          }
                        >
                          <div className="message-content">{msg.content}</div>
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
                      <form
                        className="msg-send-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
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
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </>
  );
}

export default UserChat
