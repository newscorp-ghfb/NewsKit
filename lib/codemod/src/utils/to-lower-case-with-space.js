function toLowerCaseWithSpace(str) {
  if (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  }
  /* istanbul ignore next */
  return '';
}

module.exports = {
  toLowerCaseWithSpace,
};
