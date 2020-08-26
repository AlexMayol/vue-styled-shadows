import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import filesize from 'rollup-plugin-filesize';

export default [
  {
    input: 'src/wrapper.js',
    output: {
      format: 'esm',
      file: 'dist/vue-img-pattern.esm.js'
    },
    plugins: [
      vue({
        css: true, // Dynamically inject css as a <style> tag
        compileTemplate: true // Explicitly convert template to render function
      }),
      commonjs(),
      buble(),
      filesize()
    ]
  }
];