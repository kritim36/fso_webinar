import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api-workshop.firststepoverseas.com";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPHz848o3N-_RwBgLwpzxcRk533xVoilTHuiXAVx4FC6mE_T6p3U99YlytyWRKAkWg8w/exec"; 
const APPS_SCRIPT_TOKEN = "MYWEBINAR1234";

// Get webinar list
export const fetchWebinars = createAsyncThunk("webinar/fetchWebinars", async () => {
  const res = await axios.get(`${baseUrl}/webinars/1/`);
  return res.data; 
});

// Register for webinar
export const registerWebinar = createAsyncThunk("webinar/registerWebinar", async (data, { rejectWithValue }) => {
  try{
  const res = await axios.post(`${baseUrl}/webinars/register/`, data);

  const registration = res.data;
  const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      webinar_id: data.webinar_id || data.webinarId || null,
      registration_id: registration.id || registration.registration_id || null,
      payment_status: registration.payment_status || "pending",
      payment_id: registration.payment_id || null,
      extra: registration // or any extra fields you want to store
    };

    const formParams = new URLSearchParams();
    formParams.append("payload", JSON.stringify(payload));
    // append token as param (the Apps Script reads e.parameter.token)
    if (APPS_SCRIPT_TOKEN) formParams.append("token", APPS_SCRIPT_TOKEN);

    // no custom headers except content-type to avoid preflight issues
    await axios.post(APPS_SCRIPT_URL, formParams.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  
    return registration;
    } catch (err) {
    // return helpful error to the slice
    return rejectWithValue(err.response ? err.response.data : { message: err.message });
  }
});

// Verify Razorpay payment
export const verifyPayment = createAsyncThunk("webinar/verifyPayment", async (paymentData, { rejectWithValue }) => {
  try{
  const res = await axios.post(`${baseUrl}/payments/verify/`, paymentData);
  const verifyResult = res.data;
  const payload = {
      registration_id: paymentData.registration_id || verifyResult.registration_id || null,
      payment_status: verifyResult.success ? "paid" : "failed",
      payment_id: verifyResult.payment_id || paymentData.razorpay_payment_id || null,
      extra: verifyResult
    };

  const formParams = new URLSearchParams();
    formParams.append("payload", JSON.stringify(payload));
    if (APPS_SCRIPT_TOKEN) formParams.append("token", APPS_SCRIPT_TOKEN);

    // fire-and-forget: but we await so we know if it failed
    await axios.post(APPS_SCRIPT_URL, formParams.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    return verifyResult;
    } catch (err) {
    return rejectWithValue(err.response ? err.response.data : { message: err.message });
  }
});

const webinarSlice = createSlice({
  name: "webinar",
  initialState: {
    // webinars: [],
    webinars: {},
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
