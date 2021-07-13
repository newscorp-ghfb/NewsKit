// /<reference types="Cypress" />

const hamburgerIconTestID = '[data-testid="mobile-menu-icon"]';
const sidebarTestID = '[data-testid="sidebar"]';
const overlayTestID = '[data-testid="overlay"]';

describe('Documentation Site - header-navigation component', () => {
  before(() => {
    cy.mockConsentAndVisit('/');
  });

  describe('Desktop view', () => {
    it('should contain logo', () => {
      cy.get('[data-testid="logo-container"]').should('exist');
    });

    it('should highlight active section', () => {
      cy.visit('/about/introduction');
      cy.contains('About').within(() =>
        cy.get('div').should('have.attr', 'aria-current'),
      );
    });
  });

  describe('Mobile view', () => {
    before(() => cy.viewport('iphone-5'));

    it('should contain burger menu when on mobile', () => {
      cy.mockConsentAndVisit('/about/introduction');
      cy.get(sidebarTestID).should('exist').and('not.be.visible');
      cy.get(hamburgerIconTestID).first().click();
      cy.get(sidebarTestID).should('be.visible');
      cy.get('body').should('have.css', 'overflow', 'hidden');
      cy.get(overlayTestID).should('have.css', 'visibility', 'visible');

      cy.get(hamburgerIconTestID).first().click();
      cy.get(sidebarTestID).should('exist').and('not.be.visible');
      cy.get('body').should('have.css', 'overflow', 'visible');
      cy.get(overlayTestID).should('have.css', 'visibility', 'hidden');
    });

    it('burger menu should not be visible on the homepage', () => {
      cy.visit('/');
      cy.get(hamburgerIconTestID).should('not.exist');
    });
  });
});
