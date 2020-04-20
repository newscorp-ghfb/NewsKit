# Contributing to NewsKit

## Definition of done

* Each component has a drop-in, stateful, stateless, styled (presentation) components exported
* Browser accessibility support and aria attributes
  * A11y rules can be found [here](https://dequeuniversity.com/rules/axe/3.0/),
  * Run `yarn lint` , which has [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules) running as part of it,
  * See instructions [here](./TESTING.md) on how to run the Cypress tests
* [Emotion](https://emotion.sh/docs) for CSS-in-JS styling
* Unit tests with [jest](https://jestjs.io/en/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [Typescript](https://www.typescriptlang.org/) type coverage for all component code
* Documentation added to the docs site. You start the doc site using `yarn dev:docs`.

## Running the project

Once you have installed the packages via yarn, to start the documentation site and storybook in watch modes, run `yarn dev`.

The documentation site will run on <http://localhost:8081/>

The storybook will run on <http://localhost:6006/>

## Branch Naming Convention

To contribute to our repository, please branch off from `develop`.

Each feature branch SHOULD be named in the following format:
`<type>/<scope>-<description>`

Where __type__ follows the same conventions as the commit messages (fix, feat, chore, docs,style, refactor, perf, or test).

The __scope__ field is the (upper case) Jira ticket number for the task being completed.

The __description__ field is a dash-separated (lower kebab case) useful human-readable description of the changes in the branch.

This does not apply to long-lived branches, such as master, development, release, etc.

. e.g. `feat/NUK-001-login-screen-ui`

## Commit Messages Guidelines

```bash
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Examples:

```bash
feat(NUK-001): create the login screen ui  
docs(NUK-002): update the CODEOWNERS file to reflect the tech reset structure  
fix(NUK-003)!: the digital publishing process by changing from Methode to WordPress  
chore(NUK-004): add test reporting to the build pipeline
feat(NUK-005): allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

We are following the specification for our commit message format, with the following exceptions:

The __type__ field MUST be one of the following (must be lower-case):

* fix - a bug fix
* feat - a new feature
* chore - changes to the build process or auxiliary tools and libraries such as documentation generation
* docs - documentation only changes
* style - changes that do not affect the meaning of the code, e.g. white-space, formatting, missing semi-colons, etc
* refactor - a code change that neither fixes a bug nor adds a feature
* perf - a code change that improves performance
* test - adding or updating tests

The __scope__ field MUST always be included, and is the (upper case) Jira ticket number for the task being completed (e.g. NUK-001). There MUST always be a Jira ticket for a task being completed, and this MUST be included as the scope. Do not insert a fake ticket number if you don't have one - create a ticket instead!

The __description__ field SHOULD follow the tense of "Applying this patch will _________". Where the type is a verb, it can be considered to be included in the description. For example:

* Good - fix(...): the array parsing issue when multiple spaces were contained in string
* Bad - fix(...): changed the multiple spaces parsing to get rid of the exception had a parsing issue
* Good - feat(...): add the ability to segment users in the MVT tool
* Bad - doc(...): deleted the reference to Chromebooks in the getting started guide

The desciption, body, and footer SHOULD be in lower case, except where acronyms, proper nouns, and references to filenames are used. Single sentences SHOULD NOT end in punctuation, but punctuation SHOULD be used for multiple sentences on a single line.

## Rewriting History

SHOULD be avoided where possible, especially once a PR is open and being reviewed.

* It makes it hard to reason about change in PRs.

* It also makes collaboration more difficult.

* It creates confusion when working with less technical users, pushing them to learn non standard workflows.

## Pull Requests

### Writing a pull request

PRs to be titled as per the RFC: `<type>(<scope>): <description>` e.g. `feat(NUK-001): Created the Login Screen UI`

We have a pull request template in our repo this SHOULD be filled out to the best of your ability to clearly indicate to the reviewer what has changed.

The PR body SHOULD include a link to the corresponding JIRA ticket.

For more information about best practices when writing your PR, please visit [Pull Request](https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/1319370846/Pull+Request) on our Confluence page.

### Conducting a code review

Issues raised on a PR SHOULD only be marked as resolved by the person who raised them.

Try to not to leave excess comments, if an issue is in lots of places call that out in a single message.

Use a [:rocket] emoji to indicate to the reviewer that you’ve fixed an issue.

Use suggestions more.

Use Slack channel to notify that it’s ready for rereview.

### Merging a PR

PR’s SHOULD be merged by the owner of that ticket/work. If you believe a PR is ready to merge, let the owner know so that they can merge it - the owner may know of a reason not to merge it at that time.

PR owner SHOULD be responsible for bringing in latest develop changes into their branch unless ready for merge tag is present.

PR owner SHOULD be responsible for running Aplitools changes unless ready for merge tag is present.

Only the owner SHOULD close their PR, unless the PR is not inline with the specification outlined in this document.

### Use labels to indicate state of PR

This will better allow the team to prioritise what to look at. [View here](https://github.com/newscorp-ghfb/ncu-newskit/labels)

## Merging to develop

SHOULD be squash merged to keep history on develop branch clean.

## Merging develop to master

Merge to master is done as a part of the release process, and SHOULD be a merge commit to preserve history.
