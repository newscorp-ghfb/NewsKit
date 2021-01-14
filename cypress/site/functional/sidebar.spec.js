// /<reference types="Cypress" />

import siteRoutes from '../../../site/routes.json';
import {flatRoutes} from '../../support/commands';

const pages = flatRoutes(siteRoutes, 'title');

describe('Documentation Site - sidebar component', () => {
  before(() => {
    cy.mockConsentAndVisit('/');
  });

  pages.forEach(title => {
    it(`should contain ${title}`, () => {
      cy.contains(title).should('exist');
    });
  });
});
