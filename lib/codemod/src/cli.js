#!/usr/bin/env node

const yargs = require('yargs');
const chalk = require('chalk');
const {run: jscodeshift} = require('jscodeshift/src/Runner');
const path = require('path');
const glob = require('glob');
const packageJson = require('../package.json');

const PACKAGE_NAME = packageJson.name;

// Codemods names and descriptions are defined below.
// Users can select one of these to run from the CLI
const TRANSFORMS = {
  'update-token': 'Updates newskit tokens from v5 to v6',
  'emotion-icons': 'Updates newskit icons to use @emotion-icons',
  'remove-redundant-marker-ul':
    'Unordered List has now a default marker, removes the prop passing the same icon now set as default.',
  'update-list-item-marker-ul-value':
    'Unordered List has now a default marker, the script passes "listItemMarker" with a value of "null" to UnorderedList components originally not passing any marker.',
  'enum-to-union':
    'Replace enum type with union type and remove the imports of enums',
};

function expandFilePathsIfNeeded(filesBeforeExpansion) {
  const shouldExpandFiles = filesBeforeExpansion.some(file =>
    file.includes('*'),
  );
  return shouldExpandFiles
    ? filesBeforeExpansion.map(filePath => glob.sync(filePath)).flat()
    : filesBeforeExpansion;
}

async function runTransform(codemodName, files, args) {
  const transformPath = path.join(__dirname, `transforms/${codemodName}.js`);
  const filesBeforeExpansion = [files];

  const filesExpanded = expandFilePathsIfNeeded(filesBeforeExpansion);

  const options = {
    verbose: 1,
    parser: 'tsx',
    ...args,
  };

  await jscodeshift(transformPath, filesExpanded, options);
  console.log(
    `✨ Successfully completed running ${chalk.cyan(codemodName)} codemod.`,
  );
}

// Set up yargs
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs
  .scriptName(PACKAGE_NAME)
  .command({
    command: '$0 [codemod] [paths]',
    desc: 'Run codemod on files',
    builder: y => {
      y.positional('codemod', {
        type: 'string',
        describe: 'The name of the codemod to run',
        demandOption: true,
      });
      y.positional('paths', {
        type: 'string',
        describe:
          'Files or directory to transform. Can be a glob like src/**.js',
        demandOption: true,
      });
    },
    handler: params => {
      const {codemod, paths, ...args} = params;

      runTransform(codemod, paths, args);
    },
  })
  .option('print', {
    alias: 'p',
    describe:
      'print transformed file contents to stdout, useful for development',
    type: 'boolean',
    default: false,
  })
  .option('dry', {
    alias: 'd',
    description: 'dry run (no changes are made to files)',
    type: 'boolean',
    default: false,
  })
  .option('parser', {
    description: 'the parser to use for parsing the source files ',
    type: 'string',
    choices: ['babel', 'babylon', 'flow', 'ts', 'tsx'],
    default: 'tsx',
  })
  .demandOption(
    ['codemod', 'paths'],
    `⛔️  Please provide both ${chalk.green.bold(
      'codemod',
    )} and ${chalk.green.bold('paths')} arguments to work with this tool`,
  )
  .usage(
    `
    ${chalk.white.bold(PACKAGE_NAME)}
    Codemods for updating NewsKit
    Usage:
      $ ${PACKAGE_NAME}  <CODEMOD_NAME> <PATH_TO_CODE>

    Example:
      $ ${PACKAGE_NAME} update-tokens ./src/**/*.+(ts|tsx|json) 

    Codemods:
      ${Object.keys(TRANSFORMS)
        .map(m => `  ${m} - ${TRANSFORMS[m]}`)
        .join(`\n`)}`,
  )
  .help()
  .alias('help', 'h').argv;
