import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loginSuccess: false,
    errorMessage:undefined,
    currentUser: undefined,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      authIsLoading: (state) => {
        console.log("authIsLoading reducer called");
        state.isLoading = true;
        state.loginSuccess = false;
        state.errorMessage = undefined;
        state.currentUser = undefined;
      },
      authSuccess: (state, { payload }) => {
        console.log("authSuccess reducer called");
        console.log("Payload:", payload);
        state.isLoading = false;
        state.loginSuccess = true;
        state.errorMessage = undefined;
        state.currentUser = payload;
      },
      authFailed: (state, { payload }) => {
        console.log("authFailed reducer called");
        console.log("Payload:", payload);
        state.isLoading = false;
        state.loginSuccess = false;
        state.errorMessage = payload;
        state.currentUser = undefined;
      },
  
      onGetCurrentUser: (state, { payload }) => {
        console.log("onGetCurrentUser reducer called");
        console.log("Payload:", payload);
        state.isLoading = false;
        state.loginSuccess = true;
        state.errorMessage = undefined;
        state.currentUser = payload;
      },
      onLogoutUser: (state) => {
        console.log("onLogoutUser reducer called");
        state.isLoading = false;
        state.loginSuccess = false;
        state.errorMessage = undefined;
        state.currentUser = undefined;
      },
    },
  });
  
  const { reducer, actions } = authSlice;
  
  export const {
    authIsLoading,
    authSuccess,
    authFailed,
    onGetCurrentUser,
    onLogoutUser,
  } = actions;
  
  export default reducer;