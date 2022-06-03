#!/usr/bin/env node

const yargs = require('yargs');
const chalk = require('chalk');
const {run: jscodeshift} = require('jscodeshift/src/Runner');
const path = require('path');
const glob = require('glob');

const PACKAGE_NAME = 'newskit-codemods';

// Each mod or script is an array of dubstep steps
// Users can select one of these to run from the CLI via `--mod`
const TRANSFORMS = {
  'update-token': 'Update token for v6',
};

// Set up yargs
// Includes usage on -h or --help
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
        describe: 'Paths or globs to run codemod on.',
        demandOption: true,
      });
    },
    handler: params => {
      const {codemod, paths, ...args} = params;
      console.log(args);

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      runTransform(codemod, paths, args);
    },
  })
  .option('print', {
    describe: 'print transformed files to stdout, useful for development',
    type: 'boolean',
  })
  .option('dry', {
    description: 'dry run (no changes are made to files)',
    type: 'boolean',
  })
  .option('parser', {
    description:
      'the parser to use for parsing the source files (default: typescript)',
    type: 'string',
  })
  .demandOption(
    ['codemod', 'paths'],
    `Please provide both ${chalk.green.bold('codemod')} and ${chalk.green.bold(
      'paths',
    )} arguments to work with this tool`,
  )

  .usage(
    `${chalk.white.bold(PACKAGE_NAME)}
You can use this CLI tool to run various scripts (codemods)...TODO...
Usage:
  $ ${PACKAGE_NAME}  <CODEMOD_NAME> <PATH_TO_CODE>

Example:
  $ ${PACKAGE_NAME} v5-to-v6 ./src/**/*.+(ts|tsx|json) 

Codemods:
${Object.keys(TRANSFORMS)
  .map(m => `  ${m}`)
  .join(`\n`)}`,
  )
  .help()
  .alias('help', 'h').argv;

function expandFilePathsIfNeeded(filesBeforeExpansion) {
  const shouldExpandFiles = filesBeforeExpansion.some(file =>
    file.includes('*'),
  );
  return shouldExpandFiles
    ? filesBeforeExpansion.map(filePath => glob.sync(filePath)).flat()
    : filesBeforeExpansion;
}

async function runTransform(codemod, userPath, args) {
  const start = process.hrtime();

  const transformPath = path.join(__dirname, `transforms/${codemod}.js`);
  const files = [userPath];

  const options = {
    verbose: 1,
    parser: 'tsx',
    ...args,
  };

  const filesExpanded = expandFilePathsIfNeeded(files);
  await jscodeshift(transformPath, filesExpanded, options);
  const end = process.hrtime(start);
  console.log(`Successfully completed running ${chalk.cyan(codemod)} codemod.`);
  console.log(`✨  Done in ${(end[0] + end[1] / 1e9).toFixed(2)}s.`);
}
