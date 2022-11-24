const pages = [
  '/',
  '/about/why-use-newskit',
  '/theme/foundation/borders',
  '/components/button',
  '/components/modal',
];

describe('social tags', () => {
  pages.forEach(path => {
    it(`should contain open graph tags for ${Cypress.config(
      'baseUrl',
    )}${path}`, () => {
      const ogTags = [
        'og:title',
        'og:type',
        'og:url',
        'og:description',
        'og:image',
        'og:image:height',
        'og:image:width',
      ];
      cy.mockConsentAndVisit(path);
      ogTags.forEach(ogTag =>
        cy.request(path).its('body').should('include', ogTag),
      );
    });
  });
});
