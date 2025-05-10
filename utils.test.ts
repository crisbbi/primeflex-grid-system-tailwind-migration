import { expect, describe, it } from "vitest";

describe("The CSS class migration to test", () => {
    describe("The grid CSS class", () => {
        it(`should be replaced with the CSS classes "flex flex-wrap -mx-2 -mt-2"`, () => {
            const textInput = "grid";
            expect(replaceClasses(textInput)).toBe("flex flex-wrap -mx-2 -mt-2");
        });
    });
});

const classMap = {
    grid: "flex flex-wrap -mx-2 -mt-2",
    col: "flex flex-col",
    "col-fixed": "flex-shrink-0",
} as const;

function replaceClasses(input: string) {
    const regex = new RegExp(`\\b(${Object.keys(classMap).join("|")})\\b`, "g");
    return input.replace(regex, match => classMap[match]);
}
