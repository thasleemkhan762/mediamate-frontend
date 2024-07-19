import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// signup user
export const userRegister = createAsyncThunk("userRegister", async (userData, {rejectWithValue}) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/api/users/register",
      userData
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error || "An unexpected error occurred";
      return rejectWithValue(errorMessage);
  }
  else {
      return rejectWithValue("Network error.");
  }
  }
});

// otp verify
export const verifyOtp = createAsyncThunk('verifyOtp', async (otpData, {rejectWithValue}) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/api/users/otp_verify",
      otpData
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error || "An unexpected error occurred";
      return rejectWithValue(errorMessage);
  }
  else {
      return rejectWithValue("Network error.");
  }
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
    .addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = '';
  })
  .addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
  })
  .addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Some error occurred";
  })
  //verify
  .addCase(verifyOtp.pending, (state) => {
    state.loading = true;
    state.error = '';
})
.addCase(verifyOtp.fulfilled, (state, action) => {
    state.loading = false;
    state.data = action.payload;
})
.addCase(verifyOtp.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Some error occurred";
})
  },
});

export default getData.reducer;
