import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from '@rollup/plugin-commonjs';

module.exports = {
    input: "./src/index.ts",
    output: {
        dir: "./public/scripts",
        format: "esm"
    },
    plugins: [
        resolve(),
        typescript({ module: 'CommonJS' }),
        commonjs({ extensions: ['.js', '.ts'] }) // the ".ts" extension is required
    ]
};
