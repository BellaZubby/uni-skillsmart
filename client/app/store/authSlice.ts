import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../collections/types";


const initialState:AuthState = {
    isAuthenticated: false,
    user: null
};

const authSlice = createSlice({
    name: "auth", // label for slice. used for debugging and generating action types like "auth/login"
    initialState,
    reducers: {
        login(state, action:PayloadAction<{user:User}>) {
            state.isAuthenticated = true;
            state.user = action.payload.user; // because it expects a payload, reason when we call useDispatch, we pass the logged in user details.
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;