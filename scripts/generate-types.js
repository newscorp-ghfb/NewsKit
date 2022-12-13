const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const types = require('../types.json');

const typesMap = {
  Button: 'ButtonProps', // 'ButtonOrButtonLinkProps',
  Flag: 'FlagProps',
  GridLayout: 'GridLayoutProps',
  GridLayoutItem: 'GridLayoutItemProps',
};

const typeReferences = {};
const okTypes = {};
const filterOutProps = ['overrides', 'as'];

types.children.forEach(t => {
  typeReferences[t.name] = t;
});

Object.entries(typesMap).map(([key, value]) => {
  console.log('------------------');
  console.log(`Component: ${key}`);
  // console.log(getPropsList(value));

  console.log({key, value});

  okTypes[key] = getPropsList(value);
});

function getPropsList(referenceName) {
  const typeObject = getTypeReference(referenceName);

  if (typeObject && typeObject.children) {
    return parseChildren(typeObject);
  }
  if (typeObject.type) {
    return getProp(typeObject);
  }
  return ['none'];
}

function parseChildren(typeObject) {
  return typeObject.children
    .filter(p => {
      !p.flags.isExternal;
      // console.log(p.name, p.flags);
      const isExternal = _.get(p, 'flags.isExternal', false);
      // console.log({name: p.name, isExternal});
      return !isExternal;
    })
    .filter(p => !filterOutProps.includes(p.name))
    .map(getProp);
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
    if (type.name === 'MQ') {
      return type.typeArguments[0].name;
    }

    // console.log(parseChildren(getTypeReference(type.name)));
    // return getPropsList(type.name);

    const referenceType = getTypeReference(type.name);
    if (referenceType && referenceType.type) {
      return getType(referenceType.type);
    }
  }
  if (type.type === 'union') {
    return type.types.map(t => t.value);
  }

  if (type.type === 'intersection') {
    const int = type.types
      .map(t => {
        if (t.declaration) {
          return parseChildren(t.declaration);
        }
        if (t.name && t.id) {
          return getPropsList(t.name);
        }

        // TODO: Omit types
        // if (t.name === 'Omit') {
        //   return [];
        // }
        return null;
      })
      .filter(Boolean);

    return intersection(int);
  }

  return type;
}

fs.writeFileSync('./ok-types.json', JSON.stringify(okTypes));

function omit(object, ...keys) {
  return _.omit(object, keys);
}

function intersection(rest) {
  return rest.reduce((prev, next) => [...prev, ...next], []);
}
