// /<reference types="Cypress" />

import {routes} from '../../../site/routes';

describe('Documentation Site - sidebar component', () => {
  before(() => {
    cy.mockConsentAndVisit('/');
  });

  routes.forEach(route => {
    it(`should contain ${route.title} section routes`, () => {
      if (route.title === 'Guides') {
        cy.visit('/getting-started/code/engineering-quickstart');
      } else {
        cy.visit(route.subNav[0].id);
      }
      route.subNav.forEach(subRoute =>
        cy.contains(subRoute.title).should('exist'),
      );
    });
  });
});
