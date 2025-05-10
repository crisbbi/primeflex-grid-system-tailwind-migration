export const classMap = {
    grid: "flex flex-wrap -mx-2 -mt-2",
    col: "flex flex-col",
    "col-fixed": "flex-shrink-0",
} as const;

export const replaceClasses = (input: string) => {
    const regex = new RegExp(`\\b(${Object.keys(classMap).join("|")})\\b`, "g");
    return input.replace(regex, match => classMap[match]);
};
