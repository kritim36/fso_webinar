import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import webinarReducer from "./webinarSlice";
import paymentReducer from "./paymentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    webinars: webinarReducer,
    payment: paymentReducer,
  },
});

export default store;
