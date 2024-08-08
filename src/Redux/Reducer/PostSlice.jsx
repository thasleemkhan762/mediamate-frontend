import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create post
export const createPost = createAsyncThunk('createPost', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`http://localhost:5001/api/users`, data);
    return response.data;
  } catch (error) {
    // Return a rejected action with the error message
    return rejectWithValue(error.response.data);
  }
});

// Get all posts
export const getAllPosts = createAsyncThunk('getAllPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:5001/api/users`);
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post.push(action.payload);
        console.log(state.post);
        
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Some error occurred";
      })
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload.posts;
        console.log(action.payload.posts);
        
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Some error occurred";
      });
  },
});

export default postSlice.reducer;
