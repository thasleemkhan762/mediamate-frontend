import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// create products
export const createPost = createAsyncThunk('createPost', async (data) => {
    try {
        const response = await axios.post(`http://localhost:5001/api/users`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
});


// const postSlice = createSlice({
//     name: 'post',
//     initialState:{
//         post: [],
//         status: "idle",
//         error: "",
//         loading: false,
//     },
//     reducers:{},
//     extraReducers: (builder) => {
//         builder
//         .addCase(createProduct.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(createProduct.fulfilled, (state, action) => {
//             state.loading = false;
//             state.post = action.payload;
//         })
//         .addCase(createProduct.rejected, (state, action) => {
//             state.loading = false;
//             state.error = "Some Error Occured";
//         })
//     },
    
// });

const postSlice = createSlice({
    name: 'data',
    initialState: {
      data: [],
      error: "",
      loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // create contact
        .addCase(createPost.pending, (state) => {
            state.loading = true;
          })
          .addCase(createPost.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(createPost.rejected, (state, action) => {
            state.loading = false;
            state.error = "Some error occurred";
          })
    }
  });

export default postSlice.reducer;