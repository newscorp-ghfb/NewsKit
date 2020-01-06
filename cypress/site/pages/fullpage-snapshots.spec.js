import {VIEWPORTS} from '../../support/viewports';

const routes = {
  // welcome: '/index',
  colours: '/foundations/colours',
  icons: '/foundations/icons',
  typography: '/foundations/typography',
  animation: '/foundations/animation',
  tag: '/components/tag',
  link: '/components/link',
  articleByline: '/components/article-byline',
  articleHeadline: '/components/article-headline',
  articleStandfirst: '/components/article-standfirst',
  orderedList: '/components/ordered-list',
  unorderedList: '/components/unordered-list',
  // consent: '/components/consent',
  tagList: '/components/tag-list',
  shareBar: '/components/share-bar',
  grid: '/components/grid',
};

const navContainerTestID = '[data-testid="section-navigation-container"]';
const versionElementTestID = '[data-testid="release-version"]';
const headerTestID = '[data-testid="header-navigation"]';

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    Object.values(VIEWPORTS).forEach(size => {
      it(`should pass visual regression test on ${pageName} - ${size} viewport`, () => {
        cy.visitViewport(size, `${Cypress.env('DOC_SITE_URL')}${path}`);
        cy.get(headerTestID).invoke('css', 'position', 'static');

        cy.get('body')
          .then($body => {
            if ($body.find(navContainerTestID).length) {
              return navContainerTestID;
            }
            return null;
          })
          .then(selector => {
            if (selector) {
              cy.get(selector).invoke('css', 'position', 'static');
            }
          });

        cy.matchImageSnapshot(`${pageName}-${size}`, {
          timeout: '120000',
          blackout: [versionElementTestID],
        });

        cy.get('body')
          .then($body => {
            if ($body.find(navContainerTestID).length) {
              return navContainerTestID;
            }
            return null;
          })
          .then(selector => {
            if (selector) {
              cy.get(selector).invoke('css', 'position', 'sticky');
            }
          });
      });
    });
  });
});
