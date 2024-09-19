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
    // console.log(data);
    
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

// id fetch
export const getUserData = createAsyncThunk("getUserData", async (id) => {
  try {
    const response = await axios.get(`http://localhost:5001/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// edit user
export const updateUser = createAsyncThunk("updateUser", async ({ id, data }) => {
  try {
    const response = await axios.put(`http://localhost:5001/api/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const userId = localStorage.getItem('userId') || null;
// const userToken = localStorage.getItem('userToken') || null;
const username = localStorage.getItem('username') || null;
const profileImage = localStorage.getItem('profileImage') || null;
const googleImage = localStorage.getItem('googleImage') || null;

const getData = createSlice({
  name: "data",
  initialState: {
    data: [],
    userData:[],
    userId: userId,
    // userToken: userToken,
    username: username,
    profileImage: profileImage,
    googleImage: googleImage,
    email: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.userId;
      // state.userToken = action.payload.userToken;
      state.username = action.payload.username;
      state.googleImage = action.payload.googleImage;
      console.log(action.payload);
      // Save user data to localStorage
      const googleImage = action.payload.googleImage;

      localStorage.setItem('userId', action.payload.userId);
      localStorage.setItem('userToken', action.payload.userToken);
      localStorage.setItem('username', action.payload.username);
      if(googleImage) {
        localStorage.setItem('googleImage', googleImage);
      }
  },
  clearUser(state) {
    state.userId = null;
    // state.userToken = null;
    state.username = null;
    state.profileImage = null;
    state.googleImage = null;
    localStorage.removeItem('userId');
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('googleImage');
 },
  updateAndSetUser(state,action) {
    state.username = action.payload.username;
    localStorage.setItem('username', action.payload.username);
  },
  // setUserImage: (state, action) => {
  //   state.profileImage = action.payload;
  //   console.log(action.payload);
    
  //   //save image in localstorage
  //   localStorage.setItem('profileImage', action.payload);
  // },
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
        // console.log(state.email);

        state.loading = false;
        state.userId = action.payload.userId;
        
        // console.log(state.userId);
        if (action.payload.data.email) {
          state.email = action.payload.data.email;
          state.username = action.payload.username;
        } else {
          console.log("Email not found in server response");
        }
        // console.log(state.email);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Some error occurred";
        console.log("User login rejected:", action.payload);
      })
      //getUserData
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUserData.fulfilled, (state,action) => {
        state.userData = action.payload.data;
        // console.log(state.userData);
        
        state.loading = false;
        state.error = "";
      })
      .addCase(getUserData.rejected, (state) => {
        state.loading = false;
        state.error = "user data not found";
      })
      //UserData update
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateUser.fulfilled, (state,action) => {
        state.userData = action.payload;
        state.username = action.payload.username;
        state.googleImage = null,
        localStorage.removeItem('googleImage');
        state.loading = false;
        state.error = "";
      })
      .addCase(updateUser.rejected, (state) => {
        state.loading = false;
        state.error = "Some error occured";
      });
  },
});

export const { setUser, clearUser, setUserImage, updateAndSetUser } = getData.actions;
export default getData.reducer;
