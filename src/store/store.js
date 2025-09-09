import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import webinarReducer from "./webinarSlice";
import paymentReducer from "./paymentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    webinar: webinarReducer,
    payment: paymentReducer,
  },
});

export default store;
