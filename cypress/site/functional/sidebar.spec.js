// /<reference types="Cypress" />

import siteRoutes from '../../../site/routes.json';

describe('Documentation Site - sidebar component', () => {
  before(() => {
    cy.mockConsentAndVisit('/');
  });

  siteRoutes.forEach(route => {
    it(`should contain ${route.title} section routes`, () => {
      if (route.title === 'Guides') {
        cy.visit('/getting-started/code/web');
      } else {
        cy.visit(route.subNav[0].id);
      }
      route.subNav.forEach(subRoute =>
        cy.contains(subRoute.title).should('exist'),
      );
    });
  });
});
