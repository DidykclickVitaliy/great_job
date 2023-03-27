import { RootStateSchema } from "app/providers/StoreProvider";
import { selectCounter } from ".";

describe("Select counter", () => {
    test("should return counter state", () => {
        const state: RootStateSchema = {
            counter: { value: 10 },
        };

        expect(selectCounter(state)).toEqual({ value: 10 });
    });
});
