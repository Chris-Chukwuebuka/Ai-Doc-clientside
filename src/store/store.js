import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../lib/redux/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "../lib/redux/userSlice";
import { userApi } from "../lib/APIs/userApis";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    authState: authReducer,
    userState: userSlice,
  },
  devTools: process.env.NODE_ENV === "development",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
