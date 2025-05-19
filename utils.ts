export const classMap: Record<string, string> = {
    "grid-nogutter": "mx-0 mt-0",
    "grid": "flex flex-wrap -mx-2 -mt-2",
    "col-fixed": "grow-0 shrink-0 p-2",
    "col-offset-0": "ml-0",
    "col-offset-1": "ml-[8.33%]",
    "col-offset-2": "ml-[16.67%]",
    "col-offset-3": "ml-[25%]",
    "col-offset-4": "ml-[33.33%]",
    "col-offset-5": "ml-[41.67%]",
    "col-offset-6": "ml-[50%]",
    "col-offset-7": "ml-[58.33%]",
    "col-offset-8": "ml-[66.67%]",
    "col-offset-9": "ml-[75%]",
    "col-offset-10": "ml-[83.33%]",
    "col-offset-11": "ml-[91.67%]",
    "col-offset-12": "ml-[100%]",
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
    "field": "mb-4",
    "formgroup-inline": "flex flex-wrap items-start",
    "field-checkbox": "mb-4 flex items-center",
    "field-radiobutton": "mb-4 flex items-center",
} as const;

export const replaceClasses = (input: string) => {
    const regex = /(class=")([^"]*)"/g;
    return input.replace(regex, (_: string, classProperty: string, cssClasses: string) => {
        const classesArray = cssClasses.split(/\s+/).filter(Boolean);
        const replacedClasses: string[] = [];
        classesArray.forEach(classNameWithPrefix => {
            const [prefix, className] = classNameWithPrefix.includes(":")
                ? classNameWithPrefix.split(":")
                : [null, classNameWithPrefix];

            if (className in classMap) {
                const replacement = classMap[className];
                const replacedWords = replacement.split(" ").map(word => (prefix ? `${prefix}:${word}` : word));
                replacedClasses.push(...replacedWords);
            } else {
                replacedClasses.push(classNameWithPrefix);
            }
        });
        return `${classProperty}${replacedClasses.join(" ")}"`;
    });
};
