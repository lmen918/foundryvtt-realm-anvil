import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
import path from "path";
import externalGlobals from "rollup-plugin-external-globals";
// import tailwindcss from '@tailwindcss/vite';

// import * as fsPromises from "fs/promises";

export default defineConfig({
    define: {
        'process.env': process.env
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            fileName: 'index.ts',
            formats: ['es'],
            name: 'realm-anvil',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            input: 'src/index.ts',
            output: {
                dir: 'dist',
                entryFileNames: 'index.js',
                format: 'es',
                // Ensure React is loaded from a CDN
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                }
            }
        },
        sourcemap: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [
        react(),
        typescript(),
        copy({
            targets: [
                {
                    src: 'module.json',
                    dest: './dist',
                },
                {
                    src: 'templates',
                    dest: './dist',
                },
            ],
            hook: "writeBundle",
        }),
        externalGlobals({
            react: 'React',
            'react-dom': 'ReactDOM',
        })
    ],
});

// @ts-ignore
// function updateModuleManifestPlugin(): Plugin {
//     return {
//         name: "update-module-manifest",
//         async writeBundle(): Promise<void> {
//             const moduleVersion = process.env.MODULE_VERSION;
//             const githubProject = process.env.GH_PROJECT;
//             const githubTag = process.env.GH_TAG;
//             const manifestContents: string = await fsPromises.readFile(
//                 "src/module.json",
//                 "utf-8"
//             );
//             const manifestJson = JSON.parse(manifestContents) as Record<
//                 string,
//                 unknown
//             >;
//
//             if (moduleVersion) {
//                 manifestJson["version"] = moduleVersion;
//             }
//             if (githubProject) {
//                 const baseUrl = `https://github.com/${githubProject}/releases`;
//                 manifestJson["manifest"] = `${baseUrl}/latest/download/module.json`;
//                 if (githubTag) {
//                     manifestJson[
//                         "download"
//                         ] = `${baseUrl}/download/${githubTag}/module.zip`;
//                 }
//             }
//
//             await fsPromises.writeFile(
//                 "dist/module.json",
//                 JSON.stringify(manifestJson, null, 4)
//             );
//         },
//     };
//}