import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api-webinar.ctrlbits.com/";
const getAuthHeaders = () => ({
  Authorization: `JWT ${localStorage.getItem("accessToken")}`,
});

// Verify Razorpay payment
export const verifyPayment = createAsyncThunk("payment/verify", async (paymentData) => {
  const res = await axios.post(`${baseUrl}payments/verify/`, paymentData, {
    headers: getAuthHeaders(),
  });
  return res.data;
});

// Cancel registration
export const cancelRegistration = createAsyncThunk("payment/cancel", async (registrationId) => {
  const res = await axios.post(`${baseUrl}registrations/${registrationId}/cancel/`, {}, {
    headers: getAuthHeaders(),
  });
  return res.data;
});

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    status: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyPayment.pending, (state) => { state.loading = true; })
      .addCase(verifyPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
