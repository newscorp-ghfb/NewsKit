// / <reference types="Cypress" />

import { routes as siteRoutes } from '../../../site/routes';

const flatRoutes = routes =>
  routes.reduce((acc, route) => {
    if (route.page) {
      acc.push(route.id);
      return acc;
    }

    if (route.subNav) {
      return acc.concat(flatRoutes(route.subNav));
    }

    throw new Error(
      `Route object has no page or subNav property! ${JSON.stringify(route)}`,
    );
  }, []);

export const routesFor = id => {
  const filteredRoutes = siteRoutes.filter(sr => sr.id === id);
  return flatRoutes(filteredRoutes);
};

export function runA11yTestForPath(path) {
  describe(`Page accessibility for ${path} section`, () => {
    routesFor(path).forEach(route => {
      it(`should pass basic a11y test for ${Cypress.config(
        'baseUrl',
      )}${route}`, () => {
        cy.mockConsentAndVisit(route);
        cy.wait(1000); // FIX: This accounts for 2mins of the test run time
        cy.injectAxe();
        if (
          route === `/theme/foundation/fonts` ||
          route === `/components/card`
        ) {
          // The typography page is a showcase so we have disabled the heading order rule for this page.
          // More info on the rule here: https://www.w3.org/WAI/tutorials/page-structure/headings/
          // TODO: Need to revisit the below color contrast rule while working on the newskit site remake project
          cy.checkA11y(null, {
            rules: {
              'heading-order': { enabled: false },
              'color-contrast': { enabled: false },
            },
          });
        } else if (
          route === `/components/tabs` ||
          route === `/components/banner` ||
          route === `/theme/presets/typography-presets`
        ) {
          cy.checkA11y(null, {
            rules: {
              'color-contrast': { enabled: false },
            },
          });
        } else {
          // TODO: Need to revisit this rule while working on the newskit site remake project
          cy.checkA11y(null, {
            rules: {
              'color-contrast': { enabled: false },
            },
          });
        }
      });
    });
  });
}

export function runA11yTestForRoute(route) {
  describe(`Page accessibility for ${route} section`, () => {

    it(`should pass basic a11y test for ${Cypress.config(
      'baseUrl',
    )}${route}`, () => {
      cy.mockConsentAndVisit(route);
      cy.wait(1000); // FIX: This accounts for 2mins of the test run time
      cy.injectAxe();
      if (
        route === `/theme/foundation/fonts` ||
        route === `/components/card`
      ) {
        // The typography page is a showcase so we have disabled the heading order rule for this page.
        // More info on the rule here: https://www.w3.org/WAI/tutorials/page-structure/headings/
        // TODO: Need to revisit the below color contrast rule while working on the newskit site remake project
        cy.checkA11y(null, {
          rules: {
            'heading-order': { enabled: false },
            'color-contrast': { enabled: false },
          },
        });
      } else if (
        route === `/components/tabs` ||
        route === `/components/banner` ||
        route === `/theme/presets/typography-presets`
      ) {
        cy.checkA11y(null, {
          rules: {
            'color-contrast': { enabled: false },
          },
        });
      } else {
        // TODO: Need to revisit this rule while working on the newskit site remake project
        cy.checkA11y(null, {
          rules: {
            'color-contrast': { enabled: false },
          },
        });
      }
    });
  });
}
