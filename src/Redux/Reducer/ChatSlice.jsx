import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  fetching users
export const fetchUsers = createAsyncThunk('chat/fetchUsers', async () => {
    const response = await axios.get('http://localhost:5001/api/users/allUsers');
    return response.data;
});

// fetching chat history
export const fetchChatHistory = createAsyncThunk('chat/fetchChatHistory', async (userId) => {
    const response = await axios.get(`http://localhost:5001/api/users/chat/${userId}`);
    return response.data[0]?.messages || [];
});

// sending a message
export const sendMessage = createAsyncThunk('chat/sendMessage', async (messageData) => {
    const response = await axios.post('http://localhost:5001/api/users/chat/messages', messageData);
    return response.data.messages;
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    users: [],
        selectedUser: null,
        messages: [],
        status: 'idle',
        error: null
  },
  reducers: {
    setSelectedUser(state, action) {
        state.selectedUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    //fetch users
    .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
    })
    //fetch chat history
    .addCase(fetchChatHistory.pending, (state) => {
        state.status = "loading";
    })
    .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.messages = action.payload;
    })
    .addCase(fetchChatHistory.rejected, (state, action) => {
        state.error = action.error.message;
    })
    // sending message
    .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
    })
    .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages = action.payload;
    })
    .addCase(sendMessage.rejected, (state, action) => {
        state.error = action.error.message;
    });
  }
});

export const { setSelectedUser  } = chatSlice.actions;

export default chatSlice.reducer;