import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api-webinar.ctrlbits.com/";

const getAuthHeaders = () => ({
  Authorization: `JWT ${localStorage.getItem("accessToken")}`,
});

// Fetch webinars
export const fetchWebinars = createAsyncThunk("webinars/fetch", async () => {
  const res = await axios.get(`${baseUrl}webinars/`);
  return res.data;
});

// Create webinar (Admin only)
export const createWebinar = createAsyncThunk("webinars/create", async (formData) => {
  const res = await axios.post(`${baseUrl}webinars/`, formData, {
    headers: { ...getAuthHeaders(), "Content-Type": "multipart/form-data" },
  });
  return res.data;
});

// Register for webinar
export const registerWebinar = createAsyncThunk("webinars/register", async (webinarId) => {
  const res = await axios.post(
    `${baseUrl}webinars/register/`,
    { webinar_id: webinarId },
    { headers: getAuthHeaders() }
  );
  return res.data;
});

const webinarSlice = createSlice({
  name: "webinars",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWebinars.pending, (state) => { state.loading = true; })
      .addCase(fetchWebinars.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchWebinars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default webinarSlice.reducer;
