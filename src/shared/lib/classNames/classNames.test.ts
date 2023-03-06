import { classNames } from ".";

describe("classNames", () => {
    test("with only first param", () => {
        const expected = "someClass";
        expect(classNames("someClass", {}, [])).toBe(expected);
    });

    test("with additional params", () => {
        const expected = "someClass cls1 cls2";
        expect(classNames("someClass", {}, ["cls1", "cls2"])).toBe(expected);
    });

    test("with mods", () => {
        const expected = "someClass scrollable";
        expect(classNames("someClass", { hovered: false, scrollable: true }, []))
            .toBe(expected);
    });

    test("with mods and additional params", () => {
        const expected = "someClass cls1 cls2 hovered";
        expect(classNames("someClass", { hovered: true, scrollable: false }, ["cls1", "cls2"]))
            .toBe(expected);
    });

    test("with mod undefined", () => {
        const expected = "someClass";
        expect(classNames("someClass", { hovered: undefined, scrollable: false }, []))
            .toBe(expected);
    });
});
