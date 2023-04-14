import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema, User } from "../types/userSchema";

const initialState: UserSchema = {
    authData: null,
    isAuth: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
            state.isAuth = true;
        },
        removeAuthData(state) {
            state.authData = null;
            state.isAuth = false;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
