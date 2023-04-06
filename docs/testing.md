# Testing

## Running lint and unit tests locally

To run all the linting and unit tests, run `yarn test`

You can pass the `--watch` parameter to continuously run the relevant tests.

## Running the Cypress component tests locally

It is your responsibility to also add Cypress functional tests and visual tests when writing a new component or making changes to existing components.

To ensure that we have accessibility automated tests coverage, when creating a new component, there should be a test for checking that it passes basic accessibility checks. This can be done by calling the following Cypress commands:

```javascript
cy.injectAxe();
cy.checkA11y();
```

Any accessibility violations will be reported on the Cypress test runner.

To run component tests:

* `yarn e2e:build; yarn e2e:serve` (wait for it to start serving)
* (in a separate terminal) `yarn e2e:comps:open`

To run docs tests:

* `yarn build:docs`
* `yarn serve:docs` (wait for it to start serving)
* (in a separate terminal) `yarn e2e:docs:open`

## [Manual Checks in PR](#manual-checks)

Please use the guidelines below to verify that your PR does not introduce new issues when merged.

Components

* [ ] When snapshots are generated, does snapshot render correctly on the different viewports defined?

NewsKit Site changes

* [ ] Is the feature's functionality working as expected on other browsers such as Safari, Firefox and Edge?
* [ ] Are there new console errors reported?
* [ ] If visual test is not added, does it render OK on different browsers and mobile viewports? (Safari, Firefox, small mobile viewport, tablet)
* [ ] Is the Playground feature working as expected?
