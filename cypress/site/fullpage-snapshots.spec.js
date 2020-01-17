// / <reference types="Cypress" />

// Note only a subset of pages as a base for smoke tests
const routes = {
  articleByline: '/components/article-byline',
  audioPlayer: '/components/audio-player',
  dateLine: '/components/date-line',
  icons: '/foundations/icons',
  shareBar: '/components/share-bar',
  // TODO: Add back when https://nidigitalsolutions.jira.com/browse/PPDSC-860 is fixed
  // spacing: '/foundations/spacing',
  typography: '/foundations/typography',
  welcome: '/index',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      cy.eyesOpen();
      cy.visit(path);
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
