import { expect, describe, it } from "vitest";
import { replaceClasses } from "./utils";

describe("The CSS class migration to test", () => {
    describe("The grid CSS class", () => {
        it(`should be replaced with the CSS classes "flex flex-wrap -mx-2 -mt-2"`, () => {
            const textInput = "grid";
            expect(replaceClasses(textInput)).toBe("flex flex-wrap -mx-2 -mt-2");
        });
    });
});
