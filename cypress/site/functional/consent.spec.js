describe('Consent component', () => {
  before(() => {
    cy.viewport('macbook-13');
    cy.clearCookies();
  });
  it('should show up after 5000ms verify cookie banner does not pop up anymore once user accepts the cookie consent', () => {
    cy.visit('/');
    cy.wait(5000);
    const iFrame = "iframe[id^='sp_message_iframe']";
    const consentMessage = cy.getElementInIframe(
      iFrame,
      '.message.type-bottom',
    );
    consentMessage.should('be.visible');
    cy.acceptCookieBanner();
    cy.reload();
    cy.wait(5000);
    cy.get(iFrame).should('not.be.visible');
  });
});
