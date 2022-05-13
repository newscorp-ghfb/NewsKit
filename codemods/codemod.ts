const {run: jscodeshift} = require('jscodeshift/src/Runner');
const path = require('path');
const glob = require('glob');

function expandFilePathsIfNeeded(filesBeforeExpansion) {
  const shouldExpandFiles = filesBeforeExpansion.some(file =>
    file.includes('*'),
  );
  return shouldExpandFiles
    ? filesBeforeExpansion.map(filePath => glob.sync(filePath)).flat()
    : filesBeforeExpansion;
}

const start = async function () {
  console.log(process.argv);

  const argPath = process.argv[2];
  const argName = process.argv[3];

  //const transformPath = path.join(__dirname, 'rename-token.js');
  //const transformPath = path.join(__dirname, 'rename-prop.js');
  //const transformPath = path.join(__dirname, 'transforms/rename-override.js');
  //const transformPath = path.join(__dirname, 'transforms/remove-component.js');
  // const transformPath = path.join(__dirname, `transforms/rename-defaults.js`);
  const transformPath = path.join(__dirname, `transforms/${argName}.js`);

  //const files = ['../site/**/*.+(ts|tsx|json)'];
  //const files = ['../site/pages/index.tsx'];
  //const files = ['../site/theme/component-defaults.ts'];
  const files = [argPath];

  const filesFullPath = files.map(filePath => path.join(__dirname, filePath));

  const options = {
    //dry: true,
    //print: true,
    verbose: 1,
    parser: 'tsx',
  };

  const filesExpanded = expandFilePathsIfNeeded(filesFullPath);
  console.log({filesExpanded});
  const res = await jscodeshift(transformPath, filesExpanded, options);
  console.log(res);
};

// Call start
start();
