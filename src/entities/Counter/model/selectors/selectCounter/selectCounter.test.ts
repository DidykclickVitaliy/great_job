import { DeepPartial } from "@reduxjs/toolkit";

import { RootStateSchema } from "app/providers/StoreProvider";
import { selectCounter } from ".";

describe("Select counter", () => {
    test("should return counter state", () => {
        const state: DeepPartial<RootStateSchema> = {
            counter: { value: 10 },
        };

        expect(selectCounter(state as RootStateSchema)).toEqual({ value: 10 });
    });
});
