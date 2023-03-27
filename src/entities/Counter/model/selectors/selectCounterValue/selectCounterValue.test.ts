import { RootStateSchema } from "app/providers/StoreProvider";
import { selectCounterValue } from ".";

describe("Select counter value", () => {
    test("should return counter value", () => {
        const state: RootStateSchema = {
            counter: { value: 10 },
        };

        expect(selectCounterValue(state)).toEqual(10);
    });
});
