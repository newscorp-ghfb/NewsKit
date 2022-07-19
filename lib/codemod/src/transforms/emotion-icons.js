// Useful:
// https://gist.github.com/nemtsov/8f5a6a78268839abaca78ad1fbe8368c

const addImports = require('jscodeshift-add-imports');

const getNewskitImports = (j, root) =>
  root.find(j.ImportDeclaration, {source: {value: 'newskit'}}).nodes();

function collectListWithIcons(j, root) {
  const list = [];

  let newskitImports = getNewskitImports(j, root);

  newskitImports.forEach(node => {
    const specifiers = node.specifiers.forEach((node, indx) => {
      if (node.imported.name.startsWith('Icon')) {
        const iconType = node.imported.name.startsWith('IconFilled')
          ? 'Filled'
          : 'Outlined';

        const iconName = node.imported.name.replace(`Icon${iconType}`, '');

        const iconNameWithType = `${iconName}${iconType}`;

        const modulePath = `@emotion-icons/${
          iconType === 'Filled' ? 'material' : 'material-outlined'
        }/${iconName}`;

        list.push({
          nameOriginal: node.imported.name,
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
      ({iconNameWithType, name, type, nameOriginal}) =>
        `
const ${nameOriginal} = customToNewsKitIcon(
  '${nameOriginal}',
  ${iconNameWithType},
);
  `,
    )
    .join('\n');

  lastImport.insertAfter(iconBlocks);
};

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const {statement} = j.template;
  const printOptions = options.printOptions;

  const iconList = collectListWithIcons(j, root);

  const iconImports = iconList.map(({iconNameWithType, modulePath}) =>
    j.importDeclaration(
      [j.importDefaultSpecifier(j.identifier(iconNameWithType))],
      j.literal(modulePath),
    ),
  );

  // add icon imports and to toNewskitIcon
  addImports(root, [
    statement`import {toNewskitIcon} from 'newskit';`,
    ...iconImports,
  ]);

  // remove old newskit imports
  removeIcons(
    j,
    root,
    iconList.map(i => i.nameOriginal),
  );

  console.log({iconList});
  // add icon blocks
  addIconBlocks(j, root, iconList);

  return root.toSource(printOptions);
};
