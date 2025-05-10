import { expect, describe, it } from "vitest";
import { replaceClasses } from "./utils";

describe("The CSS class migration to test", () => {
    const cssStringTestCases: { cssString: string; expectedReplacement: string }[] = [
        { cssString: "grid", expectedReplacement: "flex flex-wrap -mx-2 -mt-2" },
        { cssString: " grid", expectedReplacement: " flex flex-wrap -mx-2 -mt-2" },
        { cssString: " grid ", expectedReplacement: " flex flex-wrap -mx-2 -mt-2 " },
        { cssString: "grid ", expectedReplacement: "flex flex-wrap -mx-2 -mt-2 " },
        { cssString: "grid grid-nogutter", expectedReplacement: "flex flex-wrap -mx-2 -mt-2 mx-0 mt-0" },
        { cssString: " grid grid-nogutter", expectedReplacement: " flex flex-wrap -mx-2 -mt-2 mx-0 mt-0" },
        { cssString: "grid-nogutter grid", expectedReplacement: "mx-0 mt-0 flex flex-wrap -mx-2 -mt-2" },
        { cssString: "col", expectedReplacement: "grow basis-0 p-2" },
        { cssString: " col", expectedReplacement: " grow basis-0 p-2" },
        { cssString: "col ", expectedReplacement: "grow basis-0 p-2 " },
        { cssString: " col ", expectedReplacement: " grow basis-0 p-2 " },
        { cssString: "col col-1", expectedReplacement: "grow basis-0 p-2 grow-0 shrink-0 p-2 w-1/12" },
        { cssString: "sm:col-1", expectedReplacement: "sm:grow-0 sm:shrink-0 sm:p-2 sm:w-1/12" },
        {
            cssString: "sm:col-1 md:col-6",
            expectedReplacement: "sm:grow-0 sm:shrink-0 sm:p-2 sm:w-1/12 md:grow-0 md:shrink-0 md:p-2 md:w-6/12",
        },
        {
            cssString: "sm:col-1 md:col-6 lg:col-8",
            expectedReplacement:
                "sm:grow-0 sm:shrink-0 sm:p-2 sm:w-1/12 md:grow-0 md:shrink-0 md:p-2 md:w-6/12 lg:grow-0 lg:shrink-0 lg:p-2 lg:w-8/12",
        },
        { cssString: "col-fixed", expectedReplacement: "grow-0 shrink-0 p-2" },
        {
            cssString: "sm:col-fixed md:col-12",
            expectedReplacement: "sm:grow-0 sm:shrink-0 sm:p-2 md:grow-0 md:shrink-0 md:p-2 md:w-full",
        },
    ];
    cssStringTestCases.forEach(({ cssString, expectedReplacement }) => {
        it(`should replace "${cssString}" with "${expectedReplacement}"`, () => {
            expect(replaceClasses(cssString)).toBe(expectedReplacement);
        });
    });
});
