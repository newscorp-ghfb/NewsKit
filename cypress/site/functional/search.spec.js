const DESKTOP_NAV = '[data-testid="nav-container"]';
const MOBILE_NAV = '[data-testid="logo-container"]';
const SEARCH_BTN = '[data-testid="search-button"]';
const SEARCH_BTN_ICON = '[data-testid="search-icon-button"]';

describe('Documentation Site - search component', () => {
  beforeEach(() => {
    cy.mockConsentAndVisit('/');
  });

  describe('Desktop view', () => {
    it('should open search', () => {
      cy.get('.DocSearch-Container').should('not.exist');
      cy.get(`${DESKTOP_NAV} ${SEARCH_BTN_ICON}`).should('not.be.visible');
      cy.get(`${DESKTOP_NAV} ${SEARCH_BTN}`).click();
      cy.get('.DocSearch-Container').should('exist');
    });
  });

  describe('Mobile view', () => {
    before(() => cy.viewport('iphone-5'));

    it('should open search', () => {
      cy.get('.DocSearch-Container').should('not.exist');
      cy.get(`${MOBILE_NAV} ${SEARCH_BTN}`).should('not.be.visible');
      cy.get(`${MOBILE_NAV} ${SEARCH_BTN_ICON}`).click();
      cy.get('.DocSearch-Container').should('exist');
    });
  });

  describe('NewStartScreen', () => {
    it('should hide when the user inputs a search term and display when the search term is deleted', () => {
      cy.get(`${DESKTOP_NAV} ${SEARCH_BTN}`).click();
      cy.get('.DocSearch-NewStartScreen').and('be.visible');
      cy.get('#docsearch-input').type('Search term');
      cy.get('.DocSearch-NewStartScreen').should('not.be.visible');
      cy.get('#docsearch-input').clear();
      cy.get('.DocSearch-NewStartScreen').and('be.visible');
    });

    it('should show when the modal is closed and reopens and should not be duplicated', () => {
      cy.get(`${DESKTOP_NAV} ${SEARCH_BTN}`).click();
      cy.get('.DocSearch-NewStartScreen').and('be.visible');
      cy.get('#docsearch-input').type('{esc}');
      cy.get(`${DESKTOP_NAV} ${SEARCH_BTN}`).click();
      cy.get('.DocSearch-NewStartScreen').should('have.length', 1);
    });
  });
});
