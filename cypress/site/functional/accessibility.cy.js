// / <reference types="Cypress" />

import {routes} from '../../../site/routes';
import {flatRoutes} from '../../support/commands';

const pages = flatRoutes(routes, 'id');

describe('Page accessibility', () => {
  pages.forEach(path => {
    it(`should pass basic a11y test for ${Cypress.config(
      'baseUrl',
    )}${path}`, () => {
      cy.mockConsentAndVisit(path);
      cy.wait(1000); // FIX: This accounts for 2mins of the test run time
      cy.injectAxe();
      if ([`/theme/foundation/fonts`, `/components/card`].includes(path)) {
        // The typography page is a showcase so we have disabled the heading order rule for this page.
        // More info on the rule here: https://www.w3.org/WAI/tutorials/page-structure/headings/
        // TODO: Need to revisit the below color contrast rule while working on the newskit site remake project
        cy.checkA11y(null, {
          rules: {
            'heading-order': {enabled: false},
            'color-contrast': {enabled: false},
          },
        });
      } else if (
        [
          `/components/tabs`,
          `/components/banner`,
          `/theme/presets/typography-presets`,
        ].includes(path)
      ) {
        cy.checkA11y(null, {
          rules: {
            'color-contrast': {enabled: false},
          },
        });
      } else {
        // TODO: Need to revisit this rule while working on the newskit site remake project
        cy.checkA11y(null, {
          rules: {
            'color-contrast': {enabled: false},
          },
        });
      }
    });
  });
});
