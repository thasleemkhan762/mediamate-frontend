import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  fetching users
export const fetchUsers = createAsyncThunk('chat/fetchUsers', async () => {
    const response = await axios.get('http://localhost:5001/api/users/allUsers');
    console.log(response.data); 
    return response.data;
});

// fetching chat history
export const fetchMessages  = createAsyncThunk('chat/fetchMessages ', async ({ selectedUserId, userId }) => {
    
    const response = await axios.get(`http://localhost:5001/api/users/chat/${ selectedUserId}/${ userId }`);
    console.log(response.data);
    
    return response.data;
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
    lastMessage:null,
    chatId: null,
    messages: [],
    status: 'idle',
    error: null
  },
  reducers: {
    selectUser: (state, action) => {
        state.selectedUser = action.payload;
        state.messages = [];
    },
    addMessage: (state, action) => {
        state.messages.push(action.payload);
        console.log(action.payload);
        
    },
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
    .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
    })
    .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload.messages;
        state.chatId = action.payload._id;
        console.log(action.payload.messages);
        console.log(action.payload._id);
        
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
  }
});

export const { selectUser, addMessage } = chatSlice.actions;

export default chatSlice.reducer;