import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api-workshop.firststepoverseas.com/";

// Register user (attendee/host)
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${baseUrl}auth/users/`, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Login (JWT create)
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${baseUrl}auth/jwt/create/`, credentials);
      // localStorage.setItem("accessToken", res.data.access);
      // localStorage.setItem("refreshToken", res.data.refresh);
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Get current user
export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.get(`${baseUrl}auth/users/me/`, {
        headers: { Authorization: `JWT ${token}` },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const getToken = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    tokens: { 
      access: getToken("accessToken"), 
      refresh: getToken("refreshToken"),
     },
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    logout: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
      state.user = null;
      state.tokens = { access: null, refresh: null };
      state.success = false;

    },
    resetSuccess: (state) => {
      state.success = false;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => { 
        state.loading = true; 
        state.error = null;
        state.success = false;

      })
      .addCase(registerUser.fulfilled, (state) => { 
        state.loading = false; 
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload;
        state.success = false;
      })

      .addCase(loginUser.pending, (state) => { 
        state.loading = true; 
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.tokens = action.payload;
        state.tokens = {
          access: action.payload.access,
          refresh: action.payload.refresh,
        };

        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload;
        state.success = false;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout, resetSuccess } = authSlice.actions;
export default authSlice.reducer;
