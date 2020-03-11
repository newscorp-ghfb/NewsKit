describe('Consent component', () => {
  it('should show up after 1000ms verify cookie banner does not pop up anymore once user accepts the cookie consent', () => {
    cy.visit('/');
    cy.wait(1000);
    const iFrame = "iframe[id^='sp_message_iframe']";
    const consentMessage = cy.getElementInIframe(
      iFrame,
      '.message.type-bottom',
    );
    consentMessage.should('be.visible');
    cy.acceptCookieBanner();
    cy.reload();
    cy.wait(1000);
    cy.get(iFrame).should('not.be.visible');
  });
});
