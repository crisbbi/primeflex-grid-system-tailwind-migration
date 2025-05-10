import { expect, describe, it } from "vitest";

describe("The CSS class migration to test", () => {
  describe("The grid CSS class", () => {
    it(`should be replaced with the CSS classes "flex flex-wrap -mx-2 -mt-2"`, () => {
        const textInput = "grid";
        expect(convertPf2Tw(textInput)).toBe("flex flex-wrap -mx-2 -mt-2");
    })

  });
})

function convertPf2Tw(textInput: string) {
  return textInput.replace(/grid/g, 'flex flex-wrap -mx-2 -mt-2');
}
