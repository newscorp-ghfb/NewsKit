const types = require('../types.json');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const typesMap = {
  //Button: 'ButtonProps', //'ButtonOrButtonLinkProps',
  //Flag: 'FlagProps',
  GridLayout: 'GridLayoutProps',
  //GridLayoutItem: 'GridLayoutItemProps',
};

const typeReferences = {};
const okTypes = {};
const filterOutProps = ['overrides', 'as'];


types.children.forEach(t => {
  typeReferences[t.name] = t
});


Object.entries(typesMap).map(([key, value]) => {
  console.log('------------------');
  console.log('Component: ' + key);
  //console.log(getPropsList(value));

  console.log({key, value});

  okTypes[key] = getPropsList(value);
});

function getPropsList(referenceName) {
  const typeObject = getTypeReference(referenceName);
  console.log(typeObject);
  
  if (typeObject && typeObject.children) {
    return typeObject.children
      .filter(p => {
        !p.flags.isExternal;
        //console.log(p.name, p.flags);
        const isExternal = _.get(p, 'flags.isExternal', false);
        //console.log({name: p.name, isExternal});
        return !isExternal;
      })
      .filter(p => !filterOutProps.includes(p.name))
      .map(getProp);
  }
  if ( typeObject.type ) {
    return [getProp(typeObject)];
  }
  return ['none'];
}

function getTypeReference(typeName) {
  return typeReferences[typeName];
}

function getProp(prop) {
  return {
    name: prop.name,
    isOptional: prop.flags.isOptional,
    type: prop.type ? getType(prop.type) : 'unknown',
  };
}

function getType(type) {
  if (type.type === 'intrinsic') {
    return type.name;
  }
  if (type.type === 'reference') {
    if (['ReactNode'].includes(type.name)) {
      return type.name;
    }

    const referenceType = getTypeReference(type.name);
    if (referenceType && referenceType.type) {
      return getType(referenceType.type);
    }
  }
  if (type.type === 'union') {
    return type.types.map(t => t.value);
  }

  if ( type.type === 'intersection') {
    console.log(type.types);
    return type.types.map(t => t.value);
  }

  return type;
}

fs.writeFileSync('./ok-types.json', JSON.stringify(okTypes));
