import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import socket from '../../../socket';
import { addMessage } from '../../../Redux/Reducer/ChatSlice';
import MainPagesHeader from '../../Common/MainPagesHeader/MainPagesHeader';
import Pic from "./chat-dp.png"

function UserChat() {
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
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
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
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
              {/* search */}
              <div className="chat-search">
                <input type="text" placeholder="Search chats" />
                <span className="material-symbols-outlined search-icon">
                  search
                </span>
              </div>
              {/* users chats */}
              <div className="chat-users">
                <div className="single-chat-user">
                  <div className="user-image">
                    <img src={Pic} alt="dp" />
                  </div>
                  <div className="user-texts">
                    <h5>Christen Harper</h5>
                    <p>what was name of the song?</p>
                  </div>
                  <div className="user-infos">
                    <p>3</p>
                    <span className="online-indicator">0</span>
                    <p>38m</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="user-chat-display">
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
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
              <div className="chat-body">
                <div className="chat-previws">
                  <ul>
                    {messages.map((msg, index) => (
                      <li key={index}>{msg}</li>
                    ))}
                  </ul>
                </div>
                <div className="chat-inputs">
                  <div className="chat-attach-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-paperclip"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                    </svg>
                  </div>
                  <div className="chat-input">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        {...register("message")}
                        autoComplete="off"
                        placeholder="Type your message here"
                      />
                      <button type="submit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-send-fill"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default UserChat
