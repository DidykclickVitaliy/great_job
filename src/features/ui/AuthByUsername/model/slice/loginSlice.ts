import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUserName } from "../services/loginByUserName";

import { LoginSchema } from "../types/loginSchema";

const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUserName(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setUserPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;