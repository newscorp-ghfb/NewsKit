const {isObject} = require('./helpers');

// NOTE:
// uncomment the script bellow to re-generate the spaceInset to padding map

/*

const fs = require('fs');
const path = require('path');

const spacePresets = fs.readFileSync(
  path.join(__dirname, '../../../../src/theme/presets/space-presets.ts'),
  {encoding: 'utf8', flag: 'r'},
);

console.log(
  spacePresets
    .split('\n')
    .filter(line => line.includes('sizing') && line.includes('space'))
    .reduce((obj, line) => {
      const [tokenName, tokenValue] = line.split(':').map(v => v.trim());

      const tokenValueNumbersOnly = tokenValue
        .replaceAll("'", '')
        .replaceAll('{{', '')
        .replaceAll('}}', '')
        .replaceAll('sizing.sizing', '')
        .replaceAll(',', '')
        .split(' ');

      let paddingBlockValue = tokenValueNumbersOnly[0];
      let paddingInlineValue = tokenValueNumbersOnly[0];
      if (tokenValueNumbersOnly.length > 1) {
        paddingInlineValue = tokenValueNumbersOnly[1];
      }

      return {
        ...obj,
        [tokenName]: {
          paddingBlock: `space${paddingBlockValue}`,
          paddingInline: `space${paddingInlineValue}`,
        },
      };
    }, {}),
);
*/

/*
This object is automaticaly generated based on the commented script above
*/
const map = {
  space000: {paddingBlock: 'space000', paddingInline: 'space000'},
  space010: {paddingBlock: 'space010', paddingInline: 'space010'},
  space020: {paddingBlock: 'space020', paddingInline: 'space020'},
  space030: {paddingBlock: 'space030', paddingInline: 'space030'},
  space040: {paddingBlock: 'space040', paddingInline: 'space040'},
  space045: {paddingBlock: 'space045', paddingInline: 'space045'},
  space050: {paddingBlock: 'space050', paddingInline: 'space050'},
  space060: {paddingBlock: 'space060', paddingInline: 'space060'},
  space070: {paddingBlock: 'space070', paddingInline: 'space070'},
  space080: {paddingBlock: 'space080', paddingInline: 'space080'},
  space090: {paddingBlock: 'space090', paddingInline: 'space090'},
  space100: {paddingBlock: 'space100', paddingInline: 'space100'},
  space110: {paddingBlock: 'space110', paddingInline: 'space110'},
  space120: {paddingBlock: 'space120', paddingInline: 'space120'},
  spaceInset000: {paddingBlock: 'space000', paddingInline: 'space000'},
  spaceInset010: {paddingBlock: 'space010', paddingInline: 'space010'},
  spaceInset020: {paddingBlock: 'space020', paddingInline: 'space020'},
  spaceInset030: {paddingBlock: 'space030', paddingInline: 'space030'},
  spaceInset040: {paddingBlock: 'space040', paddingInline: 'space040'},
  spaceInset045: {paddingBlock: 'space045', paddingInline: 'space045'},
  spaceInset050: {paddingBlock: 'space050', paddingInline: 'space050'},
  spaceInset060: {paddingBlock: 'space060', paddingInline: 'space060'},
  spaceInset070: {paddingBlock: 'space080', paddingInline: 'space080'},
  spaceInsetSquish000: {paddingBlock: 'space000', paddingInline: 'space000'},
  spaceInsetSquish010: {paddingBlock: 'space010', paddingInline: 'space020'},
  spaceInsetSquish020: {paddingBlock: 'space020', paddingInline: 'space030'},
  spaceInsetSquish030: {paddingBlock: 'space030', paddingInline: 'space040'},
  spaceInsetSquish040: {paddingBlock: 'space040', paddingInline: 'space050'},
  spaceInsetSquish050: {paddingBlock: 'space050', paddingInline: 'space060'},
  spaceInsetSquish060: {paddingBlock: 'space060', paddingInline: 'space080'},
  spaceInsetStretch000: {paddingBlock: 'space000', paddingInline: 'space000'},
  spaceInsetStretch010: {paddingBlock: 'space020', paddingInline: 'space010'},
  spaceInsetStretch020: {paddingBlock: 'space030', paddingInline: 'space020'},
  spaceInsetStretch030: {paddingBlock: 'space040', paddingInline: 'space030'},
  spaceInsetStretch040: {paddingBlock: 'space050', paddingInline: 'space040'},
  spaceInsetStretch050: {paddingBlock: 'space060', paddingInline: 'space050'},
  spaceInsetStretch060: {paddingBlock: 'space080', paddingInline: 'space060'},
};

const getPadding = token => {
  if (typeof token === 'string' && token.includes('px')){
    return {paddingBlock: token, paddingInline: token}
  }
  if (typeof token === 'string') {
    return map[token] || {};
  }
  if (typeof token === 'object') {
    const mqKeys = Object.keys(token).reverse();
    return mqKeys.reduce(
      (obj, mqKey) => {
        const tokenValue = token[mqKey];
        const {paddingBlock, paddingInline} = tokenValue.includes('px') ? {paddingBlock: tokenValue, paddingInline: tokenValue}: map[tokenValue] ;
        return {
          paddingBlock: {[mqKey]: paddingBlock, ...obj.paddingBlock},
          paddingInline: {[mqKey]: paddingInline, ...obj.paddingInline}
        };
      },
      {paddingBlock: {}, paddingInline: {}},
    );
  }
};

const replaceSpaceInset = obj =>
  Object.entries(obj).reduce((prev, [key, value]) => {
    if (key === 'spaceInset') {
      return {
        ...prev,
        ...getPadding(value),
      };
    }
    if (isObject(value)) {
      return {
        ...prev,
        [key]: replaceSpaceInset(value),
      };
    }
    return {
      ...prev,
      [key]: value,
    };
  }, {});

module.exports = {
  replaceSpaceInset,
  getPadding,
};
