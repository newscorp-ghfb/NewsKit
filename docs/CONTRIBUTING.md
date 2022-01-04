# Contributing to Design System Site

## Definition of done

* Each component has a drop-in, stateful, stateless, styled (presentation) components exported
* Browser accessibility support and aria attributes
  * A11y rules can be found [here](https://dequeuniversity.com/rules/axe/3.0/),
  * Run `yarn lint` , which has [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules) running as part of it,
  * See instructions [here](./TESTING.md) on how to run the Cypress tests
* [Emotion](https://emotion.sh/docs) for CSS-in-JS styling
* Unit tests with [jest](https://jestjs.io/en/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [Typescript](https://www.typescriptlang.org/) type coverage for all component code
* Documentation added to the docs site. You start the doc site using `yarn documentation:dev`.

## Running the project

Once you have installed the packages via yarn, you can start the documentation site, which will contain all the available components, by running `yarn build && yarn documentation:serve`

The documentation site will run on <http://localhost:8081/>

Alternatively, you can also start storybook by running `yarn storybook`

This will load the storybook server on <http://localhost:6006/>

To start the documentation site and storybook in watch modes, run `yarn dev`.

## Creating Pull Requests

To contribute to our repository, please branch off from `develop` branch with branch name in this format [prefix/JIRA ticket number].

For example:

* fix/PPTSC-33
* feat/PPTSC-46

You can use the following prefixes when creating your PR:

* feat - Adds a new feature
* fix - Bug fixes or test fixes
* refactor - Refactoring or improvement of existing features
* upkeep - Config changes, tools/library updates, changes to build
* spike - Spiking new features (not to be merged)
* revert - Reverting previously committed changes
* docs - Updating documentation

For more information, please visit [Contributing](https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/1331593326/Contributing) on our Confluence page.

## Commit Messages Guidelines

You must also prefix your commit messages with the above prefixes listed such as feat or fix.

For example:

* fix: bug fix for button component
* docs: update README to include testing instructions

## Submitting Pull Requests

When submitting your PR, please make sure that you complete the details found on [PR Template](../.github/PULL_REQUEST_TEMPLATE.md).

Prefix the PR title with the Jira ticket; the rest of the title should be based on the work done. The description should be completed using PR template to give all the required information and any of the optional information that would be of benefit for review or testing.

For more information about best practices when writing your PR, please visit [Pull Request](https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/1319370846/Pull+Request) on our Confluence page.

In order for your PR to be merged, the build must pass and all relevant automated testing must be added in (including E2E and Visual tests if needed). Each PR requires 2 successful reviews before it can be merged to develop branch.
