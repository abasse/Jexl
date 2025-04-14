import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'lib/Jexl.js', // Entry point of your library
  output: {
    file: 'dist/jexl.esm.js', // Output file
    format: 'es', // ES module format
  },
  plugins: [
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS to ES modules
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**', // Exclude transpiling node_modules
    }),
  ],
};