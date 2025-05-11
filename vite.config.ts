/// <reference types="vitest" />
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    test: {
        environment: "node",
    },
    build: {
        lib: {
            entry: resolve(__dirname, "index.ts"),
            formats: ["es"],
            fileName: "index",
        },
        rollupOptions: {
            external: ["glob", "node:fs", "node:readline"],
            output: {
                dir: "dist",
            },
        },
        outDir: "dist",
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            "./utils": resolve(__dirname, "utils.ts"),
        },
    },
});
