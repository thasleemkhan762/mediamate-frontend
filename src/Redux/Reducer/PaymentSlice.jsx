import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  payment request
export const paymentRequest = createAsyncThunk('paymentRequest', async (plan) => {
    const response = await axios.get(`https://mediamate-backend.onrender.com/api/users/payments/subscribe?plan=${plan}`);
    console.log(response.data); 
    window.location.href = response.data.url;
    return response.data;
});



const paymentSlice = createSlice({
    name: "payments",
    initialState: {
      paymentData: [],
      paymentUrl: null,
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        //fetch users
        .addCase(paymentRequest.pending, (state) => {
          state.status = "loading";
        })
        .addCase(paymentRequest.fulfilled, (state, action) => {
          state.paymentUrl = action.payload.url;
          state.status = "success";
        })
        .addCase(paymentRequest.rejected, (state, action) => {
          state.error = action.error.message;
        });
    },
  });
  
//   export const { selectUser, addMessage, updateLastMessage } = chatSlice.actions;
  
  export default paymentSlice.reducer;