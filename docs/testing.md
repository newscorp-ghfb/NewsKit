# Testing

## Running lint and unit tests locally

To run all the linting and unit tests, run `yarn test`

You can pass the `--watch` parameter to continuously run the relevant tests.

## Running the Cypress component tests locally

It is your responsibility to also add functional tests and visual tests (TBC) when writing a new component or making changes to existing components.

To build the assets & start serving them on port <http://localhost:8082,> run `docker-compose build e2e`

If you want to run the e2e tests and generate new snapshots, run `docker-compose up e2e`

To update the baseline snapshots, please delete the relevant old baseline images and run `docker-compose up e2e` to generate new snapshots.

To ensure that we have accessibility automated tests coverage, when creating a new component, there should be a test for checking that it passes basic accessibility checks. This can be done by calling the following Cypress commands:

```javascript
cy.injectAxe();
cy.checkA11y();
```

Any accessibility violations will be reported on the Cypress test runner.

## [Manual Checks in PR](#manual-checks)

Please use the guidelines below to verify that your PR does not introduce new issues when merged.

Components

* [ ] When snapshots are generated, does snapshot render correctly on the different viewports defined?

NewsKit Site changes

* [ ] Does it render correctly on IE11?
* [ ] Does it have accessibility errors reported by WAVE?
* [ ] Are there new console errors reported?
* [ ] If visual test is not added, does it render OK on different browsers and mobile viewports? (Safari, Firefox, small mobile viewport, tablet)
* [ ] Is the Playground feature working as expected?
