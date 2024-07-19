import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the user
const initialState = {
  user: null,
};
export const userSlice = createSlice({
  initialState,
  name: "userState",
  reducers: {
    // Define the action to set the user
    setCurrentUser:(state,action) =>{
        state.user = action.payload;
    }
  },
});

// Export the action	
export default userSlice.reducer;

// Export the action creator
export const { setCurrentUser } = userSlice.actions;
