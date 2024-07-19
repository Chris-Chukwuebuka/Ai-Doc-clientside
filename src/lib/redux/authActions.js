 import {
    authIsLoading,
    authFailed,
    authSuccess,
    onGetCurrentUser,
    onLogoutUser,
} from "./authSlice";  
import { userLogin, getCurrentUser, logoutUser } from "../APIs/medHubApi";


export const onLoginUser = (token)=> async (dispatch) => {
    console.log("Calling onLoginUser with token:", token);
    dispatch(authIsLoading());
    const response = await userLogin(token);
    console.log("Response received from userLogin:", response);
    if (response.error) {
        console.log("Error occurred during userLogin:", response.error);
        return dispatch(authFailed(response.error));
    }
    console.log("Login successful");
    return dispatch(authSuccess(response.authenticatedUser));
};

export const getCurrentUserHandler = () => async (dispatch) => {
    console.log("Fetching current user...");
    const response = await getCurrentUser();
    console.log("Response received from getCurrentUser:", response);
    if (response.error) {
        console.log("Error occurred during getCurrentUser:", response.error);
        return dispatch(authFailed(response.error));
    }
    console.log("Current user retrieved successfully");
    return dispatch(onGetCurrentUser(response.currentSession));
};

export const logoutUserHandler = () => async (dispatch) => {
    console.log("Logout user handler called");
    try {
        const response = await logoutUser();
        console.log("Response received from logoutUser:", response);
        if (response.error) {
            console.log("Error occurred during logout:", response.error);
            return dispatch(authFailed(response.error));
        }
        console.log("Logout successful");
        return dispatch(onLogoutUser());
    } catch (error) {
        console.log("An error occurred during logout:", error);
        return dispatch(authFailed("Something went wrong during logout"));
    }
};
