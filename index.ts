#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import * as readline from "node:readline";
import { glob } from "glob";
import { replaceClasses } from "./utils";

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

prompt.question(`Enter the file path to traverse (e.g., ./src), current path is ${process.cwd()}: `, async filePath => {
    try {
        const componentFiles = await glob(`${filePath}/**/*.component.html`);

        for (const file of componentFiles) {
            const oldFileContent = readFileSync(file, "utf-8");
            const newFileContent = replaceClasses(oldFileContent);
            if (oldFileContent !== newFileContent) {
                console.log("File changed:", file);
            }
            writeFileSync(file, newFileContent, "utf-8");
        }
        console.log("Files processed and saved successfully.");
    } catch (error) {
        console.error("Error processing files:", error);
    } finally {
        prompt.close();
    }
});
