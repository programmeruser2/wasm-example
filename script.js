/*
WebAssembly compiled by WasmFiddle
https://wasdk.github.io/WasmFiddle/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module
*/

let module, instance;
const output = function() {
  document.getElementById('output').innerHTML += Array.from(arguments).join(' ');
}


fetch('program.wasm').then(response => 
  response.arrayBuffer()
).then(bytes => {
  module = new WebAssembly.Module(bytes);
  instance = new WebAssembly.Instance(module);
  main();
});

function main() {
  output (
    instance.exports.factorial(10)
  );
}