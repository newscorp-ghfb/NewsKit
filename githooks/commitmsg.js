/* eslint-disable no-console */
const format = require('@commitlint/format').default;
const lint = require('@commitlint/lint');
const load = require('@commitlint/load');
const read = require('@commitlint/read');

const customMessages = {
  'scope-enum': {
    level2: 'The scope should be a GitHub issue number',
  },
};

const customiseMessages = (report, custom) => {
  if (report.valid) {
    return report;
  }
  const messageMapper = problem => ({
    ...problem,
    message:
      (custom[problem.name] && custom[problem.name][`level${problem.level}`]) ||
      problem.message,
  });
  const {warnings, errors} = report;
  return {
    ...report,
    errors: errors ? errors.map(messageMapper) : errors,
    warnings: warnings ? warnings.map(messageMapper) : warnings,
  };
};

Promise.all([load(), read({edit: true})])
  .then(([{rules, parserPreset}, [message]]) => {
    // eslint-disable-next-line no-param-reassign
    rules['scope-case'] = [2, 'always', 'upper-case'];
    return lint(message, rules, parserPreset || {});
  })
  .then(report => {
    const message = format(customiseMessages(report, customMessages), {
      color: true,
    });
    if (!report.valid) {
      console.error(report);
      throw new Error(message);
    }
    console.log(message);
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
