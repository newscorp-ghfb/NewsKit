const {exec} = require('child_process');
const {writeFileSync} = require('fs');
const inquirer = require('inquirer');
const load = require('@commitlint/load');
const parse = require('@commitlint/parse');
const read = require('@commitlint/read');

const {PLAIN_PREFIX_ERROR_MSG, SCOPE_REGEX, TYPES} = require('./constants');

const COMMIT_TYPE = 'commit-type';
const OTHER_COMMIT_TYPE = 'other-commit-type';
const SEM_VER_COMMIT_TYPES = ['fix/patch', 'feat/minor', 'no'];

const createPrompts = ({type, scope}) => {
  let ttys;
  try {
    ttys = require('./ttys'); // eslint-disable-line global-require
  } catch (e) {
    throw new Error(PLAIN_PREFIX_ERROR_MSG);
  }
  const prompt = inquirer.createPromptModule({input: ttys.stdin});

  const questions = [
    {
      choices: SEM_VER_COMMIT_TYPES,
      default: 0,
      message: 'Is a semantic version bump required by this ticket?',
      name: COMMIT_TYPE,
      type: 'list',
      when: !type,
    },
    {
      choices: TYPES,
      message: 'What type commit is this then?',
      name: OTHER_COMMIT_TYPE,
      type: 'list',
      when: answers =>
        !type &&
        answers[COMMIT_TYPE] ===
          SEM_VER_COMMIT_TYPES[SEM_VER_COMMIT_TYPES.length - 1],
    },
    {
      message: 'Enter the Jira ticket number for this commit',
      name: 'scope',
      transformer: input => input.toUpperCase(),
      type: 'input',
      validate: input =>
        SCOPE_REGEX.test(input.toUpperCase()) || 'e.g. PPDSC-1608',
      when: !scope,
    },
  ];

  const promptPromise = prompt(questions);

  return promptPromise.then(answers => {
    // close connection t stdin and readline to allow the script to move on
    promptPromise.ui.rl.close();
    ttys.stdin.end();

    return {
      scope: scope || answers.scope,
      type:
        type ||
        answers[OTHER_COMMIT_TYPE] ||
        answers[COMMIT_TYPE].replace(/\/.*/, ''),
    };
  });
};

const getBranchData = ({type, scope}) =>
  new Promise((resolve, reject) => {
    const branchNameRegex = /^(?:(\w*)\/)?([a-z]{2,5}-\d{1,5})?/i;
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
      if (stdout && typeof stdout === 'string') {
        const matches = stdout.trim().match(branchNameRegex);
        return resolve({
          scope: scope || matches[2],
          type: type || matches[1],
        });
      }
      return reject(err || stderr);
    });
  });

const passMessage = func => ({message, scope, type}) =>
  func({scope, type}).then(results => ({...results, message}));

const conditionalWrapper = func => ({scope, type}) =>
  type && scope ? Promise.resolve({scope, type}) : func({scope, type});

const [msgFilePath] = process.env.HUSKY_GIT_PARAMS
  ? process.env.HUSKY_GIT_PARAMS.split(' ')
  : [];
if (msgFilePath) {
  Promise.all([load(), read({edit: true})])
    .then(([{parserPreset}, [message]]) =>
      parse(
        message,
        undefined,
        (parserPreset && parserPreset.parserOpts) || {},
      ),
    )
    .then(({scope, type, ...parsed}) => {
      // remove any already defined type and scope info
      const message = parsed.raw
        .replace(type, '')
        .replace(`(${scope})`, '')
        .replace(/^:\s? /, '');

      return {
        message,
        scope,
        type,
      };
    })
    .then(passMessage(conditionalWrapper(getBranchData)))
    .then(passMessage(conditionalWrapper(createPrompts)))
    .then(({message, scope, type}) => {
      writeFileSync(
        msgFilePath,
        `${type}(${scope.toUpperCase()}): ${message}`,
        {encoding: 'utf-8'},
      );
      process.exit(0);
    });
}
