const {isObject} = require('./helpers');

const replaceDistance = overrides =>
  Object.entries(overrides).reduce((prev, [key, value]) => {
    /*
      for Audio Player Volume Control component
      from: overrides: {popover: {distance: 'token'}}
      to: overrides: {popover: {offset: 'token'}}
    */
    if (key === 'popover' && isObject(value) && 'distance' in value) {
      const distance = value.distance;
      delete value.distance;
      return {
        ...prev,
        popover: {
          ...value,
          offset: distance,
        },
      };
    }
    /*
      for Tooltip and Popover components
      from: overrides: {distance: 'token'}
      to: overrides: {offset: 'token'}
    */
    if (key === 'distance') {
      return {...prev, offset: value};
    }
    return {...prev, [key]: value};
  }, {});

module.exports = {
  replaceDistance,
};
