import type { RootStateSchema } from "app/providers/StoreProvider";

export const selectCounter = (state: RootStateSchema) => state.counter;
