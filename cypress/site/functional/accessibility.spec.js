// / <reference types="Cypress" />

import siteRoutes from '../../../site/routes';
import {flatRoutes} from '../../support/commands';

const pages = flatRoutes(siteRoutes, 'id');

describe('Page accessibility', () => {
  pages.forEach(path => {
    it(`should pass basic a11y test for ${Cypress.config(
      'baseUrl',
    )}${path}`, () => {
      cy.mockConsentAndVisit(path);
      cy.wait(1000);
      cy.injectAxe();
      if (path === `/theme/foundation/fonts` || path === `/components/card`) {
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
        path === `/components/tabs` ||
        path === `/components/banner` ||
        path === `/theme/presets/typography-presets`
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
