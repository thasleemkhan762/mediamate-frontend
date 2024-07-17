import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// signup user
export const signupUser = createAsyncThunk("signupUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost/api/users/register",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

// otp verify
export const verifyOtp = createAsyncThunk("verifyOtp", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost/api/users/otp_verify",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const getData = createSlice({
  name: "data",
  initialState: {
    data: [],
    error:'',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder)=>{
    builder
    .addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    .addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.contacts;
      state.totalPages = action.payload.totalPages;
    })
    .addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = "Some error occured";
    })
  },
});

export default getData.reducer;
