import { RootStateSchema } from "app/providers/StoreProvider";

export const selectLoginIsLoading = (state: RootStateSchema) => state.loginForm?.isLoading || false;

export const selectLoginError = (state: RootStateSchema) => state.loginForm?.error || "";
