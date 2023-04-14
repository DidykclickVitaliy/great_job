import { RootStateSchema } from "app/providers/StoreProvider";

export const selectLoginData = (state: RootStateSchema) => state.login;
