export const classMap: Record<string, string> = {
    "grid-nogutter": "mx-0 mt-0",
    "grid": "flex flex-wrap -mx-2 -mt-2",
    "col-fixed": "grow-0 shrink-0 p-2",
    "col-1": "grow-0 shrink-0 p-2 w-1/12",
    "col-2": "grow-0 shrink-0 p-2 w-2/12",
    "col-3": "grow-0 shrink-0 p-2 w-3/12",
    "col-4": "grow-0 shrink-0 p-2 w-4/12",
    "col-5": "grow-0 shrink-0 p-2 w-5/12",
    "col-6": "grow-0 shrink-0 p-2 w-6/12",
    "col-7": "grow-0 shrink-0 p-2 w-7/12",
    "col-8": "grow-0 shrink-0 p-2 w-8/12",
    "col-9": "grow-0 shrink-0 p-2 w-9/12",
    "col-10": "grow-0 shrink-0 p-2 w-10/12",
    "col-11": "grow-0 shrink-0 p-2 w-11/12",
    "col-12": "grow-0 shrink-0 p-2 w-full",
    "col": "grow basis-0 p-2",
} as const;

export const replaceClasses = (input: string) => {
    const regex = new RegExp(`\\b(sm:|md:|lg:|xl:)?(${Object.keys(classMap).join("|")})\\b`, "g");
    return input.replace(regex, (_, prefix, className) => {
        if (!prefix) {
            return classMap[className];
        }
        const replacement = classMap[className];
        const words = replacement.split(" ");
        const prefixedWords = words.map(word => `${prefix}${word}`);
        return prefixedWords.join(" ");
    });
};
