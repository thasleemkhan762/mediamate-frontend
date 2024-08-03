import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create post
export const createPost = createAsyncThunk('post/createPost', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`http://localhost:5001/api/users`, data);
    return response.data;
  } catch (error) {
    // Return a rejected action with the error message
    return rejectWithValue(error.response.data);
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState: {
    data: [],
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
        state.data.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Some error occurred";
      });
  },
});

export default postSlice.reducer;
