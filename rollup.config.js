import ts from "typescript";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import { getFiles } from "./scripts/build-utils.js";

const extensions = [".js", ".ts", ".jsx", ".tsx"];

const inputFiles = ["./src/index.ts", ...getFiles("./src", extensions, [])];

const externalPackages = ["lodash", "axios"];

const packageName = "plazaSdk";

export default [
  {
    input: inputFiles,
    output: [
      {
        dir: "./lib/esm",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      typescript({
        typescript: ts,
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        outDir: "lib/esm",
        declarationDir: "lib/esm",
        exclude: ["node_modules", "lib"],
      }),
      json(),
    ],
    external: externalPackages,
  },

  // CJS build configuration
  {
    input: inputFiles,
    output: [
      {
        dir: "./lib/cjs",
        format: "cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      typescript({
        typescript: ts,
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        outDir: "lib/cjs",
        declarationDir: "lib/cjs",
        exclude: ["node_modules", "lib"],
      }),
      json(),
    ],
    external: externalPackages,
  },

  // UMD build configuration for browsers
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./lib/browser/bundle.umd.js",
        format: "umd",
        name: packageName,
        globals: {
          axios: "axios",
        },
      },
      {
        file: "./lib/browser/bundle.iife.js",
        format: "iife",
        name: packageName,
      },
    ],
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      terser(),
      typescript({
        typescript: ts,
        declaration: false,
        tsconfig: "./tsconfig.build.json",
        exclude: ["node_modules", "lib"],
      }),
      json(),
    ],
    external: externalPackages,
  },
];
