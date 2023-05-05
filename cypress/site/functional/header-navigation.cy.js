// /<reference types="Cypress" />

const hamburgerIconTestID = '[data-testid="mobile-menu-icon"]';
const sidebarTestID = '[data-testid="sidebar"]';
const indicatorID = '[data-testid="styled-indicator"]';

describe('Documentation Site - header-navigation component', () => {
  describe('Desktop view', () => {
    it('should contain logo', () => {
      cy.mockConsentAndVisit('/');
      cy.get('[data-testid="logo-container"]').should('exist');
    });
    it('should highlight active section', () => {
      cy.mockConsentAndVisit('/about/contact-us');
      cy.get(indicatorID).should('have.attr', 'aria-current');
    });
    it('pages should have header links', () => {
      cy.mockConsentAndVisit('/');
      cy.contains('a', 'About').should('exist');
      cy.contains('a', 'Guides').should('exist');
      cy.contains('a', 'Theme').should('exist');
      cy.contains('a', 'Components').should('exist');
      cy.contains('a', 'Patterns').should('exist');
    });
  });

  describe('Mobile view', () => {
    before(() => cy.viewport('iphone-5'));

    it('should contain burger menu when on mobile', () => {
      cy.mockConsentAndVisit('/about/contact-us');
      cy.get(sidebarTestID).should('exist').and('not.be.visible');
      cy.get(hamburgerIconTestID).first().click();
      cy.get(sidebarTestID).should('be.visible');

      cy.get(hamburgerIconTestID).first().click();
      cy.get(sidebarTestID).should('exist').and('not.be.visible');
    });
    it('pages should have header links', () => {
      cy.mockConsentAndVisit('/about/contact-us');
      // For reliability, wait for sidebar to be visible before doing header tests
      cy.get(sidebarTestID).should('be.visible');
      cy.contains('a', 'About').should('exist');
      cy.contains('a', 'Guides').should('exist');
      cy.contains('a', 'Theme').should('exist');
      cy.contains('a', 'Components').should('exist');
      cy.contains('a', 'Patterns').should('exist');
    });
  });
});
