import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

module.exports = {
    browser: true,
    input: "./src/index.ts",
    output: {
        dir: "./public/scripts",
        format: "esm"
    },
    plugins: [resolve(), typescript(), commonjs()]
};
