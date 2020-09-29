// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  articleByline: '/components/byline',
  audioPlayer: '/components/audio-player',
  dateTime: '/components/date-time',
  icons: '/components/icons',
  radioPlayer: '/components/radio-player',
  spacing: '/theming/foundations/spacing',
  typography: '/theming/typography-presets',
  welcome: '/index',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      cy.eyesOpen();
      cy.visit(path);
      cy.acceptCookieBanner();
      if (!['spacing', 'welcome'].includes(pageName)) {
        cy.get('[data-testid="sample-code"]')
          .first()
          .scrollIntoView({
            easing: 'linear',
          });
      }
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
