describe('Consent component', () => {
  it('should show up and verify cookie banner does not pop up anymore once user accepts the cookie consent', () => {
    cy.visit('/');
    const iFrame = "iframe[id^='sp_message_iframe']";
    cy.get(iFrame).should('be.visible');
    cy.acceptCookieBanner();
    cy.get(iFrame).should('not.be.visible');
    cy.reload();
    cy.get(iFrame).should('not.exist');
  });
});
