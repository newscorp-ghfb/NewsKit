module.exports = function (file) {
  return file.source.replaceAll('listItemMarker={IconFilledCircle}', '');
};
