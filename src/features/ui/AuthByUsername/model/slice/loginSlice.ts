import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUserDetails } from "../services/loginByUserDetails";

import { LoginDetails, LoginSchema } from "../types/loginSchema";

const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginDetails(state, action: PayloadAction<LoginDetails>) {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginByUserDetails.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginByUserDetails.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
