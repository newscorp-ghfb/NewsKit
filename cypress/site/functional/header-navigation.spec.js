// /<reference types="Cypress" />

const hamburgerIconTestID = '[data-testid="mobile-menu-icon"]';
const closeIcon = '[data-testid="close-icon"]';
const sidebarTestID = '[data-testid="sidebar"]';
const overlayTestID = '[data-testid="overlay"]';
const headerNavigatioTestID = '[data-testid="header-navigation"]';

describe('Documentation Site - header-navigation component', () => {
  before(() => {
    cy.visit('/');
    cy.acceptCookieBanner();
  });

  describe('Desktop view', () => {
    it('should contain logo', () => {
      cy.get('[data-testid="logo-container"]').should('exist');
      cy.get(hamburgerIconTestID).should('be.hidden');
    });
  });

  describe('Mobile view', () => {
    before(() => cy.viewport('iphone-5'));

    it('should contain burger menu when on mobile', () => {
      cy.get(sidebarTestID)
        .should('exist')
        .and('not.be.visible');
      cy.get(hamburgerIconTestID).click();
      cy.get(sidebarTestID).should('be.visible');
      cy.get('body').should('have.css', 'overflow', 'hidden');
      cy.get(overlayTestID).should('have.css', 'visibility', 'visible');

      cy.get(sidebarTestID)
        .find(closeIcon)
        .click();
      cy.get(sidebarTestID)
        .should('exist')
        .and('not.be.visible');
      cy.get('body').should('have.css', 'overflow', 'visible');
      cy.get(overlayTestID).should('have.css', 'visibility', 'hidden');
    });

    it('should be sticky on mobile', () => {
      cy.get(headerNavigatioTestID).should('be.visible');
      cy.scrollTo('bottom');
      cy.get(headerNavigatioTestID).then($header => {
        expect($header.get(0).getBoundingClientRect().top).to.equal(0);
      });
    });
  });
});
