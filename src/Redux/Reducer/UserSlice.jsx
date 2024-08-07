import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

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

// login user
export const userLogin = createAsyncThunk('userLogin', async (data, { rejectWithValue }) => {
  try {
    console.log(data);
    
      const response = await axios.post(`http://localhost:5001/api/users/login`, data, { withCredentials: true });
      Cookies.set('userId', response.data.userId);
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

const userId = localStorage.getItem('userId') || null;
const userToken = localStorage.getItem('userToken') || null;
const username = localStorage.getItem('username') || null;

const getData = createSlice({
  name: "data",
  initialState: {
    data: [],
    userId: userId,
    userToken: userToken,
    username: username,
    email: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.userId;
      state.userToken = action.payload.userToken;
      state.username = action.payload.username;
      console.log(action.payload);
      

      // Save user data to localStorage
      localStorage.setItem('userId', action.payload.userId);
      localStorage.setItem('userToken', action.payload.userToken);
      localStorage.setItem('username', action.payload.username);
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = "";
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
        state.error = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Some error occurred";
      })
      // User Login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log(state.email);

        state.loading = false;
        state.userId = action.payload.userId;
        
        console.log(state.userId);
        if (action.payload.data.email) {
          state.email = action.payload.data.email;
          state.username = action.payload.username;
        } else {
          console.log("Email not found in server response");
        }
        console.log(state.email);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Some error occurred";
        console.log("User login rejected:", action.payload);
      });
  },
});

export const { setUser } = getData.actions;
export default getData.reducer;
