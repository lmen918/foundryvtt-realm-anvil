import * as fsPromises from "fs/promises";
import copy from "rollup-plugin-copy";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    build: {
        lib: {
            entry: 'src/module.ts',
            name: 'realm-anvil',
            fileName: 'module',
            formats: ['es'],
        },
        sourcemap: true,
        rollupOptions: {
            external: ['react', 'react-dom'],
            input: 'src/module.ts',
            output: {
                entryFileNames: 'scripts/module.js',
                format: 'es',
            }
        }
    },
    plugins: [
        react(),
        typescript(),
        copy({
            targets: [
                {
                    src: 'src/module.json',
                    dest: './',
                },
                {
                    src: 'src/templates',
                    dest: './',
                },
            ],
            hook: "writeBundle",
        }),
    ],
});

// @ts-ignore
function updateModuleManifestPlugin(): Plugin {
    return {
        name: "update-module-manifest",
        async writeBundle(): Promise<void> {
            const moduleVersion = process.env.MODULE_VERSION;
            const githubProject = process.env.GH_PROJECT;
            const githubTag = process.env.GH_TAG;
            const manifestContents: string = await fsPromises.readFile(
                "src/module.json",
                "utf-8"
            );
            const manifestJson = JSON.parse(manifestContents) as Record<
                string,
                unknown
            >;

            if (moduleVersion) {
                manifestJson["version"] = moduleVersion;
            }
            if (githubProject) {
                const baseUrl = `https://github.com/${githubProject}/releases`;
                manifestJson["manifest"] = `${baseUrl}/latest/download/module.json`;
                if (githubTag) {
                    manifestJson[
                        "download"
                        ] = `${baseUrl}/download/${githubTag}/module.zip`;
                }
            }

            await fsPromises.writeFile(
                "dist/module.json",
                JSON.stringify(manifestJson, null, 4)
            );
        },
    };
}