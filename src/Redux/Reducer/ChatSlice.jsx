import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  fetching users
export const fetchUsers = createAsyncThunk('chat/fetchUsers', async (currentUserId) => {
    try {
        const response = await axios.get(`https://mediamate-backend.onrender.com/api/users/allUsers/${currentUserId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
});

// fetching chat history
export const fetchMessages  = createAsyncThunk('chat/fetchMessages ', async ({ selectedUserId, userId }) => {
    
    const response = await axios.get(`https://mediamate-backend.onrender.com/api/users/chat/${ selectedUserId}/${ userId }`);
    console.log(response.data);
    
    return response.data;
});

// sending a message
export const sendMessage = createAsyncThunk('chat/sendMessage', async (messageData) => {
    const response = await axios.post('https://mediamate-backend.onrender.com/api/users/chat/messages', messageData);
    return response.data.messages;
});

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    users: [],
    selectedUser: null,
    lastMessage: null,
    chatId: null,
    messages: [],
    status: "idle",
    error: null,
  },
  reducers: {
    selectUser: (state, action) => {
      if (
        !state.selectedUser ||
        state.selectedUser.userId !== action.payload.userId
      ) {
        state.selectedUser = action.payload;
        state.messages = [];
      }
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      console.log(action.payload);
    },
    updateLastMessage: (state, action) => {
      const { userId, message } = action.payload;
      const user = state.users.find((user) => user.userId === userId);
      if (user) {
        user.lastMessage = message.content;
        //   user.lastMessageTimestamp = message.timestamp;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      //fetch chat history
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload.messages;
        state.chatId = action.payload._id;
        console.log(action.payload.messages);
        // console.log(action.payload._id);
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // sending message
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectUser, addMessage, updateLastMessage } = chatSlice.actions;

export default chatSlice.reducer;