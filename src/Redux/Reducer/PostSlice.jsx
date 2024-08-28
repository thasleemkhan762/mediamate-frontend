import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create post
export const createPost = createAsyncThunk('createPost', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`http://localhost:5001/api/users`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to create post");
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

export const getSingleUserPosts = createAsyncThunk("getSingleUserPosts", async (id) => {
  try {
    const response = await axios.get(`http://localhost:5001/api/users/getSingleUserPosts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
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
        // state.post.push(action.payload);
        state.post = [action.payload, ...state.post];
        console.log(action.payload);
        
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
        // console.log(action.payload.posts);
        
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Some error occurred";
      });
  },
});

export default postSlice.reducer;
