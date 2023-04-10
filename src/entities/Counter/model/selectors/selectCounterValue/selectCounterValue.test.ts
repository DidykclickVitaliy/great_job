import { DeepPartial } from "@reduxjs/toolkit";

import { RootStateSchema } from "app/providers/StoreProvider";
import { selectCounterValue } from ".";

describe("Select counter value", () => {
    test("should return counter value", () => {
        const state: DeepPartial<RootStateSchema> = {
            counter: { value: 10 },
        };

        expect(selectCounterValue(state as RootStateSchema)).toEqual(10);
    });
});
