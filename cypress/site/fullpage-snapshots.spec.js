// / <reference types="Cypress" />

const routes = {
  welcome: '/index',
  colours: '/foundations/colours',
  icons: '/foundations/icons',
  typography: '/foundations/typography',
  articleByline: '/components/article-byline',
  articleHeadline: '/components/article-headline',
  dateLine: '/components/date-line',
  image: '/components/image',
  orderedList: '/components/ordered-list',
  tagList: '/components/tag-list',
  shareBar: '/components/share-bar',
  button: '/components/button',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe.skip(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      cy.eyesOpen();
      cy.visit(`${Cypress.env('DOC_SITE_URL')}${path}`);
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
