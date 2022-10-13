// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  audioPlayer: '/components/audio-player',
  icons: '/components/icons',
  spacing: '/theme/foundation/spacing',
  typography: '/theme/presets/typography-presets',
  welcome: '/index',
  overview: '/components/overview/',
  tabs: '/components/tabs/',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      cy.mockConsentAndVisit(path);
      cy.percySnapshot();
    });
  });
});
