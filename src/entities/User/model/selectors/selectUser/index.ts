import { RootStateSchema } from "app/providers/StoreProvider";

export const selectUser = (state: RootStateSchema) => state.user;
