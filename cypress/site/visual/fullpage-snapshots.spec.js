// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  articleByline: '/components/article-byline',
  audioPlayer: '/components/audio-player',
  dateLine: '/components/date-line',
  icons: '/foundations/icons',
  radioPlayer: '/components/radio-player',
  shareBar: '/components/share-bar',
  spacing: '/foundations/spacing',
  typography: '/foundations/typography',
  welcome: '/index',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      cy.eyesOpen();
      cy.visit(path);
      if (!pageName.includes('spacing') || !pageName.includes('index')) {
        cy.get('[data-testid="sample-code"]', {timeout: 5000});
      }
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
