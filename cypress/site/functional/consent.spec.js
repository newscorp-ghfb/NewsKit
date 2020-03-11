describe('Consent component', () => {
  it('should show up after 10000ms verify cookie banner does not pop up anymore once user accepts the cookie consent', () => {
    cy.visit('/');
    cy.wait(10000);
    const iFrame = "iframe[id^='sp_message_iframe']";
    const consentMessage = cy.getElementInIframe(
      iFrame,
      '.message.type-bottom',
    );
    consentMessage.should('be.visible');
    cy.acceptCookieBanner();
    cy.get(iFrame).should('not.be.visible');
    cy.wait(5000);
    cy.reload();
    cy.wait(10000);
    cy.get(iFrame).should('not.exist');
  });
});
