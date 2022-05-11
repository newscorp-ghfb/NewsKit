module.exports = function (file, api, options) {
  return file.source.replace(/interfaceBrand010/gm, 'newskitInterfaceBrand010');
};

// export default function transformer(file) {
//   return file.source
//     .replace(/(theme\.palette|palette)\.type/gm, '$1.mode')
//     .replace(/(palette:\s*{\r?\n?\s.*)type/gm, '$1mode');
// }
