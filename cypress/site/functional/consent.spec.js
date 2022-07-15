// Removed with the PR: https://github.com/newscorp-ghfb/newskit/pull/276
// TODO bring it back once put back for dev environment
// describe('Consent component', () => {
//   it('should show up and verify cookie banner does not pop up anymore once user accepts the cookie consent', () => {
//     // They have been set for the previous tests in order to be able to run them correctly.
//     // For the purpose of the following test they need to be cleared first.
//     cy.clearCookie('euconsent-v2');
//     cy.clearCookie('consentUUID');

//     cy.visit('/');
//     const iFrame = "iframe[id^='sp_message_iframe']";
//     cy.get(iFrame, {timeout: 10000}).should('be.visible');
//     cy.acceptCookieBanner();
//     // Non TCF and TCF behave differently in this regard,hidden and removed respectively, we need to support both during switch over
//     // TODO: uncomment once PPDSC-1504 released
//     cy.get(iFrame).should('not.exist');
//     cy.reload();
//     cy.get(iFrame, {timeout: 10000}).should('not.exist');
//   });
// });
