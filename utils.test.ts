import { expect, describe, it } from "vitest";
import { replaceClasses } from "./utils";

describe("The CSS class migration to test", () => {
    const cssStringTestCases: { cssString: string; expectedReplacement: string }[] = [
        { cssString: `class="grid"`, expectedReplacement: `class="flex flex-wrap -mx-2 -mt-2"` },
        { cssString: `class=" grid"`, expectedReplacement: `class="flex flex-wrap -mx-2 -mt-2"` },
        { cssString: `class=" grid "`, expectedReplacement: `class="flex flex-wrap -mx-2 -mt-2"` },
        { cssString: `class="grid "`, expectedReplacement: `class="flex flex-wrap -mx-2 -mt-2"` },
        {
            cssString: `class="grid grid-nogutter"`,
            expectedReplacement: `class="flex flex-wrap -mx-2 -mt-2 mx-0 mt-0"`,
        },
        {
            cssString: `class=" grid grid-nogutter"`,
            expectedReplacement: `class="flex flex-wrap -mx-2 -mt-2 mx-0 mt-0"`,
        },
        {
            cssString: `class="grid-nogutter grid"`,
            expectedReplacement: `class="mx-0 mt-0 flex flex-wrap -mx-2 -mt-2"`,
        },
        { cssString: `class="col"`, expectedReplacement: `class="grow basis-0 p-2"` },
        { cssString: `class=" col"`, expectedReplacement: `class="grow basis-0 p-2"` },
        { cssString: `class="col "`, expectedReplacement: `class="grow basis-0 p-2"` },
        { cssString: `class=" col "`, expectedReplacement: `class="grow basis-0 p-2"` },
        { cssString: `class="col col-1"`, expectedReplacement: `class="grow basis-0 p-2 grow-0 shrink-0 p-2 w-1/12"` },
        { cssString: `class="sm:col-1"`, expectedReplacement: `class="sm:grow-0 sm:shrink-0 sm:p-2 sm:w-1/12"` },
        {
            cssString: `<grid class="grid grid-nogutter">`,
            expectedReplacement: `<grid class="flex flex-wrap -mx-2 -mt-2 mx-0 mt-0">`,
        },
        {
            cssString: `<grid class="grid grid-nogutter form-grid">`,
            expectedReplacement: `<grid class="flex flex-wrap -mx-2 -mt-2 mx-0 mt-0 form-grid">`,
        },
        {
            cssString: `<grid class="grid grid-nogutter form-grid card-grid">`,
            expectedReplacement: `<grid class="flex flex-wrap -mx-2 -mt-2 mx-0 mt-0 form-grid card-grid">`,
        },
        {
            cssString: `class="sm:col-1 md:col-offset-1"`,
            expectedReplacement: `class="sm:grow-0 sm:shrink-0 sm:p-2 sm:w-1/12 md:ml-[8.33%]"`,
        },
        {
            cssString: `class="sm:col-1 md:col-6"`,
            expectedReplacement: `class="sm:grow-0 sm:shrink-0 sm:p-2 sm:w-1/12 md:grow-0 md:shrink-0 md:p-2 md:w-6/12"`,
        },
        {
            cssString: `class="sm:col-1 md:col-6 lg:col-8"`,
            expectedReplacement: `class="sm:grow-0 sm:shrink-0 sm:p-2 sm:w-1/12 md:grow-0 md:shrink-0 md:p-2 md:w-6/12 lg:grow-0 lg:shrink-0 lg:p-2 lg:w-8/12"`,
        },
        { cssString: `class="col-fixed"`, expectedReplacement: `class="grow-0 shrink-0 p-2"` },
        {
            cssString: `class="sm:col-fixed md:col-12"`,
            expectedReplacement: `class="sm:grow-0 sm:shrink-0 sm:p-2 md:grow-0 md:shrink-0 md:p-2 md:w-full"`,
        },
        {
            cssString: `<section class="sm:col-fixed md:col-12">`,
            expectedReplacement: `<section class="sm:grow-0 sm:shrink-0 sm:p-2 md:grow-0 md:shrink-0 md:p-2 md:w-full">`,
        },
        {
            cssString: `<div class="col-offset-2 bg-purple-100 rounded-md p-2">`,
            expectedReplacement: `<div class="ml-[16.67%] bg-purple-100 rounded-md p-2">`,
        },
        {
            cssString: `<div class="col-offset-2 field bg-purple-100 rounded-md p-2">`,
            expectedReplacement: `<div class="ml-[16.67%] mb-4 bg-purple-100 rounded-md p-2">`,
        },
        {
            cssString: `<div class="col-offset-2 formgroup-inline bg-purple-100 rounded-md p-2">`,
            expectedReplacement: `<div class="ml-[16.67%] flex flex-wrap items-start bg-purple-100 rounded-md p-2">`,
        },
        {
            cssString: `<div class="col-offset-2 field-checkbox bg-purple-100 rounded-md p-2">`,
            expectedReplacement: `<div class="ml-[16.67%] mb-4 flex items-center bg-purple-100 rounded-md p-2">`,
        },
        {
            cssString: `<div class="col-offset-2 field-radiobutton bg-purple-100 rounded-md p-2">`,
            expectedReplacement: `<div class="ml-[16.67%] mb-4 flex items-center bg-purple-100 rounded-md p-2">`,
        },
    ];
    cssStringTestCases.forEach(({ cssString, expectedReplacement }) => {
        it(`should replace "${cssString}" with "${expectedReplacement}"`, () => {
            expect(replaceClasses(cssString)).toBe(expectedReplacement);
        });
    });
});
