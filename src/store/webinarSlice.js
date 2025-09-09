import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api-webinar.ctrlbits.com";

// Get webinar list
export const fetchWebinars = createAsyncThunk("webinar/fetchWebinars", async () => {
  const res = await axios.get(`${baseUrl}/webinars`);
  return res.data.results; 
});

// Register for webinar
export const registerWebinar = createAsyncThunk("webinar/registerWebinar", async (data) => {
  const res = await axios.post(`${baseUrl}/webinars/register/`, data);
  return res.data;
});

// Verify Razorpay payment
export const verifyPayment = createAsyncThunk("webinar/verifyPayment", async (paymentData) => {
  const res = await axios.post(`${baseUrl}/payments/verify/`, paymentData);
  return res.data;
});

const webinarSlice = createSlice({
  name: "webinar",
  initialState: {
    webinars: [],
    loading: false,
    error: null,
    registration: null, 
    paymentVerified: null,
  },
  reducers: {
    resetRegistration: (state) => {
      state.registration = null;
      state.paymentVerified = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWebinars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWebinars.fulfilled, (state, action) => {
        state.loading = false;
        state.webinars = action.payload;
      })
      .addCase(fetchWebinars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // register webinar
      .addCase(registerWebinar.fulfilled, (state, action) => {
        state.registration = action.payload;
      })

      // verify payment
      .addCase(verifyPayment.fulfilled, (state, action) => {
        state.paymentVerified = action.payload;
      });
  },
});

export const { resetRegistration } = webinarSlice.actions;
export default webinarSlice.reducer;
