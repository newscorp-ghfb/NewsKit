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
      cy.eyesOpen();
      cy.mockConsentAndVisit(path);
      if (
        !['spacing', 'welcome', 'overview', 'audioPlayer'].includes(pageName)
      ) {
        cy.get('[data-testid="sample-code"]').first().scrollIntoView({
          easing: 'linear',
        });
      }
      cy.eyesCheckWindow({
        tag: `${pageName} page`,
        ignore: {
          selector:
            'a[href^="https://github.com/newscorp-ghfb/newskit/releases/tag/"]',
        },
      });
      cy.eyesClose();
    });
  });
});
