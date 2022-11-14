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

Object.entries(routes).forEach(([pageName, path]) => {
  describe(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      localStorage.setItem('newskit-docs-theme', 'light');
      cy.mockConsentAndVisit(path);
      cy.get(`[title="Enable dark mode"]`).should('exist'); // this will fail if light theme is not selected
      cy.wait(3000).scrollTo(0, 5000);
      cy.percySnapshot(pageName, {
        percyCSS:
          // hide the release badge as the release number is dynamic
          'a[href^="https://github.com/newscorp-ghfb/newskit/releases/tag/"] { display: none; }',
      });
    });
  });
});
