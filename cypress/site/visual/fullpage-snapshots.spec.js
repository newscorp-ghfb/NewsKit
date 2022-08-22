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
      if (!['spacing', 'welcome', 'overview'].includes(pageName)) {
        cy.get('[data-testid="sample-code"]').first().scrollIntoView({
          easing: 'linear',
        });
      }
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
    it(`should pass visual regression test on homepage with search`, () => {
      cy.eyesOpen();
      cy.mockConsentAndVisit('/index');
      cy.get('[data-testid="sample-code"]').first().scrollIntoView({
        easing: 'linear',
      });
      cy.get('[data-testid="search-button"]').click({
        multiple: true,
        force: true,
      });
      cy.eyesCheckWindow('welcome page');
      cy.eyesClose();
    });
  });
});
