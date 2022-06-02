module.exports = function (file, api, options) {
  return file.source.replace(/interfaceBrand010/gm, 'newskitInterfaceBrand010');
};
