import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/constant/localStorage";
import { LoginByUserNameProps } from "../../types/loginSchema";

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue: string}>(
    "login/loginByUserName",
    async (authData, thunkApi) => {
        try {
            const { data } = await axios.post<User>("http://localhost:8000/login", authData);

            if (!data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            thunkApi.dispatch(userActions.setAuthData(data));

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue("error");
        }
    },
);
