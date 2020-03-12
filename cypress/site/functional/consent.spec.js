describe('Consent component', () => {
  it('should show up and verify cookie banner does not pop up anymore once user accepts the cookie consent', () => {
    cy.visit('/');
    const iFrame = "iframe[id^='sp_message_iframe']";
    const consentMessage = cy.getElementInIframe(
      iFrame,
      '.message.type-bottom',
    );
    consentMessage.should('be.visible');
    cy.acceptCookieBanner();
    consentMessage.should('not.be.visible');
    cy.reload();
    cy.get(iFrame).should('not.exist');
  });
});
