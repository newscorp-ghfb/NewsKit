// / <reference types="Cypress" />

const routes = {
  audioPlayer: '/components/audio-player',
  icons: '/components/icons',
  spacing: '/theme/foundation/spacing',
  typography: '/theme/presets/typography-presets',
  welcome: '/index',
  overview: '/components/overview/',
  tabs: '/components/tabs/',
};

if (!Cypress.env('SKIP_PERCY_CHECK')) {
  Object.entries(routes).forEach(([pageName, path]) => {
    describe(`${pageName} page`, () => {
      it(`should pass visual regression test on ${pageName}`, () => {
        cy.mockConsentAndVisit(path);
        cy.percySnapshot();
      });
    });
  });
}
