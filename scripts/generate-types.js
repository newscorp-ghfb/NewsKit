const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const types = require('../types.json');

const typesMap = {
  Button: 'ButtonProps', // 'ButtonOrButtonLinkProps',
  Flag: 'FlagProps',
  GridLayout: 'GridLayoutProps',
  GridLayoutItem: 'GridLayoutItemProps',
  Block: 'BlockProps',
  Breadcrumbs: 'BreadcrumbsProps',
  BreadcrumbItem: 'BreadcrumbItemProps',
  Divider: 'DividerProps',
  Headline: 'HeadlineProps',
  IconButton: 'ButtonProps', //'IconButtonProps',
  Image: 'ImageProps', // TODO: some attributes are not correct
  // InlineMessage: 'InlineMessageProps', // TODO: does not work at all
  Label: 'LabelProps',
  Menu: 'MenuProps',
  MenuItem: 'MenuItemProps',
  MenuDivider: 'MenuDividerProps',
  MenuGroup: 'MenuGroupProps',
  MenuSub: 'MenuSubProps',
  OrderedList: 'OrderedListProps',
  Scroll: 'ScrollProps',
  Tabs: 'TabsProps', // TODO: Tabs children type
  Tab: 'TabProps',
  Tag: 'TagProps',
  TitleBar: 'TitleBarProps', // TODO: props actionItem, hideActionItemOn
  Paragraph: 'ParagraphProps',
  // Heading1: 'HeadingOverrides', // not correct types
  // Heading2: 'HeadingOverrides',
  // Heading3: 'HeadingOverrides',
  UnorderedList: 'UnorderedListProps',
};

const typeReferences = {};
const okTypes = {};
const filterOutProps = [
  'as',
  'onClick',
  'sources',
  'onChange',
  'transitionPreset',
  'hideActionItemOn',
  'actionItem',
  'eventContext',
  'eventOriginator',
];

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
    const t = getProp(typeObject);
    return _.get(t, 'type');
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
    if (['ReactNode', 'React.ReactNode'].includes(type.name)) {
      return 'ReactNode';
    }
    if (type.name === 'MQ') {
      return type.typeArguments[0].name;
    }
    if (type.package === 'csstype') {
      return 'string';
    }
    if (type.package === 'typescript') {
      if (type.name === 'Omit') {
        const [mainType, ...omits] = type.typeArguments;
        const omitKeys = omits.map(o => o.value);
        const referenceType = getTypeReference(mainType.name);

        if (referenceType && referenceType.type) {
          return getType(referenceType.type);
        } else if (referenceType && referenceType.children) {
          const a = parseChildren(referenceType);
          return a.filter(v => !omitKeys.includes(v.name));
        }
      }
    }

    // console.log(parseChildren(getTypeReference(type.name)));
    // return getPropsList(type.name);

    const referenceType = getTypeReference(type.name);
    console.log({referenceName: type.name, referenceType});
    if (referenceType && referenceType.type) {
      return getType(referenceType.type);
    } else if (referenceType && referenceType.children) {
      const a = parseChildren(referenceType);
      console.log({parsered: a});
      return a;
    }
  }
  if (type.type === 'union') {
    return type.types.map(t => t.value);
  }

  if (type.type === 'intersection') {
    const int = type.types
      .map(t => {
        if (t.declaration) {
          const c = parseChildren(t.declaration);
          return c;
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
  if (type.type === 'reflection') {
    if (type.declaration) {
      return parseChildren(type.declaration);
    }
  }

  return type;
}

fs.writeFileSync('./ok-types.json', JSON.stringify(okTypes, null, '\t')); // Indented with tab));

function omit(object, ...keys) {
  return _.omit(object, keys);
}

function intersection(rest) {
  return rest.reduce((prev, next) => [...prev, ...next], []);
}
