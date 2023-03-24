const chalk = require('chalk');

const TYPES = ['docs', 'feat', 'fix', 'refactor', 'revert', 'upkeep', 'spike'];
const SCOPE_REGEX = /^[A-Z]{2,5}-\d{1,5}|\d{1,5}$/;
const PLAIN_PREFIX_ERROR_MSG =
  "The commit message should be in the format 'type - fix/feat/etc(issue-number): message'";
const FORMATTED_PREFIX_ERROR_MSG = `The commit message should be in the format ${chalk.bold(
  "'type",
)}${chalk.reset.dim(' - fix/feat/etc')}${chalk.bold(
  "(ticket-number): message'",
)}`;

module.exports = {
  FORMATTED_PREFIX_ERROR_MSG,
  PLAIN_PREFIX_ERROR_MSG,
  SCOPE_REGEX,
  TYPES,
};
