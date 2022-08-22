// Useful:
// https://gist.github.com/nemtsov/8f5a6a78268839abaca78ad1fbe8368c

const addImports = require('jscodeshift-add-imports');

const getNewskitImports = (j, root) =>
  root.find(j.ImportDeclaration, {source: {value: 'newskit'}}).nodes();

function collectListWithIcons(j, root) {
  const list = [];

  let newskitImports = getNewskitImports(j, root);
  newskitImports.forEach(node => {
    node.specifiers.forEach(specifier => {
      if (
        specifier.imported.name.startsWith('IconFilled') ||
        specifier.imported.name.startsWith('IconOutlined')
      ) {
        const iconType = specifier.imported.name.startsWith('IconFilled')
          ? 'Filled'
          : 'Outlined';

        const iconName = specifier.imported.name.replace(`Icon${iconType}`, '');

        const iconNameWithType = `${iconType}${iconName}`;

        const modulePath = `@emotion-icons/${
          iconType === 'Filled' ? 'material' : 'material-outlined'
        }/${iconName}`;

        list.push({
          nameOriginal: specifier.imported.name,
          name: iconName,
          type: iconType,
          modulePath,
          iconNameWithType,
        });
      }
    });
  });

  return list;
}

const removeIcons = (j, root, list) => {
  let newskitImports = getNewskitImports(j, root);

  j(newskitImports)
    .find(j.ImportSpecifier)
    .filter(s => {
      const name = s.value.imported.name;
      if (list.includes(name)) {
        j(s).remove();
      }
    });
};

const addIconBlocks = (j, root, list) => {
  const imports = root.find(j.ImportDeclaration).paths();
  const lastImport = imports[imports.length - 1];

  const iconBlocks = list
    .map(
      ({iconNameWithType, nameOriginal}) =>
        `const ${nameOriginal} = toNewsKitIcon(${iconNameWithType});`,
    )
    .join('\n');

  lastImport.insertAfter(iconBlocks);
};

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const {statement} = j.template;
  const printOptions = options.printOptions || {
    quote: 'single',
    objectCurlySpacing: false,
  };
  const iconList = collectListWithIcons(j, root);

  // create icon imports
  const iconImports = iconList.map(({iconNameWithType, name, modulePath}) =>
    j.importDeclaration(
      [j.importSpecifier(j.identifier(name), j.identifier(iconNameWithType))],
      j.literal(modulePath),
    ),
  );

  if (iconList.length) {
    // add icon imports and to toNewskitIcon
    addImports(root, [
      statement`import {toNewsKitIcon} from 'newskit';`,
      ...iconImports,
    ]);

    // remove old newskit imports
    removeIcons(
      j,
      root,
      iconList.map(i => i.nameOriginal),
    );

    // add icon blocks
    addIconBlocks(j, root, iconList);

    return root.toSource(printOptions);
  }

  /* istanbul ignore file */
  return;
};
